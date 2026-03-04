import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import nodemailer from "npm:nodemailer@6.9.16";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const NOTIFY_EMAIL = "153721773@qq.com";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, company, email, phone, industry, scale, desc } = await req.json();

    if (!name || !company || !email || !industry) {
      return new Response(
        JSON.stringify({ error: "缺少必填字段" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Generate HTML email via Lovable AI
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    let htmlContent = "";

    if (LOVABLE_API_KEY) {
      try {
        const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash-lite",
            messages: [
              {
                role: "system",
                content: "你是一个邮件通知助手。根据用户的申请信息，生成一封简洁专业的HTML邮件正文（只要body内的内容）。邮件用于通知管理员有新的体验申请。请使用中文，简洁明了。包含所有申请信息。使用简洁的内联样式。不要用markdown代码块包裹。",
              },
              {
                role: "user",
                content: `新申请信息：\n姓名：${name}\n公司：${company}\n邮箱：${email}\n电话：${phone || "未填写"}\n行业：${industry}\n规模：${scale || "未填写"}\n需求描述：${desc || "未填写"}`,
              },
            ],
          }),
        });

        if (aiResponse.ok) {
          const aiData = await aiResponse.json();
          const aiContent = aiData.choices?.[0]?.message?.content;
          if (aiContent) {
            htmlContent = aiContent.replace(/^```html?\n?/i, "").replace(/\n?```$/i, "");
          }
        }
      } catch (aiErr) {
        console.error("AI format error:", aiErr);
      }
    }

    // Fallback plain HTML
    if (!htmlContent) {
      htmlContent = `
        <h2 style="color:#0ea5e9;">知识工厂 - 新用户申请体验</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;font-weight:bold;">姓名</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">公司</td><td style="padding:8px;">${company}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">邮箱</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">电话</td><td style="padding:8px;">${phone || "未填写"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">行业</td><td style="padding:8px;">${industry}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">规模</td><td style="padding:8px;">${scale || "未填写"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">需求描述</td><td style="padding:8px;">${desc || "未填写"}</td></tr>
        </table>
      `;
    }

    // Send email via QQ Mail SMTP
    const QQ_SMTP_PASSWORD = Deno.env.get("QQ_SMTP_PASSWORD");
    if (!QQ_SMTP_PASSWORD) {
      throw new Error("QQ_SMTP_PASSWORD is not configured");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.qq.com",
      port: 465,
      secure: true,
      auth: {
        user: NOTIFY_EMAIL,
        pass: QQ_SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"知识工厂 KnowledgeFactory" <${NOTIFY_EMAIL}>`,
      to: NOTIFY_EMAIL,
      subject: `【新申请】${company} - ${name} 申请体验`,
      html: htmlContent,
      replyTo: email,
    });

    console.log(`Email sent for application from ${name} at ${company}`);

    // Also store in database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    await fetch(`${supabaseUrl}/rest/v1/applications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name, company, email,
        phone: phone || null,
        industry,
        scale: scale || null,
        description: desc || null,
        email_content: htmlContent,
        notify_email: NOTIFY_EMAIL,
      }),
    });

    return new Response(
      JSON.stringify({ success: true, message: "申请已提交" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: msg }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

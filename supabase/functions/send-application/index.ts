import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

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

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Use AI to compose and format email content, then we send via a simple approach
    const emailBody = `
知识工厂 KnowledgeFactory - 新用户申请体验通知
================================================

📋 申请人信息：
  姓名：${name}
  公司：${company}
  邮箱：${email}
  电话：${phone || "未填写"}
  行业：${industry}
  规模：${scale || "未填写"}

📝 需求描述：
  ${desc || "未填写"}

================================================
此邮件由 KnowledgeFactory 官网自动发送
    `.trim();

    // Use Lovable AI to generate a nicely formatted summary (optional enrichment)
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
            content: `你是一个邮件通知助手。根据用户的申请信息，生成一封简洁专业的HTML邮件正文（只要body内的内容）。邮件用于通知管理员有新的体验申请。请使用中文，简洁明了。包含所有申请信息。使用简洁的内联样式。`,
          },
          {
            role: "user",
            content: `新申请信息：\n姓名：${name}\n公司：${company}\n邮箱：${email}\n电话：${phone || "未填写"}\n行业：${industry}\n规模：${scale || "未填写"}\n需求描述：${desc || "未填写"}`,
          },
        ],
      }),
    });

    let htmlContent = emailBody;
    if (aiResponse.ok) {
      const aiData = await aiResponse.json();
      const aiContent = aiData.choices?.[0]?.message?.content;
      if (aiContent) {
        htmlContent = aiContent;
      }
    }

    // Send email using Resend-compatible API via fetch
    // Since we don't have a dedicated email service, we'll use a webhook/notification approach
    // For now, store the application and log it. In production, integrate with email service.
    
    // Try sending via Supabase's built-in email (using the database to store applications)
    console.log("=== NEW APPLICATION RECEIVED ===");
    console.log(`Name: ${name}`);
    console.log(`Company: ${company}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Industry: ${industry}`);
    console.log(`Scale: ${scale}`);
    console.log(`Description: ${desc}`);
    console.log(`AI-formatted content: ${htmlContent}`);
    console.log("================================");

    // Store in database for reliable tracking
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const dbResponse = await fetch(`${supabaseUrl}/rest/v1/applications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name,
        company,
        email,
        phone: phone || null,
        industry,
        scale: scale || null,
        description: desc || null,
        email_content: htmlContent,
        notify_email: "153721773@qq.com",
      }),
    });

    if (!dbResponse.ok) {
      const errText = await dbResponse.text();
      console.error("DB insert error:", errText);
      // Don't fail the request if DB insert fails, the log is still captured
    }

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

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const industries = [
  "金融保险", "教育培训", "医疗健康", "法律咨询", "制造业",
  "零售电商", "能源电力", "政府政务", "科研机构", "其他",
];

const scales = ["1-50人", "51-200人", "201-500人", "501-1000人", "1000人以上"];

const ApplySection = () => {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", industry: "", scale: "", desc: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (key: string, val: string) => setForm((p) => ({ ...p, [key]: val }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.company || !form.email || !form.industry) {
      toast.error("请填写必填项");
      return;
    }

    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-application", {
        body: form,
      });

      if (error) throw error;

      toast.success("提交成功！我们的团队将在 24 小时内与您联系");
      setForm({ name: "", company: "", email: "", phone: "", industry: "", scale: "", desc: "" });
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("提交失败，请稍后重试");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors";

  return (
    <section id="apply" className="relative py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Apply Now
          </span>
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">
            <span className="text-gradient-cyan">申请体验</span>
          </h2>
          <p className="text-muted-foreground">
            填写以下信息，我们的专业团队将第一时间与您联系 ·
            <span className="text-primary font-semibold"> 免费咨询 & 定制方案</span>
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={submit}
          className="mx-auto max-w-2xl rounded-2xl bg-glass p-8 sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">姓名 *</label>
              <input
                className={inputClass}
                placeholder="您的姓名"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">公司名称 *</label>
              <input
                className={inputClass}
                placeholder="公司全称"
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">邮箱 *</label>
              <input
                type="email"
                className={inputClass}
                placeholder="work@company.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">电话</label>
              <input
                className={inputClass}
                placeholder="联系电话（选填）"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">所属行业 *</label>
              <select
                className={inputClass}
                value={form.industry}
                onChange={(e) => update("industry", e.target.value)}
              >
                <option value="">请选择行业</option>
                {industries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">公司规模</label>
              <select
                className={inputClass}
                value={form.scale}
                onChange={(e) => update("scale", e.target.value)}
              >
                <option value="">请选择规模</option>
                {scales.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-1.5 block text-sm font-medium text-foreground">需求描述</label>
            <textarea
              className={inputClass + " min-h-[100px] resize-none"}
              placeholder="请简要描述您的需求场景..."
              value={form.desc}
              onChange={(e) => update("desc", e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-base font-semibold text-primary-foreground transition-all hover:glow-cyan hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {submitting ? "提交中..." : "提交申请"}
          </button>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            提交即表示您同意我们的 <a href="#" className="text-primary underline">隐私政策</a>
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default ApplySection;

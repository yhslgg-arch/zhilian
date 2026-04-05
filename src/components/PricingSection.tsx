import { motion } from "framer-motion";
import { Check, X, Star, Flame } from "lucide-react";

interface PlanFeature {
  label: string;
  free: string | boolean;
  enterprise: string | boolean;
  flagship: string | boolean;
}

const features: PlanFeature[] = [
  { label: "文档处理量", free: "100份/月", enterprise: "10,000份/月", flagship: "无限制" },
  { label: "知识库数量", free: "1个", enterprise: "10个", flagship: "无限制" },
  { label: "向量模型", free: "基础模型", enterprise: "全模型支持", flagship: "全模型+自定义" },
  { label: "API调用", free: "100次/天", enterprise: "无限制", flagship: "无限制" },
  { label: "技术支持", free: "社区支持", enterprise: "7×24专属客服", flagship: "专属技术团队" },
  { label: "定制开发", free: false, enterprise: "有限定制", flagship: "完全定制" },
  { label: "源码交付", free: false, enterprise: false, flagship: true },
  { label: "私有化部署", free: false, enterprise: "可选", flagship: "完全支持" },
];

const plans = [
  {
    name: "体验版",
    subtitle: "适合初次评估",
    price: "¥0",
    period: "/月",
    highlight: false,
    badge: null,
    cta: "免费申请",
    ctaStyle: "border border-border text-foreground hover:bg-muted",
    features: features.map((f) => ({ label: f.label, value: f.free })),
  },
  {
    name: "企业版",
    subtitle: "非源码交付 · 一年免费升级",
    price: "¥39,800",
    period: "/年",
    highlight: true,
    badge: "🔥 热销中",
    cta: "立即咨询",
    ctaStyle: "bg-primary text-primary-foreground hover:glow-cyan",
    features: features.map((f) => ({ label: f.label, value: f.enterprise })),
  },
  {
    name: "旗舰版",
    subtitle: "源码买断 · 终身授权",
    price: "¥198,000",
    period: "/一次性",
    highlight: false,
    badge: "⭐ 推荐",
    cta: "联系销售",
    ctaStyle: "border border-primary/30 text-primary hover:bg-primary/5",
    features: features.map((f) => ({ label: f.label, value: f.flagship })),
  },
];

const PricingSection = () => (
  <section id="pricing" className="relative py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <span className="mb-4 inline-block font-mono text-sm font-semibold uppercase tracking-widest text-primary">
          Pricing
        </span>
        <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl text-foreground">
          价格方案
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          灵活定价，满足不同规模企业的需求 ·
          <span className="text-primary font-semibold"> 企业版提供一年免费升级服务</span>
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-2xl p-[1px] ${
              plan.highlight
                ? "bg-gradient-to-b from-primary/60 via-secondary/40 to-primary/20"
                : "bg-border/50"
            }`}
          >
            <div
              className={`relative h-full rounded-2xl bg-card p-8 ${
                plan.highlight ? "glow-cyan" : ""
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 right-6 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.subtitle}</p>

              <div className="my-6">
                <span className="text-4xl font-black text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <div className="mb-8 space-y-3">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center justify-between gap-2 text-sm">
                    <span className="text-muted-foreground">{f.label}</span>
                    {typeof f.value === "boolean" ? (
                      f.value ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/30" />
                      )
                    ) : (
                      <span className="font-medium text-foreground">{f.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <a
                href="#apply"
                className={`block w-full rounded-xl py-3 text-center text-sm font-semibold transition-all ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center text-sm text-muted-foreground"
      >
        所有方案均提供 <span className="text-primary">7天免费试用</span> | 支持
        <span className="text-primary"> 按需定制</span> | 接受
        <span className="text-primary"> 行业大客户招标</span>
      </motion.p>
    </div>
  </section>
);

export default PricingSection;

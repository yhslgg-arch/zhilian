import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "10x", label: "知识处理效率提升" },
  { value: "99.9%", label: "系统可用性" },
  { value: "50+", label: "企业客户" },
  { value: "10亿+", label: "文档处理量" },
];

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen overflow-hidden hero-grid-bg">
    {/* Radial glows */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[120px]" />
    </div>

    <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full bg-glass px-5 py-2 text-sm"
      >
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
        <span className="text-muted-foreground">企业级 AI 知识处理平台</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-8xl"
      >
        <span className="block text-foreground">知识工厂</span>
        <span className="block text-gradient-hero">赋能企业 AI 落地</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
      >
        围绕
        <span className="text-primary font-medium">"导入-解析-清洗-分块-向量化-检索-问答-治理"</span>
        构建全链路知识处理能力，让企业知识资产转化为 AI 驱动的核心竞争力
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#apply"
          className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:glow-cyan hover:scale-105"
        >
          立即申请体验
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="#features"
          className="rounded-xl border border-border px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-muted hover:border-primary/30"
        >
          了解更多
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="rounded-xl bg-glass p-5 text-center transition-all hover:glow-border-cyan"
          >
            <div className="text-2xl font-black font-mono text-gradient-cyan sm:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10"
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-muted-foreground" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

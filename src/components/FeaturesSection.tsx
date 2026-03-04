import { motion } from "framer-motion";
import {
  FileUp,
  ScanSearch,
  Sparkles,
  LayoutGrid,
  Binary,
  Search,
  MessageCircle,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: FileUp,
    title: "多格式导入",
    badge: "50+种格式",
    desc: "支持 PDF、Word、Excel、PPT、Markdown 等主流文档格式，配备高精度 OCR 引擎处理扫描件与图片",
    color: "cyan" as const,
  },
  {
    icon: ScanSearch,
    title: "智能解析",
    badge: "95% 准确率",
    desc: "基于深度学习的文档结构解析，自动识别标题、段落、表格、图表等元素，保留原始语义",
    color: "magenta" as const,
  },
  {
    icon: Sparkles,
    title: "数据清洗",
    badge: "AI 驱动",
    desc: "自动去除广告、噪声、重复内容，标准化格式，智能识别并修正 OCR 错误，保证数据质量",
    color: "cyan" as const,
  },
  {
    icon: LayoutGrid,
    title: "智能分块",
    badge: "多策略",
    desc: "支持固定长度、语义段落、递归分割等多种分块策略，保持语义完整性，优化检索粒度",
    color: "magenta" as const,
  },
  {
    icon: Binary,
    title: "向量化",
    badge: "多模型",
    desc: "支持 OpenAI、DeepSeek、本地模型等多 Embedding 后端，将文本转换为高质量语义向量",
    color: "cyan" as const,
  },
  {
    icon: Search,
    title: "混合检索",
    badge: "99% 准确率",
    desc: "向量+关键词+标签多路召回，权重智能融合，支持父子分块语义回溯，兼顾精度与召回",
    color: "magenta" as const,
  },
  {
    icon: MessageCircle,
    title: "智能问答",
    badge: "RAG 架构",
    desc: "基于 RAG 架构的问答系统，支持多轮对话、上下文理解、引用溯源，提供可信答案",
    color: "cyan" as const,
  },
  {
    icon: Shield,
    title: "运维治理",
    badge: "7×24 监控",
    desc: "知识库健康度监测、节点级执行日志、文档-分块溯源、权限安全机制，全方位保障系统稳定",
    color: "magenta" as const,
  },
];

const pipeline = ["导入", "解析", "清洗", "分块", "向量化", "检索", "问答", "治理"];

const FeaturesSection = () => (
  <section id="features" className="relative py-32">
    <div className="container mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 text-center"
      >
        <span className="mb-4 inline-block font-mono text-sm font-semibold uppercase tracking-widest text-primary">
          Core Capabilities
        </span>
        <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">
          <span className="text-gradient-cyan">八大核心能力</span>
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          覆盖知识处理全链路，从数据接入到智能应用，每个环节都经过精心设计与优化
        </p>
      </motion.div>

      {/* Pipeline visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 flex flex-wrap items-center justify-center gap-2 sm:gap-0"
      >
        {pipeline.map((step, i) => (
          <div key={i} className="flex items-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-lg bg-glass glow-border-cyan px-4 py-2 text-sm font-semibold text-primary"
            >
              {step}
            </motion.div>
            {i < pipeline.length - 1 && (
              <div className="hidden h-px w-6 bg-primary/30 sm:block" />
            )}
          </div>
        ))}
      </motion.div>

      {/* Feature cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`group relative rounded-2xl bg-glass p-6 transition-all duration-300 hover:${
              f.color === "cyan" ? "glow-border-cyan" : "glow-border-magenta"
            }`}
          >
            <div
              className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                f.color === "cyan"
                  ? "bg-primary/10 text-primary"
                  : "bg-secondary/10 text-secondary"
              }`}
            >
              <f.icon className="h-6 w-6" />
            </div>
            <span
              className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                f.color === "cyan"
                  ? "bg-primary/10 text-primary"
                  : "bg-secondary/10 text-secondary"
              }`}
            >
              {f.badge}
            </span>
            <h3 className="mb-2 text-lg font-bold text-foreground">{f.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;

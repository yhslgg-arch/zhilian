import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Workflow,
  GitBranch,
  Puzzle,
  Route,
} from "lucide-react";

import screenshotDashboard from "@/assets/screenshot-dashboard.png";
import screenshotPipelineList from "@/assets/screenshot-pipeline-list.png";
import screenshotPipelineEditor from "@/assets/screenshot-pipeline-editor.png";
import screenshotPlugins from "@/assets/screenshot-plugins.png";
import screenshotTrace from "@/assets/screenshot-trace.png";

const tabs = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "管控中心",
    title: "全局实时管控中心",
    desc: "一屏掌握平台核心指标：文档数、召回精准度、知识库健康度、Pipeline 执行状态、实时活动日志。每个节点的健康度、失败率、平均耗时一目了然，异常自动诊断，运维零盲区。",
    highlights: ["平台核心值实时统计", "Pipeline 状态环形图", "节点级健康度监控", "自动诊断 & 实时日志"],
    image: screenshotDashboard,
  },
  {
    id: "pipeline-list",
    icon: Workflow,
    label: "Pipeline 管理",
    title: "多 Pipeline 并行管理",
    desc: "同时运行多条处理流水线，支持 MinerU、deepDoc、OCR 等多种解析策略并行。每条 Pipeline 独立监控执行次数、成功率、最近执行时间，支持运行中/已停止状态筛选与快速配置。",
    highlights: ["多策略 Pipeline 并行", "执行次数 & 成功率", "状态筛选 & 快速配置", "一键刷新 & 新建"],
    image: screenshotPipelineList,
  },
  {
    id: "pipeline-editor",
    icon: GitBranch,
    label: "可视化编排",
    title: "拖拽式 Pipeline 可视化编排",
    desc: "无需编码，通过拖拽节点即可构建复杂的知识处理流程。支持文件加载、OCR 识别、图片标注补全、数据清洗、文本分块等节点灵活组合，所见即所得的流程设计体验。",
    highlights: ["拖拽式节点编排", "丰富的处理节点类型", "逻辑控制 & 条件分支", "实时验证 & 自动保存"],
    image: screenshotPipelineEditor,
  },
  {
    id: "plugins",
    icon: Puzzle,
    label: "插件生态",
    title: "开放式插件管理体系",
    desc: "内置代码执行器、数据合并器、实体关系抽取、智能表格提取等丰富插件，支持按类型（输入/处理/逻辑/提取/输出）分类管理，插件版本独立管控，支持自定义上传扩展。",
    highlights: ["多类型插件分类", "版本管理 & 状态控制", "自定义插件上传", "即插即用的扩展能力"],
    image: screenshotPlugins,
  },
  {
    id: "trace",
    icon: Route,
    label: "链路追踪",
    title: "全链路执行追踪与溯源",
    desc: "基于 Trace ID 快速定位每次问答与执行的完整链路：从开始节点、文件加载、OCR 解析到向量化、存储，每个节点的执行时间、状态、关联文档全部可追溯，企业级可观测性。",
    highlights: ["Trace ID 全链路追踪", "节点级耗时分析", "文档-知识库关联溯源", "时间线事件可视化"],
    image: screenshotTrace,
  },
];

const ShowcaseSection = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="showcase" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[150px]" />
        <div className="absolute left-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Product Showcase
          </span>
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">
            <span className="text-gradient-magenta">产品实力一览</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            从全局管控到链路追踪，每一个界面都为
            <span className="text-primary font-semibold">工程化运营</span>
            而设计，让知识处理可配置、可追踪、可扩展
          </p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground glow-cyan"
                    : "bg-glass text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Content area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-6xl"
          >
            {/* Info bar */}
            <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:items-start">
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
                  {active.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {active.desc}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 lg:shrink-0">
                {active.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-lg bg-glass px-3 py-2 text-xs font-medium"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-primary/30 via-secondary/20 to-border/30">
              <div className="rounded-2xl bg-card overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-destructive/60" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                    <span className="h-3 w-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="ml-3 flex-1 rounded-md bg-muted px-3 py-1">
                    <span className="font-mono text-xs text-muted-foreground">
                      https://your-domain.com/{active.id === "dashboard" ? "" : active.id}
                    </span>
                  </div>
                </div>
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full"
                  loading="lazy"
                />
              </div>
              {/* Bottom glow */}
              <div className="absolute -bottom-6 left-1/2 h-12 w-3/4 -translate-x-1/2 rounded-full bg-primary/10 blur-2xl" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ShowcaseSection;

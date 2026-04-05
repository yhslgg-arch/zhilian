import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Workflow,
  GitBranch,
  Puzzle,
  Route,
  SearchCheck,
} from "lucide-react";

import screenshotDashboard from "@/assets/screenshot-dashboard.png";
import screenshotPipelineList from "@/assets/screenshot-pipeline-list.png";
import screenshotPipelineEditor from "@/assets/screenshot-pipeline-editor.png";
import screenshotPlugins from "@/assets/screenshot-plugins.png";
import screenshotTrace from "@/assets/screenshot-trace.png";
import screenshotSearch from "@/assets/screenshot-search.png";

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
    id: "search",
    icon: SearchCheck,
    label: "召回测试",
    title: "多维混合召回测试台",
    desc: "一站式搜索测试面板：选择知识库、Embedding 模型与 LLM，灵活调节向量/关键词/标签三路召回权重，支持父子块回溯、自动补齐向量索引。输入问题即刻获得检索结果与 LLM 生成回答，处理完立马可查看效果，快速验证召回质量。",
    highlights: ["向量+关键词+标签三路召回", "权重实时可调", "父子块语义回溯", "检索+问答一键测试"],
    image: screenshotSearch,
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
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />
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
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl text-foreground">
            产品实力一览
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">
            从全局管控到链路追踪，每一个界面都为
            <span className="text-primary font-semibold">工程化运营</span>
            而设计，让知识处理可配置、可追踪、可扩展
          </p>
        </motion.div>

        {/* Tab bar — pill underline style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex justify-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-1.5 rounded-2xl bg-white border border-slate-200/80 shadow-md p-2 w-full max-w-full overflow-hidden">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-1 sm:flex-none justify-center items-center gap-2.5 rounded-xl px-4 sm:px-5 py-3 text-sm sm:text-base font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/30"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Content area — key swap triggers entrance, no exit animation = no flash */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-6xl"
        >
          {/* Info — centered */}
          <div className="mb-8 text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">{active.title}</h3>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">{active.desc}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {active.highlights.map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-primary rounded-full px-3 py-1.5 shadow-sm shadow-primary/20"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshot */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/60">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 bg-slate-50 border-b border-slate-200 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <div className="ml-3 flex-1 rounded-lg bg-white border border-slate-200 px-3 py-1 max-w-xs">
                <span className="font-mono text-xs text-slate-400">
                  https://zhilian.cn/{active.id === "dashboard" ? "" : active.id}
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
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;

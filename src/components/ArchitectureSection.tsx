import { motion } from "framer-motion";
import { Monitor, Workflow, Cpu, Database, Lock } from "lucide-react";

const layers = [
  {
    icon: Monitor,
    title: "应用层",
    desc: "多端接入：Web管理后台 / API接口 / SDK集成 / 企业IM机器人",
    items: ["Web管理后台", "RESTful API", "Python/JS SDK", "企业IM集成"],
    num: "01",
    accent: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-50 text-blue-600",
    numColor: "text-blue-200",
    tagBg: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    icon: Workflow,
    title: "服务编排层",
    desc: "可视化 Pipeline 编排，支持插件化节点扩展，灵活定制处理流程",
    items: ["Pipeline可视化编排", "自定义节点插件", "流程版本管理", "热更新配置"],
    num: "02",
    accent: "from-violet-500 to-purple-400",
    iconBg: "bg-violet-50 text-violet-600",
    numColor: "text-violet-200",
    tagBg: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    icon: Cpu,
    title: "执行引擎层",
    desc: "异步队列 + 多进程 Worker + 超时 Watchdog + 失败重试",
    items: ["异步任务队列", "多进程Worker", "超时监控", "自动重试机制"],
    num: "03",
    accent: "from-amber-500 to-orange-400",
    iconBg: "bg-amber-50 text-amber-600",
    numColor: "text-amber-200",
    tagBg: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    icon: Database,
    title: "存储层",
    desc: "多向量后端适配，支持向量/标签/全文多模态存储",
    items: ["Milvus/QDrant/Faiss", "Elasticsearch", "MySQL/PostgreSQL", "S3对象存储"],
    num: "04",
    accent: "from-emerald-500 to-teal-400",
    iconBg: "bg-emerald-50 text-emerald-600",
    numColor: "text-emerald-200",
    tagBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  {
    icon: Lock,
    title: "安全层",
    desc: "JWT认证、签名验签、接口幂等、防重放攻击",
    items: ["JWT Token认证", "请求签名验签", "接口幂等控制", "防重放机制"],
    num: "05",
    accent: "from-slate-500 to-gray-400",
    iconBg: "bg-slate-100 text-slate-600",
    numColor: "text-slate-300",
    tagBg: "bg-slate-50 text-slate-600 border-slate-200",
  },
];

const archStats = [
  { value: "99.9%", label: "系统可用性" },
  { value: "<100ms", label: "平均响应时间" },
  { value: "10万+", label: "日处理文档" },
  { value: "50+", label: "企业客户验证" },
];

const ArchitectureSection = () => (
  <section id="architecture" className="relative py-32 grid-bg">
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    <div className="container relative mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <span className="mb-4 inline-block font-mono text-sm font-semibold uppercase tracking-widest text-primary">
          Technical Architecture
        </span>
        <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl text-foreground">
          五层技术架构
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          每一层都经过精心打磨，确保系统的高可用、高性能、高扩展
        </p>
      </motion.div>

      {/* Architecture layers */}
      <div className="mx-auto max-w-4xl space-y-4">
        {layers.map((layer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            {/* Left color accent bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b ${layer.accent}`} />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 pl-3">
              <div className="flex items-center gap-4">
                <span className={`font-mono text-3xl font-black ${layer.numColor}`}>
                  {layer.num}
                </span>
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${layer.iconBg}`}>
                  <layer.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-bold text-foreground">{layer.title}</h3>
                <p className="text-sm text-slate-500">{layer.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item, j) => (
                  <span
                    key={j}
                    className={`rounded-lg border px-3 py-1 font-mono text-xs font-semibold ${layer.tagBg}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>


    </div>
  </section>
);

export default ArchitectureSection;

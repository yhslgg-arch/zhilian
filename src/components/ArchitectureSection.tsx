import { motion } from "framer-motion";
import { Monitor, Workflow, Cpu, Database, Lock } from "lucide-react";

const layers = [
  {
    icon: Monitor,
    title: "应用层",
    desc: "多端接入：Web管理后台 / API接口 / SDK集成 / 企业IM机器人",
    items: ["Web管理后台", "RESTful API", "Python/JS SDK", "企业IM集成"],
    num: "01",
  },
  {
    icon: Workflow,
    title: "服务编排层",
    desc: "可视化 Pipeline 编排，支持插件化节点扩展，灵活定制处理流程",
    items: ["Pipeline可视化编排", "自定义节点插件", "流程版本管理", "热更新配置"],
    num: "02",
  },
  {
    icon: Cpu,
    title: "执行引擎层",
    desc: "异步队列 + 多进程 Worker + 超时 Watchdog + 失败重试",
    items: ["异步任务队列", "多进程Worker", "超时监控", "自动重试机制"],
    num: "03",
  },
  {
    icon: Database,
    title: "存储层",
    desc: "多向量后端适配，支持向量/标签/全文多模态存储",
    items: ["Milvus/QDrant/Faiss", "Elasticsearch", "MySQL/PostgreSQL", "S3对象存储"],
    num: "04",
  },
  {
    icon: Lock,
    title: "安全层",
    desc: "JWT认证、签名验签、接口幂等、防重放攻击",
    items: ["JWT Token认证", "请求签名验签", "接口幂等控制", "防重放机制"],
    num: "05",
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
        className="mb-16 text-center"
      >
        <span className="mb-4 inline-block font-mono text-sm font-semibold uppercase tracking-widest text-primary">
          Technical Architecture
        </span>
        <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">
          <span className="text-gradient-magenta">五层技术架构</span>
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
            className="group relative overflow-hidden rounded-2xl bg-glass p-6 transition-all duration-300 hover:glow-border-cyan"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-3xl font-black text-primary/20">
                  {layer.num}
                </span>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <layer.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-bold text-foreground">{layer.title}</h3>
                <p className="text-sm text-muted-foreground">{layer.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item, j) => (
                  <span
                    key={j}
                    className="rounded-md bg-muted px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Architecture stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {archStats.map((s, i) => (
          <div key={i} className="rounded-xl bg-glass p-5 text-center">
            <div className="font-mono text-2xl font-black text-gradient-magenta">{s.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ArchitectureSection;

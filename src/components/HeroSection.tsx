import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RAGAnimation from "./RAGAnimation";

const HeroSection = () => (
  <section id="hero" className="bg-background min-h-screen relative overflow-hidden pt-24 pb-16 lg:pt-0 lg:pb-0">
    {/* Right side Animation (RAG Schematic) */}
    <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full hidden lg:block overflow-hidden z-0">
      <RAGAnimation />
      {/* Soft gradient overlay to blend left edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-30 pointer-events-none" />
    </div>

    {/* Content Container */}
    <div className="max-w-7xl mx-auto px-6 lg:px-8 min-h-[calc(100vh-4rem)] flex items-center w-full relative z-10">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1
            }
          }
        }}
        className="max-w-xl"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-white border px-4 py-1.5 text-sm shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-muted-foreground font-medium">面向企业私有化部署</span>
        </motion.div>

        <motion.h1 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]"
        >
          AI <span className="text-primary">知链</span> 知识全链
        </motion.h1>
        
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}
          className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed"
        >
          面向企业私有化部署的知识全链路处理平台，帮助企业将分散知识转化为可搜索、可问答、可治理的 AI 核心资产。
        </motion.p>

        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#apply"
            className="group flex h-14 items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 px-10 py-4 text-lg font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            立即申请体验
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#features"
            className="flex h-14 items-center justify-center rounded-lg bg-white border border-border px-10 py-4 text-lg font-medium text-foreground hover:bg-muted/50 transition-colors shadow-sm"
          >
            了解更多
          </a>
        </motion.div>

        {/* Key Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {[
            { value: "99.9%", label: "系统可用性" },
            { value: "<100ms", label: "平均响应时间" },
            { value: "10万+", label: "日处理文档" },
            { value: "50+", label: "企业客户验证" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group flex flex-col gap-1.5 rounded-2xl bg-white/80 border border-slate-200/70 shadow-sm px-5 py-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
            >
              <span className="text-2xl font-black bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent tracking-tight">
                {stat.value}
              </span>
              <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
              <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-primary/60 to-blue-400/30 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </motion.div>
        {/* Mobile RAG Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 h-[450px] w-full block lg:hidden relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/50"
        >
          <RAGAnimation />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

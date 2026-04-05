import { motion } from "framer-motion";
import { Database, Bot, Terminal, CheckCircle2, Sparkles, Network } from "lucide-react";

export default function RAGAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden" style={{ perspective: 2000 }}>
      {/* Decorative background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[20%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        className="relative w-full max-w-2xl aspect-[4/3] z-10"
        initial={{ rotateY: -15, rotateX: 10, scale: 0.95 }}
        animate={{ rotateY: [-15, -5, -15], rotateX: [10, 5, 10] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Central Dashboard Card: The Pipeline Controller */}
        <motion.div 
          className="absolute inset-x-4 inset-y-12 rounded-2xl bg-white border border-slate-200/60 shadow-2xl overflow-hidden flex flex-col"
          style={{ transform: "translateZ(0px)" }}
        >
          {/* Mac-style Header */}
          <div className="flex items-center h-12 border-b bg-slate-50/80 px-4 space-x-4">
            <div className="flex space-x-1.5 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-white px-4 py-1.5 rounded-lg border shadow-sm w-full max-w-sm justify-center">
              <Network className="w-3 h-3" />
              <span>knowledge_pipeline.sh</span>
            </div>
          </div>
          {/* Body */}
          <div className="p-6 flex-1 flex flex-col gap-4 bg-slate-50/50 relative overflow-hidden">
             {/* Lines of parsing */}
             <div className="space-y-3 relative z-10">
               {[
                 { msg: "Extracted 4,203 documents from ERP...", color: "text-slate-600", delay: 0 },
                 { msg: "Running OCR & Layout analysis on 124 PDFs...", color: "text-slate-600", delay: 1 },
                 { msg: "Chunking texts (semantic-recursive)...", color: "text-amber-600", delay: 2 },
                 { msg: "Generating 1536-dim embeddings via API...", color: "text-indigo-600", delay: 3 },
                 { msg: "Upserting vectors into Milvus DB... [SUCCESS]", color: "text-green-600", delay: 4 },
               ].map((line, i) => (
                 <motion.div 
                   key={i} 
                   className={`font-mono text-sm sm:text-base flex items-center gap-3 px-4 py-2.5 bg-white rounded-lg border shadow-sm ${line.color}`}
                   initial={{ opacity: 0, x: -20, rotateX: 90 }}
                   animate={{ opacity: [0, 1, 1], x: [ -20, 0, 0], rotateX: [90, 0, 0] }}
                   transition={{ duration: 5, delay: line.delay, repeat: Infinity, repeatDelay: 5 }}
                   style={{ transformOrigin: "top" }}
                 >
                   <Terminal className="w-4 h-4 opacity-50 shrink-0" />
                   <span className="truncate">{line.msg}</span>
                   <CheckCircle2 className="w-4 h-4 ml-auto opacity-50 shrink-0" />
                 </motion.div>
               ))}
             </div>
             {/* Animated scanning line background */}
             <motion.div 
               className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-primary/0 via-primary/5 to-primary/0 pointer-events-none"
               animate={{ y: ["-100%", "400%"] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             />
          </div>
        </motion.div>

        {/* Floating Element 1: Vector DB Stats */}
        <motion.div 
          className="absolute -right-4 lg:-right-12 top-[15%] w-64 lg:w-72 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-2xl p-5"
          style={{ transform: "translateZ(60px)" }}
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-100 rounded-xl text-blue-600 shadow-inner">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">Vector Storage</div>
                <div className="text-xs text-green-600 font-medium">● Real-time sync</div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { label: "Storage I/O", w: 85 },
              { label: "Query Latency", w: 25 },
              { label: "Index Health", w: 98 }
            ].map((stat, i) => (
               <div key={i} className="space-y-1.5">
                 <div className="flex justify-between text-xs font-semibold text-slate-600">
                   <span>{stat.label}</span>
                   <span>{stat.w}%</span>
                 </div>
                 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                   <motion.div 
                     className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                     initial={{ width: "0%" }}
                     animate={{ width: `${stat.w}%` }}
                     transition={{ duration: 2, delay: i * 0.3 }}
                   />
                 </div>
               </div>
            ))}
          </div>
        </motion.div>

        {/* Floating Element 2: AI Response Dialog */}
        <motion.div 
          className="absolute -left-4 lg:-left-12 bottom-[15%] w-72 lg:w-80 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-2xl p-5"
          style={{ transform: "translateZ(100px)" }}
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 rounded-xl text-primary shadow-inner">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">智能 RAG 引擎</div>
              <div className="text-xs text-slate-500 font-medium tracking-wide">Confidence: 99.8%</div>
            </div>
            <Sparkles className="w-4 h-4 text-amber-500 ml-auto animate-pulse" />
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm text-slate-700 leading-relaxed relative shadow-inner">
             <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="font-medium"
             >
                基于清洗后的 5 份本地参考文档，为您解答如下：
             </motion.span>
             <br/><br/>
             <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-slate-500"
             >
                企业级知识库的核心架构支持多路召回，准确率可达99%...
             </motion.span>
             <motion.span 
               className="inline-block w-1.5 h-4 ml-1 bg-primary align-middle"
               animate={{ opacity: [0, 1, 0] }}
               transition={{ duration: 0.8, repeat: Infinity }}
             />
          </div>
          
          {/* Citation badges */}
          <motion.div 
            className="flex gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <span className="text-[10px] uppercase font-bold text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">来源 1</span>
            <span className="text-[10px] uppercase font-bold text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">来源 2</span>
          </motion.div>

        </motion.div>
      </motion.div>
    </div>
  );
}

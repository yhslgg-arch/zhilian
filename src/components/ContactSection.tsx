import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Smartphone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 bg-slate-50 border-t border-slate-200/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Contact Us
          </span>
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl text-slate-900">
            随时与我们取得<span className="text-primary">联系</span>
          </h2>
          <p className="mx-auto max-w-xl text-slate-500">
            我们期待与您合作，为您提供最专业的企业级 AI 落地解决方案。扫码添加微信获取详细资料。
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">

          {/* Card 1: 专属客服微信 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative rounded-3xl bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl shadow-md border border-slate-100/80 flex flex-col items-center overflow-hidden"
          >
            {/* 顶部装饰色条 */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-blue-400 to-blue-600" />
            <div className="mb-5 h-36 w-36 rounded-2xl bg-slate-50 flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform overflow-hidden border border-slate-100 shadow-inner">
              <img src="/wechat_qr.jpg" alt="专属客服微信二维码" className="w-full h-full object-contain" />
            </div>
            <div className="inline-flex items-center gap-2 mb-3 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
              <MessageCircle className="h-3.5 w-3.5 text-blue-500" />
              <span className="text-xs font-bold text-blue-600 tracking-wide">客服微信</span>
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1">专属客服微信</h3>
            <p className="text-sm text-slate-500">扫码直接咨询方案与报价</p>
          </motion.div>

          {/* Card 2: 官方公众号 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative rounded-3xl bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl shadow-md border border-slate-100/80 flex flex-col items-center overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-emerald-400 to-teal-500" />
            <div className="mb-5 h-36 w-36 rounded-2xl bg-slate-50 flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform overflow-hidden border border-slate-100 shadow-inner">
              <img src="/wechat_gzh.jpg" alt="官方公众号二维码" className="w-full h-full object-contain" />
            </div>
            <div className="inline-flex items-center gap-2 mb-3 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
              <Smartphone className="h-3.5 w-3.5 text-emerald-500" />
              <span className="text-xs font-bold text-emerald-600 tracking-wide">公众号</span>
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1">官方公众号</h3>
            <p className="text-sm text-slate-500">关注获取最新产品动态</p>
          </motion.div>

          {/* Card 3: 服务专线 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative rounded-3xl bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl shadow-md border border-slate-100/80 flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-indigo-400 to-primary" />
            {/* 背景装饰圆 */}
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-primary/5 translate-x-8 translate-y-8" />
            <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/90 to-blue-600 mb-5 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">服务专线</p>
            <p className="text-2xl font-black tracking-tight text-slate-800 mb-3 group-hover:text-primary transition-colors">
              158-1867-6007
            </p>
            <span className="text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100 font-medium">
              工作日 9:00 - 18:00
            </span>
          </motion.div>

          {/* Card 4: 公司地址 (地图背景 + 50% 遮罩) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative rounded-3xl text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl shadow-md flex flex-col items-center justify-center overflow-hidden min-h-[300px]"
            style={{ border: '1px solid rgba(148,163,184,0.2)' }}
          >
            {/* 地图背景 */}
            <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('/map_bg.jpg')" }} />
            {/* 50% 遮罩 */}
            <div className="absolute inset-0 bg-white/50 group-hover:bg-white/40 transition-colors duration-300 backdrop-blur-[1px]" />
            {/* 顶部彩色线 */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-rose-400 to-orange-400 z-10" />

            {/* 浮层内容卡片 */}
            <div className="relative z-10 p-6 w-full h-full flex flex-col items-center justify-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl mb-4 text-primary group-hover:scale-110 transition-transform border border-slate-100">
                <MapPin className="h-7 w-7" />
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/60 shadow-lg">
                <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">公司地址</p>
                <p className="text-sm font-bold text-slate-800 mb-1">深圳市宝安区西乡街道</p>
                <p className="text-xs text-slate-600 font-medium">兴裕路13号泳程科研大厦405</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

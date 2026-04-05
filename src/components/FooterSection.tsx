import { Zap } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 sm:flex-row">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-black text-sm">
          知
        </div>
        <span className="font-bold text-foreground">
          知链
        </span>
      </div>
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} 深圳智屏互联科技有限公司. 保留所有权利.
      </p>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors">隐私政策</a>
        <a href="#" className="hover:text-primary transition-colors">服务条款</a>
        <a href="#" className="hover:text-primary transition-colors">联系我们</a>
      </div>
    </div>
  </footer>
);

export default FooterSection;

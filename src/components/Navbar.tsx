import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "首页", href: "#hero" },
  { label: "核心能力", href: "#features" },
  { label: "产品展示", href: "#showcase" },
  { label: "技术架构", href: "#architecture" },
  { label: "价格方案", href: "#pricing" },
  { label: "申请体验", href: "#apply" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-glass-strong" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 glow-border-cyan">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-gradient-cyan">Knowledge</span>
            <span className="text-foreground">Factory</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-cyan hover:scale-105"
          >
            立即申请
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-glass-strong border-b border-border px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              立即申请
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@assets/generated_images/sacred_home_foundation_logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-[#f6f3ee]/90 backdrop-blur-sm border-b border-border transition-all">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3 min-w-[220px] group">
            <div className="w-11 h-11 rounded-full flex items-center justify-center overflow-hidden relative bg-transparent">
              <div className="absolute inset-[-20px] bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.35),transparent_55%)] rotate-18 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src={logo} 
                alt="Sacred Home Foundation logo" 
                className="w-full h-full object-contain filter brightness-95 sepia saturate-150 hue-rotate-5"
              />
            </div>
            <div>
              <h1 className="text-sm font-serif uppercase tracking-[0.12em] leading-tight text-[#2b2b2b]">
                Sacred Home Foundation
              </h1>
              <div className="text-xs text-muted leading-tight mt-0.5 tracking-wider">
                Pregnancy through age 3
              </div>
            </div>
          </Link>

          <button 
            className="md:hidden inline-flex items-center gap-2 px-3.5 py-2.5 rounded-2xl font-semibold text-sm bg-gradient-to-br from-primary to-[#efe2b8] border border-primary text-[#2b2b2b] shadow-[0_6px_16px_rgba(212,179,106,.25)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
            Menu
          </button>

          <nav className="hidden md:flex items-center gap-1 flex-wrap justify-end">
            <a href="/mission" className="px-3 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors">
              Mission
            </a>
            <a href="/family" className="px-3 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors">
              For Families
            </a>
            <a href="/donors" className="px-3 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors">
              For Donors
            </a>
            <a href="/research" className="px-3 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors">
              Research
            </a>
            <a href="/about" className="px-3 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors">
              About
            </a>
            <a href="mailto:connect@sacredhomefoundation.org" className="ml-2 btn-primary">
              Get involved
            </a>
          </nav>
        </div>

        {/* Mobile Nav */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
        )}>
          <div className="flex flex-col gap-2 pt-2">
            <a 
              href="/mission"
              className="px-4 py-3 rounded-xl bg-white/50 border border-white/20 text-sm font-medium text-foreground hover:bg-white/80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Mission
            </a>
            <a 
              href="/family"
              className="px-4 py-3 rounded-xl bg-white/50 border border-white/20 text-sm font-medium text-foreground hover:bg-white/80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              For Families
            </a>
            <a 
              href="/donors"
              className="px-4 py-3 rounded-xl bg-white/50 border border-white/20 text-sm font-medium text-foreground hover:bg-white/80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              For Donors
            </a>
            <a 
              href="/research"
              className="px-4 py-3 rounded-xl bg-white/50 border border-white/20 text-sm font-medium text-foreground hover:bg-white/80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Research
            </a>
            <a 
              href="/about"
              className="px-4 py-3 rounded-xl bg-white/50 border border-white/20 text-sm font-medium text-foreground hover:bg-white/80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="mailto:connect@sacredhomefoundation.org"
              className="px-4 py-3 rounded-xl bg-white/50 border border-white/20 text-sm font-medium text-foreground hover:bg-white/80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

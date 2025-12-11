import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavItem } from "../types";

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how" },
  { label: "Safety", href: "#safety" },
  { label: "Team", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-white/10 py-2"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-6 max-w-[1120px] flex items-center justify-between">
        {/* Brand */}
        <a href="#top" className="inline-flex items-center gap-3 group">
          {/* Minimalist Link Logo - Two Nodes Linking Up */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full transition-transform duration-300 group-hover:scale-110">
               <line x1="7" y1="17" x2="17" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round" className="opacity-80" />
               <circle cx="7" cy="17" r="3.5" className="fill-brand-pink" />
               <circle cx="17" cy="7" r="3.5" className="fill-brand-yellow" />
            </svg>
          </div>
          
          <span className="font-display font-bold text-xl tracking-widest uppercase text-white group-hover:text-brand-yellow transition-colors duration-300">
            LYNKUP
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium font-display uppercase tracking-[0.12em] text-brand-muted hover:text-white transition-colors group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-neutral-900/50 shadow-xl backdrop-blur-sm text-xs font-display uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#30ff8b] shadow-[0_0_10px_#30ff8b]"></span>
            <span>Live soon in your city</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-white hover:text-brand-yellow transition-colors"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Menu */}
        <div
          className={`absolute top-full left-0 right-0 bg-neutral-950 border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl transition-all duration-300 origin-top md:hidden ${
            isOpen
              ? "opacity-100 scale-y-100 translate-y-0"
              : "opacity-0 scale-y-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium font-display uppercase tracking-[0.12em] text-brand-muted hover:text-brand-yellow py-2 border-b border-white/5 last:border-0"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
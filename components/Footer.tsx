import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-10">
      <div className="container mx-auto px-6 max-w-[1120px] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a href="#top" className="inline-flex items-center gap-2 mb-2 group">
            {/* Minimalist Link Logo - Two Nodes Linking Up */}
            <div className="relative w-6 h-6 flex items-center justify-center">
               <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <line x1="7" y1="17" x2="17" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round" className="opacity-80" />
                  <circle cx="7" cy="17" r="3.5" className="fill-brand-pink" />
                  <circle cx="17" cy="7" r="3.5" className="fill-brand-yellow" />
               </svg>
            </div>
            <span className="font-display font-bold text-lg tracking-widest uppercase text-white group-hover:text-brand-yellow transition-colors">
              LYNKUP
            </span>
          </a>
          <p className="text-xs text-brand-muted max-w-xs">
            Real-time social connection for real people.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-brand-muted">
          <a href="#safety" className="hover:text-brand-yellow transition-colors">
            Safety
          </a>
          <a href="#founders" className="hover:text-brand-yellow transition-colors">
            Team
          </a>
          <a href="#contact" className="hover:text-brand-yellow transition-colors">
            Contact
          </a>
        </div>

        <div className="text-xs text-brand-muted">
          © {new Date().getFullYear()} LYNKUP. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
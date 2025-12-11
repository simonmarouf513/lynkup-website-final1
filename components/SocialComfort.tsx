import React from "react";
import { Coffee, Users, Zap } from "lucide-react";

const SocialComfort: React.FC = () => {
  return (
    <section id="social-comfort" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-[1120px]">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-yellow uppercase tracking-wide mb-12 text-center md:text-left">
          Social Comfort Level
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* LOW */}
          <div className="group p-8 rounded-[26px] bg-glass-card border border-white/10 hover:border-brand-cyan/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
               <div className="w-24 h-24 bg-brand-cyan rounded-full blur-3xl"></div>
            </div>
            
            <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-6 text-brand-cyan group-hover:scale-110 transition-transform">
               <Coffee size={28} />
            </div>
            
            <h3 className="font-display text-xl font-bold text-brand-yellow uppercase tracking-wider mb-3">
              Low <span className="text-brand-muted text-sm normal-case tracking-normal ml-2 opacity-70">— Quiet & gentle</span>
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              For low-energy days. One-to-one, calm, relaxed interactions. Perfect for a quiet coffee or a silent study session.
            </p>
          </div>

          {/* MEDIUM */}
          <div className="group p-8 rounded-[26px] bg-glass-card border border-white/10 hover:border-brand-yellow/50 transition-all duration-300 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
               <div className="w-24 h-24 bg-brand-yellow rounded-full blur-3xl"></div>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mb-6 text-brand-yellow group-hover:scale-110 transition-transform">
               <Users size={28} />
            </div>

            <h3 className="font-display text-xl font-bold text-brand-yellow uppercase tracking-wider mb-3">
              Medium <span className="text-brand-muted text-sm normal-case tracking-normal ml-2 opacity-70">— Open & casual</span>
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              Small groups, light activities, easy vibes. Great for a walk in the park, a casual lunch, or a small hobby group.
            </p>
          </div>

          {/* HIGH */}
          <div className="group p-8 rounded-[26px] bg-glass-card border border-white/10 hover:border-brand-pink/50 transition-all duration-300 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
               <div className="w-24 h-24 bg-brand-pink rounded-full blur-3xl"></div>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center mb-6 text-brand-pink group-hover:scale-110 transition-transform">
               <Zap size={28} />
            </div>

            <h3 className="font-display text-xl font-bold text-brand-yellow uppercase tracking-wider mb-3">
              High <span className="text-brand-muted text-sm normal-case tracking-normal ml-2 opacity-70">— Social & energized</span>
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              Dynamic meetups and full-energy connection. Join larger gatherings, volunteer events, or lively city adventures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialComfort;
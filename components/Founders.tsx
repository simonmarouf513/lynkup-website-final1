import React from "react";

const Founders: React.FC = () => {
  return (
    <section id="founders" className="py-24 relative z-10 bg-black/40 backdrop-blur-sm border-t border-white/5">
      <div className="container mx-auto px-6 max-w-[1120px] grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
           <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-yellow uppercase tracking-wide mb-8">
            Our Story
          </h2>
          <div className="space-y-6 text-brand-muted text-lg leading-relaxed">
            <p>
              LYNKUP was created by two brothers who experienced the same challenge in
              every major city: surrounded by millions of people, yet feeling
              disconnected.
            </p>
            <p>
              We ran a coffee shop, worked in hospitality, and met
              hundreds of people weekly. We learned one truth:
            </p>
            <p className="text-white font-display text-xl border-l-4 border-brand-yellow pl-6 py-2">
              People don’t crave apps — they crave connection.
            </p>
            <p>
              So we built LYNKUP — a way to meet real people, now. No pressure. No
              barriers. Just human moments.
            </p>
          </div>
        </div>

        {/* Story Visual */}
        <div className="relative h-[400px] rounded-[30px] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#333_0%,_#000_100%)]"></div>
           
           {/* Abstract representations of connection */}
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                 <div className="absolute -top-20 -left-20 w-40 h-40 bg-brand-yellow/30 rounded-full blur-[60px]"></div>
                 <div className="absolute top-20 right-20 w-40 h-40 bg-brand-purple/30 rounded-full blur-[60px]"></div>
                 
                 <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="relative z-10 opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    <circle cx="60" cy="100" r="30" className="fill-brand-yellow" />
                    <circle cx="140" cy="100" r="30" className="fill-brand-pink" />
                    {/* Link */}
                    <path d="M85 100 H115" stroke="white" strokeWidth="8" strokeLinecap="round" />
                 </svg>
              </div>
           </div>
           
           <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="text-xs font-display uppercase tracking-widest text-brand-muted mb-1">Founders</div>
              <div className="text-white font-bold">Simoun & Ahmad</div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Founders;
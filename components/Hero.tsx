import React from "react";
import Button from "./ui/Button";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-90">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-6 max-w-[1120px] grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-black/60 shadow-xl mb-6 backdrop-blur-md">
            <span className="px-3 py-1 rounded-full bg-[radial-gradient(circle_at_top_left,#ffd600,#ff4fbf)] text-brand-black text-[10px] font-display font-bold uppercase tracking-widest">
              Real-Time
            </span>
            <span className="text-xs text-brand-muted">
              Simple offline moments.
            </span>
          </div>

          <h1 className="font-display font-medium text-4xl md:text-6xl lg:text-[3.8rem] leading-[1.05] mb-6">
            Meet real people, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-pink to-brand-cyan drop-shadow-[0_0_20px_rgba(255,214,0,0.3)]">
              in real life.
            </span>
          </h1>

          <p className="text-lg text-brand-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            LYNKUP is a real-time social connection app that helps you meet people
            nearby for simple, human moments — coffee, walks, study sessions, or
            just a friendly chat.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
            <Button href="#contact">Join the Waitlist</Button>
            <Button variant="ghost" href="#social-comfort">
              Explore Vibes
            </Button>
          </div>
        </div>

        {/* Right Phone Mockup */}
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 perspective-1000">
          <div className="relative w-full max-w-[340px] p-3 rounded-[38px] bg-[radial-gradient(circle_at_top_left,#202020_0,#010101_55%)] shadow-[0_22px_60px_rgba(0,0,0,0.9)] overflow-hidden">
             {/* Glow overlay on phone shell */}
            <div className="absolute inset-0 pointer-events-none opacity-50 bg-[radial-gradient(circle_at_10%_20%,rgba(255,214,0,0.38)_0,transparent_60%),radial-gradient(circle_at_80%_20%,rgba(255,79,191,0.55)_0,transparent_60%)]"></div>

            {/* Phone Screen */}
            <div className="relative rounded-[30px] border border-white/10 bg-gradient-to-b from-[#121212] to-[#050505] p-4 overflow-hidden h-[600px] flex flex-col">
               {/* Notch */}
               <div className="w-28 h-5 rounded-full bg-black mx-auto mb-6 absolute top-4 left-1/2 -translate-x-1/2 z-20"></div>

               {/* App Header */}
               <div className="flex justify-between items-center mt-8 mb-6 text-xs z-10">
                 <div className="flex items-center gap-1.5 font-display uppercase tracking-widest text-white">
                    {/* Tiny Logo */}
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                      <line x1="7" y1="17" x2="17" y2="7" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="7" cy="17" r="3.5" className="fill-brand-pink" />
                      <circle cx="17" cy="7" r="3.5" className="fill-brand-yellow" />
                    </svg>
                    LYNKUP
                 </div>
                 <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-black/70 text-brand-muted text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#30ff8b] shadow-[0_0_8px_#30ff8b]"></span>
                    Now Live
                 </div>
               </div>

               {/* Cards Stack */}
               <div className="flex flex-col gap-3 relative z-10 flex-1">
                  {/* Card 1 */}
                  <div className="p-4 rounded-[20px] border border-white/10 bg-[radial-gradient(circle_at_top_left,#25200a_0,#0c0c0c_60%)] relative overflow-hidden group">
                     <div className="absolute inset-0 opacity-10 bg-[repeating-conic-gradient(from_0deg,white,white_4deg,transparent_4deg,transparent_8deg)] mix-blend-soft-light"></div>
                     <h3 className="font-display text-sm mb-1 text-white">Home Feed</h3>
                     <p className="text-[10px] text-brand-muted leading-relaxed">
                        See who’s around and what’s happening within a few blocks.
                     </p>
                  </div>

                  {/* Card 2 */}
                  <div className="p-4 rounded-[20px] border border-white/10 bg-[radial-gradient(circle_at_top_left,#0c0c0c_0,#050505_60%)] relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-12 h-12 bg-brand-pink/20 blur-xl rounded-full"></div>
                     <h3 className="font-display text-sm mb-1 text-white">Create Meetup</h3>
                     <p className="text-[10px] text-brand-muted leading-relaxed">
                        Post a coffee, walk, or study session in seconds. No bios, no pressure.
                     </p>
                  </div>

                  {/* Card 3 (Active) */}
                  <div className="p-4 rounded-[20px] border border-brand-yellow/30 bg-[radial-gradient(circle_at_top_left,#1a1a1a_0,#000_100%)] relative overflow-hidden shadow-lg">
                     <h3 className="font-display text-sm mb-1 text-white flex items-center justify-between">
                        <span>Social Comfort Level</span>
                        <span className="text-[10px] text-brand-yellow">Active</span>
                     </h3>
                     <p className="text-[10px] text-brand-muted mb-3 leading-relaxed">
                        Choose your vibe for today.
                     </p>
                     <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full border border-brand-cyan/50 text-brand-cyan text-[9px] uppercase tracking-wider bg-brand-cyan/5">Low</span>
                        <span className="px-3 py-1 rounded-full border border-brand-yellow text-brand-yellow text-[9px] uppercase tracking-wider bg-brand-yellow/10 font-bold shadow-[0_0_10px_rgba(255,214,0,0.2)]">Medium</span>
                        <span className="px-3 py-1 rounded-full border border-brand-pink/50 text-brand-pink text-[9px] uppercase tracking-wider bg-brand-pink/5">High</span>
                     </div>
                  </div>
               </div>

               <div className="mt-4 text-[10px] text-right text-brand-muted">
                 <span className="text-brand-yellow">Pop-Art City Mode</span> • IRL first.
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from "react";
import { Zap, Smile, MapPin, Shield } from "lucide-react";
import { Feature } from "../types";

const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "Meet now",
    description: "Hyper-local, real-time suggestions so you can say yes today, not in three weeks.",
  },
  {
    icon: Smile,
    title: "Your Vibe",
    description: "Low, Medium, or High — you’re in control of how visible you are.",
  },
  {
    icon: MapPin,
    title: "Local & real",
    description: "Built for your neighborhood. Meet people around the corner.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Tools that keep boundaries and consent at the center.",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 relative z-10 bg-black">
      <div className="container mx-auto px-6 max-w-[1120px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
           <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-yellow uppercase tracking-wide mb-6">
                What is LYNKUP?
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-6">
                LYNKUP is a real-time social connection app built to make human moments
                easy again. No swipes. No pressure. Just real people meeting in real life.
                You choose your vibe — LYNKUP does the rest.
              </p>
           </div>
           
           {/* Abstract Visual instead of Image */}
           <div className="relative aspect-video rounded-[26px] overflow-hidden border border-white/10 bg-neutral-900 group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#222_0%,_#000_100%)]"></div>
              {/* Animated abstract shapes */}
              <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-brand-yellow/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-brand-pink/20 rounded-full blur-3xl" style={{animationDelay: '1s'}}></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="grid grid-cols-2 gap-4">
                    {FEATURES.map((f, i) => (
                       <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                          <f.icon size={20} className="text-brand-yellow mb-2" />
                          <div className="font-display font-bold text-xs uppercase text-white">{f.title}</div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
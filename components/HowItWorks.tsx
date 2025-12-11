import React from "react";
import { Step } from "../types";

const STEPS: Step[] = [
  {
    number: "01",
    label: "Tune your vibe",
    title: "Set your Social Comfort Level",
    description: "Feeling introvert today? Choose Low and keep it small and simple. Feeling bold? Pick High and explore more people and events.",
  },
  {
    number: "02",
    label: "See who’s nearby",
    title: "Discover live meetups",
    description: "Scroll a pop-art inspired feed of nearby people, micro-events, language exchanges, and volunteering moments.",
  },
  {
    number: "03",
    label: "Say yes in seconds",
    title: "Meet for simple offline moments",
    description: "No pressure, no huge commitment. Just coffee, a walk, study time, or a shared mission — one moment at a time.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-20 relative z-10 bg-black/20">
      <div className="container mx-auto px-6 max-w-[1120px]">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-wide mb-4">
            How LYNKUP works
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            Three simple steps to move from screen-time to real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              className="pt-10 p-8 rounded-[20px] bg-glass-card border border-white/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="absolute top-4 right-5 font-display text-2xl font-bold text-white/20 select-none">
                {step.number}
              </span>
              <div className="relative z-10">
                <span className="block text-xs font-display font-bold uppercase tracking-[0.16em] text-brand-yellow mb-2">
                  {step.label}
                </span>
                <h3 className="font-display text-xl uppercase tracking-wide mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
import React from "react";

const Safety: React.FC = () => {
  return (
    <section id="safety" className="py-20 relative z-10">
      <div className="container mx-auto px-6 max-w-[1120px] grid md:grid-cols-[1.2fr_1fr] gap-12 items-start">
        {/* Left Column */}
        <div>
          <div className="mb-8">
            <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-wide mb-4">
              Safety, but make it human.
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed">
              LYNKUP is designed for inclusivity — all ages, backgrounds, and
              abilities — with tools that keep boundaries and consent at the
              center.
            </p>
          </div>

          <ul className="space-y-3">
            {[
              "Clear community guidelines and transparent expectations.",
              "Simple in-app reporting for unsafe or disrespectful behavior.",
              "Profile signals and social comfort indicators to guide you.",
              "No “rating” people — only supporting healthy connections.",
            ].map((item, idx) => (
              <li
                key={idx}
                className="relative pl-7 text-brand-muted text-[0.95rem]"
              >
                <span className="absolute left-0 top-[0.6rem] w-2 h-2 rounded-full border border-brand-yellow shadow-[0_0_8px_rgba(255,214,0,0.8)] bg-transparent"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card */}
        <div className="p-8 rounded-[20px] bg-glass-card border border-white/10 relative overflow-hidden">
          {/* Card Gradient */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(139,93,255,0.4)_0,transparent_60%)] pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-4 text-white">
              Before you LYNKUP
            </h3>
            <p className="text-brand-muted text-sm mb-4">
              Every meetup starts with three simple rules:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-brand-muted text-sm marker:text-brand-yellow marker:font-bold">
              <li>Meet in public spaces for your first hangout.</li>
              <li>Tell a friend where you’re going and when.</li>
              <li>Leave whenever you want — your comfort comes first.</li>
            </ol>
            <p className="text-brand-muted text-sm mt-6">
              LYNKUP gives you tools to feel in control, so a simple coffee
              stays simple.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;
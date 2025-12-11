import React, { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/mnneojjv";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-[1120px] grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        {/* Left Info */}
        <div>
          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-wide mb-4">
            Be part of the early wave.
          </h2>
          <p className="text-brand-muted text-lg mb-8 max-w-md">
            Join the waitlist, collaborate, or support the mission. LYNKUP is
            built with people who care about human connection — just like you.
          </p>

          <ul className="space-y-3">
            <li className="text-brand-muted text-sm">
              <span className="inline-block mr-2 text-xl">👋</span> Early users & testers for new cities
            </li>
            <li className="text-brand-muted text-sm">
              <span className="inline-block mr-2 text-xl">🤝</span> Partners, venues, and local communities
            </li>
            <li className="text-brand-muted text-sm">
              <span className="inline-block mr-2 text-xl">💛</span> Investors focused on social impact
            </li>
          </ul>
        </div>

        {/* Form Card */}
        <div className="p-8 rounded-[26px] bg-glass-card border border-white/10 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1 text-brand-muted uppercase tracking-wider">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg px-3 py-2 bg-black/60 border border-white/10 text-white focus:outline-none focus:border-brand-cyan transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 text-brand-muted uppercase tracking-wider">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg px-3 py-2 bg-black/60 border border-white/10 text-white focus:outline-none focus:border-brand-cyan transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 text-brand-muted uppercase tracking-wider">Message</label>
              <textarea
                name="message"
                required
                className="w-full rounded-lg px-3 py-2 bg-black/60 border border-white/10 min-h-[120px] text-white focus:outline-none focus:border-brand-cyan transition-colors resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-yellow text-black font-semibold uppercase tracking-[0.18em] disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#ffef7a] transition-all duration-200 hover:-translate-y-px shadow-lg"
            >
              {status === "loading" ? (
                <>
                  <span className="h-3 w-3 rounded-full border-2 border-black/40 border-t-black animate-spin" />
                  Sending...
                </>
              ) : (
                "Send message"
              )}
            </button>

            {/* Status messages */}
            {status === "success" && (
              <p className="text-xs text-emerald-400 mt-1 animate-fade-in">
                Thank you! Your message has been sent. We’ll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-xs text-red-400 mt-1 animate-fade-in">
                {errorMessage || "There was a problem sending your message."}
              </p>
            )}

            <p className="text-[11px] text-white/40 mt-2">
              This form is protected. By sending, you agree to be contacted about LYNKUP.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-display text-sm uppercase tracking-[0.16em] transition-all duration-200 ease-out active:scale-95";

  const variants = {
    primary:
      "bg-[radial-gradient(circle_at_top_left,#ffd600,#ffef7a,#ffd600)] text-neutral-900 shadow-[0_22px_60px_rgba(0,0,0,0.9)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.9)] hover:-translate-y-[1px] hover:scale-[1.01]",
    ghost:
      "bg-black/40 border border-white/30 text-white shadow-lg hover:bg-black/75 hover:border-brand-cyan hover:-translate-y-[1px]",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
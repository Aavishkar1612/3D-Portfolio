import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "outline";
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = "primary",
  target = "_self",
}) => {
  const baseStyle =
    "px-5 py-2 rounded-pill fw-semibold text-decoration-none d-inline-block transition-all";

  const primaryStyle =
    "text-white border-0";
    
  const outlineStyle =
    "text-info border border-info bg-transparent";

  const style =
    variant === "primary"
      ? `${baseStyle} ${primaryStyle}`
      : `${baseStyle} ${outlineStyle}`;

  const customStyle: React.CSSProperties =
    variant === "primary"
      ? {
          background: "linear-gradient(45deg, #00ffff, #007bff)",
          boxShadow: "0 0 15px rgba(0,255,255,0.5)",
        }
      : {};

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={style}
        style={customStyle}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={style} style={customStyle}>
      {children}
    </button>
  );
};

export default Button;
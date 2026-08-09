import "./Button.css";

function Button({
  children,
  variant = "primary",
  size = "medium",
  type = "button",
  disabled = false,
  onClick,
  ariaLabel,
}) {
  return (
    <button
      type={type}
      className={`dextro-button dextro-button-${variant} dextro-button-${size}`}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
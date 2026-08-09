import "./Badge.css";

function Badge({
  children,
  variant = "default",
  size = "medium",
}) {
  return (
    <span
      className={`dextro-badge dextro-badge-${variant} dextro-badge-${size}`}
    >
      {children}
    </span>
  );
}

export default Badge;
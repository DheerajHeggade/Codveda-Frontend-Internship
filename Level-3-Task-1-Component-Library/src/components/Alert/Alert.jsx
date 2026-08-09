import "./Alert.css";

function Alert({
  title,
  children,
  variant = "info",
  dismissible = false,
  onDismiss,
}) {
  const labels = {
    info: "Information",
    success: "Success",
    warning: "Warning",
    danger: "Error",
  };

  return (
    <div
      className={`dextro-alert dextro-alert-${variant}`}
      role={variant === "danger" ? "alert" : "status"}
      aria-label={labels[variant]}
    >
      <div className="dextro-alert-icon" aria-hidden="true">
        {variant === "success" && "✓"}
        {variant === "info" && "i"}
        {variant === "warning" && "!"}
        {variant === "danger" && "×"}
      </div>

      <div className="dextro-alert-content">
        {title && <h3>{title}</h3>}
        <div>{children}</div>
      </div>

      {dismissible && (
        <button
          type="button"
          className="dextro-alert-close"
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default Alert;
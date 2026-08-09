import { useEffect } from "react";
import "./Toast.css";

function Toast({
  open = false,
  title,
  message,
  variant = "info",
  duration = 4000,
  onClose,
}) {
  useEffect(() => {
    if (!open || duration <= 0) return;

    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [open, duration, onClose]);

  if (!open) {
    return null;
  }

  const labels = {
    info: "Information",
    success: "Success",
    warning: "Warning",
    danger: "Error",
  };

  return (
    <div
      className={`dextro-toast dextro-toast-${variant}`}
      role="status"
      aria-live="polite"
      aria-label={labels[variant]}
    >
      <div className="dextro-toast-icon" aria-hidden="true">
        {variant === "success" && "✓"}
        {variant === "info" && "i"}
        {variant === "warning" && "!"}
        {variant === "danger" && "×"}
      </div>

      <div className="dextro-toast-content">
        {title && <strong>{title}</strong>}
        {message && <p>{message}</p>}
      </div>

      <button
        type="button"
        className="dextro-toast-close"
        onClick={onClose}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
}

export default Toast;
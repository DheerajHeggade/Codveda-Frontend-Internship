import { useEffect, useRef } from "react";
import "./Modal.css";

function Modal({
  open = false,
  onClose,
  title = "Modal",
  children,
  footer,
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const previousActiveElement = document.activeElement;

    dialogRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus?.();
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const titleId = "dextro-modal-title";

  return (
    <div
      className="dextro-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose?.();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="dextro-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex="-1"
      >
        <header className="dextro-modal-header">
          <h2 id={titleId}>{title}</h2>

          <button
            type="button"
            className="dextro-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </header>

        <div className="dextro-modal-content">
          {children}
        </div>

        {footer && (
          <footer className="dextro-modal-footer">
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
}

export default Modal;
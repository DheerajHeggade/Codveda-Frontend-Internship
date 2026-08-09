import "./Input.css";

function Input({
  label,
  id,
  type = "text",
  placeholder = "",
  value,
  onChange,
  disabled = false,
  required = false,
  error = "",
  helperText = "",
}) {
  const inputId = id || `dextro-input-${label?.toLowerCase().replace(/\s+/g, "-")}`;

  const messageId = error
    ? `${inputId}-error`
    : helperText
      ? `${inputId}-helper`
      : undefined;

  return (
    <div className="dextro-input-wrapper">
      {label && (
        <label htmlFor={inputId} className="dextro-input-label">
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}

      <input
        id={inputId}
        className={`dextro-input ${error ? "dextro-input-error" : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={messageId}
      />

      {error && (
        <p id={`${inputId}-error`} className="dextro-input-message dextro-input-error-text">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={`${inputId}-helper`} className="dextro-input-message">
          {helperText}
        </p>
      )}
    </div>
  );
}

export default Input;
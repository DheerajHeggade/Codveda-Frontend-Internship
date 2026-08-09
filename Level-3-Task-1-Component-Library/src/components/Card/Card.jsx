import "./Card.css";

function Card({
  title,
  description,
  children,
  footer,
  variant = "default",
}) {
  return (
    <article className={`dextro-card dextro-card-${variant}`}>
      {(title || description) && (
        <header className="dextro-card-header">
          {title && <h2>{title}</h2>}

          {description && (
            <p>{description}</p>
          )}
        </header>
      )}

      <div className="dextro-card-content">
        {children}
      </div>

      {footer && (
        <footer className="dextro-card-footer">
          {footer}
        </footer>
      )}
    </article>
  );
}

export default Card;
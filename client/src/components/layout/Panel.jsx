export default function Panel({ id, title, titleId, className = '', children }) {
  return (
    <section
      id={id}
      className={`panel ${className}`.trim()}
      aria-labelledby={titleId}
    >
      <h2 id={titleId} className="panel-title">
        {title}
      </h2>
      {children}
    </section>
  )
}

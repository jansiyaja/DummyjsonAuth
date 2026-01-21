export default function SectionWrapper({
  children,
  className = "",
  container = true,
}) {
  return (
    <section className={`py-24 px-6 ${className}`}>
      {container ? (
        <div className="max-w-7xl mx-auto">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

export function Section({ title, children, ...theRestOfProps }) {
  return (
    <section {...theRestOfProps}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function SectionHeading({ id, children, sub }) {
  return (
    <div className="section-heading">
      <h2 id={id}>{children}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

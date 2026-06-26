export default function SectionTitle({ title, variant = "gold" }) {
  const cls = variant === "white" ? "section-bracket-white" : "section-bracket";

  return (
    <div className="section-title-center">
      <h2 className={`${cls} text-xl md:text-2xl font-semibold text-white`}>{title}</h2>
    </div>
  );
}

export default function SectionHeading({ eyebrow, title, subtitle, center }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-saffron-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-display text-3xl md:text-4xl font-extrabold text-stone-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-stone-600 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

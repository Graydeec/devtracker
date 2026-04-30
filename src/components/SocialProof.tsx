const logos = ["Stripe", "Vercel", "GitHub", "AWS"];

export default function SocialProof() {
  return (
    <section className="w-full border-y border-slate-800 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.15em] text-slate-600">
          Trusted by junior developers at top tech companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40 grayscale">
          {logos.map((name) => (
            <span
              key={name}
              className="text-xl font-bold tracking-tight text-slate-300"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

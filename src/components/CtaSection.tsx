import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-28 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-2xl px-5">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
          Ready to land your next role?
        </h2>
        <p className="mb-10 text-slate-400">
          Join thousands of developers who are turning their daily commits into
          a verifiable proof of work. Start tracking your success today.
        </p>
        <Button
          asChild
          size="lg"
          className="gap-2 bg-blue-500 px-10 text-white shadow-lg hover:bg-blue-400"
        >
          <Link href="/sign-up">Start Building for Free</Link>
        </Button>
      </div>
    </section>
  );
}

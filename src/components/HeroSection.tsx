import { ArrowRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { DashboardPreview } from "./Dashboardpreview";

const HeroSection = () => {
  return (
    <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 pb-20 pt-28 text-center">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

      {/* Version badge */}
      <Badge
        variant="outline"
        className="mb-8 gap-2 rounded-full border-slate-700 bg-slate-800/60 px-4 py-1 text-slate-400"
      >
        <RefreshCw className="h-3 w-3 text-emerald-400" />
        DevTracker v2.0 is live
      </Badge>

      {/* Headline */}
      <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-50 md:text-[56px] md:leading-[1.1]">
        Turn Your Code into <br className="hidden md:block" />
        <span className="text-blue-400">Career-Defining Accomplishments.</span>
      </h1>

      {/* Subheadline */}
      <p className="mb-10 max-w-2xl text-lg text-slate-400">
        The developer-first project manager that translates your Git commits,
        side projects, and feature builds into a dynamic portfolio that gets you
        hired.
      </p>

      {/* CTAs */}
      <div className="mb-20 flex flex-col gap-4 sm:flex-row">
        <Button
          asChild
          size="lg"
          className="gap-2 bg-blue-500 px-8 text-white hover:bg-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
        >
          <Link href="/sign-up">
            Get Started for Free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="gap-2 border-slate-700 px-8 text-slate-300 hover:bg-slate-800 hover:text-slate-100"
        >
          <Link href="/demo">View Live Demo</Link>
        </Button>
      </div>

      {/* Dashboard preview */}
      <DashboardPreview />
    </section>
  );
};

export default HeroSection;

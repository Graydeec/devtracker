import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeatureSection() {
  return (
    <section id="features" className="mx-auto w-full max-w-7xl px-5 py-28">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-2xl font-semibold text-slate-100">
          Deep Logic. High Impact.
        </h2>
        <p className="mx-auto max-w-2xl text-slate-400">
          Built specifically for software engineers. DevTracker eliminates
          busywork so you can focus on shipping features and building your
          professional narrative.
        </p>
      </div>

      <div className="grid auto-rows-[320px] grid-cols-1 gap-6 md:grid-cols-3">
        {/* Project Tracking — 2 cols */}
        <div className="group relative col-span-1 overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900 p-8 transition-colors hover:border-blue-500/50 md:col-span-2">
          <div className="pointer-events-none absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-[80px] transition-all group-hover:bg-emerald-400/20" />
          <div className="z-10 max-w-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-slate-700 bg-slate-800">
              <span className="text-emerald-400">🌿</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-100">
              Project Tracking
            </h3>
            <p className="text-slate-400">
              Organize your full-stack journey. Connect repositories, map out
              dependencies, and see exactly how your micro-contributions build
              into macro-accomplishments.
            </p>
          </div>
          {/* Mini mockup */}
          {/* <div className="absolute bottom-0 right-4 hidden translate-x-1/4 translate-y-1/4 w-75 rounded-t-xl border border-slate-700 bg-slate-950 p-4 shadow-xl md:block">
            <div className="mb-2 flex items-center gap-2 border-b border-slate-800 pb-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs text-slate-300">
                API Refactor (#PROJ-402)
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[80%] rounded-full bg-emerald-400" />
            </div>
          </div> */}
        </div>

        {/* Task Breakdown — 1 col */}
        <div className="group relative overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900 p-8 transition-colors hover:border-blue-500/50">
          <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-48 w-48 rounded-full bg-blue-400/10 blur-[60px] transition-all group-hover:bg-blue-400/20" />
          <div className="z-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-slate-700 bg-slate-800">
              <span className="text-blue-400">✦</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-100">
              Task Breakdown
            </h3>
            <p className="text-slate-400">
              Simplify complex builds into manageable steps. Auto-generate
              subtasks for testing, documentation, and deployment.
            </p>
          </div>
        </div>

        {/* AI Resume Insights — 3 cols */}
        <div className="group relative col-span-1 overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900 p-8 transition-colors hover:border-orange-400/50 md:col-span-3">
          <div className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-400/10 blur-[100px] transition-all group-hover:bg-orange-400/20" />
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="z-10 max-w-xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-slate-700 bg-slate-800">
                <span className="text-orange-400">◎</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-100">
                AI Resume Insights
              </h3>
              <p className="mb-6 text-slate-400">
                Automatically generate professional, metric-driven bullet points
                from your logged progress. Stop staring at a blank page when
                it&apos;s time to update your portfolio.
              </p>
              <Button
                variant="ghost"
                className="gap-2 p-0 text-orange-400 hover:bg-transparent hover:text-orange-300"
              >
                See how it works
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* AI mockup card */}
            <div className="z-10 w-full max-w-sm flex-shrink-0 rounded-lg border border-slate-700 bg-slate-950 p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-sm text-orange-400">✦</span>
                <span className="font-mono text-xs text-slate-500">
                  Generating bullet point...
                </span>
              </div>
              <div className="rounded border border-slate-800 bg-slate-900 p-3 text-sm text-slate-200">
                <span className="text-orange-400">&ldquo;</span>
                Architected and deployed a scalable REST API using Node.js,
                reducing query response time by 45% across 10k+ daily active
                requests.
                <span className="text-orange-400">&rdquo;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { CheckCircle2 } from "lucide-react";

function CodeMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-700/60 bg-slate-950 shadow-xl">
      <div className="flex h-10 items-center gap-2 border-b border-slate-800 bg-slate-900 px-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-3 w-3 rounded-full bg-slate-700" />
        ))}
      </div>
      <div className="space-y-1.5 p-6 font-mono text-sm">
        <div className="text-emerald-400">
          {"// Team Health Report — Sprint 24"}
        </div>
        <div className="text-slate-400">
          velocity: <span className="text-blue-400">94%</span> on-target
        </div>
        <div className="text-slate-400">
          blocked: <span className="text-red-400">2</span> issues
        </div>
        <div className="text-slate-400">
          deployments: <span className="text-emerald-400">12</span> this sprint
        </div>
        <div className="my-3 border-t border-slate-800" />
        <div className="text-slate-400">
          repos: <span className="text-blue-400">api, frontend, infra</span>
        </div>
        <div className="text-slate-400">
          contributors: <span className="text-blue-400">8</span>
        </div>
        <div className="my-3 border-t border-slate-800" />
        <div className="text-emerald-400">
          {"// Auto-generated status: ON TRACK"}
        </div>
      </div>
    </div>
  );
}

const roadmapItems = [
  {
    name: "Checkout redesign",
    progress: 85,
    status: "On track",
    ship: "Ship Apr 15",
    color: "bg-emerald-400",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  },
  {
    name: "API v3 Migration",
    progress: 42,
    status: "Needs review",
    ship: "Ship May 1",
    color: "bg-blue-400",
    badgeColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
  },
  {
    name: "Mobile Notifications",
    progress: 20,
    status: "Planning",
    ship: "Ship Jun 30",
    color: "bg-orange-400",
    badgeColor: "text-orange-400 border-orange-400/30 bg-orange-400/10",
  },
];

function RoadmapMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-700/60 bg-slate-950 shadow-xl">
      <div className="flex h-10 items-center gap-2 border-b border-slate-800 bg-slate-900 px-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-3 w-3 rounded-full bg-slate-700" />
        ))}
      </div>
      <div className="p-4">
        <div className="mb-3 font-mono text-[11px] uppercase tracking-wider text-slate-600">
          Product Roadmap — Q2
        </div>
        <div className="space-y-2">
          {roadmapItems.map(
            ({ name, progress, status, ship, color, badgeColor }) => (
              <div
                key={name}
                className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900 p-3"
              >
                <div className={`h-10 w-2 shrink-0 rounded-full ${color}`} />
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[12px] text-slate-200">
                    {name}
                  </div>
                  <div className="font-mono text-[10px] text-slate-500">
                    Engineering: {progress}% · {status}
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] ${badgeColor}`}
                >
                  {ship}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

interface SolutionBlockProps {
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  bullets: string[];
  bulletColor: string;
  mockup: React.ReactNode;
  reverse?: boolean;
}

function SolutionBlock({
  badge,
  badgeColor,
  title,
  description,
  bullets,
  bulletColor,
  mockup,
  reverse,
}: SolutionBlockProps) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 ${
        reverse ? "" : ""
      }`}
    >
      <div className={reverse ? "order-1 md:order-2" : ""}>
        <span
          className={`mb-6 inline-block rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-widest ${badgeColor}`}
        >
          {badge}
        </span>
        <h3 className="mb-4 text-3xl font-bold tracking-tight text-slate-100">
          {title}
        </h3>
        <p className="mb-8 text-slate-400">{description}</p>
        <div className="space-y-3">
          {bullets.map((b) => (
            <div key={b} className="flex items-center gap-3">
              <CheckCircle2
                className={`h-5 w-5 flex-shrink-0 ${bulletColor}`}
              />
              <span className="text-slate-200">{b}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={reverse ? "order-2 md:order-1" : ""}>{mockup}</div>
    </div>
  );
}

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="w-full border-t border-slate-800 bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-slate-100">
          Manage Complex Technical Deliverables
        </h2>
        <div className="mb-16 h-px bg-slate-800" />

        <div className="space-y-28">
          <SolutionBlock
            badge="Engineering Leads"
            badgeColor="border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
            title="Maintain Technical Oversight"
            description="Stop relying on disjointed status updates. DevTracker lets you aggregate data from multiple repositories and tracking tools into a unified technical narrative. Keep your finger on the pulse of project health without micromanaging."
            bullets={["Unified dashboard views", "Automated status reports"]}
            bulletColor="text-emerald-400"
            mockup={<CodeMockup />}
          />

          <SolutionBlock
            badge="Product Managers"
            badgeColor="border-orange-400/30 bg-orange-400/10 text-orange-400"
            title="Bridge the Gap Between Tech and Business"
            description="Your focus on deliverables requires clear visibility into technical progress. DevTracker's structured layout helps you contextualize engineering velocity within real-world business timelines, bridging the gap between technical execution and product strategy."
            bullets={["Business objective alignment", "Timeline forecasting"]}
            bulletColor="text-orange-400"
            mockup={<RoadmapMockup />}
            reverse
          />
        </div>
      </div>
    </section>
  );
}

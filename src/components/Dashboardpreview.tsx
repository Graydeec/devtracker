const projects = [
  {
    name: "API Refactor (#PROJ-402)",
    lang: "Node.js • 23 commits",
    progress: 80,
    color: "bg-emerald-400",
    textColor: "text-emerald-400",
  },
  {
    name: "Auth System Rewrite (#PROJ-388)",
    lang: "TypeScript • 41 commits",
    progress: 55,
    color: "bg-blue-400",
    textColor: "text-blue-400",
  },
  {
    name: "Dashboard V2 (#PROJ-415)",
    lang: "React • 18 commits",
    progress: 30,
    color: "bg-orange-400",
    textColor: "text-orange-400",
  },
];

const stats = [
  { label: "On-time rate", value: "97%", color: "text-emerald-400" },
  { label: "Commits (90d)", value: "130", color: "text-blue-400" },
  { label: "Bullet Points", value: "12", color: "text-orange-400" },
];

const sidebarLinks = [
  { icon: "🌿", label: "All Projects", active: true },
  { icon: "✦", label: "Tasks", active: false },
  { icon: "◎", label: "AI Insights", active: false },
  { icon: "⬡", label: "Analytics", active: false },
];

export function DashboardPreview() {
  return (
    <div className="relative w-full max-w-5xl overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/50 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />

      <div className="flex h-[360px] flex-col overflow-hidden rounded-lg border border-slate-800 bg-slate-950 md:h-[500px]">
        {/* Window chrome */}
        <div className="flex h-10 flex-shrink-0 items-center gap-2 border-b border-slate-800 bg-slate-900 px-4">
          <div className="h-3 w-3 rounded-full bg-slate-700" />
          <div className="h-3 w-3 rounded-full bg-slate-700" />
          <div className="h-3 w-3 rounded-full bg-slate-700" />
          <div className="ml-4 flex gap-5">
            {["Dashboard", "Projects", "Resume AI"].map((t, i) => (
              <span
                key={t}
                className={`font-mono text-[11px] ${
                  i === 1
                    ? "border-b border-blue-400 pb-0.5 text-blue-400"
                    : "text-slate-500"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="hidden w-44 flex-shrink-0 flex-col gap-1 border-r border-slate-800 bg-slate-900 p-3 md:flex">
            {sidebarLinks.map(({ icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded px-2 py-2 ${
                  active
                    ? "border border-blue-500/20 bg-blue-500/10 text-blue-400"
                    : "text-slate-500"
                }`}
              >
                <span className="text-xs">{icon}</span>
                <span className="font-mono text-[11px]">{label}</span>
              </div>
            ))}
            <div className="mt-auto border-t border-slate-800 pt-3">
              <div className="flex items-center gap-2 px-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                  <span className="font-mono text-[9px] text-blue-400">JD</span>
                </div>
                <span className="font-mono text-[11px] text-slate-500">
                  John Dev
                </span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-hidden p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-200">
                Active Projects
              </span>
              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 font-mono text-[11px] text-blue-400">
                4 active
              </span>
            </div>

            {/* Project rows */}
            <div className="space-y-3">
              {projects.map(({ name, lang, progress, color, textColor }) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 p-3"
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-2 w-2 rounded-full ${color}`} />
                    <div>
                      <div className="font-mono text-[12px] text-slate-200">
                        {name}
                      </div>
                      <div className="font-mono text-[10px] text-slate-500">
                        {lang}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-20 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className={`h-full rounded-full ${color}`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span className={`font-mono text-[11px] ${textColor}`}>
                      {progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {stats.map(({ label, value, color }) => (
                <div
                  key={label}
                  className="rounded-lg border border-slate-800 bg-slate-900 p-3 text-center"
                >
                  <div className={`text-xl font-bold ${color}`}>{value}</div>
                  <div className="font-mono text-[10px] text-slate-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

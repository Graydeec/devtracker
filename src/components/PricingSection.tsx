import { CheckCircle2, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
  {
    tier: "Starter",
    name: "Free Plan",
    description: "For individual developers starting out.",
    price: "$0",
    cta: "Get Started",
    href: "/sign-up",
    highlight: false,
    accentColor: "text-emerald-400",
    badgeColor: "border-emerald-400/30 bg-emerald-400/10 text-emerald-400",
    checkColor: "text-emerald-400",
    features: [
      "Individual projects",
      "Core tracking features",
      "Community support",
    ],
  },
  {
    tier: "Popular",
    name: "Pro Plan",
    description: "For professionals maximizing output.",
    price: "$15",
    cta: "Upgrade to Pro",
    href: "/sign-up?plan=pro",
    highlight: true,
    accentColor: "text-blue-400",
    badgeColor: "border-blue-400/30 bg-blue-400/10 text-blue-400",
    checkColor: "text-blue-400",
    features: ["AI resume insights", "Unlimited projects", "Priority support"],
  },
  {
    tier: "Scale",
    name: "Team / Bootcamp",
    description: "For structured group development.",
    price: "$49",
    cta: "Contact Sales",
    href: "/contact",
    highlight: false,
    accentColor: "text-orange-400",
    badgeColor: "border-orange-400/30 bg-orange-400/10 text-orange-400",
    checkColor: "text-orange-400",
    features: ["Group tracking", "Mentor dashboards", "Advanced analytics"],
  },
];

const tableFeatures = [
  {
    name: "Project Tracking",
    free: "Up to 3",
    pro: "Unlimited",
    team: "Unlimited",
  },
  { name: "AI Resume Insights", free: null, pro: true, team: true },
  { name: "Mentor Dashboard", free: null, pro: null, team: true },
];

const faqs = [
  {
    q: "Can I upgrade later?",
    a: "Yes, you can upgrade your plan at any time. Prorated charges will apply.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We accept all major credit cards and PayPal for monthly subscriptions.",
  },
];

function FeatureCell({ value }: { value: string | boolean | null }) {
  if (value === null)
    return <Minus className="mx-auto h-4 w-4 text-slate-700" />;
  if (value === true)
    return <CheckCircle2 className="mx-auto h-4 w-4 text-slate-400" />;
  return <span className="font-mono text-xs text-slate-400">{value}</span>;
}

export default function PricingSection() {
  return (
    <section id="pricing" className="mx-auto w-full max-w-7xl px-5 py-28">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-100">
          Transparent Pricing for Developers
        </h2>
        <p className="mx-auto max-w-xl text-slate-400">
          Scale your productivity without breaking the bank. Choose the plan
          that fits your workflow.
        </p>
      </div>

      {/* Cards */}
      <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative flex flex-col rounded-xl p-8 transition-shadow",
              plan.highlight
                ? "border-2 border-blue-500 bg-slate-900 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                : "border border-slate-700/60 bg-slate-900",
            )}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-blue-500 px-4 py-1.5 font-mono text-xs text-white">
                  Popular
                </span>
              </div>
            )}

            <span
              className={cn(
                "mb-4 self-start rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wider",
                plan.badgeColor,
              )}
            >
              {plan.tier}
            </span>

            <h3 className="mb-1 text-xl font-semibold text-slate-100">
              {plan.name}
            </h3>
            <p className="mb-6 text-sm text-slate-500">{plan.description}</p>

            <div className="mb-8 flex items-end gap-1">
              <span className={cn("text-5xl font-bold", plan.accentColor)}>
                {plan.price}
              </span>
              <span className="mb-1 text-slate-500">/mo</span>
            </div>

            <ul className="mb-8 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2
                    className={cn("h-4 w-4 flex-shrink-0", plan.checkColor)}
                  />
                  {f}
                </li>
              ))}
            </ul>

            <Button
              asChild
              className={cn(
                "w-full",
                plan.highlight
                  ? "bg-blue-500 text-white hover:bg-blue-400"
                  : "border border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800",
              )}
            >
              <Link href={plan.href}>{plan.cta}</Link>
            </Button>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="mb-20">
        <h3 className="mb-6 text-xl font-semibold text-slate-100">
          Compare Features
        </h3>
        <div className="overflow-hidden rounded-xl border border-slate-700/60">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80">
                <th className="px-6 py-4 text-left font-mono text-xs uppercase tracking-wider text-slate-500">
                  Feature
                </th>
                {["Free", "Pro", "Team"].map((h, i) => (
                  <th
                    key={h}
                    className={cn(
                      "px-6 py-4 font-mono text-xs uppercase tracking-wider",
                      i === 1 ? "text-blue-400" : "text-slate-500",
                    )}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableFeatures.map(({ name, free, pro, team }) => (
                <tr
                  key={name}
                  className="border-b border-slate-800 transition-colors last:border-0 hover:bg-slate-900/50"
                >
                  <td className="px-6 py-4 text-left text-sm text-slate-200">
                    {name}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <FeatureCell value={free} />
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-400">
                    <FeatureCell value={pro} />
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <FeatureCell value={team} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h3 className="mb-6 text-xl font-semibold text-slate-100">
          Frequently Asked Questions
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map(({ q, a }) => (
            <div
              key={q}
              className="rounded-xl border border-slate-700/60 bg-slate-900 p-6"
            >
              <p className="mb-2 font-mono text-sm font-medium text-slate-100">
                {q}
              </p>
              <p className="text-sm text-slate-400">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#solutions", label: "Solutions" },
];

export default function PublicHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-50 transition-opacity hover:opacity-90"
        >
          DevTracker
        </Link>

        {/* Nav links */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-200",
                pathname === href
                  ? "border-b-2 border-blue-400 pb-0.5 text-blue-400"
                  : "text-slate-400 hover:bg-slate-900/50 hover:text-slate-100",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            className="hidden text-slate-400 hover:text-slate-100 md:inline-flex"
          >
            <Link href="/sign-in">Log In</Link>
          </Button>
          <Button asChild className="bg-blue-500 text-white hover:bg-blue-400">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

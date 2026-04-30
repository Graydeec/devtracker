import Link from "next/link";

// const footerLinks = [
//   { href: "/privacy", label: "Privacy Policy" },
//   { href: "/terms", label: "Terms of Service" },
//   { href: "/docs", label: "Documentation" },
//   { href: "/contact", label: "Contact Us" },
//   { href: "/careers", label: "Careers" },
// ];

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-black text-slate-200">DevTracker</span>
          <span className="text-sm text-slate-500">
            © {new Date().getFullYear()} DevTracker Inc. Engineered for
            precision.
          </span>
        </div>
        {/* <div className="flex flex-wrap items-center gap-6 md:justify-end">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-slate-500 transition-colors hover:text-blue-400"
            >
              {label}
            </Link>
          ))}
        </div> */}
      </div>
    </footer>
  );
}

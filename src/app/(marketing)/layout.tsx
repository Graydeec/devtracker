import Footer from "@/components/Footer";
import PublicHeader from "@/components/PublicHeader";

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-200">
      <PublicHeader />
      <main className="flex grow flex-col items-center">{children}</main>
      <Footer />
    </div>
  );
}

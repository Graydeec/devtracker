// app/(auth)/layout.tsx
import { ClerkProvider } from "@clerk/nextjs";
import PublicHeader from "../../components/PublicHeader";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

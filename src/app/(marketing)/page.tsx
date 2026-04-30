import CtaSection from "@/components/CtaSection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import SolutionSection from "@/components/SolutionSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "DevTracker — Turn Your Code into Career-Defining Accomplishments",
  description:
    "The developer-first project manager that translates your Git commits, side projects, and feature builds into a dynamic portfolio that gets you hired.",
  openGraph: {
    title: "DevTracker",
    description:
      "Track projects. Generate AI resume bullets. Land your next role.",
    type: "website",
  },
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SocialProof />
      <FeatureSection />
      <SolutionSection />
      <CtaSection />
    </>
  );
};

export default HomePage;

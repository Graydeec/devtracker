import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import React from "react";

const Feature = () => {
  return (
    <main className="flex grow flex-col items-center">
      <HeroSection />
      {/* <SocialProof /> */}
      <FeatureSection />
    </main>
  );
};

export default Feature;

import { FeatureSection } from "@/features/landing/FeatureSection";
import { HeroParallaxDemo } from "@/features/landing/HeroSection";
import { LandingHeader } from "@/features/landing/LandingHeader";
import { ProblemsSection } from "@/features/landing/ProblemsSection";


export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-16" />
      <LandingHeader />
      <HeroParallaxDemo />
      <FeatureSection />
      <ProblemsSection />
    </div>
  );
}

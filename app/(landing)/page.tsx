import { LandingHeader } from "@/features/landing/LandingHeader";
import { HeroParallaxDemo } from "@/features/landing/HeroSection";
import { FeatureSection } from "@/features/landing/FeatureSection";
import { ProblemsSection } from "@/features/landing/ProblemsSection";
import { FAQSection } from "@/features/landing/FAQSection";
import PricingPage from "@/features/landing/PricingSection";


export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-16" />
      <LandingHeader />
      <HeroParallaxDemo />
      <FeatureSection />
      <ProblemsSection />
      <PricingPage />
      <FAQSection />
    </div>
  );
}
import { Button } from "@/components/ui/button";
import { HeroParallaxDemo } from "@/features/landing/HeroSection";
import { LandingHeader } from "@/features/landing/LandingHeader";


export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <LandingHeader />
      <HeroParallaxDemo />
    </div>
  );
}

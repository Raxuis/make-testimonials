import { CardBefore } from "@/components/ui/3d-card-before";
import { Section } from "./Section";
import { CardAfter } from "@/components/ui/3d-card-after";

export const ProblemsSection = () => {
  return (
    <Section>
      <h2 className="text-center text-3xl font-bold">
        👀 Increase your review = Increase your sales 🛍️
      </h2>
      <div className="m-auto flex max-w-3xl items-center justify-center gap-4 max-lg:flex-col">
        <CardBefore />
        <CardAfter />
      </div>
    </Section>
  );
};

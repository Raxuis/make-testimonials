import { Section } from "./Section";

export const ProblemsSection = () => {
  return (
    <Section>
      <h2 className="text-center text-3xl font-bold">
        👀 Increase your review = Increase your sales 🛍️
      </h2>
      <div className="m-auto mt-4 flex max-w-3xl gap-4 max-lg:flex-col">
        <div className="flex flex-1 flex-col items-start rounded-lg bg-red-500/50 p-4 shadow lg:p-8">
          <h3 className="text-xl font-bold">Before make-testimonials.vercel.app</h3>
          <ul className="flex list-disc flex-col items-start text-left">
            <li>Customer don&apos;t trust your product</li>
            <li>Customer doesn&apos;t make review because it&apos;s too long</li>
            <li>It&apos;s hard to get review from customer</li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col items-start rounded-lg bg-green-500/50 p-4 shadow lg:p-8">
          <h3 className="text-xl font-bold">After make-testimonials.vercel.app</h3>
          <ul className="flex list-disc flex-col items-start text-left">
            <li>Customer trust your product and PAY 💰</li>
            <li>You get A LOT of review because of the process</li>
            <li>Customer WANT give you a review</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};
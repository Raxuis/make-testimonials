import { Text } from "./Text";
import EmailLayout from "./EmailLayout";
import { Button } from "./Button";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const PremiumEmail = () => {
  return (
    <EmailLayout preview="You created your first product!">
      <Text>
        Hi, welcome to Premium User!
      </Text>
      <Text>
        You can now create an infinite number of products.
      </Text>
      <Text>
        Your actual created products can still be used but you are limited to 100 reviews in total.
      </Text>
    </EmailLayout>
  );
};

export default PremiumEmail;

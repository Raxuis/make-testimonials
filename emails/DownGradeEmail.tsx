import { Text } from "./Text";
import EmailLayout from "./EmailLayout";
import { Button } from "./Button";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const DowngradeEmail = () => {
  return (
    <EmailLayout preview="You created your first product!">
      <Text>
        Hi,
      </Text>
      <Text>
        We are so sad to see you go. you are now downgraded to the free plan.
      </Text>
      <Button href={`${baseUrl}/products/new`}>Create a product</Button>
      <Text>
        See you there,
      </Text>
    </EmailLayout>
  );
};

export default DowngradeEmail;

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
        Hi, welcome to Premium User!
      </Text>
      <Text>
        You can now create an infinite number of products.
      </Text>
      <Button href={`${baseUrl}/products/new`}>Create a product</Button>
      <Text>
        See you there,
      </Text>
    </EmailLayout>
  );
};

export default DowngradeEmail;

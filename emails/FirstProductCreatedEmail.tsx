import { Text } from "./Text";
import EmailLayout from "./EmailLayout";
import { Button } from "./Button";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const FirstProductCreatedEmail = ({
  product,
  slug
}: {
  product: string;
  slug: string;
}) => {
  return (
    <EmailLayout preview="You created your first product!">
      <Text>
        Hi, you just created your first product on maketestimonials.vercel.app.
      </Text>
      <Text>
        So satisfying, you can now share the review url :
      </Text>
      <Button href={`${baseUrl}/r/${slug}`}>Share review URL</Button>
      <Text>
        If you want to create more products, consider upgrading our premium plan.
      </Text>
      <Button href={`${baseUrl}/upgrade`}>Upgrade</Button>
    </EmailLayout>
  );
};

FirstProductCreatedEmail.PreviewProps = {
  product: "Product name",
  slug: "product-slug",
};

export default FirstProductCreatedEmail;

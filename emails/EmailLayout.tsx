import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Tailwind,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailLayoutProps {
  userFirstname: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const EmailLayout = ({
  children,
  preview,
}: React.PropsWithChildren<{
  preview?: string;
}>) => {
  return (
    <Tailwind>
      <Html>
        <Head />
        {preview ? (
          <Preview>
            The sales intelligence platform that helps you uncover qualified
            leads.
          </Preview>
        ) : null}
        <Body className="bg-white">
          <Container className="mx-auto py-20">
            <Img
              src={`${baseUrl}/icon-title.png`}
              width="170"
              height="auto"
              alt="Make Testimonials"
              className="mx-auto"
            />
            <Section className="text-center">
              {children}
            </Section>
            <Text className="text-base leading-6">
              Best,
              <br />
              Make Testimonials&apos; team
            </Text>
            <Hr className="my-5 border-gray-300" />
            <Text className="text-xs text-gray-600">
              24 Rue Jeanne d&apos;Arc, 45000 Orléans, France
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default EmailLayout;

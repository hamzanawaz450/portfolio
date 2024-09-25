import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black font-sans">
          <Container>
            <Section className="bg-white border border-gray-300 my-10 px-8 py-6 rounded-md shadow-lg">
              <Heading className="text-2xl font-semibold text-gray-800 leading-tight mb-4">
                New Message from Your Portfolio Site
              </Heading>
              <Text className="text-lg text-gray-700 mb-4">
                You received the following message from the contact form:
              </Text>
              <Text className="text-base text-gray-800 border-l-4 border-blue-500 pl-4 mb-4">
                {message}
              </Text>
              <Hr className="my-4 border-gray-300" />
              <Text className="text-base text-gray-600">
                The sender's email is:{" "}
                <span className="text-blue-500 font-medium">{senderEmail}</span>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

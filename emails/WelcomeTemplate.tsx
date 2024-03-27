import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import React, { CSSProperties } from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Howdy!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://google.com">Get Started</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;

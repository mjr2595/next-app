import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import React from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Howdy!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="https://google.com">Get Started</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;

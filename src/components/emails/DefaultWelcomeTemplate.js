import { Body } from "@react-email/body";
import { Preview } from "@react-email/preview";
import { Html } from "@react-email/html";
import { Hr } from "@react-email/hr";
import { Head } from "@react-email/head";
import { Img } from "@react-email/img";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Button } from "@react-email/button";
import * as React from "react";

export const DefaultWelcomeTemplate = ({ userFirstname }) => (
  <Html>
    <Head />
    <Preview>Thank you for contacting IEES!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://res.cloudinary.com/dhdonsil5/image/upload/v1689454906/IEES/Brand-Assets/abmibydzc628s4aebqwt.png`}
          width="142"
          height="70"
          alt="IEES logo"
          style={logo}
        />
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thank you for contacting us through our website. We have received your
          message and we will get back to you as soon as possible. Your inquiry
          is important to us and we appreciate your interest in our products and
          services.
        </Text>
        <Section style={btnContainer}>
          <Button pX={12} pY={12} style={button} href="https://iees-co.com">
            Visit Website
          </Button>
        </Section>
        <Text style={paragraph}>
          Sincerely,
          <br />
          IEES sales team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          18 St. Zahrah Al Madaen, Joseph Tito, Second floor, Al Nozha, Cairo,
          Egypt
        </Text>
      </Container>
    </Body>
  </Html>
);

export default DefaultWelcomeTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
  objectFit: "contain",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#005d63",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

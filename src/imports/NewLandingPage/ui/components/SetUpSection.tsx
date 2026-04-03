import GoogleIcon from "@/imports/NewLandingPage/ui/svgs/GoogleIcon";
import { Button } from "@/lib/Button";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function SetUpSection() {
  return (
    <Container>
      <HeaderTitle>
        Set up your ad account preferences once in seconds, then never again.
      </HeaderTitle>
      <SubTitle>
        Watch a quick demo of how easy it is to configure all your existing
        preferences from ads manager to Blip!
      </SubTitle>
      <Button
        size="lg"
        icon={<GoogleIcon />}
        variant="secondary"
        style={{ padding: "16px 23px" }}
      >
        Get A Demo
      </Button>
      <Image src="/images/DemoImage.png" alt="hero" width={753} height={469} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 31px;
  max-width: 753px;
  padding: 0px 56px;

  @media (max-width: 768px) {
    padding: 0 20px;
    gap: 20px;

    img {
      width: 100% !important;
      height: auto !important;
    }
  }
`;

const HeaderTitle = styled.div`
  color: #330c00;
  text-align: center;
  font-family: Alcyone-Bold;
  font-size: 40px;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -1.2px;
  max-width: 700.243px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SubTitle = styled.div`
  color: #330c00;
  text-align: center;
  font-family: Alcyone;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
  max-width: 538px;
  opacity: 0.7;
`;

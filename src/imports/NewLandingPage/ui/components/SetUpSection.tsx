import { Button } from "@/lib/Button";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function SetUpSection() {
  return (
    <Container>
      <HeaderTitle>
        Ad Account Set up faster than Facebook changes its algorithm
      </HeaderTitle>
      <SubTitle>
        Watch a quick demo of how easy it is to configure all your existing
        preferences from ads manager to Blip!
      </SubTitle>
      <Button variant="danger" style={{ padding: "10px 58px" }}>
        Get A Demo
      </Button>
      <Image
        src="/images/DemoImage.png"
        alt="hero"
        width={753}
        height={469}
        style={{
          width: "100%",
        }}
      />
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
`;

const HeaderTitle = styled.div`
  color: #330c00;
  text-align: center;
  font-family: NexaRound;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -1.2px;
  max-width: 660px;
`;

const SubTitle = styled.div`
  color: #330c00;
  text-align: center;
  font-family: NexaRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
  max-width: 538px;
`;

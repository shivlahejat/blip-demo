"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";

const TikTokSection = () => {
  return (
    <Container>
      <ContentContainer>
        <Image
          src={"/images/tiktok_logo.png"}
          alt="tiktok_logo"
          height={34.154}
          width={37}
        />
        <Header>Coming soon</Header>
        <Title>TikTok Launcher</Title>
        <Description>
          Through a combination of auto detection and user selection we help you
          make the right type of ad based on campaign and ad set selected.
        </Description>
      </ContentContainer>
      <LayoutImage
        src={"/images/tiktok_layout.png"}
        alt="tiktok_layout"
        height={460}
        width={435}
      />
    </Container>
  );
};

export default TikTokSection;

const Container = styled.div`
  display: flex;
  padding: 26px 41px;
  gap: 242px;
  border-radius: 34px;
  background: #296455;

  @media (max-width: 1024px) {
    gap: 100px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    padding: 30px 20px;
    width: 95%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 324px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.div`
  color: #fff;
  text-align: center;
  font-family: Alcyone-Bold;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const LayoutImage = styled(Image)`
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Header = styled.div`
  color: #fff;
  font-family: Alcyone-Bold;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Description = styled.div`
  color: #fff;
  font-family: Alcyone-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.32px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

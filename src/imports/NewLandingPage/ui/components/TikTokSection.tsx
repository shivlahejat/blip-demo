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
  background: #00333d;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 324px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const Header = styled.div`
  color: #fff;
  font-family: Alcyone;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
  opacity: 0.7;
`;

const Title = styled.div`
  color: #fff;
  text-align: center;
  font-family: Alcyone;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;

const Description = styled.div`
  color: #fff;
  font-family: Alcyone;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
  opacity: 0.8;
`;

const LayoutImage = styled(Image)`
  object-fit: cover;
`;

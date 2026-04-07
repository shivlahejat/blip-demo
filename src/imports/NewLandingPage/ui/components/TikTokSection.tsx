"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";

const TikTokSection = () => {
  return (
    <OutsideWrapper>
      <Container>
        <ContentContainer>
          <ImageWrapper>
            <Image
              src={"/images/tiktokLogo.webp"}
              alt="tiktok_logo"
              height={34}
              width={37}
              style={{ borderRadius: "9px" }}
            />
          </ImageWrapper>

          <Header>Coming soon</Header>
          <Title>TikTok Launcher</Title>
          <Description>
            Through a combination of auto detection and user selection we help
            you make the right type of ad based on campaign and ad set selected.
          </Description>
        </ContentContainer>
        <LayoutImage
          src={"/images/tiktok_layout.png"}
          alt="tiktok_layout"
          height={460}
          width={435}
        />
        <MobileLayoutBox />
      </Container>
    </OutsideWrapper>
  );
};

export default TikTokSection;

const OutsideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 60px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 26px 41px;
  gap: 242px;
  border-radius: 34px;
  background: #296455;
  /* @media (max-width: 1040px) {
    padding: 26px 60px;
    gap: 100px;
  }
  @media (max-width: 768px) {
    padding: 0px 20px;
    gap: 50px;
  } */

  @media (max-width: 1024px) {
    gap: 50px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 40px;
    padding: 30px 20px;
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 324px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  @media (max-width: 800px) {
    width: 100%;
    max-width: 100%;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 520px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const Title = styled.div`
  color: #fff;
  font-family: Alcyone-Bold;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 520px) {
    text-align: left;
  }
`;

const LayoutImage = styled(Image)`
  object-fit: cover;

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    background: #094737;
    border-radius: 29px;
    /* padding: 20px; */
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const MobileLayoutBox = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    width: 100%;
    height: 387px;
    border-radius: 29px;
    background: #094737;
  }
`;

const Header = styled.div`
  color: #fff;
  font-family: Alcyone-Medium;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.4px;
  opacity: 0.7;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Description = styled.div`
  color: #fff;
  font-family: Alcyone-Medium;
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  letter-spacing: -0.32px;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ImageWrapper = styled.div`
  border-radius: 9px;
  background: #fff;
  width: 37px;
  height: 34px;
  padding: 5.22px 3.8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

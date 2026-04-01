import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Button } from "@/lib/Button";

export default function HeroSection() {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="/images/LandingImage.png"
          alt="hero"
          width={1399}
          height={713}
          style={{
            width: "100%",
          }}
          priority
        />
        <ContentContainer>
          <Image
            src="/images/MetaVerifiedTag.png"
            alt="landing content"
            width={296}
            height={42}
            style={{
              height: "100%",
            }}
          />
          <TitleWrapper>
            <SubHeadingText>
              An Operating System for Media Buyers
            </SubHeadingText>
            <HeadingWrapper>
              <HeadingText>
                The Simplest Bulk Launcher Powered Up with Actually Useful
                Analytics
              </HeadingText>
              <CTAContainer>
                <Button style={{ padding: "14px 23px" }}>
                  Start Free Trial
                </Button>
                <Button variant="outline" style={{ padding: "14px 23px" }}>
                  Get A Demo
                </Button>
              </CTAContainer>
            </HeadingWrapper>
          </TitleWrapper>
        </ContentContainer>

        <ContentImageWrapper>
          <Image
            src="/images/LandingContentImage.png"
            alt="landing content"
            width={731}
            height={455}
            style={{
              width: "100%",
            }}
          />
        </ContentImageWrapper>
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100dvh;
  width: 100%;
  background-color: white;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1512px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ContentImageWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 72%;
  /* width: 52.22%; */
  /* overflow: hidden; */
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 8.61%;
  left: 0;
  right: 0;
  display: flex;
  gap: 57px;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SubHeadingText = styled.text`
  color: #674d01;
  font-family: Alcyone;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.28px;
  text-transform: capitalize;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const HeadingText = styled.text`
  color: #1d1d1d;
  max-width: 742px;
  text-align: center;
  font-family: Alcyone-SemiBold;
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: 1.4;
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin-right: 14px;
`;

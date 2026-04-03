import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Button } from "@/lib/Button";
import VerifiedSvg from "../svgs/VerifiedSvg";

const subPointData = [
  "Bulk launch all ad types from Drive, Dropbox & Desktop",
  "Scale existing Post IDs, Organic Posts, & Partnership Ads",
  "Review & deploy media buying recommendations in 1 click",
  "Unlimited Ad Launches & Team Seats",
];

interface HeroSectionProps {
  onImageRef?: (el: HTMLDivElement | null) => void;
  onImageLoad?: () => void;
}

export default function HeroSection({
  onImageRef,
  onImageLoad,
}: HeroSectionProps) {
  return (
    <Container>
      <ImageContainer>
        <ContentContainer>
          <MetaTagWrapper>
            <Image
              src="/images/MetaTag.svg"
              alt="landing content"
              width={19}
              height={12}
              style={{
                height: "100%",
              }}
            />
            <MetaTagText>Meta Verified Partner</MetaTagText>
          </MetaTagWrapper>

          <HeadingText>
            The simplest Bulk Ad Launcher powered up with Actionable Analytics
          </HeadingText>

          <MobileImageWrapper>
            <Image
              src="/images/LandingContentImage.png"
              alt="landing content"
              width={731}
              height={455}
              onLoad={onImageLoad}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </MobileImageWrapper>

          <SubPointsWrapper>
            {subPointData.map((item, index) => (
              <SubPoint key={index}>
                <VerifiedSvg />
                <SubPointsText>{item}</SubPointsText>
              </SubPoint>
            ))}
          </SubPointsWrapper>
          <FooterContentWrapper>
            <CTAContainer>
              <Button
                className="cta-button"
                leftIcon="/images/rocket2.svg"
                leftIconWidth={21}
                leftIconHeight={32}
              >
                Start Free Trial
              </Button>
              <Button
                className="cta-button"
                leftIcon="/images/MeetIcon.svg"
                variant="outlineFilled"
                leftIconWidth={24}
                leftIconHeight={20}
              >
                Get A Demo
              </Button>
            </CTAContainer>
            <FooterText>No CC Required. 7 Day free trial.</FooterText>
          </FooterContentWrapper>
        </ContentContainer>

        <DoodleWrapper>
          <Image
            src="/images/creative-doodle.webp"
            alt="doodle"
            width={1056}
            height={388}
            style={{ width: "100%", maxWidth: "1056px", height: "auto" }}
          />
        </DoodleWrapper>

        <ContentImageWrapper className="desktop-only" ref={onImageRef}>
          <Image
            src="/images/LandingContentImage.png"
            alt="landing content"
            width={731}
            height={455}
            onLoad={onImageLoad}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </ContentImageWrapper>
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: #f5e8d7;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ContentImageWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 72%;
  width: 731px;

  @media (max-width: 1024px) {
    width: 70%;
  }

  &.desktop-only {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const MobileImageWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 90%;
    margin: 20px auto;
  }
`;

const DoodleWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  margin-bottom: 18px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  margin-top: 172px;
  display: flex;
  gap: 26px;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 100px;
    gap: 20px;
    padding: 0 20px;
  }
`;

const HeadingText = styled.div`
  color: #1d1d1d;
  max-width: 807px;
  text-align: center;
  font-family: Alcyone-bold;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 28px;
    max-width: 100%;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 15px;

    .cta-button {
      width: 100%;
      padding: 15px !important;
      justify-content: center;
    }
  }
`;

const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
`;

const MetaTagWrapper = styled.div`
  display: flex;
  padding: 7px 25px;
  align-items: center;
  gap: 10px;
  border-radius: 27px;
  background: #ffd7b4;
`;

const MetaTagText = styled.div`
  color: #6c3403;
  font-family: Alcyone;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SubPointsWrapper = styled.div`
  display: flex;
  max-width: 955px;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 17px 26px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 12px;
  }
`;

const SubPoint = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SubPointsText = styled.div`
  color: #681c04;
  font-family: Alcyone;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: left;
  }
`;

const FooterText = styled.div`
  color: #674d01;
  text-align: center;
  font-family: Alcyone;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.24px;
  text-transform: capitalize;
`;

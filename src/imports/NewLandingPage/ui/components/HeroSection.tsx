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
      <CornerImage
        src={"/images/header_doodle_1.png"}
        alt="header doodle"
        width={380}
        height={247}
      />
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
            <video
              muted
              autoPlay
              loop
              playsInline
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "5% center",
                borderRadius: "20px",
                border: "3px solid #000",
                boxShadow: "0px 20px 40px -10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <source src="/video/Demo.mp4" type="video/mp4" />
            </video>
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
              <CTAButtonWrapper
                className="cta-button"
                leftIcon="/images/rocket2.svg"
                leftIconWidth={21}
                leftIconHeight={32}
                hoverText="Launch Ads in Bulk"
              >
                Start Free Trial
              </CTAButtonWrapper>
              <GetADemoButtonWrapper
                className="cta-button"
                leftIcon="/images/MeetIcon.svg"
                variant="outlineFilled"
                leftIconWidth={24}
                leftIconHeight={20}
              >
                Get A Demo
              </GetADemoButtonWrapper>
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
          <video
            muted
            autoPlay
            loop
            playsInline
            style={{
              width: "731px",
              height: "455px",
              objectFit: "cover",
              objectPosition: "5% center",
              borderRadius: "20px",
              border: "3px solid #000",
              boxShadow: "0px 20px 40px -10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <source src="/video/Demo.mp4" type="video/mp4" />
          </video>
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
  position: relative;

  @media (max-width: 768px) {
    padding-bottom: 0px;
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
  max-width: 731px;
  width: 100%;

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
    width: 100%;
  }
`;

const DoodleWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  margin-bottom: 18px;

  @media (max-width: 768px) {
    display: flex;
    margin-bottom: 0px;
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
    gap: 29px;
    padding: 0 20px;
  }
  @media (max-width: 520px) {
    align-items: unset;
    justify-content: flex-start;
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
  @media (max-width: 520px) {
    text-align: left;
  }
`;

const CTAContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  gap: 22px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 15px;

    .cta-button {
      width: 100%;

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
  justify-content: center;
  gap: 10px;
  border-radius: 27px;
  background: #ffd7b4;
  width: 100%;
  max-width: 250px;
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
    gap: 17px;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const CTAButtonWrapper = styled(Button)`
  display: flex;
  padding: 16px 53px 16px 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 221px;
  border: 2px solid #3f3e3e;
  background: linear-gradient(0deg, #414141 0%, #000 77.88%);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
  max-width: 266px;
  max-height: 53px;
  height: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  span {
    /* justify-content: unset; */
  }
`;

const GetADemoButtonWrapper = styled(Button)`
  display: flex;
  padding: 16px 23px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 221px;
  border: 2px solid #1d1d1d;
  background: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  max-width: 188px;
  max-height: 53px;
  height: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CornerImage = styled(Image)`
  transform: rotate(-23.052deg);
  aspect-ratio: 103 / 67;
  border-radius: 204px;
  position: absolute;
  top: -100px;
  right: -250px;

  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

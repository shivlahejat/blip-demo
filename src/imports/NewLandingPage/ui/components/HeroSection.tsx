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
                style={{ padding: "9px 53px 12px 48px" }}
                leftIcon="/images/rocket2.svg"
                leftIconWidth={21}
                leftIconHeight={32}
              >
                Start Free Trial
              </Button>
              <Button
                leftIcon="/images/MeetIcon.svg"
                variant="outlineFilled"
                style={{ padding: "16px 23px" }}
                leftIconWidth={24}
                leftIconHeight={20}
              >
                Get A Demo
              </Button>
            </CTAContainer>
            <FooterText>No CC Required. 7 Day free trial.</FooterText>
          </FooterContentWrapper>
        </ContentContainer>

        {/* <ContentImageWrapper>
          <Image
            src="/images/LandingContentImage.png"
            alt="landing content"
            width={731}
            height={455}
            style={{
              width: "100%",
            }}
          />
        </ContentImageWrapper> */}

        <DoodleWrapper>
          <Image
            src="/images/creative-doodle.webp"
            alt="doodle"
            width={1056}
            height={388}
            style={{ width: "100%", maxWidth: "1056px", height: "auto" }}
          />
        </DoodleWrapper>

        <ContentImageWrapper ref={onImageRef}>
          <Image
            src="/images/LandingContentImage.png"
            alt="landing content"
            width={731}
            height={455}
            onLoad={onImageLoad}
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
  /* height: 100dvh; */
  width: 100%;
  background-color: #f5e8d7;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 1512px; */
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* flex: 1; */
`;

const ContentImageWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 72%;
  /* width: 52.22%; */
  /* overflow: hidden; */
`;

const DoodleWrapper = styled.div`
  /* position: absolute; */
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  margin-bottom: 18px;
`;

const ContentContainer = styled.div`
  /* position: absolute; */
  /* top: 19.18%;
  left: 0;
  right: 0; */
  margin-top: 172px;
  display: flex;
  gap: 26px;
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
  max-width: 807px;
  text-align: center;
  font-family: Alcyone-bold;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  text-transform: capitalize;
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin-right: 14px;
`;

const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

const MetaTagWrapper = styled.div`
  display: flex;
  padding: 7px 25px;
  align-items: center;
  gap: 10px;
  border-radius: 27px;
  background: #ffd7b4;
`;

const MetaTagText = styled.text`
  color: #6c3403;
  font-family: Alcyone;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`;

const SubPointsWrapper = styled.div`
  display: flex;
  max-width: 955px;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 17px 26px;
  flex-wrap: wrap;
`;

const SubPoint = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SubPointsText = styled.text`
  color: #681c04;
  font-family: Alcyone;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const FooterText = styled.text`
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

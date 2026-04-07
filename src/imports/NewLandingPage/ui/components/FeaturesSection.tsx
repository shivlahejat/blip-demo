"use client";

import { FEATURES } from "@/imports/NewLandingPage/constants/constants";
import { Button } from "@/lib/Button";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import FrameIcon from "@/imports/NewLandingPage/ui/svgs/FrameIcon";

const FeaturesSection = () => {
  return (
    <Container>
      {FEATURES.map((feature, index) => {
        const Icon = feature.icon;
        const isVideoLayout = (feature as any).videolayout;
        return (
          <FeatureCardContainer key={index} $videolayout={isVideoLayout}>
            <FeatureContentContainer $videolayout={isVideoLayout}>
              <FeaturePointsContainer $videolayout={isVideoLayout}>
                <TitleWrapper $videolayout={isVideoLayout}>
                  <Icon />
                  <Title>{feature.tag}</Title>
                </TitleWrapper>

                <SubTitle $videolayout={isVideoLayout}>
                  {feature.title}
                </SubTitle>
                <Description $videolayout={isVideoLayout}>
                  {feature.description}
                </Description>
              </FeaturePointsContainer>
              <CTAContainer $videolayout={isVideoLayout}>
                {feature.actions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <BulletPointContainer key={index}>
                      <Icon />
                      <BulletPoint>{action.text}</BulletPoint>
                    </BulletPointContainer>
                  );
                })}
              </CTAContainer>
            </FeatureContentContainer>
            <FeatureImageContainer $videolayout={isVideoLayout}>
              {feature?.image && (
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={isVideoLayout ? 1050 : 618}
                  height={isVideoLayout ? 540 : 547}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    aspectRatio: isVideoLayout ? "16/9" : "unset",
                    borderRadius: isVideoLayout ? "40px" : "0px",
                  }}
                  unoptimized
                />
              )}
              {feature?.video && (
                <video
                  muted
                  autoPlay
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "5% center",
                    border: "3px solid #000",
                    borderRadius: isVideoLayout ? "40px" : "0px",
                    boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.75)",
                  }}
                >
                  <source src="/video/Demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag
                </video>
              )}
              {/* : (
              <div
                style={{
                  borderRadius: "51px",
                  background: "#F6EDDC",
                  aspectRatio: "16/9",
                }}
              ></div>
              ) */}
              {feature?.showFrameIcon && (
                <IconOverlay>
                  <FrameIcon />
                </IconOverlay>
              )}
            </FeatureImageContainer>
          </FeatureCardContainer>
        );
      })}
    </Container>
  );
};

export default FeaturesSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 160px;
  /* padding: 0px 240px 0px 240px; */

  @media (max-width: 1100px) {
    padding: 0px 60px;
    gap: 100px;
  }
  @media (max-width: 768px) {
    padding: 0px 20px;
    gap: 50px;
  }
`;

const TitleWrapper = styled.div<{ $videolayout?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  justify-content: ${({ $videolayout }) =>
    $videolayout ? "center" : "flex-start"};

  @media (max-width: 800px) {
    justify-content: flex-start;
  }
  @media (max-width: 520px) {
    justify-content: flex-start;
  }
`;

const FeatureCardContainer = styled.div<{ $videolayout?: boolean }>`
  display: flex;
  align-items: ${({ $videolayout }) =>
    $videolayout ? "center" : "flex-start"};
  flex-direction: ${({ $videolayout }) => ($videolayout ? "column" : "row")};
  gap: ${({ $videolayout }) => ($videolayout ? "48px" : "150px")};
  max-width: ${({ $videolayout }) => ($videolayout ? "1050px" : "unset")};
  width: 100%;

  @media (max-width: 1040px) {
    gap: ${({ $videolayout }) => ($videolayout ? "40px" : "45px")};
  }
  @media (max-width: 920px) {
    gap: ${({ $videolayout }) => ($videolayout ? "30px" : "25px")};
    align-items: center;
  }
  @media (max-width: 850px) {
    gap: 20px;
    flex-direction: column;
  }

  @media (max-width: 520px) {
    align-items: flex-start;
  }
`;

const FeatureContentContainer = styled.div<{ $videolayout?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $videolayout }) =>
    $videolayout ? "center" : "flex-start"};
  gap: 32px;
  max-width: ${({ $videolayout }) => ($videolayout ? "830px" : "458px")};
  width: 100%;
  text-align: ${({ $videolayout }) => ($videolayout ? "center" : "left")};

  @media (max-width: 850px) {
    max-width: 100%;
  }

  @media (max-width: 800px) {
    align-items: flex-start;
    text-align: left;
  }

  @media (max-width: 820px) {
    gap: 20px;
  }

  @media (max-width: 520px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const FeaturePointsContainer = styled.div<{ $videolayout?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $videolayout }) =>
    $videolayout ? "center" : "flex-start"};
  gap: 13px;
  max-width: ${({ $videolayout }) => ($videolayout ? "611px" : "unset")};

  @media (max-width: 820px) {
    gap: 13px;
  }

  @media (max-width: 800px) {
    align-items: flex-start;
  }

  @media (max-width: 520px) {
    align-items: flex-start;
  }
`;

const Title = styled.div`
  color: #f47200;
  font-family: Alcyone-semibold;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.72px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SubTitle = styled.div<{ $videolayout?: boolean }>`
  color: #330c00;
  font-family: Alcyone-Bold;
  font-size: 40px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.2px;
  text-align: ${({ $videolayout }) => ($videolayout ? "center" : "left")};

  @media (max-width: 800px) {
    text-align: left;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 520px) {
    text-align: left;
    max-width: 324px;
  }
`;

const Description = styled.div<{ $videolayout?: boolean }>`
  color: #330c00;
  font-family: Alcyone-Medium;
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  letter-spacing: -0.32px;
  opacity: 0.7;
  text-align: ${({ $videolayout }) => ($videolayout ? "center" : "left")};

  @media (max-width: 800px) {
    text-align: left;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 520px) {
    text-align: left;
  }
`;

const CTAContainer = styled.div<{ $videolayout?: boolean }>`
  display: flex;
  align-items: ${({ $videolayout }) =>
    $videolayout ? "center" : "flex-start"};
  /* align-content: center; */
  flex-direction: ${({ $videolayout }) => ($videolayout ? "row" : "column")};
  justify-content: ${({ $videolayout }) =>
    $videolayout ? "center" : "flex-start"};
  gap: ${({ $videolayout }) => ($videolayout ? "19px" : "19px")};
  align-self: stretch;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
  }

  @media (max-width: 820px) {
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: 520px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const FeatureImageContainer = styled.div<{ $videolayout?: boolean }>`
  max-width: ${({ $videolayout }) => ($videolayout ? "1050px" : "442px")};
  width: 100%;
  position: relative;

  @media (max-width: 850px) {
    /* max-width: 100%; */
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const IconOverlay = styled.div`
  position: absolute;
  bottom: 60px;
  right: -25px;
  z-index: 10;

  @media (max-width: 768px) {
    bottom: 30px;
    right: -5px;
    svg {
      width: 45px;
      height: 46px;
    }
  }

  @media (max-width: 680px) {
    bottom: 30px;
    right: -5px;
    svg {
      width: 45px;
      height: 46px;
    }
  }
`;

const BulletPointContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BulletPoint = styled.div`
  color: #6c3403;
  opacity: 0.7;
  font-family: Alcyone-semibold;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
`;

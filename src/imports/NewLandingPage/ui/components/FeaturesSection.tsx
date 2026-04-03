"use client";

import { FEATURES } from "@/imports/NewLandingPage/constants/constants";
import { Button } from "@/lib/Button";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const FeaturesSection = () => {
  return (
    <Container>
      {FEATURES.map((feature, index) => (
        <FeatureCardContainer>
          <FeatureContentContainer>
            <FeaturePointsContainer>
              <Title>{feature.tag}</Title>
              <SubTitle>{feature.title}</SubTitle>
              <Description>{feature.description}</Description>
            </FeaturePointsContainer>
            <CTAContainer>
              {feature.actions.map((action, index) => (
                <BulletPointContainer key={index}>
                  <BulletPoint>{action.text}</BulletPoint>
                </BulletPointContainer>
              ))}
            </CTAContainer>
          </FeatureContentContainer>
          <FeatureImageContainer>
            {/* <Image
              src={"/images/feature_card_1.jpg"}
              alt="feature card 1"
              width={400}
              height={562.801}
              unoptimized
            /> */}
            <EmptyState />
          </FeatureImageContainer>
        </FeatureCardContainer>
      ))}
    </Container>
  );
};

export default FeaturesSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;
  padding: 0px 240px 0px 240px;

  @media (max-width: 1040px) {
    padding: 0px 60px;
  }
  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`;

const FeatureCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 150px;

  @media (max-width: 1040px) {
    gap: 45px;
  }
  @media (max-width: 768px) {
    gap: 20px;
    flex-direction: column;
  }
`;

const FeatureContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  max-width: 414px;

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const FeaturePointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Title = styled.div`
  color: #ff3e03;
  font-family: Alcyone;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.72px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SubTitle = styled.div`
  color: #330c00;
  font-family: Alcyone-Bold;
  font-size: 40px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.2px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled.div`
  color: #330c00;
  font-family: Alcyone;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.54px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: column;
  gap: 19px;
  align-self: stretch;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const FeatureImageContainer = styled.div`
  width: 400px;
  height: 562.801px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    order: -1;
  }
`;

const BulletPointContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BulletPoint = styled.div`
  color: #6c3403;
  font-family: Alcyone;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.28px;
`;

const EmptyState = styled.div`
  min-width: 618.656px;
  min-height: 506.042px;
  border-radius: 51px;
  background: #f6eddc;

  @media (max-width: 768px) {
    min-width: 400px;
    min-height: 505.194px;
    height: 100%;
  }

  @media (max-width: 1024px) {
    min-width: 400px;
    min-height: 500px;
    height: 100%;
  }
`;

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
                <CTAButton key={index} variant="outline">
                  {action}
                </CTAButton>
              ))}
            </CTAContainer>
          </FeatureContentContainer>
          <FeatureImageContainer>
            <Image
              src={"/images/feature_card_1.jpg"}
              alt="feature card 1"
              width={400}
              height={562.801}
              unoptimized
            />
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
`;

const FeatureCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 150px;
`;

const FeatureContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 228px;
  max-width: 414px;
`;

const FeaturePointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
`;

const Title = styled.div`
  color: #ff3e03;
  font-family: NexaRound;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.72px;
`;

const SubTitle = styled.div`
  color: #330c00;
  font-family: NexaRound;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.2px;
`;

const Description = styled.div`
  color: #330c00;
  font-family: NexaRound;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.54px;
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 23px 16px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const FeatureImageContainer = styled.div`
  width: 400px;
  height: 562.801px;
`;
const CTAButton = styled(Button)`
  border: 1px solid #ff3e03;
  color: #ff3e03;
`;

"use client";

import { PRICING_PLANS } from "@/imports/NewLandingPage/constants/constants";
import CheckIcon from "@/imports/NewLandingPage/ui/svgs/CheckIcon";
import ShopIcon from "@/imports/NewLandingPage/ui/svgs/ShopIcon";
import { Button } from "@/lib/Button";
import React from "react";
import styled from "styled-components";

const PricingSection = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          Money cant buy you happiness. But it can save you from{" "}
          <span className="highlight">Ads Manager </span>
          Which is like the same thing.
        </Title>
      </TitleWrapper>
      <Container>
        {PRICING_PLANS.map((plan) => (
          <PricingCard key={plan.id}>
            <ContentContainer>
              <CardBadge>
                <CardBadgeText>{plan.badge}</CardBadgeText>
              </CardBadge>
              <PlanTypeContainer>
                <PlanIconWrapper>
                  <ShopIcon />
                </PlanIconWrapper>
                <PlanType>{plan.title}</PlanType>
              </PlanTypeContainer>
              <PlanPriceText>${plan.price}/month</PlanPriceText>
              <PlanFeatureContainer>
                {plan.features.map((feature, index) => (
                  <PlanFeaturePoint key={index}>
                    <CheckIcon />
                    <PlanFeatureText>{feature}</PlanFeatureText>
                  </PlanFeaturePoint>
                ))}
              </PlanFeatureContainer>
            </ContentContainer>
            <BottomContainer>
              <Button variant="danger" size="lg" style={{ width: "100%" }}>
                {plan.cta}
              </Button>
              <BottomText>No CC Required</BottomText>
            </BottomContainer>
          </PricingCard>
        ))}
      </Container>
    </Wrapper>
  );
};

export default PricingSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 0px 56px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1512px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    & > :last-child {
      grid-column: span 2;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;

    & > :last-child {
      grid-column: span 1;
    }
  }
`;

const PricingCard = styled.div`
  display: flex;
  padding: 32px 35px;
  flex-direction: column;
  align-items: flex-start;
  gap: 87px;
  border-radius: 41px;
  background: #1d1d1d;
  width: 100%;

  @media (max-width: 768px) {
    padding: 24px;
    gap: 40px;
    border-radius: 30px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

const CardBadge = styled.div`
  display: flex;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 1000px;
  background: #f6eddc;
  width: fit-content;
`;

const CardBadgeText = styled.div`
  color: #1d1d1d;
  font-family: Alcyone;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.28px;
`;

const PlanTypeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const PlanType = styled.div`
  color: #f6eddc;
  font-family: Alcyone-Bold;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
  text-transform: capitalize;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const PlanIconWrapper = styled.div`
  width: 37px;
  height: 34.154px;
  aspect-ratio: 13/12;
  border-radius: 9px;
  background: #f6eddc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlanPriceText = styled.div`
  color: #f6eddc;
  font-family: Alcyone-Bold;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const PlanFeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const PlanFeaturePoint = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  svg {
    flex-shrink: 0;
  }
`;

const PlanFeatureText = styled.div`
  color: #f6eddc;
  font-family: Alcyone;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.36px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const BottomText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Alcyone;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.24px;
  text-transform: capitalize;
  opacity: 0.7;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 620px;
`;

const Title = styled.div`
  color: #330c00;
  text-align: center;
  font-family: Alcyone-Bold;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  .highlight {
    color: #f47200;
  }
`;

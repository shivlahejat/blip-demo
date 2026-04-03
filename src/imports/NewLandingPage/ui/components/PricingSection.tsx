"use client";

import { PRICING_PLANS } from "@/imports/NewLandingPage/constants/constants";
import CheckIcon from "@/imports/NewLandingPage/ui/svgs/CheckIcon";
import ShopIcon from "@/imports/NewLandingPage/ui/svgs/ShopIcon";
import { Button } from "@/lib/Button";
import React from "react";
import styled from "styled-components";

const PricingSection = () => {
  return (
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
  );
};

export default PricingSection;

const Container = styled.div`
  display: flex;
  gap: 73px;
  padding: 0px 56px 0px 56px;
  max-width: 1512px;

  @media (max-width: 1024px) {
    gap: 30px;
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 0px 20px 0px 20px;
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
  align-items: flex-start;
  gap: 9px;

  svg {
    flex-shrink: 0;
    margin-top: 3px;
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
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.24px;
  text-transform: capitalize;
  opacity: 0.7;
`;

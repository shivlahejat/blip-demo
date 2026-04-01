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
          <Button variant="danger" size="lg" style={{ width: "100%" }}>
            {plan.cta}
          </Button>
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
  font-family: Alcyone;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
  text-transform: capitalize;
  opacity: 0.8;
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
  font-family: Alcyone;
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
`;

const PlanFeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const PlanFeaturePoint = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const PlanFeatureText = styled.div`
  color: #f6eddc;
  font-family: Alcyone;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.36px;
`;

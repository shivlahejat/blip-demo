import React from "react";
import styled from "styled-components";
import { Button } from "@/lib/Button";
import { Badge } from "@/lib/Badge";
import SwapSvg from "../svgs/SwapSvg";
import LaunchSvg from "../svgs/LaunchSvg";
import SettingSvg from "../svgs/SettingSvg";

export const GRID_ITEMS = [
  {
    icon: <SwapSvg />,
    title: "Easily Swap Ad Account",
  },
  {
    icon: <LaunchSvg />,
    title: "Fast Launch All Creatives",
  },
  {
    icon: <SettingSvg />,
    title: "Auto Populate Settings",
  },
  {
    icon: <SwapSvg />,
    title: "Supports All Ad Types",
  },
];

export default function AdManagementSection() {
  return (
    <Container>
      <InnerContainer>
        <HeadingWrapper>
          <HeadingText>
            <BadgeContainer>
              <Badge>Never Use Ads Manager Again</Badge>
            </BadgeContainer>
            The fastest way to manage multiple ad accounts.
          </HeadingText>
          <SubHeadingText>
            End context-switching whiplash. No more selecting the same settings
            over and over, copy-pasting text dozens of times, or sluggish UI.
          </SubHeadingText>
        </HeadingWrapper>
        <GridContainer>
          {GRID_ITEMS.map((item, index) => (
            <GridItem key={index}>
              {item.icon}
              <span>{item.title}</span>
            </GridItem>
          ))}
        </GridContainer>
      </InnerContainer>
      <CTAButton leftIcon="/images/rocket2.svg">Start Free trial</CTAButton>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 0px 56px;
  max-width: 900px;

  @media (max-width: 768px) {
    padding: 0px 20px;
    align-items: center;
    gap: 30px;
  }
`;

const CTAButton = styled(Button)`
  padding: 12px 53px 12px 48px;

  @media (max-width: 520px) {
    justify-content: flex-start;
    align-self: flex-start;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 4px;
    background-image: url("/images/VectorLines.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    opacity: 0.7;
  }

  &::before {
    left: -40px;
  }

  &::after {
    right: -40px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 54px;

  @media (max-width: 768px) {
    gap: 30px;
    align-items: center;
    width: 100%;
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
    align-items: center;
  }
`;

const HeadingText = styled.div`
  color: #330c00;
  text-align: center;
  font-family: Alcyone-Bold;
  font-size: 40px;
  font-style: normal;
  line-height: 1.2;
  max-width: 615px;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }

  @media (max-width: 520px) {
    text-align: left;
    align-self: flex-start;
  }
`;

const SubHeadingText = styled.div`
  color: #330c00;
  text-align: center;
  font-family: Alcyone;
  font-size: 24px;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.8px;

  max-width: 570px;
  opacity: 0.7;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
    line-height: 160%;
  }

  @media (max-width: 520px) {
    text-align: left;
    align-self: flex-start;
  }
`;

const GridContainer = styled.div`
  display: inline-grid;
  max-width: 580px;
  row-gap: 20px;
  column-gap: 68px;
  grid-template-rows: repeat(2, fit-content(100%));
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    width: 100%;
    justify-items: center;
    gap: 16px;
  }
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #330c00;
  opacity: 0.6;
  font-family: Alcyone-SemiBold;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const BadgeContainer = styled.div`
  margin-bottom: 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 520px) {
    justify-content: flex-start;
  }
`;

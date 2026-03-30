import React from "react";
import styled from "styled-components";
import SwapSvg from "../../../../../public/images/SwapSvg";
import LaunchSvg from "../../../../../public/images/LaunchSvg";
import SettingSvg from "../../../../../public/images/SettingSvg";
import { Button } from "@/lib/Button";

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
      <Button variant="danger" style={{ padding: "10px 58px" }}>
        Get A Demo
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 54px;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const HeadingText = styled.div`
  color: #330c00;
  text-align: center;
  font-family: NexaRound;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
  max-width: 615px;
`;

const SubHeadingText = styled.div`
  color: #330c00;
  text-align: center;
  font-family: NexaRound;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;
  max-width: 570px;
`;

const GridContainer = styled.div`
  display: inline-grid;
  width: 529.232px;
  row-gap: 20px;
  column-gap: 68px;
  grid-template-rows: repeat(2, fit-content(100%));
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(51, 12, 0, 0.5);
  font-family: NexaRound;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

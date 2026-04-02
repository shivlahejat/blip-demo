import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import BulletIcon from "@/imports/NewLandingPage/ui/svgs/BulletIcon";
import CampaignIcon from "@/imports/NewLandingPage/ui/svgs/CampaignIcon";
import { Button } from "@/lib/Button";
import { Badge } from "@/lib/Badge";
import BulbIcon from "@/imports/NewLandingPage/ui/svgs/BulbIcon";
import {
  CTAButtonData,
  DataAnalytics,
  StatsData,
  Tabs,
} from "@/imports/NewLandingPage/constants/constants";

export default function AnalyticsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container>
      <AnalyticsWrapper>
        <HeaderWrapper>
          <Badge icon={<BulbIcon />}>Data thats actually useful</Badge>
        </HeaderWrapper>
        <HeaderTitle>
          Analytics, Recommendations, Anomaly Detection, and More
        </HeaderTitle>
        <SubTitle>
          We took the media buying playbook that works on $3 million/month in ad
          spend and gave it to you. Review media buying recommendations and
          apply them in one click - or not. It's up to you!
        </SubTitle>
        <AnalyticsContentWrapper>
          <ContentWrapper>
            <TabGroup>
              {Tabs.map((tab, index) => (
                <TabCapsule
                  key={index}
                  $active={activeTab === index}
                  onClick={() => setActiveTab(index)}
                >
                  <TabText $active={activeTab === index}>{tab}</TabText>
                </TabCapsule>
              ))}
            </TabGroup>
            <StatsGroup>
              {StatsData.map((item, index) => {
                const Icon = item.svg;
                return (
                  <StatsContainer key={index}>
                    <StatsContentWrapper>
                      <DetailsWrapper>
                        <IconWrapper $bg={item.iconBg}>
                          <Icon />
                        </IconWrapper>
                        <StatsText>{item.text}</StatsText>
                      </DetailsWrapper>
                      <CTAWrapper
                        $borderColor={item.buttonBorder}
                        $bgColor={item.buttonBackground}
                      >
                        <BulletIcon color={item.bulletIconColor} />
                        <CTAText>{item.buttonText}</CTAText>
                      </CTAWrapper>
                    </StatsContentWrapper>
                  </StatsContainer>
                );
              })}
              <StatsContainer>
                <GraphTextWrapper>
                  <GraphTitle>Daily CPA by Campaign</GraphTitle>
                  <CampaignIcon />
                </GraphTextWrapper>
                <ChartArea>
                  <YAxisLine />
                  <BarsWrapper>
                    {[
                      [55, 88, 42, 70, 50],
                      [68, 44, 30, 44, 92, 56, 78, 68, 48, 85, 60],
                      [65, 90, 40, 72, 55, 80],
                    ].map((group, gi) => (
                      <BarGroup key={gi}>
                        {group.map((h, bi) => (
                          <Bar key={bi} $height={h} />
                        ))}
                      </BarGroup>
                    ))}
                  </BarsWrapper>
                  <XAxisLine />
                </ChartArea>
              </StatsContainer>
            </StatsGroup>
            <CTAfooterWrapper>
              {CTAButtonData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={index}
                    variant={item.variant}
                    style={{ padding: "15px" }}
                  >
                    <Icon />
                    {item.text}
                  </Button>
                );
              })}
            </CTAfooterWrapper>
          </ContentWrapper>
        </AnalyticsContentWrapper>
      </AnalyticsWrapper>
      <InfoWrapper>
        {DataAnalytics.map((item, index) => {
          const Icon = item.image;
          return (
            <React.Fragment key={index}>
              <InfoItem>
                <IconContainer>
                  <Icon />
                </IconContainer>
                <InfoContentWrapper>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </InfoContentWrapper>
              </InfoItem>
              {index < DataAnalytics.length - 1 && (
                <DividerContainer>
                  <Image
                    src="/images/VectorLines.png"
                    alt="divider"
                    width={10}
                    height={256}
                    style={{ objectFit: "contain" }}
                  />
                </DividerContainer>
              )}
            </React.Fragment>
          );
        })}
      </InfoWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 65px;
  padding: 0px 56px;
`;

const AnalyticsWrapper = styled.div`
  display: flex;
  /* width: 1017.764px; */
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const HeaderTitle = styled.div`
  color: #330c00;
  text-align: center;
  font-family: Alcyone-semibold;
  font-size: 40px;
  font-style: normal;
  letter-spacing: -0.8px;
  line-height: 1.2;
  max-width: 700px;
`;

const SubTitle = styled(HeaderTitle)`
  font-family: Alcyone;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.32px;
  max-width: 548px;
  color: #330c00;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 74px;
  align-self: stretch;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 256px;
  margin: auto;
  gap: 28px;
`;

const IconContainer = styled.div`
  background: #ffbe85;
  width: 46px;
  height: 42px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 24px;
    height: 24px;
  }
`;

const ItemTitle = styled.div`
  color: #330c00;
  font-family: Alcyone;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: -0.32px;
`;

const ItemDescription = styled.div`
  color: #7a6861;
  font-family: Alcyone;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

const DividerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 256px;
`;

const InfoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const AnalyticsContentWrapper = styled.div`
  border-radius: 53px;
  border: 2px solid #000;
  background: #f6eddc;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  max-width: 1057px;
  width: 100%;
  padding: 40px 0px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const TabGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 24px; */
  border-radius: 22px;
  background: #fff;
  /* max-width: 519px; */
  padding: 5px 7px;
`;

const TabCapsule = styled.div<{ $active: boolean }>`
  border-radius: 22px;
  background: ${(props) => (props.$active ? "#ffe6b6" : "transparent")};
  color: #330c00;
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px;
  cursor: pointer;
  transition: background 0.2s ease;
`;

const TabText = styled.span<{ $active: boolean }>`
  color: #330c00;
  font-family: Alcyone-semibold;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 20px 22px;
  border-radius: 28px;
  width: 100%;
  max-width: 463px;
`;

const StatsContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

const StatsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 463px;
`;

const IconWrapper = styled.div<{ $bg?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$bg ?? "#FFB7A2"};
  width: 27px;
  height: 27px;
  border-radius: 50%;
  overflow: hidden;
  padding: 4px;
`;

const StatsText = styled.div`
  color: #330c00;
  text-align: center;
  font-family: Alcyone-semibold;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.24px;
`;

const CTAWrapper = styled.div<{ $borderColor?: string; $bgColor?: string }>`
  display: inline-flex;
  padding: 5px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 9px;
  border: 2px solid ${(props) => props.$borderColor ?? "#DF0000"};
  background: ${(props) => props.$bgColor ?? "#F47200"};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
`;

const CTAText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Alcyone;
  font-size: 12px;
  line-height: normal;
  letter-spacing: -0.24px;
`;

const GraphTextWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;

const GraphTitle = styled(HeaderTitle)`
  color: #330c00;
  font-family: Alcyone-bold;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  max-width: unset;
`;

const ChartArea = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  overflow: hidden;
`;

const BarsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 15px;
  right: 28px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  height: 100%;
  padding: 0 2px 0 6px;
`;

const BarGroup = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 100%;
`;

const Bar = styled.div<{ $height: number }>`
  width: 10.678px;
  flex-shrink: 0;
  height: ${(props) => props.$height}%;
  background: #00dd04;
  border-radius: 3px;
`;

const XAxisLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.5px;
  border: 1px dashed rgba(0, 0, 0, 0.15);
`;

const YAxisLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 12px;
  width: 1.2px;
  border-left: 1.2px dashed rgba(0, 0, 0, 0.2);
  pointer-events: none;
`;

const CTAfooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

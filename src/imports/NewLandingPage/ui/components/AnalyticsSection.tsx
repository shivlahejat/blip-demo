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
import { AnimatedList } from "@/components/ui/animated-list";
import DetectIcon from "@/imports/NewLandingPage/ui/svgs/DetectIcon";
import { CopyIcon } from "lucide-react";
import AuditIcon from "@/imports/NewLandingPage/ui/svgs/AuditIcon";
import AcoountIcon from "@/imports/NewLandingPage/ui/svgs/AcoountIcon";
import SlackIcon from "@/imports/NewLandingPage/ui/svgs/SlackIcon";
import AnalyticsSvg from "@/imports/NewLandingPage/ui/svgs/AnalyticsSvg";

const RecommendationData = [
  {
    title: "Anomaly Detection",
    icon: <DetectIcon />,
  },
  {
    title: "1 Click Media Buying Recommendations",
    icon: <AnalyticsSvg color="#F47200" />,
  },
  {
    title: "Account Audits and Summaries",
    icon: <AcoountIcon />,
  },
  {
    title: "All available within Slack",
    icon: <SlackIcon color="#F47200" />,
  },
];

export default function AnalyticsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container>
      <AnalyticsWrapper>
        <Wrapper>
          <HeaderWrapper>
            <Badge icon={<BulbIcon />}>Data thats actually useful</Badge>
          </HeaderWrapper>
          <HeaderTitle>
            Analytics, Recommendations, Anomaly Detection, and More
          </HeaderTitle>
          <SubTitle>
            We took the media buying playbook that works on $3 million/month in
            ad spend and gave it to you. Review media buying recommendations and
            apply them in one click - or not. It's up to you!
          </SubTitle>
          <SubPointsContainer>
            {RecommendationData.map((item, index) => {
              const Icon = item.icon;
              return (
                <SubPointsWrapper key={index}>
                  <SubpointsIconWrapper>{item.icon}</SubpointsIconWrapper>
                  <SubPointText>{item.title}</SubPointText>
                </SubPointsWrapper>
              );
            })}
          </SubPointsContainer>
        </Wrapper>
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
              <AnimatedList delay={1000} className="w-full min-h-[100px]">
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
              </AnimatedList>
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
      <VideoWrapper />

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
              {index < DataAnalytics.length - 1 && <DividerContainer />}
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
  gap: 50px;
  padding: 0px 56px;

  @media (max-width: 768px) {
    padding: 0 20px;
    gap: 40px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 1100px) {
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 700px;
    width: 100%;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 520px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const AnalyticsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 125px;
  width: 100%;
  @media (max-width: 1200px) {
    gap: 50px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 25px;
  }

  @media (max-width: 520px) {
    align-items: flex-start;
    gap: 25px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media (max-width: 1100px) {
    justify-content: center;
  }

  @media (max-width: 520px) {
    justify-content: flex-start;
  }
`;

const HeaderTitle = styled.div`
  color: #330c00;
  font-family: Alcyone-semibold;
  font-size: 40px;
  font-style: normal;
  letter-spacing: -0.8px;
  line-height: 1.2;
  max-width: 453px;

  @media (max-width: 1100px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 520px) {
    text-align: left;
  }
`;

const SubTitle = styled(HeaderTitle)`
  font-family: Alcyone;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.32px;
  max-width: 423px;
  color: #330c00;

  @media (max-width: 1100px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 74px;
  align-self: stretch;

  @media (max-width: 1024px) {
    gap: 54px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  @media (max-width: 520px) {
    gap: 20px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 256px;
  margin: auto;
  gap: 28px;

  @media (max-width: 800px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 520px) {
    align-items: flex-start;
    text-align: left;
  }
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
  align-items: center;
  width: 10px;
  background-image: url("/images/VectorLines.png");
  background-repeat: repeat-y;
  background-position: center;
  background-size: contain;

  @media (max-width: 800px) {
    display: block;
    width: 100%;
    height: 10px;
    background-image: linear-gradient(
      to right,
      #ff3e03 40%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: center;
    background-size: 20px 2px;
    background-repeat: repeat-x;
    margin: 10px 0;
  }
`;

const InfoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 800px) {
    align-items: center;
  }

  @media (max-width: 520px) {
    align-items: flex-start;
  }
`;

const AnalyticsContentWrapper = styled.div`
  border-radius: 53px;
  border: 2px solid #000;
  background: #f6eddc;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  max-width: 620px;
  width: 100%;
  padding: 40px 10px;

  @media (max-width: 768px) {
    border-radius: 30px;
    padding: 20px 0;
  }
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

  @media (max-width: 768px) {
    max-width: 90%;
    flex-wrap: wrap;
    justify-content: center;
  }
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
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 90%;
  }
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
  align-items: center;
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

const GraphTitle = styled.div`
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

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0 20px;

    button {
      width: 100%;
    }
  }
`;

const SubPointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  @media (max-width: 1100px) {
    align-items: center;
  }

  @media (max-width: 520px) {
    align-items: flex-start;
  }
`;

const SubPointsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SubPointText = styled.div`
  color: #6c3403;
  font-family: Alcyone;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.28px;
`;

const SubpointsIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

const VideoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 46px;
  background: #f6eddc;
`;

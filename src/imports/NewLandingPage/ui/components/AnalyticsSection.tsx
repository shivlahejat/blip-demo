import React from "react";
import styled from "styled-components";
import AnalyticsSvg from "../../../../../public/images/AnalyticsSvg";
import GraphIconSvg from "../../../../../public/images/GraphIconSvg";
import GraphLowerSvg from "../../../../../public/images/GraphLowerSvg";
import Image from "next/image";

const DataAnalytics = [
  {
    title: "Budget Recommendations",
    description:
      "Through a combination of auto detection and user selection we help you make the right type of ad based on campaign and ad set selected.",
    image: <AnalyticsSvg />,
  },
  {
    title: "Poor Performers",
    description:
      "Through a combination of auto detection and user selection we help you make the right type of ad based on campaign and ad set selected.",
    image: <GraphIconSvg />,
  },
  {
    title: "Account Audits",
    description:
      "Through a combination of auto detection and user selection we help you make the right type of ad based on campaign and ad set selected.",
    image: <GraphLowerSvg />,
  },
];

export default function AnalyticsSection() {
  return (
    <Container>
      <AnalyticsWrapper>
        <HeaderWrapper>
          <SvgWrapper>
            <AnalyticsSvg />
          </SvgWrapper>
          <Title>Data thats actually useful</Title>
        </HeaderWrapper>
        <HeaderTitle>Built in Analytics</HeaderTitle>
        <SubTitle>
          Through a combination of auto detection and user selection we help you
          make the right type of ad based on campaign and ad set selected.
        </SubTitle>
        <Image
          src="/images/InfoAnalytic.png"
          alt="Analytics Image"
          width={1018}
          height={572}
          style={{
            width: "100%",
            maxWidth: "1018px",
            maxHeight: "572px",
          }}
          unoptimized
        />
      </AnalyticsWrapper>
      <InfoWrapper>
        {DataAnalytics.map((item, index) => (
          <React.Fragment key={index}>
            <InfoItem>
              <IconContainer>{item.image}</IconContainer>
              <InfoContentWrapper>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </InfoContentWrapper>
            </InfoItem>
            {index < DataAnalytics.length - 1 && (
              <DividerContainer>
                <Image
                  src="/images/VectorLine.png"
                  alt="divider"
                  width={10}
                  height={256}
                  style={{ objectFit: "contain" }}
                />
              </DividerContainer>
            )}
          </React.Fragment>
        ))}
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
  gap: 21px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const SvgWrapper = styled.div`
  background: #ff3e03;
  width: 37px;
  height: 34.154px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  color: #330c00;
  text-align: center;
  font-family: NexaRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
  white-space: nowrap;
`;

const HeaderTitle = styled.div`
  color: #330c00;
  text-align: center;
  font-family: NexaRound;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: -0.8px;
  line-height: 1.2;
`;

const SubTitle = styled(HeaderTitle)`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
  max-width: 426px;
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
  background: #ff3e03;
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
  font-family: NexaRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: -0.32px;
`;

const ItemDescription = styled.div`
  color: #7a6861;
  font-family: NexaRound;
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

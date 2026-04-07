"use client";

import {
  SUPPORT_LEFT_CARDS,
  SUPPORT_RIGHT_CARDS,
} from "@/imports/NewLandingPage/constants/constants";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const SupportCard = ({ title, description, image, $width }: any) => (
  <CardContainer $width={$width}>
    <CardImageWrapper>
      <Image
        src={image}
        alt={title}
        width={457}
        height={380}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
    </CardImageWrapper>
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </CardContainer>
);

const SupportSection = () => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Every Ad Type Supported</HeaderTitle>
        <HeaderDescription>
          Through a combination of auto detection and user selection we help you
          make the right type of ad based on campaign and ad set selected.
        </HeaderDescription>
        <HeaderSVG
          src="/images/StarIcon.png"
          alt="Header SVG"
          width={50}
          height={70}
        />
      </HeaderContainer>

      <CardsWrapper>
        <CardsColumn $maxWidth="497px">
          {SUPPORT_LEFT_CARDS.map((card) => (
            <SupportCard key={card.id} {...card} $width="100%" />
          ))}
        </CardsColumn>
        <CardsColumn $maxWidth="402px">
          {SUPPORT_RIGHT_CARDS.map((card) => (
            <SupportCard key={card.id} {...card} $width="100%" />
          ))}
        </CardsColumn>
      </CardsWrapper>
    </Container>
  );
};

export default SupportSection;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (max-width: 1040px) {
    padding: 0px 60px;
  }

  @media (max-width: 768px) {
    padding: 0px 20px;
    gap: 30px;
  }

  @media (max-width: 520px) {
    align-items: flex-start;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
  position: relative;

  @media (max-width: 520px) {
    align-items: flex-start;
  }
`;

const HeaderTitle = styled.div`
  color: #330c00;
  text-align: center;
  font-family: Alcyone-Bold;
  font-size: 40px;
  font-style: normal;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 32px;
    padding: 0 20px;
  }

  @media (max-width: 520px) {
    text-align: left;
    padding: 0;
  }
`;

const HeaderDescription = styled.div`
  color: #330c00;
  text-align: center;
  font-family: Alcyone;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
  max-width: 567.677px;

  @media (max-width: 520px) {
    text-align: left;
  }
`;

const HeaderSVG = styled(Image)`
  object-fit: cover;
  position: absolute;
  left: -10px;
  top: -10px;

  @media (max-width: 768px) {
    width: 50px;
    height: 70px;
    left: unset;
    right: 20px;
    top: 5px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CardsColumn = styled.div<{ $maxWidth: string }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: ${(props) => props.$maxWidth};

  @media (max-width: 900px) {
    max-width: 497px;
  }
`;

const CardContainer = styled.div<{ $width: string }>`
  background: #fff1dd;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 32px;
  width: ${(props) => props.$width};
  justify-content: center;

  @media (max-width: 520px) {
    padding: 15px;
    gap: 24px;
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  /* aspect-ratio: 457 / 380; */
  border-radius: 23px;
  border: 3px solid rgba(57, 103, 255, 0.1);
  background: #fff;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  max-width: 408px;
`;

const CardTitle = styled.div`
  color: #690314;
  font-family: Alcyone-bold;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.32px;
  text-transform: capitalize;
`;

const CardDescription = styled.div`
  color: #690314;
  opacity: 0.7;
  font-family: Alcyone-Medium;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.28px;
`;

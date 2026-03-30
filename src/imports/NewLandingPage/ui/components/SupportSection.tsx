"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";

const LEFT_CARDS = [1, 4, 6];
const RIGHT_CARDS = [2, 3, 5, 7];

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
          src="/images/star_icon.png"
          alt="Header SVG"
          width={50}
          height={70}
        />
      </HeaderContainer>

      <BentoGrid>
        <BentoColumn>
          {LEFT_CARDS.map((n) => (
            <BentoCard
              key={n}
              src={`/images/bento_card_${n}.png`}
              alt={`Bento Card ${n}`}
              width={0}
              height={0}
              unoptimized
            />
          ))}
        </BentoColumn>

        <BentoColumn>
          {RIGHT_CARDS.map((n) => (
            <BentoCard
              key={n}
              src={`/images/bento_card_${n}.png`}
              alt={`Bento Card ${n}`}
              width={0}
              height={0}
              unoptimized
            />
          ))}
        </BentoColumn>
      </BentoGrid>
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
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
  position: relative;
`;

const HeaderTitle = styled.div`
  color: #330c00;
  text-align: center;
  font-family: NexaRound;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const HeaderDescription = styled.div`
  color: #330c00;
  text-align: center;
  font-family: NexaRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
  max-width: 567.677px;
`;

const HeaderSVG = styled(Image)`
  object-fit: cover;
  position: absolute;
  left: -10px;
  top: -10px;

  @media (max-width: 768px) {
    width: 50px;
    height: 70px;
    left: 10px;
    top: 10px;
  }
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 20px;
  width: 100%;
  max-width: 923.781px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`;

const BentoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BentoCard = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`;

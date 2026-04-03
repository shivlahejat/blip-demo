"use client";

import { TESTIMONIALS } from "@/imports/NewLandingPage/constants/constants";
import RocketIcon from "@/imports/NewLandingPage/ui/svgs/RocketIcon";
import { Badge } from "@/lib/Badge";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { useIsMobile } from "@/lib/useIsMobile";

const RatingCardsSection = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container>
      <HeaderContainer>
        <Badge icon={<RocketIcon />}>Supporting 1000+ Ad Launches Daily</Badge>
        <Description>
          People are calling it the best invention since sliced bread
        </Description>
      </HeaderContainer>
      <MarqueeContainer>
        <Marquee speed={130} gradient={!isMobile}>
          {TESTIMONIALS.map((testimonial, index) => (
            <RatingCard
              key={index}
              $isOdd={index % 2 !== 0}
              style={{ marginRight: "24px" }}
            >
              <RatingText $isOdd={index % 2 !== 0}>
                {testimonial.quote}
              </RatingText>
              <UserContainer>
                <Avatar
                  src={testimonial.avatar}
                  alt="avatar"
                  height={50}
                  width={50}
                />
                <UserInfo>
                  <UserName $isOdd={index % 2 !== 0}>
                    {testimonial.name}
                  </UserName>
                  <UserRole $isOdd={index % 2 !== 0}>
                    {testimonial.role}
                  </UserRole>
                </UserInfo>
              </UserContainer>
            </RatingCard>
          ))}
        </Marquee>
      </MarqueeContainer>
    </Container>
  );
};

export default RatingCardsSection;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 47px;
  max-width: 100dvw;
  overflow: hidden;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0 20px;

  @media (max-width: 768px) {
    & > div:first-child {
      width: 100%;
      justify-content: center;
    }
  }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  position: relative;
  max-width: 1512px;
  opacity: 1;

  /* mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 8%,
    rgba(0, 0, 0, 0.8) 16%,
    rgba(0, 0, 0, 1) 22%,
    rgba(0, 0, 0, 1) 78%,
    rgba(0, 0, 0, 0.8) 84%,
    rgba(0, 0, 0, 0.3) 92%,
    rgba(0, 0, 0, 0) 100%
  ); */

  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }
`;

const Title = styled.div`
  color: #ff3e03;
  text-align: center;
  font-family: Alcyone;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.48px;
`;

const Description = styled.div`
  color: #1d1d1d;
  text-align: center;
  font-family: Alcyone-Bold;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.96px;
  text-transform: capitalize;

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const RatingCard = styled.div<{ $isOdd: boolean }>`
  display: flex;
  padding: 29px 37px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 29px;
  background: ${(props) => (props.$isOdd ? "#f6eddc" : "#1d1d1d")};
  min-height: 370px;
  width: 370px;
  margin-bottom: 20px;
  border: 2px solid #000;
  align-items: stretch;

  @media (max-width: 1024px) {
    width: 300px;
    min-height: 300px;
  }

  @media (max-width: 768px) {
    width: 320px;
    min-height: 370px;
    height: 100%;
  }
`;

const UserName = styled.div<{ $isOdd: boolean }>`
  color: ${(props) => (props.$isOdd ? "#1d1d1d" : "#f6eddc")};
  font-family: Alcyone;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const RatingText = styled.div<{ $isOdd: boolean }>`
  color: ${(props) => (props.$isOdd ? "#1d1d1d" : "#fffbf2")};
  font-family: Alcyone-Medium;
  font-size: 24px;
  font-style: normal;
  line-height: 140%;
  letter-spacing: -0.72px;
  text-transform: capitalize;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 21px;
`;

const Avatar = styled(Image)`
  width: 50.18px;
  height: 50.18px;
  aspect-ratio: 1/1;
  border-radius: 200px;
  object-fit: cover;
`;

const UserInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

const UserRole = styled.div<{ $isOdd: boolean }>`
  color: ${(props) => (props.$isOdd ? "#1d1d1d" : "#f6eddc")};
  font-family: Alcyone;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  opacity: 0.6;
`;

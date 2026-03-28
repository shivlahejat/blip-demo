"use client";

import { TESTIMONIALS } from "@/imports/NewLandingPage/constants/constants";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

const RatingCardsSection = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title>Supporting 500+ Ad Launches Daily!</Title>
        <Description>
          People are calling it the best invention since sliced bread
        </Description>
      </HeaderContainer>
      <Marquee
        style={{ display: "flex", flexDirection: "row", gap: "24px" }}
        pauseOnHover
      >
        <CardContainer>
          {TESTIMONIALS.map((testimonial, index) => (
            <RatingCard key={index}>
              <RatingText>{testimonial.quote}</RatingText>
              <UserContainer>
                <Avatar
                  src={testimonial.avatar}
                  alt="avatar"
                  height={50}
                  width={50}
                />
                <UserInfo>
                  <UserName>{testimonial.name}</UserName>
                  <UserRole>{testimonial.role}</UserRole>
                </UserInfo>
              </UserContainer>
            </RatingCard>
          ))}
        </CardContainer>
      </Marquee>
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
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.div`
  color: #ff3e03;
  text-align: center;
  font-family: NexaRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.48px;
`;

const Description = styled.div`
  color: #1d1d1d;
  text-align: center;
  font-family: NexaRound;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.96px;
  text-transform: capitalize;
`;

const RatingCard = styled.div`
  display: flex;
  padding: 29px 37px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 29px;
  background: #1d1d1d;
  min-height: 370px;
  max-width: 370px;
`;

const UserName = styled.div`
  color: #f6eddc;
  font-family: NexaRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const RatingText = styled.div`
  color: #fffbf2;
  font-family: NexaRound;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
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
`;

const UserInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

const UserRole = styled.div`
  color: #f6eddc;
  font-family: NexaRound;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;

  ${RatingCard}:nth-child(odd) {
    background-color: #f6eddc;

    ${RatingText}:nth-child(odd) {
      color: #1d1d1d;
    }

    ${UserName}:nth-child(odd) {
      color: #1d1d1d;
    }
    ${UserRole} {
      color: #1d1d1d;
    }
  }
`;

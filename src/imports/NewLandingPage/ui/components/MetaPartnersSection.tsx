"use client";

import { Button } from "@/lib/Button";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const MetaPartnersSection = () => {
  return (
    <Container>
      <ContentContainer>
        <HeadingText>Built by the best</HeadingText>
        <SubHeadingText>
          Blip was built by Meta Agency Partners who have spent over $100M on
          Ads
        </SubHeadingText>
        <DescriptionText>
          The team has more than a decade of experience in performance
          marketing. The experience has been tailored to the absolute essentials
          which will improve your quality of life.
        </DescriptionText>
        <Button variant="danger" size="lg" style={{ width: "fit-content" }}>
          Get A Demo
        </Button>
      </ContentContainer>
      <ReviewContainer>
        <ReviewImage
          src="/images/review_image.png"
          alt="review_image"
          height={316}
          width={416}
          unoptimized
        />
        <ReviewCard>
          <ReviewText>
            I've been running Facebook ads for more than eight years now, and
            I've essentially cut my time spent as manager in half and increased
            my productivity by two to three times just by using Blip. Incredible
            tool and a must-have for all media buyers.
          </ReviewText>
          <AuthorText>
            Mark
            <br />
            Growth Consultant
          </AuthorText>
        </ReviewCard>
      </ReviewContainer>
    </Container>
  );
};

export default MetaPartnersSection;

const Container = styled.div`
  display: flex;
  max-width: 1033.42px;
  flex-direction: column;
  align-items: flex-start;
  gap: 54px;
`;

const ContentContainer = styled.div`
  display: flex;
  max-width: 892.855px;
  flex-direction: column;
  gap: 18px;
`;

const HeadingText = styled.div`
  color: #ff3e03;
  font-family: NexaRound;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.96px;
`;

const SubHeadingText = styled.div`
  color: #330c00;
  font-family: NexaRound;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.44px;
`;

const DescriptionText = styled.div`
  color: #330c00;
  font-family: NexaRound;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: -0.72px;
  opacity: 0.5;
`;

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;
  width: 100%;
`;

const ReviewImage = styled(Image)`
  width: 50%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const ReviewCard = styled.div`
  display: flex;
  padding: 30px 35px;
  flex-direction: column;
  gap: 19px;
  border-radius: 30px;
  background: #f6eddc;
  width: 50%;
`;

const ReviewText = styled.div`
  color: #330c00;
  font-family: NexaRound;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.48px;
  text-transform: capitalize;
`;

const AuthorText = styled.div`
  color: #330c00;
  font-family: NexaRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.32px;
  opacity: 0.6;
`;

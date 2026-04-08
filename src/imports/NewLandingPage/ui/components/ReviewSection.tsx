import HeartIcon from "@/imports/NewLandingPage/ui/svgs/HeartIcon";
import { Badge } from "@/lib/Badge";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function ReviewSection() {
  return (
    <Container>
      <ImageWrapper>
        <RelativeWrapper>
          <StyledNameTag
            src="/images/NameTag.webp"
            alt="name tag"
            width={146}
            height={63}
          />
          <StyledImage
            src="/images/AboutUSImage.webp"
            alt="hero"
            width={400}
            height={552}
            priority
          />
        </RelativeWrapper>
      </ImageWrapper>
      <ContentContainer>
        <HeaderWrapper>
          <Badge icon={<HeartIcon />}>Meet Jon. Jon loves Blip!</Badge>
          <Description>
            Why is he getting so excited over software? Because we're built
            different - literally. Blip was made by media buyers who spend more
            than $3 million a month. Our UI is designed to be seamless and
            intuitive. Our AI-generated recommendations are grounded in best
            practices. Blip just... works.
          </Description>
        </HeaderWrapper>
        <FooterWrapper>
          <FooterTitle>Henry Boldsizar</FooterTitle>
          <FooterDescription>App founder</FooterDescription>
        </FooterWrapper>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 36px;
  width: 100%;
  padding: 0px 56px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0 20px;
    align-items: center;
    gap: 30px;
  }
  @media (max-width: 520px) {
    align-items: flex-start;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const RelativeWrapper = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

const StyledImage = styled(Image)`
  width: 400px;
  max-height: 552px;
  height: auto;
  border-radius: 20px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    aspect-ratio: 400 / 552;
  }
`;

const StyledNameTag = styled(Image)`
  position: absolute;
  left: -22.578px;
  top: -13px;
  max-width: 148px;
  width: 100%;
  height: auto;
  z-index: 10;

  @media (max-width: 768px) {
    width: 110px;
    left: -10px;
    top: -10px;
  }
`;

const StyledReviewTag = styled(Image)`
  position: absolute;
  bottom: -20px;
  right: -17px;
  width: 90px;
  height: auto;
  z-index: 10;

  @media (max-width: 768px) {
    width: 60px;
    right: 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  max-width: 512px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    gap: 30px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
  @media (max-width: 520px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const Title = styled.div`
  color: #ff3e03;
  font-family: Alcyone;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Description = styled.div`
  color: #330c00;
  font-family: Alcyone-semibold;
  font-size: 24px;
  font-style: normal;
  letter-spacing: -0.28px;
  text-transform: capitalize;

  @media (max-width: 1040px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    max-width: 333px;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
  @media (max-width: 520px) {
    align-items: flex-start;
  }
`;

const FooterTitle = styled(Description)`
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: unset;
  font-family: Alcyone-semibold;
  text-transform: none;
`;

const FooterDescription = styled(Description)`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: unset;
  font-family: Alcyone-semibold;
  opacity: 0.6;
  text-transform: none;
`;

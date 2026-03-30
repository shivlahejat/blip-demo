import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function ReviewSection() {
  return (
    <Container>
      <ImageWrapper>
        <StyledNameTag
          src="/images/NameTag.png"
          alt="name tag"
          width={146}
          height={63}
        />
        <Image
          src="/images/ReviewImage.png"
          alt="hero"
          width={400}
          height={562}
          style={{
            maxWidth: "400px",
            maxHeight: "562px",
          }}
          priority
        />
        <StyledReviewTag
          src="/images/ReviewTag.png"
          alt="review tag"
          width={63}
          height={75}
        />
      </ImageWrapper>
      <ContentContainer>
        <HeaderWrapper>
          <Title>Meet Jon. Jon loves Blip!</Title>
          <Description>
            I love Blip! Before I would spend way too much time launching ads in
            platform which was always an incredibly frustrating experience. Ads
            manager was slow to load, had a million pop-ups, and I had to
            constantly turn different settings off. Blip makes it super easy and
            intuitive to upload ads - including partnership and flex. I regained
            a ton of wasted time, and it actually makes me look forward to
            launching new ads.
          </Description>
        </HeaderWrapper>{" "}
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
  align-items: flex-start;
  gap: 36px;
  width: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
`;

const StyledNameTag = styled(Image)`
  position: absolute;
  left: -22.578px;
  top: -13px;
  width: 148.057px;
  height: 111px;
  z-index: 10;
`;

const StyledReviewTag = styled(Image)`
  position: absolute;
  bottom: -20px;
  right: -17px;
  width: 90px;
  height: auto;
  z-index: 10;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 512.423px;
  flex-direction: column;
  align-items: flex-start;
  gap: 59px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const Title = styled.div`
  color: #ff3e03;
  font-family: NexaRound;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const Description = styled.div`
  color: #330c00;
  font-family: NexaRound;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: -0.28px;
  text-transform: capitalize;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

const FooterTitle = styled(Description)`
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: unset;
`;

const FooterDescription = styled(Description)`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: unset;
`;

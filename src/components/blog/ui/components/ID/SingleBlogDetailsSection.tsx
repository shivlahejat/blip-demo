import { BlogPost } from "@/types/blog";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const SingleBlogDetailsSection = ({ data }: { data: BlogPost }) => {
  if (!data) return null;

  return (
    <HeroContainer>
      <ContentWrapper>
        <LeftSection>
          <Title>{data.title}</Title>
          <Description>{data.shortDescription}</Description>
          <AuthorSection>
            {data?.author?.image?.url && (
              <AvatarWrapper>
                <Image
                  src={
                    data.author?.image?.url || "/images/author-placeholder.png"
                  }
                  alt={data.author?.name || "Author"}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </AvatarWrapper>
            )}
            {data?.author?.name && (
              <AuthorDetails>
                <AuthorName>{data.author?.name}</AuthorName>
                <AuthorRole>Founder, Media Buyer</AuthorRole>
              </AuthorDetails>
            )}
          </AuthorSection>
        </LeftSection>
        <RightSection>
          <CoverImageWrapper>
            <Image
              src={data.coverImage?.url || "/images/blog-placeholder.png"}
              alt={data.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </CoverImageWrapper>
        </RightSection>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default SingleBlogDetailsSection;

const HeroContainer = styled.section`
  width: 100%;
  background-color: #f5e8d7;
  padding: 160px 0 80px 0;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 120px 20px 60px 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  gap: 60px;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
    text-align: left;
    align-items: flex-start;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const RightSection = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-family: "Alcyone-Bold", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  color: #1d1d1d;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-family: "Alcyone", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #4a4a4a;
  margin: 0;
  max-width: 540px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-family: "Alcyone-Bold", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #1d1d1d;
`;

const AuthorRole = styled.span`
  font-family: "Alcyone", sans-serif;
  font-size: 14px;
  color: #666;
`;

const CoverImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  max-width: 540px;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

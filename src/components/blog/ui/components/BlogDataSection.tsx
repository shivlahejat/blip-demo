"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BlogPost } from "@/types/blog";
import styled from "styled-components";

export const BlogDataSection = ({ data }: { data: BlogPost[] }) => {
  const router = useRouter();
  const landingRef = useRef<HTMLDivElement>(null);

  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const element = landingRef?.current;

    const scrollHandler = () => {
      if (element) {
        setIsScrolled(element.scrollTop > 10);
      }
    };

    element?.addEventListener("scroll", scrollHandler);
    return () => {
      element?.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  if (!data || data.length === 0) return null;

  const sortedPosts = [...data].sort(
    (a, b) =>
      new Date(b.publishedAt || "").getTime() -
      new Date(a.publishedAt || "").getTime(),
  );

  const latestPost = sortedPosts[0];

  const otherPosts = sortedPosts.slice(1);
  return (
    <Container>
      <ImageContainer>
        <ContentContainer>
          <MetaTagWrapper>
            <MetaTagText>BLOG</MetaTagText>
          </MetaTagWrapper>

          <HeadingText>The room of requirement</HeadingText>
          <SubtitleText>
            Explore expert tips, strategies, and data-driven insights to improve
            customer retention and engagement.
          </SubtitleText>
        </ContentContainer>

        <DoodleWrapper>
          <Image
            src="/images/creative-doodle.webp"
            alt="doodle"
            width={1056}
            height={388}
            style={{ width: "100%", maxWidth: "1330px", height: "auto" }}
          />
        </DoodleWrapper>
        {latestPost && (
          <LatestPostCard href={`/blog/${latestPost.slug}`}>
            <PostImageWrapper>
              <Image
                src={
                  latestPost.coverImage?.url || "/images/blog-placeholder.png"
                }
                alt={latestPost.title}
                fill
                style={{ objectFit: "fill" }}
              />
            </PostImageWrapper>
            <PostContentWrapper>
              <ContentWrapper>
                <Badge>Latest Post</Badge>
                <PostTitle>{latestPost.title}</PostTitle>
                <PostDescription>{latestPost.shortDescription}</PostDescription>
              </ContentWrapper>
              <AuthorWrapper>
                <AuthorAvatar>
                  <Image
                    src={
                      latestPost.author?.image?.url ||
                      "/images/author-placeholder.png"
                    }
                    alt={latestPost.author?.name || "Author"}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>{latestPost.author?.name}</AuthorName>
                  <AuthorRole>Founder, Media Buyer</AuthorRole>
                </AuthorInfo>
              </AuthorWrapper>
            </PostContentWrapper>
          </LatestPostCard>
        )}
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #f5e8d7;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* min-height: 100dvh; */

  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  /* min-height: 100dvh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  @media (max-width: 800px) {
    gap: 20px;
  }
`;

const DoodleWrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;

  @media (max-width: 800px) {
    display: none;
  }
`;

const LatestPostCard = styled(Link)`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -20%);
  background: white;
  border-radius: 40px;
  display: flex;
  padding: 18px;
  gap: 40px;
  width: 90%;
  max-width: 1030px;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    padding: 15px;
    gap: 20px;
    border-radius: 20px;
    max-width: 900px;
    align-items: center;
  }

  @media (max-width: 800px) {
    position: relative;
    align-items: unset;
    transform: none;
    left: 0;
    top: 0;
    flex-direction: column;
    width: 95%;
    padding: 31px 20px;
    background: white;
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.05);
    gap: 20px;
    margin: 20px auto 40px;
    border-radius: 40px;
  }
`;

const PostImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 440px;
  height: 388px;
  border-radius: 30px;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    max-width: 350px;
    height: auto;
    aspect-ratio: 1 / 1;
  }

  @media (max-width: 800px) {
    max-width: 100%;
    height: 350px;
    order: 3;
  }
`;

const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  gap: 15px;
  color: #1d1d1d;

  @media (max-width: 800px) {
    display: contents;
  }
`;

const Badge = styled.div`
  background: #1d2432;
  color: white;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
  font-family: Alcyone;

  @media (max-width: 800px) {
    display: block;
  }
`;

const PostTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  font-family: Alcyone-bold;

  @media (max-width: 800px) {
    font-size: 24px;
    order: 1;
  }
`;

const PostDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #4a4a4a;
  margin: 0;
  font-family: Alcyone;

  @media (max-width: 800px) {
    order: 2;
  }
`;

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;

  @media (max-width: 800px) {
    order: 4;
    margin-top: 0;
  }
`;

const AuthorAvatar = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.div`
  font-size: 16px;
  font-weight: 700;
  font-family: Alcyone-bold;
`;

const AuthorRole = styled.div`
  font-size: 14px;
  color: #666;
  font-family: Alcyone;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: #1d1d1d;

  @media (max-width: 800px) {
    display: contents;
  }
`;

const ContentContainer = styled.div`
  margin-top: 172px;
  display: flex;
  gap: 13px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  width: 100%;

  @media (max-width: 800px) {
    margin-top: 95px;
    gap: 20px;
    padding: 0 20px;
  }

  @media (max-width: 520px) {
    align-items: unset;
    justify-content: flex-start;
  }
`;

const HeadingText = styled.div`
  color: #1d1d1d;
  max-width: 807px;
  text-align: center;
  font-family: Alcyone-bold;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 28px;
    max-width: 100%;
  }
  @media (max-width: 520px) {
    text-align: left;
  }
`;

const MetaTagWrapper = styled.div`
  display: flex;
  padding: 10px 41px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 27px;
  background: #fff;
  max-width: 250px;
`;

const MetaTagText = styled.div`
  color: #6c3403;
  font-family: Alcyone;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SubtitleText = styled.div`
  color: #1d2432;
  text-align: center;
  font-family: Alcyone;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
  text-transform: capitalize;
  @media (max-width: 520px) {
    text-align: left;
  }
`;

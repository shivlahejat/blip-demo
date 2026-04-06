import { BlogPost } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const MorePosts = ({
  data,
  currentSlug,
}: {
  data: BlogPost[];
  currentSlug: string;
}) => {
  const filteredPosts = data
    ? data.filter((post) => post.slug !== currentSlug).slice(0, 3)
    : [];

  if (filteredPosts.length === 0) return null;

  return (
    <SectionWrapper>
      <Title>More Posts</Title>
      <GridContainer>
        {filteredPosts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            style={{ textDecoration: "none" }}
          >
            <BlogPostCard>
              <PostImageWrapper>
                {post.coverImage?.url && (
                  <Image
                    src={post.coverImage.url}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    blurDataURL={post.coverImage.metadata?.lqip}
                  />
                )}
              </PostImageWrapper>
              <PostContent>
                <PostTitle>{post.title}</PostTitle>
                <PostDescription>{post.shortDescription}</PostDescription>
              </PostContent>
            </BlogPostCard>
          </Link>
        ))}
      </GridContainer>
    </SectionWrapper>
  );
};

export default MorePosts;

const SectionWrapper = styled.section`
  width: 100%;
  padding: 0px 40px 120px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 800px) {
    padding: 60px 20px 80px;
  }
`;

const Title = styled.h2`
  font-family: "Alcyone-Bold", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #1d1d1d;
  margin-bottom: 40px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const BlogPostCard = styled.div`
  border-radius: 40px;
  background: #f5e8d7;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PostImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1.2 / 1;
  border-radius: 24px;
  overflow: hidden;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
`;

const PostTitle = styled.h3`
  color: #1d1d1d;
  font-family: "Alcyone-Bold", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const PostDescription = styled.p`
  color: #4a4a4a;
  font-family: "Alcyone", sans-serif;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

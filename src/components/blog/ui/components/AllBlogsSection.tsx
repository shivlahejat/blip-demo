"use client";
import { BlogPost } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const AllBlogsSection = ({ data }: { data: BlogPost[] }) => {
  const otherPosts = data ? data.slice(1) : [];

  return (
    <SectionWrapper>
      <GridContainer>
        {otherPosts.map((post) => (
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

const SectionWrapper = styled.section`
  width: 100%;
  padding: 0 40px 100px;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 800px) {
    padding: 0 20px 60px;
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
  border-radius: 42px;
  border: 1px solid #ffe3ac;
  background: #f5e8d7;
  backdrop-filter: blur(10px);
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
  aspect-ratio: 1 / 1;
  border-radius: 30px;
  overflow: hidden;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-grow: 1;
`;

const PostTitle = styled.h3`
  color: #330c00;
  font-family: Alcyone-bold;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.48px;
  text-transform: capitalize;
`;

const PostDescription = styled.p`
  color: #330c00;
  font-family: Alcyone;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  opacity: 0.8;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 10px;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AuthorAvatar = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
`;

const AuthorName = styled.span`
  color: #330c00;
  font-family: Alcyone;
  font-size: 14px;
  font-weight: 600;
`;

const PublishDate = styled.span`
  color: #330c00;
  font-family: Alcyone;
  font-size: 12px;
  opacity: 0.6;
`;

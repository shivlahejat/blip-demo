"use client";
import SingleBlogDetailsSection from "@/components/blog/ui/components/ID/SingleBlogDetailsSection";
import BlogContent from "@/components/blog/ui/components/ID/BlogContent";
import Navbar from "@/imports/NewLandingPage/ui/components/Navbar";
import { BlogPost } from "@/types/blog";
import React from "react";
import styled from "styled-components";
import MorePosts from "@/components/blog/ui/components/ID/MorePosts";
import FooterSectionV2 from "@/imports/NewLandingPage/ui/components/FooterSectionV2";

const BlogByIDPage = ({
  data,
  morePosts,
}: {
  data: BlogPost;
  morePosts: BlogPost[];
}) => {
  return (
    <Container>
      <Navbar />
      <SingleBlogDetailsSection data={data} />
      <BlogContent data={data} />
      <MorePosts data={morePosts} currentSlug={data.slug} />
      <FooterSectionV2 />
    </Container>
  );
};

export default BlogByIDPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

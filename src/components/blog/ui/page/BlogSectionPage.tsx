"use client";
import { AllBlogsSection } from "@/components/blog/ui/components/AllBlogsSection";
import { BlogDataSection } from "@/components/blog/ui/components/BlogDataSection";
import FooterSectionV2 from "@/imports/NewLandingPage/ui/components/FooterSectionV2";
import Navbar from "@/imports/NewLandingPage/ui/components/Navbar";
import { BlogPost } from "@/types/blog";
import React from "react";
import styled from "styled-components";

function BlogSectionPage({ data }: { data: BlogPost[] }) {
  return (
    <Container>
      <Navbar />
      <BlogDataSection data={data} />
      <AllBlogsSection data={data} />
      <FooterSectionV2 />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export default BlogSectionPage;

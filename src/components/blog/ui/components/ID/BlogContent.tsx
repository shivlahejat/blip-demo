import { BlogPost } from "@/types/blog";
import { PortableText } from "@portabletext/react";
import React from "react";
import styled from "styled-components";

const BlogContent = ({ data }: { data: BlogPost }) => {
  if (!data?.content) return null;

  const components = {
    block: {
      h1: ({ children }: any) => <Heading1>{children}</Heading1>,
      h2: ({ children }: any) => <Heading2>{children}</Heading2>,
      h3: ({ children }: any) => <Heading3>{children}</Heading3>,
      normal: ({ children }: any) => <Paragraph>{children}</Paragraph>,
    },
    list: {
      bullet: ({ children }: any) => <BulletList>{children}</BulletList>,
    },
    listItem: {
      bullet: ({ children }: any) => <ListItem>{children}</ListItem>,
    },
    marks: {
      link: ({ value, children }: any) => {
        const target = (value?.href || "").startsWith("http")
          ? "_blank"
          : undefined;
        return (
          <StyledLink
            href={value?.href}
            target={target}
            rel={target === "_blank" ? "noindex nofollow" : undefined}
          >
            {children}
          </StyledLink>
        );
      },
      strong: ({ children }: any) => <BoldText>{children}</BoldText>,
    },
  };

  return (
    <Section>
      <ContentWrapper>
        <RichTextWrapper>
          <PortableText value={data.content} components={components} />
        </RichTextWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default BlogContent;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 20px;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  position: relative;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const RichTextWrapper = styled.div`
  flex: 1;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    margin: 0;
  }
`;

const Heading1 = styled.h1`
  font-family: "Alcyone-Bold", sans-serif;
  font-size: 40px;
  color: #1d1d1d;
  margin: 40px 0 20px 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Heading2 = styled.h2`
  font-family: "Alcyone-Bold", sans-serif;
  font-size: 32px;
  color: #1d1d1d;
  margin: 32px 0 16px 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Heading3 = styled.h3`
  font-family: "Alcyone-Bold", sans-serif;
  font-size: 24px;
  color: #1d1d1d;
  margin: 24px 0 12px 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  font-family: "Alcyone", sans-serif;
  font-size: 18px;
  line-height: 1.8;
  color: #4a4a4a;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const BulletList = styled.ul`
  margin: 0 0 24px 20px;
  padding: 0;
`;

const ListItem = styled.li`
  font-family: "Alcyone", sans-serif;
  font-size: 18px;
  line-height: 1.8;
  color: #4a4a4a;
  margin-bottom: 8px;
  list-style-type: disc;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StyledLink = styled.a`
  color: #2563eb;
  text-decoration: underline;
  font-family: inherit;

  &:hover {
    color: #1d4ed8;
  }
`;

const BoldText = styled.strong`
  font-family: "Alcyone-Bold", sans-serif;
  font-weight: 700;
  color: inherit;
`;

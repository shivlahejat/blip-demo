"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/customcss/Blog.module.css";
import HeaderStart from "@/components/start/ui/components/HeaderStart";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "./PortableTextComponent";

function formatBlogDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

import { BlogPost } from "@/types/blog";
import FooterSection from "@/components/FooterSection";
import moment from "moment";
import HeaderSection from "@/components/HeaderSection";

const BlogSingle = ({ data }: { data: BlogPost }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const landingRef = useRef<HTMLDivElement>(null);

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

  if (!data) return null;

  return (
    <div className={styles.landing} ref={landingRef}>
      <div className={styles.container}>
        <HeaderSection isScrolled={isScrolled} />
        <div className={styles.blogSingleContainer}>
          <div className={styles.blogSectionPostImageContainer}>
            {data.coverImage?.url && (
              <Image
                className={styles.blogPostImage}
                alt={data?.title}
                width={555}
                height={555}
                src={data.coverImage.url}
              />
            )}
          </div>

          <div className={styles.blogSectionRightContainer}>
            <span className={styles.blogLink}>
              <span className={styles.blogTitle}>{data?.title}</span>
            </span>

            {data.shortDescription && (
              <p className={styles.blogLatestParagraph}>
                {data.shortDescription}
              </p>
            )}

            {data.author && (
              <div className={styles.blogLatestProfileContainer}>
                {data.author.image?.url && (
                  <Image
                    className={styles.blogLatestProfileImage}
                    alt={data?.author?.name}
                    width={32}
                    height={32}
                    src={data?.author?.image?.url}
                  />
                )}
                <span className={styles.blogLatestProfileName}>
                  {data?.author?.name}
                </span>
              </div>
            )}

            {data.publishedAt && (
              <p className={styles.blogLatestParagraph}>
                {moment(data.publishedAt).fromNow()}
              </p>
            )}
          </div>
        </div>

        <div className={styles.blogContent}>
          <PortableText
            value={data.content}
            components={PortableTextComponents}
          />
        </div>
        <FooterSection isMobile={false} />
      </div>
    </div>
  );
};

export default BlogSingle;

"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/customcss/Blog.module.css";
import HeaderStart from "@/components/start/ui/components/HeaderStart";
import { useRouter } from "next/navigation";
import { BlogPost } from "@/types/blog";
import FooterSection from "@/components/FooterSection";
import moment from "moment";
import HeaderSection from "@/components/HeaderSection";

const Blog = ({ data }: { data: BlogPost[] }) => {
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
      new Date(a.publishedAt || "").getTime()
  );

  const latestPost = sortedPosts[0];

  const otherPosts = sortedPosts.slice(1);

  return (
    <div className={styles.landing} ref={landingRef}>
      <div className={styles.container}>
         <HeaderSection isScrolled={isScrolled} />

        <div className={styles.blogSection}>
          <span className={styles.blogtitle}>Blog</span>
          <span className={styles.blogSubTitle}>
            The room of requirement
          </span>

          {latestPost && (
            <div className={styles.blogLatestContainer}>
              <div className={styles.blogPostImageContainer} onClick={() => router.push(`/blog/${latestPost.slug}`)}>
                {latestPost.coverImage?.url && (
                  <Image
                    className={styles.blogPostImage}
                    alt={latestPost.title}
                    width={555}
                    height={555}
                    placeholder="blur"
                    blurDataURL={latestPost.coverImage?.metadata?.lqip}
                    src={latestPost.coverImage?.url}
                  />
                )}
              </div>

              <div className={styles.blogRightContainer} onClick={() => router.push(`/blog/${latestPost.slug}`)}>
                <span className={styles.blogLatestSpan}>Latest</span>

                <Link href={`/blog/${latestPost.slug}`} className={styles.blogLink}>
                  <h1 className={styles.blogLatestTitle}>
                    {latestPost.title}
                  </h1>
                </Link>

                {latestPost.author && (
                  <div className={styles.blogLatestProfileContainer}>
                    {latestPost.author.image?.url && (
                      <Image
                        className={styles.blogLatestProfileImage}
                        alt={latestPost.author.name}
                        width={32}
                        height={32}
                        src={latestPost.author.image.url}
                      />
                    )}
                    <span className={styles.blogLatestProfileName}>
                      {latestPost.author.name}
                    </span>
                  </div>
                )}

                {latestPost.shortDescription && (
                  <p className={styles.blogLatestParagraph}>
                    {latestPost.shortDescription}
                  </p>
                )}
                <p className={styles.blogLatestParagraph}>{moment(latestPost.publishedAt).fromNow()}</p>
              </div>
            </div>
          )}
        </div>

        <div className={styles.blogPostGrid}>
          {otherPosts.map((post) => (
            <div key={post.slug} className={`${styles.blogPostCard}`} onClick={() => router.push(`/blog/${post.slug}`)}>
              {post.coverImage?.url && (
                <Image
                  className={styles.blogPostImage}
                  alt={post.title}
                  width={350}
                  height={350}
                  placeholder="blur"
                  blurDataURL={post.coverImage?.metadata?.lqip}
                  src={post.coverImage?.url}
                />
              )}

              <div className={styles.blogRightContainer}>

                <div className={styles.blogCardLatestTitleContainer}>
                  <Link href={`/blog/${post.slug}`} className={styles.blogLink}>
                    <span className={styles.blogCardLatestTitle}>
                      {post.title}
                    </span>
                  </Link>

                  {post.author && (
                    <div className={styles.blogLatestProfileContainer}>
                      {post.author.image?.url && (
                        <Image
                          className={styles.blogLatestProfileImage}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          src={post.author.image.url}
                        />
                      )}
                      <span className={styles.blogCardLatestProfileName}>
                        {post.author.name}
                      </span>
                    </div>
                  )}

                  {post.shortDescription && (
                    <p className={styles.blogCardLatestParagraph}>
                      {post.shortDescription}
                    </p>
                  )}
                </div>
                <div>
                  <p className={styles.blogCardLatestParagraph}>{moment(post.publishedAt).fromNow()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <FooterSection isMobile={false} />
      </div>
    </div>
  );
};

export default Blog;

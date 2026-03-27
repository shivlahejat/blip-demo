import Image from "next/image";
import styles from "@/customcss/Blog.module.css";
import { getImageUrl } from "@/lib/getSanityImage";

import { PortableTextReactComponents } from "@portabletext/react";
import React from "react";

export const PortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: any) => {
     

      return (
        <Image
          src={getImageUrl(value.asset)}
          alt={value.alt || "Blog image"}
          width={value.metadata?.dimensions?.width || 900}
          height={value.metadata?.dimensions?.height || 600}
          className={styles.blogContentImage}
          
        />
      );
    },
  },

  block: {
    h1: ({ children }: any) => <h1 className={styles.blogH1}>{children}</h1>,
    h2: ({ children }: any) => <h2 className={styles.blogH2}>{children}</h2>,
    h3: ({ children }: any) => <h3 className={styles.blogH3}>{children}</h3>,
    normal: ({ children }: any) => (
      <p className={styles.blogParagraph}>{children}</p>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className={styles.blogList}>{children}</ul>
    ),
  },

  listItem: {
    bullet: ({ children }: any) => (
      <li className={styles.blogListItem}>{children}</li>
    ),
  },
};

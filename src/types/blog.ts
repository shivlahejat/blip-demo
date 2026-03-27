export interface Author {
  name: string;
  image?: {
    url: string;
  };
}

export interface CoverImage {
  url: string;
  metadata?: {
    lqip: string;
  };
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  publishedAt: string;
  coverImage?: CoverImage;
  author?: Author;
  content?: any; // PortableText content
  seoTitle?: string;
  seoDescription?: string;
}

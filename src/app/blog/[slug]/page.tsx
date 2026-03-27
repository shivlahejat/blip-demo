import BlogSingle from "@/components/blog/ui/components/BlogSingleSection";
import { postBySlug, client } from "@/lib/helper";

export async function generateMetadata({ params }) {
  const data = await client.fetch(postBySlug, { slug: params?.slug });

  const publishedDate = data?.publishedAt
    ? new Date(data.publishedAt).toISOString()
    : "";

  const canonicalUrl = `https://www.withblip.com/${params?.slug}`;

  return {
    title: data?.seoTitle || data?.title,
    description: data?.seoDescription || data?.shortDescription,
    openGraph: {
      title: data?.seoTitle || data?.title,
      description: data?.seoDescription || data?.shortDescription,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: data?.coverImage?.metaData?.url,
          alt: data?.coverImage?.metaImage?.alt || "Default Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.seoTitle || data?.title,
      description: data?.seoDescription || data?.shortDescription,
      images: [data?.coverImage?.metaData?.url],
    },
    authors: [{ name: "WithBlip" }],
    other: {
      "article:published_time": publishedDate,
      "twitter:label2": "Time to read",
      "twitter:data2": data?.readTime || "03",
    },
  };
}

export default async function Page({ params }) {
  const data = await client.fetch(
    postBySlug,
    { slug: params?.slug },
    { next: { revalidate: 10 } },
  );

  return <BlogSingle data={data} />;
}

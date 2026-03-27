import { MetadataRoute } from "next";
import { client } from "@/lib/helper";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://withblip.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/start`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const dynamicPages = await generateDynamicPages(baseUrl);

  try {
    return [...staticPages, ...dynamicPages];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return staticPages;
  }
}

async function generateDynamicPages(
  baseUrl: string,
): Promise<MetadataRoute.Sitemap> {
  try {
    const query = `
      *[_type == "post"] {
        "slug": slug.current,
        "publishedAt": _createdAt,
        _updatedAt
      }
    `;

    const posts = await client.fetch(query);

    return posts.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt || post.publishedAt),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Failed to fetch blog posts for sitemap:", error);
    return [];
  }
}

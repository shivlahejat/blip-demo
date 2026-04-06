import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
export const client = createClient({
  projectId: "y9ws18wv",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

const builder = createImageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}

export const allPosts = `
*[_type == "post"] | order(_createdAt desc){
  _id,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  shortDescription,
  "publishedAt": _createdAt,
  readTime,

  author->{
    _id,
    name,
    "slug": slug.current,
    image{
      "url": asset->url,
      "metadata": asset->metadata{
        lqip,
        blurHash,
        dimensions{
          width,
          height,
          aspectRatio
        }
      }
    }
  },

  categories[]->{
    _id,
    title,
    "slug": slug.current
  },

  coverImage{
    alt,
    "url": asset->url,
    "metadata": asset->metadata{
      lqip,
      blurHash,
      dimensions{
        width,
        height,
        aspectRatio
      }
    }
  },

  content[]{
    ...,
    _type == "image" => {
      "url": asset->url,
      "metadata": asset->metadata{
        lqip,
        blurHash,
        dimensions{
          width,
          height,
          aspectRatio
        }
      }
    }
  },

  seoTitle,
  seoDescription
}
`;

export const postBySlug = `
*[_type == "post" && slug.current == $slug][0] {
  _id,
  _createdAt,

  title,
  shortDescription,
  "slug": slug.current,

  "publishedAt": _createdAt,

  readTime,

  author->{
    name,
    "slug": slug.current,
    image{
      "url": asset->url,
      "metadata": asset->metadata{
        lqip,
        dimensions {
          width,
          height
        }
      }
    }
  },

  categories[]->{
    title,
    "slug": slug.current
  },

  coverImage{
    alt,
    "url": asset->url,
    "metadata": asset->metadata{
      lqip,
      dimensions {
        width,
        height
      }
    }
  },

  content,

  seoTitle,
  seoDescription
}
`;

import { urlFor } from "./helper";

interface ImageOptions {
  fallback?: string;
}

export const getImageUrl = (image: any, options: ImageOptions = {}) => {
  if (!image) {
    return options.fallback || "/assets/Hero.png";
  }

  if (typeof image === "string") {
    return image;
  }

  if (image.asset || image._ref) {
    const sanityImage = urlFor(image);
    return sanityImage.url();
  }

  return options.fallback || "/assets/Hero.png";
};

export const getBackgroundImageUrl = (
  image: any,
  options: ImageOptions = {},
) => {
  return getImageUrl(image, options);
};

import { BlogDataSection } from "@/components/blog/ui/components/BlogDataSection";
import Blog from "@/components/blog/ui/components/BlogSection";
import BlogSectionPage from "@/components/blog/ui/page/BlogSectionPage";
import { allPosts, client } from "@/lib/helper";
import React from "react";

const page = async () => {
  const data = await client.fetch(allPosts);
  const safeData = JSON.parse(JSON.stringify(data));

  return (
    <div>
      <BlogSectionPage data={safeData} />
    </div>
  );
};

export default page;

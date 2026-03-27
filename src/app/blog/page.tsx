import Blog from "@/components/blog/ui/components/BlogSection";
import { allPosts, client } from "@/lib/helper";
import React from "react";

const page = async () => {
  const data = await client.fetch(allPosts);
  return (
    <div>
      <Blog data={data} />
    </div>
  );
};

export default page;

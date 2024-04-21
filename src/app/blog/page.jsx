import { BlogCard } from "@/components";
import { getPosts } from "@/lib/data";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json()
}

const Blog = async () => {
  const posts = await getData()
  // const posts = await getPosts(); //fetching data without an API
  return (
    <div className="flex flex-wrap gap-[20px] justify-center">
      {posts.map((post) => {
        return (
          <div className="post w-full md:w-[30%] lg:w-[25%] ">
            <BlogCard post={post} key={post.id} />
          </div>
        )
      })}
    </div>
  );
}

export default Blog;

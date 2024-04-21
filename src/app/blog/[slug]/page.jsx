import { PostUser } from "@/components";
import Image from "next/image";
import { Suspense } from "react";

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    console.log(res)
    throw new Error("something went wrong");
  }
  console.log(res)
  return res.json()
}


const Single = async ({ params }) => {
  const post = await getData(params.slug)
  return (
    <div className="flex gap-[100px]">
      <div className="imgContainer flex-[1] relative h-[calc(100vh-200px)] ">
        <Image className="object-cover" src="https://images.pexels.com/photos/10375901/pexels-photo-10375901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill />
      </div>
      <div className="textContainer flex-[2] flex flex-col gap-[50px]">
        <h1 className="text-[64px]">{post.title}</h1>
        <div className="detail flex gap-[20px]">
          <Image className="object-cover rounded-full" src="https://images.pexels.com/photos/10375901/pexels-photo-10375901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' width={50} height={50} />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className="detailText flex flex-col gap-[10px]">
            <span className="text-gray-500 font-[700]">Published</span>
            <span className="font-[500]">01.01.2024</span>
          </div>
        </div>
        <div className="content text-[20px]">{post.body}</div>
      </div>
    </div>
  );
}

export default Single;
"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const getData = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const data = await res.json();
    console.log(data);
    setPosts(data);
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);
  
  return <>{posts?.map((post:any)=>{
    return (
      <Link href={`/post?id=${post?.id}`}
        key={post?.id}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <div className="flex justify-between">
          <div>
            <h2 className="mb-3 text-2xl font-semibold">{post.title}</h2>
            <p className="m-0  text-sm opacity-50">{post.body}</p>
          </div>
          <span className="flex justify-center items-center transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </div>
      </Link>
    );
  })}</>;
};

export default PostList;

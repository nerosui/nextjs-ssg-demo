"use client";

import { AnyMxRecord } from "dns";
import { useCallback, useEffect, useState } from "react";

const PostPage = () => {
  const id = new URLSearchParams(global?.window?.location?.search).get("id");
  const [post, setPost] = useState<any>(undefined);
  const getData = useCallback(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    console.log(data);
    setPost(data);
  }, [id]);
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {
        <div>
          <h2 className="mb-3 text-2xl font-semibold">{post?.title}</h2>
          <p className="m-0  text-sm opacity-50">{post?.body}</p>
        </div>
      }
    </>
  );
};

export default PostPage;

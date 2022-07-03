import React from "react";
import Link from "next/link";

function Index({ posts }) {
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`posts/${post.id}`} passHref>
            <span>
              {post.id} {post.title}
            </span>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Index;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}

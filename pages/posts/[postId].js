function Post({ post }) {
  return (
    <>
      {
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      }
    </>
  );
}

export default Post;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((item) => {
    return {
      params: {
        postId: `${item.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}

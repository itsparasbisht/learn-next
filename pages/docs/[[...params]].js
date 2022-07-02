import { useRouter } from "next/router";

// [[]] - double brackets allows to catch /docs also + /docs/something/.../.../...

function Docs() {
  const route = useRouter();
  const { params } = route.query;
  console.log(params);

  return <h1>Docs page</h1>;
}

export default Docs;

import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/product");
    // router.replace("/product");
  };

  return (
    <>
      <h1>Home Page</h1>
      <Link href="/about">About</Link> <br />
      <Link href="/product">Products</Link> <br />
      <button onClick={handleClick}>Buy Products</button>
    </>
  );
}

export default Home;

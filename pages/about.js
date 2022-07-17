import Head from "next/head";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About this page</title>
        <meta
          name="description"
          content="this is the description of the current page"
        />
      </Head>
      <h1>About Page</h1>
    </>
  );
}

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};

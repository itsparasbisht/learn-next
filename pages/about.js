import Footer from "../components/Footer";

export default function About() {
  return <h1>About Page</h1>;
}

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};

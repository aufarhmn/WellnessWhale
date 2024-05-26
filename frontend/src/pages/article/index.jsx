import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ArticleHero from "../../components/Article/ArticleHero";
import ArticleEducation from "../../components/Article/ArticleEducation";
import ArticleOption from "../../components/Article/ArticleOption";

export default function Article() {
  return (
    <>
      <main className="bg-white">
        <Navbar />
        <ArticleHero />
        <ArticleOption />
        <ArticleEducation />
        <Footer />
      </main>
    </>
  );
}

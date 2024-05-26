// components/[idEducation].jsx

import React from "react";
import { useRouter } from "next/router";

const articlesData = {
  "solusi-susah-tidur": {
    title: "Solusi Susah Tidur",
    content: "Ini adalah isi artikel untuk Solusi Susah Tidur...",
  },
  "jangan-sampai-gerd": {
    title: "Jangan Sampai Gerd",
    content: "Ini adalah isi artikel untuk Jangan Sampai Gerd...",
  },
  "atasi-gangguan-selfharms": {
    title: "Atasi Gangguan Self-Harms",
    content:
      "Salah satu gangguan mental yang baru-baru ini kerap dibicarakan adalah self-harm atau gangguan melukai diri sendiri. Tindakan self-harm dilakukan dengan sengaja untuk merasakan sakit fisik demi mengalihkan beban emosi atau sakit hati...",
  },
};

const ArticleDetail = ({ article }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return (
      <div className="p-8 bg-white text-black min-h-screen">
        Article not found
      </div>
    );
  }

  return (
    <div className="p-8 bg-white text-black min-h-screen">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = Object.keys(articlesData).map((idEducation) => ({
    params: { idEducation },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const article = articlesData[params.idEducation];

  return {
    props: {
      article,
    },
  };
}

export default ArticleDetail;

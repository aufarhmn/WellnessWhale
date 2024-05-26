// components/[educationId].jsx

import React from "react";
import { useRouter } from "next/router";

const articlesData = [
  {
    educationId: 1,
    title: "Solusi Susah Tidur",
    content: "Ini adalah isi artikel untuk Solusi Susah Tidur...",
  },
  {
    educationId: 2,
    title: "Jangan Sampai Gerd",
    content: "Ini adalah isi artikel untuk Jangan Sampai Gerd...",
  },
  {
    educationId: 3,
    title: "Atasi Gangguan Self-Harms",
    content:
      "Salah satu gangguan mental yang baru-baru ini kerap dibicarakan adalah self-harm atau gangguan melukai diri sendiri. Tindakan self-harm dilakukan dengan sengaja untuk merasakan sakit fisik demi mengalihkan beban emosi atau sakit hati...",
  },
];

const ArticleEducationDetails = () => {
  const router = useRouter();
  const { educationId } = router.query;
  const article = articlesData.find((article) => article.educationId == educationId);

  if (!article) {
    return (
      <div className="p-8 bg-white text-black min-h-screen">
        Article not found
      </div>
    );
  }

  return (
    <div className="p-8 bg-white text-black min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold mt-4">{article.title}</h1>
      </div>
      <div className="mt-8">
        <p>{article.content}</p>
        <div className="mt-8">
          

        </div>
       
      </div>
    </div>
  );
};


export default ArticleEducationDetails;

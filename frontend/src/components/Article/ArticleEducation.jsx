import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SusahTidur from "../../assets/images/article/SusahTidur.png";
import Harm from "../../assets/images/article/harm.png";
import Gerd from "../../assets/images/article/gerd.png";

const ArticleEducation = () => {
  const router = useRouter();

  const articles = [
    {
      educationId: 1,
      title: "Solusi Susah Tidur",
      description:
        "Kesulitan tidur atau insomnia adalah masalah umum yang dapat memengaruhi kesehatan dan kualitas hidup seseorang.",
      image: SusahTidur,
    },
    {
      educationId: 2,
      title: "Jangan Sampai Gerd",
      description:
        "Gerd adalah gangguan yang terjadi ketika isi lambung naik ke kerongkongan karena otot-otot di kerongkongan dan dasar kerongkongan yang lemah atau tidak berfungsi dengan baik.",
      image: Gerd,
    },
    {
      educationId: 3,
      title: "Atasi Gangguan Self-Harms",
      description:
        "Salah satu gangguan mental yang baru-baru ini kerap dibicarakan adalah self-harm atau gangguan melukai diri sendiri.",
      image: Harm,
    },
  ];

  const handleCardClick = (educationId) => {
    router.push(`/article/education/${educationId}`);
  };

  const handleArticleButtonClick = (educationId) => {
    router.push(`/article/education/${educationId}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div className="hero p-8 rounded-lg mb-8 flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-4 md:mb-0">
          <Image
            src={articles[2].image}
            alt=""
            width={400}
            height={300}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 text-center md:text-left md:pl-8">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "black" }}>
            {articles[2].title}
          </h1>
          <p className="mb-4" style={{ color: "black" }}>
            {articles[2].description}{" "}
          </p>
          <button
            onClick={() => handleArticleButtonClick(articles[2].educationId)}
            style={{
              backgroundColor: "#2B544A",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Lihat artikel
          </button>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ color: "black" }}>
          Artikel Edukasi
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {articles.map((article) => (
            <div
              key={article.educationId}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                background: "#fff",
                cursor: "pointer",
              }}
              onClick={() => handleCardClick(article.educationId)}
            >
              <Image
                src={article.image}
                alt={article.title}
                width={200}
                height={150}
                layout="responsive"
                objectFit="cover"
              />
              <div style={{ padding: "15px" }}>
                <h3
                  style={{
                    fontSize: "16px",
                    marginBottom: "10px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {article.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#555" }}>
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticleEducation;

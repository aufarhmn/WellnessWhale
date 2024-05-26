// components/ArticleEducation.js

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SusahTidur from "../../assets/images/article/SusahTidur.png";
import SelfHarm from "../../assets/images/article/SelfHarm.png"; // Import gambar SelfHarm

const ArticleEducation = () => {
  const router = useRouter();
  const [showArticleContent, setShowArticleContent] = useState(false);

  const articles = [
    {
      educationId: 1,
      title: "Solusi Susah Tidur",
      description:
        "Berikut adalah penjelasan bagaimana cara tidur lebih mudah...",
      image: SusahTidur,
    },
    {
      educationId: 2,
      title: "Jangan Sampai Gerd",
      description: "Gerd adalah sakit lambung, hanya bisa dihindari...",
      image: SelfHarm,
    },
    {
      educationId: 3,
      title: "Atasi Gangguan Self-Harms",
      description:
        "Salah satu gangguan mental yang baru-baru ini kerap dibicarakan adalah self-harm atau gangguan melukai diri sendiri. Tindakan self-harm dilakukan dengan sengaja untuk merasakan sakit fisik demi mengalihkan beban emosi atau sakit hati.",
      image: SelfHarm,
    },
    // Tambahkan artikel lainnya sesuai kebutuhan
  ];

  const handleCardClick = (educationId) => {
    router.push(`/article/education/${educationId}`);
  };

  const handleArticleButtonClick = () => {
    setShowArticleContent(true);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Hero Section */}
      <div className="hero p-8 rounded-lg mb-8 flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-4 md:mb-0">
          <Image
            src={articles[2].image} // Ganti dengan path gambar artikel Self-Harm
            alt="Self-harm awareness"
            width={400}
            height={300}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 text-center md:text-left md:pl-8">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "black" }}>
            {articles[2].title} {/* Ganti dengan judul artikel Self-Harm */}
          </h1>
          <p className="mb-4" style={{ color: "black" }}>
            {articles[2].description}{" "}
            {/* Ganti dengan deskripsi artikel Self-Harm */}
          </p>
          <button
            onClick={handleArticleButtonClick}
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

      {/* Article Section */}
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
              onClick={() => handleCardClick(article.educationId)} // Mengarahkan ke halaman artikel yang sesuai
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

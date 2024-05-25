// src/pages/ArticleEducation.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SusahTidur from "../../assets/images/article/SusahTidur.png";
import SelfHarm from "../../assets/images/article/SelfHarm.png";

const articles = [
  {
    title: "Solusi Susah Tidur",
    description:
      "Berikut adalah penjelasan bagaimana cara tidur lebih mudah...",
    image: SusahTidur,
  },
  {
    title: "Jangan Sampai Gerd",
    description: "Gerd adalah sakit lambung, hanya bisa dihindari...",
    image: SusahTidur,
  },
  {
    title: "Mengantuk Terus?",
    description: "Mari kita mengatur tidur mulai dari waktu istirahat yang...",
    image: SusahTidur,
  },
  {
    title: "Jangan Pakai Obat",
    description:
      "Jika tanpa anjuran dari dokter, maka hindari pemakaian obat...",
    image: SusahTidur,
  },
  {
    title: "Mengatasi Stigma",
    description:
      "Berikut adalah penjelasan bagaimana mengatasi stigma pada penyakit mental...",
    image: SusahTidur,
  },
  {
    title: "Nutrisi Mental",
    description:
      "Berikut adalah penjelasan bagaimana nutrisi mental yang baik...",
    image: SusahTidur,
  },
  {
    title: "Meditasi Mindfulness",
    description:
      "Berikut adalah penjelasan bagaimana meditasi mindfulness dapat membantu...",
    image: SusahTidur,
  },
  {
    title: "Kecemasan Depresi",
    description:
      "Berikut adalah penjelasan kecemasan dan depresi bisa diatasi...",
    image: SusahTidur,
  },
  {
    title: "Media Sosial",
    description:
      "Berikut adalah penjelasan bagaimana menghindari dampak negatif dari sosial media...",
    image: SusahTidur,
  },
  {
    title: "Gizi dan Jiwa",
    description:
      "Berikut adalah penjelasan bagaimana gizi berpengaruh terhadap kondisi mental...",
    image: SusahTidur,
  },
  {
    title: "Istirahat Untuk Pikiran",
    description:
      "Berikut adalah penjelasan bagaimana istirahat dapat membantu kesehatan mental...",
    image: SusahTidur,
  },
  {
    title: "Pernapasan Anti-Stres",
    description:
      "Berikut adalah penjelasan bagaimana teknik pernapasan dapat mengurangi stres...",
    image: SusahTidur,
  },
];

export default function ArticleEducation() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Hero Section */}
      <div className="hero p-8 rounded-lg mb-8 flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-4 md:mb-0">
          <Image
            src={SelfHarm}
            alt="Self-harm awareness"
            width={400}
            height={300}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 text-center md:text-left md:pl-8">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "black" }}>
            Atasi Gangguan Self-Harms
          </h1>
          <p className="mb-4" style={{ color: "black" }}>
            Self-harm adalah suatu tindakan yang merugikan diri sendiri dan
            dapat berdampak serius pada kesehatan mental dan fisik seseorang.
            Mari kita jaga diri kita dengan lebih baik dengan mendapatkan
            wawasan emosional dan psikologis.
          </p>
          <Link href="/artikel" legacyBehavior>
            <a
              style={{ backgroundColor: "#2B544A" }}
              className="text-white py-2 px-4 rounded-lg"
            >
              Lihat artikel
            </a>
          </Link>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4" style={{ color: "black" }}>
        Artikel Edukasi
      </h2>

      {/* Article Section */}
      <section>
        <h2>Artikel Edukasi</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {articles.map((article, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                background: "#fff",
              }}
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
}

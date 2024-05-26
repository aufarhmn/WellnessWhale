import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Beras from "../../assets/images/hero/beras.png";
import Hujan from "../../assets/images/hero/hujan.png";
import Air from "../../assets/images/hero/air.png";
import Ombak from "../../assets/images/hero/ombak.png";
import Angin from "../../assets/images/hero/angin.png";
import Burung from "../../assets/images/hero/burung.png";

const articles = [
  {
    id: 1,
    title: "Relaksasi dengan air beras",
    image: Beras,
  },
  {
    id: 2,
    title: "Meditasi dengan suara hujan",
    image: Hujan,
  },
  {
    id: 3,
    title: "Relaksasi dengan suara air mengalir",
    image: Air,
  },
  {
    id: 4,
    title: "Relaksasi dengan suara ombak laut",
    image: Ombak,
  },
  {
    id: 5,
    title: "Relaksasi dengan suara hembusan angin",
    image: Angin,
  },
  {
    id: 6,
    title: "Relaksasi dengan suara kicau burung",
    image: Burung,
  },
];

const ArticleOption = () => {
  const router = useRouter();

  const handleCardClick = (id) => {
    router.push(`/article/${id}`);
  };

  return (
    <div className="flex flex-col w-full h-auto px-24 py-12">
      <div className="w-full h-fit mb-8">
        <p className="font-['Poppins'] text-[36px] font-semibold text-black">
          Artikel Interaktif
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex flex-row items-center justify-between border rounded-lg px-8 py-8 cursor-pointer"
            onClick={() => handleCardClick(article.id)}
          >
            <p className="font-['Poppins'] text-[20px] font-semibold text-black">
              {article.title}
            </p>
            <div className="w-24 h-24 overflow-hidden rounded-full">
              <Image
                src={article.image}
                className="object-cover w-full h-full"
                alt={article.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleOption;

import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Beras from "../../assets/images/article/Beras.png";
import Hujan from "../../assets/images/article/Hujan.png";

const articles = [
  {
    id: 1,
    title: "Relaksasi dengan air beras",
    content:
      "Relaksasi dengan air beras adalah salah satu teknik yang melibatkan penggunaan air beras untuk merilekskan tubuh dan pikiran. Diyakini bahwa air beras memiliki sifat-sifat yang mampu memberikan efek menenangkan dan menyegarkan. Metode ini umumnya melibatkan penggunaan air beras dalam mandi atau pijatan, serta terapi aroma. Meskipun manfaatnya, disarankan untuk berkonsultasi dengan ahli sebelum mencobanya, terutama jika Anda memiliki kondisi kulit atau kesehatan tertentu.",
    audioFiles: ["airberas.mp3", "audio2.mp3", "audio3.mp3", "audio4.mp3"],
    description:
      "Relaksasi dengan air beras melibatkan mandi atau pijatan dengan menggunakan air yang telah direndam dengan beras. Dikatakan bahwa air beras dapat memberikan sensasi menyegarkan pada kulit dan membantu mengurangi ketegangan otot. Metode ini juga sering melibatkan terapi aroma untuk meningkatkan efek relaksasi. Namun, sebelum mencoba, penting untuk berkonsultasi dengan profesional kesehatan.",
    image: Beras,
  },
  {
    id: 2,
    title: "Meditasi dengan suara hujan",
    content:
      "Suara hujan memiliki efek menenangkan yang dapat membantu mengurangi stres dan kecemasan. Mendengarkan suara hujan dapat membawa kita pada suasana tenang dan damai, seperti ketika kita berada di dalam rumah yang hangat saat hujan turun di luar. Berikut adalah panduan untuk menggunakan suara hujan sebagai alat relaksasi.",
    audioFiles: ["hujan.mp3"],
    description:
      "Suara hujan sering kali dianggap menenangkan. Suara hujan memiliki ritme yang konsisten dan alami, yang dapat menenangkan sistem saraf. Seperti suara ombak di pantai, suara hujan bertindak sebagai putih bising alami, menutupi suara yang mengganggu dan membantu fokus pikiran. Selain itu, banyak orang mengasosiasikan hujan dengan perasaan nyaman, aman, dan relaksasi, terutama jika mereka pernah memiliki pengalaman positif saat hujan.",
    image: Hujan,
  },
];

const ArticleDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const article = articles.find((article) => article.id == id);

  if (!article) {
    return (
      <div className="p-8 bg-white text-black min-h-screen">
        Article not found
      </div>
    );
  }

  return (
    <div className="p-8 bg-white text-black min-h-screen flex flex-col">
      <div className="flex flex-row justify-center items-center">
        <div className="mr-4">
          <Image
            src={article.image}
            alt="Illustration"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold mb-4">{article.title}</h1>
          <div className="max-w-lg mx-auto">
            <p className="text-justify">{article.content}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        {article.audioFiles.map((audio, index) => (
          <div key={index} className="my-4">
            <audio controls className="w-50">
              <source src={`/audio/${audio}`} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-justify">{article.description}</p>
      </div>
    </div>
  );
};

export default ArticleDetail;

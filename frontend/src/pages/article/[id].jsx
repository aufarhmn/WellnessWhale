import { useRouter } from "next/router";
import Image from "next/image";
import Beras from "../../assets/images/article/Beras.png";

const articles = [
  {
    id: 1,
    title: "Relaksasi dengan air beras",
    content:
      "Relaksasi dengan air beras adalah salah satu metode relaksasi yang melibatkan penggunaan air beras dalam prosesnya. Metode ini memiliki dasar pada kepercayaan bahwa air beras memiliki sifat yang dapat membantu merilekskan tubuh dan pikiran. Berikut adalah penjelasan lebih lanjut mengenai relaksasi dengan air beras:",
    audioFiles: ["airberas.mp3"],
    description:
      "Salah satu cara yang umum adalah dengan menambahkan air beras ke dalam air mandi. Proses merendam tubuh dalam campuran air beras diyakini mampu memberikan efek menenangkan pada kulit dan meredakan ketegangan otot. Kandungan alami dalam air beras diyakini dapat memberikan sensasi segar yang membuat pengalaman mandi menjadi lebih menyenangkan dan menenangkan.\n\nSelain digunakan dalam mandi, air beras juga bisa diaplikasikan pada proses pijatan atau kompres. Setelah merendamkan beras dari air rendaman, air tersebut dapat digunakan untuk merendam kain atau handuk, yang kemudian dapat digunakan untuk memijat bagian tubuh yang membutuhkan relaksasi, seperti pundak atau wajah. Pijatan dengan air beras dipercaya dapat meningkatkan peredaran darah dan menciptakan pengalaman relaksasi yang lebih mendalam.\n\nMetode relaksasi ini juga dapat melibatkan sentuhan urut aroma terapi dengan menambahkan minyak esensial atau bunga-bungaan ke dalam air beras. Aroma yang dihasilkan tidak hanya memberikan kesegaran, tetapi juga diyakini dapat meredakan stres dan meningkatkan suasana hati.\n\nMeskipun relaksasi dengan air beras dapat memberikan manfaat, tetap disarankan untuk berkonsultasi dengan ahli sebelum mencobanya, terutama jika Anda memiliki kondisi kulit atau kesehatan tertentu. Dengan penggunaan yang tepat, air beras dapat menjadi bagian dari ritual sederhana untuk mengusir kelelahan dan mencapai ketenangan dalam kehidupan sehari-hari.",
  },
  // Artikel lainnya...
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
    <div className="p-8 bg-white text-black min-h-screen">
      <div className="flex flex-col items-center">
        <Image src={Beras} className="w-24 h-24" alt="Beras Image" />
        <h1 className="text-3xl font-semibold mt-4">{article.title}</h1>
      </div>
      <div className="mt-8">
        <p>{article.content}</p>
        <div className="mt-8">
          {article.audioFiles.map((audio, index) => (
            <div key={index} className="my-4">
              <audio controls className="w-full">
                <source src={`/audio/${audio}`} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <p>{article.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;

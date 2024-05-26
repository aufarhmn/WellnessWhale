import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SusahTidur from "/public/SusahTidur.png";
import SelfHarm from "/public/SelfHarm.png";
import Gerd from "/public/Gerd.png";

const articlesData = [
  {
    educationId: 1,
    title: "Solusi Susah Tidur",
    content: `
      Kesulitan tidur atau insomnia adalah masalah umum yang dapat memengaruhi kesehatan dan kualitas hidup seseorang. Berikut beberapa solusi yang dapat membantu mengatasi masalah susah tidur:

      1. Tetapkan Jadwal Tidur: Cobalah untuk tidur dan bangun pada waktu yang sama setiap hari, termasuk di akhir pekan. Ini membantu mengatur jam biologis tubuh Anda.

      2. Ciptakan Lingkungan Tidur yang Nyaman: Pastikan kamar tidur Anda gelap, sejuk, dan tenang. Gunakan penutup mata atau penutup telinga jika diperlukan untuk mengurangi gangguan.

      3. Hindari Kafein dan Alkohol: Hindari minuman yang mengandung kafein seperti kopi, teh, dan minuman berenergi setidaknya 4-6 jam sebelum tidur. Alkohol juga dapat mengganggu kualitas tidur Anda.

      4. Batasi Paparan Layar: Hindari menggunakan perangkat elektronik seperti ponsel, tablet, dan komputer setidaknya satu jam sebelum tidur. Cahaya biru dari layar dapat mengganggu ritme tidur Anda.

      5. Lakukan Relaksasi: Cobalah teknik relaksasi seperti meditasi, pernapasan dalam-dalam, atau yoga sebelum tidur untuk meredakan stres dan kegelisahan yang dapat mengganggu tidur.

      6. Batasi Aktivitas di Tempat Tidur: Gunakan tempat tidur hanya untuk tidur dan aktivitas intim. Hindari melakukan pekerjaan atau menonton TV di tempat tidur.

      Dengan menerapkan solusi-solusi di atas secara konsisten, Anda dapat meningkatkan kualitas tidur dan menjaga kesehatan mental serta fisik Anda.
    `,
    author: "Aufa Rahman",
    date: "2 Februari 2023",
    image: SusahTidur,
  },
  {
    educationId: 2,
    title: "Jangan Sampai Gerd",
    content: `
      Gastroesophageal Reflux Disease (GERD) adalah gangguan yang terjadi ketika isi lambung naik ke kerongkongan karena otot-otot di kerongkongan dan dasar kerongkongan yang lemah atau tidak berfungsi dengan baik. Beberapa tips untuk mencegah dan mengelola GERD adalah:

      1. Ubah pola makan: Hindari makanan dan minuman yang dapat memicu GERD, seperti makanan pedas, berlemak, berkarbonasi, alkohol, dan kafein. Makanlah lebih sering dalam porsi kecil dan hindari makan sebelum tidur.
      
      2. Tinggikan kepala tempat tidur: Meninggikan kepala tempat tidur dapat membantu mencegah isi lambung naik ke kerongkongan saat tidur.
      
      3. Jaga berat badan ideal: Kegemukan dapat meningkatkan risiko GERD. Lakukan olahraga secara teratur dan konsumsi makanan sehat untuk menjaga berat badan yang sehat.
      
      4. Hindari merokok dan alkohol: Merokok dan alkohol dapat merangsang produksi asam lambung dan melemahkan otot-otot di sekitar kerongkongan, meningkatkan risiko GERD.

      Dengan mengikuti tips di atas, Anda dapat mengurangi risiko GERD dan mengelola kondisi tersebut dengan lebih baik.
    `,
    author: "Adzkia Khansa",
    date: "7 Oktober 2022",
    image: Gerd,
  },
  {
    educationId: 3,
    title: "Atasi Gangguan Self-Harms",
    content: `
      Salah satu gangguan mental yang baru-baru ini kerap dibicarakan adalah self-harm atau gangguan melukai diri sendiri. Tindakan self-harm dilakukan dengan sengaja untuk merasakan sakit fisik demi mengalihkan beban emosi atau sakit hati. 

      Lantas, bagaimana self-harm bisa terjadi dan apa penyebabnya? Gangguan self-harm adalah masalah emosional yang kerap diderita remaja, namun tidak menutup kemungkinan anak-anak atau orang dewasa juga mengalaminya. Saat ini, perkiraan persentase remaja yang pernah melakukan self-harm adalah sekitar 20 persen dari populasi keseluruhan, sebagaimana dikutip dari European Child & Adolescent Psychiatry.

      Alasan remaja mengalami self-harm karena pada fase tersebut terjadi proses pencarian identitas (identity versus identity confusion). Selain itu, kondisi emosi remaja juga belum stabil sehingga kerap belum bisa mengontrol perasaannya. Karena itu, jikapun Anda melihat teman dekat atau remaja di sekitar yang memiliki luka sayat di tangan atau lebam di tubuhnya, namun tidak mengaku, atau ketika ditanya jawabannya tidak masuk akal, bisa jadi ia melakukan self-harm. Namun, dugaan itu harus dikonfirmasi dengan jelas.

      Sebab, orang-orang yang melakukan self-harm kerap menyembunyikan tindakan tersebut. Anggapannya tidak masuk akal seseorang menyakiti dirinya sendiri. Selain itu, tindakan menyakiti diri sendiri tergolong memalukan dan dianggap sekadar ekspresi mencari perhatian (padahal anggapan tersebut hanya stigma).

      Kajian self-harm dalam psikologi dilakukan serius sejak Asosiasi Psikiater Amerika (APA) menerbitkan buku manual terbaru DSM-V (Diagnostic and Statistical Manual of Mental Disorders) untuk deteksi gangguan mental dan memasukkan perilaku self-harm atau NSSI (Non-Suicidal Self-injury) sebagai gangguan mental terbaru yang lazimnya dialami oleh remaja.

      Di sisi lain, perilaku self-harm harus dibedakan dari percobaan bunuh diri. Tindakan self-harm tidak dimaksudkan untuk mengakhiri hidup pelakunya, melainkan sebagai upaya pelepasan stres.
    `,
    author: "Khairun Nisa",
    date: "4 November 2023",
    image: SelfHarm,
  },
];

const ArticleEducationDetails = () => {
  const router = useRouter();
  const { educationId } = router.query;
  const article = articlesData.find(
    (article) => article.educationId == educationId
  );

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
        <h1 className="text-3xl font-semibold mt-4 text-center">
          {article.title}
        </h1>
        <Image src={article.image} alt="Illustrasi" className="my-4" />
        <p className="mt-2">{article.author} - Artikel Edukasi</p>{" "}
        <p className="text-sm text-gray-600">{article.date}</p>{" "}
        <div className="flex flex-row mt-8">
          <div className="flex-1">
            <p className="whitespace-pre-line">{article.content}</p>
          </div>
          <div className="w-1/3 pl-8">
            <div className="sticky top-8">
              <h2 className="text-xl font-semibold">Artikel Terpopuler</h2>
              <ul className="mt-4 space-y-2">
                {articlesData.map((item) => (
                  <li
                    key={item.educationId}
                    className="flex flex-col bg-gray-50 p-4 rounded-md"
                  >
                    <a
                      href={`/article/education/${item.educationId}`} // Perubahan di sini
                      className="text-blue-600 hover:underline"
                    >
                      {item.title}
                    </a>
                    <span className="text-sm text-gray-600">{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleEducationDetails;

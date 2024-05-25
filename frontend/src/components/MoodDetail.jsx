import React, { useState, useEffect } from "react";

export default function MoodDetail() {
  const [mood, setMood] = useState("Normal");
  const [date, setDate] = useState(new Date().toISOString());

  useEffect(() => {
    const datas = localStorage.getItem("moodData");
    if (datas) {
      const parsedData = JSON.parse(datas);
      setMood(parsedData.riwayatMood || "Normal");
      setDate(parsedData.riwayatDate || new Date().toISOString());
    }
  }, []); 

  const renderContent = () => {
    switch (mood) {
      case "Anxiety":
        return (
          <>
            <p className="text-xl font-bold mb-2">Kondisi anda: Anxiety</p>
            <p className="mb-4">
              Sayang sekali mood anda sedang cemas, kami berpikir bahwa anda
              terlalu banyak memikirkan hal-hal yang belum tentu terjadi. Anda
              juga kurang baik dalam mengontrol kecemasan, mungkin anda memiliki
              masalah yang besar yang berpengaruh terhadap aktivitas sehari-hari
              anda. Hal ini adalah hal yang normal tetapi harus segera diatasi.
            </p>
            <h4 className="font-semibold mb-2">Rekomendasi tindakan</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Latihan pernapasan
              </button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Meditasi
              </button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Olahraga ringan
              </button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Konsultasi dengan profesional
              </button>
            </div>
          </>
        );
      case "Bipolar":
        return (
          <>
            <p className="text-xl font-bold mb-2">Mood anda: Bipolar</p>
            <p className="mb-4">
              Mood anda berubah-ubah, kami berpikir bahwa anda mengalami
              perubahan emosi yang drastis. Anda mungkin mengalami masalah besar
              yang berpengaruh terhadap aktivitas sehari-hari anda. Hal ini
              adalah hal yang normal tetapi harus segera diatasi.
            </p>
            <h4 className="font-semibold mb-2">Rekomendasi tindakan</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Jaga rutinitas tidur
              </button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Catat suasana hati
              </button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Konsumsi makanan sehat
              </button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Terapi kognitif
              </button>
            </div>
          </>
        );
      case "Depression":
        return (
          <>
            <p className="text-xl font-bold mb-2">Mood anda: Depression</p>
            <p className="mb-4">
              Sayang sekali mood anda tidak baik, kami berpikir bahwa anda
              kelelahan dan terlalu banyak memikirkan orang lain. Anda juga
              kurang baik dalam mengontrol emosi, mungkin anda memiliki masalah
              besar yang berpengaruh terhadap aktivitas sehari-hari anda. Hal
              ini adalah hal yang normal tetapi harus segera diatasi.
            </p>
            <h4 className="font-semibold mb-2">Rekomendasi tindakan</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Atur pola tidur
              </button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Lakukan terapi musik
              </button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Berjalan di alam
              </button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Konsultasi dengan psikolog
              </button>
            </div>
          </>
        );
      case "Normal":
        return (
          <>
            <p className="text-xl font-bold mb-2">Mood anda: Normal</p>
            <p className="mb-4">Mood anda dalam kondisi normal.</p>
            <h4 className="font-semibold mb-2">Rekomendasi tindakan</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Pertahankan pola hidup sehat
              </button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Lakukan aktivitas menyenangkan
              </button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Terus berolahraga
              </button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Jaga hubungan sosial
              </button>
            </div>
          </>
        );
      default:
        return (
          <>
            <p className="text-xl font-bold mb-2">Mood anda: Tidak diketahui</p>
            <p className="mb-4">Mood anda tidak dapat diidentifikasi.</p>
            <h4 className="font-semibold mb-2">Rekomendasi tindakan</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Pertahankan pola hidup sehat
              </button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Konsultasi dengan profesional
              </button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Tetap aktif
              </button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                Jaga pola tidur
              </button>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen container mx-auto p-4 pt-32 bg-white font-['Poppins']">
      <div className="border border-gray-300 rounded-lg p-6 mb-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">
              {new Intl.DateTimeFormat("id-ID", { dateStyle: "full" }).format(
                new Date(date)
              )}
            </h3>
            {renderContent()}
          </div>
        </div>
      </div>
      <div>
        <button
          className="bg-green-400 text-white px-4 py-2 rounded-lg"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
}
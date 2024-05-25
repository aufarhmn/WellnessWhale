import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Beras from "../assets/images/hero/beras.png";

export default function MoodResult() {
  const data = localStorage.getItem('expertSystem');


  const renderContent = () => {
    switch (data) {
      case 'Anxiety':
        return (
          <>
            <h1 className='text-xl font-bold mb-2'>Mood kamu cemas :(</h1>
            <div className='mb-6'>
              <h2 className='text-lg font-bold mb-2'>Ringkasan</h2>
              <p>
                Sayang sekali mood anda sedang cemas, kami berpikir bahwa anda terlalu banyak memikirkan hal-hal yang belum tentu terjadi.
                Anda juga kurang baik dalam mengontrol kecemasan, mungkin anda memiliki masalah yang besar yang berpengaruh terhadap aktivitas sehari-hari anda.
                Hal ini adalah hal yang normal tetapi harus segera diatasi.
              </p>
            </div>
            <div>
              <h2 className='text-lg font-bold mb-4'>Rekomendasi tindakan</h2>
              <div className='space-y-4'>
                <Recommendation
                  icon={Beras}
                  title="Atur pola tidur"
                  description="Cobalah mengatur pola tidur dan hindari aktivitas tidak perlu ketika jam tidur anda."
                />
                <Recommendation
                  icon={Beras}
                  title="Lakukan terapi musik sebelum tidur"
                  description="Dengarkan musik yang menenangkan untuk membantu tidur lebih nyenyak."
                />
                <Recommendation
                  icon={Beras}
                  title="Hindari udara buruk"
                  description="Pastikan lingkungan sekitar anda memiliki udara yang bersih dan segar."
                />
                <Recommendation
                  icon={Beras}
                  title="Minum air hangat saat bangun"
                  description="Minum air hangat di pagi hari untuk memulai hari dengan baik."
                />
              </div>
            </div>
          </>
        );
      case 'Depression':
        return (
          <>
            <h1 className='text-xl font-bold mb-2'>Mood kamu tidak baik :(</h1>
            <div className='mb-6'>
              <h2 className='text-lg font-bold mb-2'>Ringkasan</h2>
              <p>
                Sayang sekali mood anda tidak baik, kami berpikir bahwa anda kelelahan dan terlalu banyak memikirkan orang lain.
                Anda juga kurang baik dalam mengontrol emosi, mungkin anda memiliki masalah besar yang berpengaruh terhadap aktivitas sehari-hari anda.
                Hal ini adalah hal yang normal tetapi harus segera diatasi.
              </p>
            </div>
            <div>
              <h2 className='text-lg font-bold mb-4'>Rekomendasi tindakan</h2>
              <div className='space-y-4'>
                <Recommendation
                  icon={Beras}
                  title="Atur pola tidur"
                  description="Cobalah mengatur pola tidur dan hindari aktivitas tidak perlu ketika jam tidur anda."
                />
                <Recommendation
                  icon={Beras}
                  title="Lakukan terapi musik sebelum tidur"
                  description="Dengarkan musik yang menenangkan untuk membantu tidur lebih nyenyak."
                />
                <Recommendation
                  icon={Beras}
                  title="Hindari udara buruk"
                  description="Pastikan lingkungan sekitar anda memiliki udara yang bersih dan segar."
                />
                <Recommendation
                  icon={Beras}
                  title="Minum air hangat saat bangun"
                  description="Minum air hangat di pagi hari untuk memulai hari dengan baik."
                />
              </div>
            </div>
          </>
        );
      case 'Bipolar':
        return (
          <>
            <h1 className='text-xl font-bold mb-2'>Mood kamu berubah-ubah :(</h1>
            <div className='mb-6'>
              <h2 className='text-lg font-bold mb-2'>Ringkasan</h2>
              <p>
                Mood anda berubah-ubah, kami berpikir bahwa anda mengalami perubahan emosi yang drastis.
                Anda mungkin mengalami masalah besar yang berpengaruh terhadap aktivitas sehari-hari anda.
                Hal ini adalah hal yang normal tetapi harus segera diatasi.
              </p>
            </div>
            <div>
              <h2 className='text-lg font-bold mb-4'>Rekomendasi tindakan</h2>
              <div className='space-y-4'>
                <Recommendation
                  icon={Beras}
                  title="Atur pola tidur"
                  description="Cobalah mengatur pola tidur dan hindari aktivitas tidak perlu ketika jam tidur anda."
                />
                <Recommendation
                  icon={Beras}
                  title="Lakukan terapi musik sebelum tidur"
                  description="Dengarkan musik yang menenangkan untuk membantu tidur lebih nyenyak."
                />
                <Recommendation
                  icon={Beras}
                  title="Hindari udara buruk"
                  description="Pastikan lingkungan sekitar anda memiliki udara yang bersih dan segar."
                />
                <Recommendation
                  icon={Beras}
                  title="Minum air hangat saat bangun"
                  description="Minum air hangat di pagi hari untuk memulai hari dengan baik."
                />
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className='w-full min-h-screen bg-white flex justify-center items-center p-6 pt-32 font-["Poppins"]'>
        <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-4xl'>
          <div className='flex flex-col lg:flex-row items-start mb-6'>
            {/* <Image src={Beras} className='w-60 h-60 rounded-full mr-6' /> */}
            <div className='pt-8 lg:pt-0'>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Recommendation = ({ icon, title, description }) => (
  <div className='flex items-start'>
    <div className='w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-4'>
      <Image src={icon} alt={title} className='w-8 h-8 rounded-full' />
    </div>
    <div>
      <h3 className='font-semibold'>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

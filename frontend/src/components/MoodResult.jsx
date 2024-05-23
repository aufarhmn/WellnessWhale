import React from 'react'
import Image from "next/image";
import Beras from "../assets/images/hero/beras.png";

export default function MoodResult() {
  return (
    <div className='w-full h-full bg-white flex justify-center items-center p-6 pt-32 font-["Poppins"]'>
      <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-4xl'>
        <div className='flex items-start mb-6'>
          <Image src={Beras} className='w-60 h-60 rounded-full mr-6'/>
          <div className='pt-8'>
            <h1 className='text-xl font-bold mb-2'>Mood kamu tidak baik :(</h1>
            <ul className='list-disc pl-4'>
              <li><strong>Nama:</strong> John Doe</li>
              <li><strong>Aktivitas terakhir:</strong> debat dengan rekan kerja</li>
              <li><strong>Keluhan mental:</strong> depresi dan kesal dengan orang sehingga tidak bisa tidur</li>
              <li><strong>Keluhan fisik:</strong> badan lemas, dan keringatan</li>
            </ul>
          </div>
        </div>
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
            <div className='flex items-start'>
              <div className='w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-4'>
                <Image src={Beras} className='w-8 h-8 rounded-full' />
              </div>
              <div>
                <h3 className='font-semibold'>Atur pola tidur</h3>
                <p>Anda dapat mencoba mengatur pola tidur dan hindari aktivitas tidak perlu ketika jam tidur anda</p>
              </div>
            </div>
            <div className='flex items-start'>
              <div className='w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-4'>
                <Image src={Beras} alt='Lakukan terapi musik sebelum tidur' className='w-8 h-8 rounded-full' />
              </div>
              <div>
                <h3 className='font-semibold'>Lakukan terapi musik sebelum tidur</h3>
                <p>Anda dapat mencoba mengatur pola tidur dan hindari aktivitas tidak perlu ketika jam tidur anda</p>
              </div>
            </div>
            <div className='flex items-start'>
              <div className='w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-4'>
                <Image src={Beras} alt='Hindari udara buruk' className='w-8 h-8 rounded-full' />
              </div>
              <div>
                <h3 className='font-semibold'>Hindari udara buruk</h3>
                <p>Anda dapat mencoba mengatur pola tidur dan hindari aktivitas tidak perlu ketika jam tidur anda</p>
              </div>
            </div>
            <div className='flex items-start'>
              <div className='w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-4'>
                <Image src={Beras} alt='Minum air hangat saat bangun' className='w-8 h-8 rounded-full' />
              </div>
              <div>
                <h3 className='font-semibold'>Minum air hangat saat bangun</h3>
                <p>Anda dapat mencoba mengatur pola tidur dan hindari aktivitas tidak perlu ketika jam tidur anda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

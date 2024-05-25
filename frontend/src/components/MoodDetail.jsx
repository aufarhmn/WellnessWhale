import React from 'react';
import Beras from "../assets/images/hero/beras.png";
import Image from 'next/image';

export default function MoodDetail() {
  return (
    <div className="h-screen container mx-auto p-4 pt-24 bg-white font-['Poppins']">
      <div className="border border-gray-300 rounded-lg p-6 mb-4">
        <div className="flex items-start">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Sabtu 24 Feb</h3>
            <p className="text-xl font-bold mb-2">Mood anda buruk</p>
            <p className="mb-4">Anda mengalami depresi, anxiety, dan mudah marah dengan apapun</p>

            <h4 className="font-semibold mb-2">Keluhan</h4>
            <ul className="list-disc list-inside mb-4">
              <li>Aktivitas terakhir: debat dengan rekan kerja</li>
              <li>Keluhan mental: depresi dan kesal dengan orang sehingga tidak bisa tidur</li>
              <li>Keluhan fisik: badan lemas, dan keringatan</li>
            </ul>

            <h4 className="font-semibold mb-2">Rekomendasi tindakan</h4>
            <div className="grid grid-cols-4 gap-4 mb-4">
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">Atur pola tidur</button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">Atur pola tidur</button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">Atur pola tidur</button>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">Atur pola tidur</button>
            </div>
          </div>
          <Image src={Beras} alt="Mood illustration" className="w-24 h-24 rounded-lg ml-4" />
        </div>
      </div>
      <div className="flex justify-between">
        <button className="border border-gray-300 text-gray-400 px-4 py-2 rounded-lg">Hari sebelumnya</button>
        <button className="bg-green-400 text-white px-4 py-2 rounded-lg">Hari selanjutnya</button>
      </div>
    </div>
  );
};

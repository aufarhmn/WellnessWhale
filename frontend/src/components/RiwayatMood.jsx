import React from 'react';
import Image from 'next/image';
import Beras from "../assets/images/hero/beras.png";

const data = [
  {
    week: "Minggu 8-14 Februari 2024",
    entries: [
      {
        date: "Sabtu 24 Feb",
        mood: "Mood anda buruk",
        description: "Anda mengalami depresi, anxiety, atau masalah mental dengan apapun",
      },
      {
        date: "Jumat 23 Feb",
        mood: "Mood anda buruk",
        description: "Anda mengalami depresi, anxiety, atau masalah mental dengan apapun",
      },
      {
        date: "Kamis 22 Feb",
        mood: "Mood anda buruk",
        description: "Anda mengalami depresi, anxiety, atau masalah mental dengan apapun",
      }
    ]
  },
  {
    week: "Minggu 1-7 Februari 2024",
    entries: [
      {
        date: "Senin 5 Feb",
        mood: "Mood anda buruk",
        description: "Anda mengalami depresi, anxiety, atau masalah mental dengan apapun",
      },
      {
        date: "Sabtu 3 Feb",
        mood: "Mood anda buruk",
        description: "Anda mengalami depresi, anxiety, atau masalah mental dengan apapun",
      }
    ]
  }
];

const MentalHealthHistory = () => {
  return (
    <div className="container mx-auto pt-32 px-20 bg-white">
      <h1 className="text-2xl font-bold mb-6">Riwayat kesehatan mentalmu</h1>
      {data.map((weekData, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{weekData.week}</h2>
          {weekData.entries.map((entry, entryIndex) => (
            <div key={entryIndex} className="flex items-center border border-gray-300 rounded-lg p-4 mb-4">
              <Image src={Beras} alt="entry" className="w-12 h-12 mr-4" />
              <div className="flex-1">
                <h3 className="font-medium">{entry.date}</h3>
                <p className="font-semibold">{entry.mood}</p>
                <p>{entry.description}</p>
              </div>
              <button className="bg-green-400 text-white px-4 py-2 rounded-lg">Detail</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MentalHealthHistory;

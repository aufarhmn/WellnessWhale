import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Beras from "../assets/images/hero/beras.png";
import axios from 'axios';

const formatDate = (dateString) => {
  const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat('id-ID', options).format(new Date(dateString));
};

const getWeekStart = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
};

const formatWeekRange = (date) => {
  const start = getWeekStart(date);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return `Minggu ${new Intl.DateTimeFormat('id-ID', options).format(start)} - ${new Intl.DateTimeFormat('id-ID', options).format(end)}`;
};

const groupByWeeks = (data) => {
  const groupedData = data.reduce((acc, entry) => {
    const weekStart = formatWeekRange(entry.date);
    if (!acc[weekStart]) {
      acc[weekStart] = [];
    }
    acc[weekStart].push(entry);
    return acc;
  }, {});

  return Object.keys(groupedData).map(week => ({
    week,
    entries: groupedData[week]
  }));
};

const MentalHealthHistory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/mood/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
    .then(response => {
      const formattedData = groupByWeeks(response.data);
      setData(formattedData);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  const handleSaveToLocalStorage = (entry) => {
    const moodData = {
      riwayatMood: entry.mood,
      riwayatDate: entry.date
    };
    localStorage.setItem('moodData', JSON.stringify(moodData));
    window.location.href = '/mood/detail';
  };

  return (
    <div className="h-max container mx-auto pt-32 px-4 lg:px-20 bg-white">
      <h1 className="text-2xl font-bold mb-6">Riwayat kesehatan mentalmu</h1>
      {data.map((weekData, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{weekData.week}</h2>
          {weekData.entries.map((entry, entryIndex) => (
            <div key={entryIndex} className="flex flex-col lg:flex-row items-start lg:items-center border border-gray-300 rounded-lg p-4 mb-4">
              <Image src={Beras} alt="entry" className="w-12 h-12 mr-4" />
              <div className="flex-1">
                <h3 className="font-medium">{formatDate(entry.date)}</h3>
                <p className="font-semibold">{entry.mood}</p>
              </div>
              <button
                className="bg-green-400 text-white px-4 py-2 rounded-lg mt-4 lg:mt-0 lg:ml-4"
                onClick={() => handleSaveToLocalStorage(entry)}
              >
                Detail
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MentalHealthHistory;

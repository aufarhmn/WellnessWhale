import React, { useState } from 'react';
import axios from 'axios';

export default function Mood() {
  const [formData, setFormData] = useState({
    mood: '',
    keluhan: '',
    fisik: '',
    aktivitas_terakhir: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authToken = localStorage.getItem('authToken');

      const response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + '/mood/',
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-green-100 flex justify-center items-center font-['Poppins'] p-4 pt-32">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h1 className="text-xl font-bold mb-4 text-center">Masukkan mood anda</h1>
          <p className="text-center mb-6">Dapatkan rekomendasi tindakan untuk memperbaiki mood anda</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="mood" className="block text-sm font-medium mb-2">Mood</label>
              <input
                type="text"
                id="mood"
                value={formData.mood}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="masukkan nama"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="keluhan" className="block text-sm font-medium mb-2">Ceritakan keluhan</label>
              <textarea
                id="keluhan"
                value={formData.keluhan}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="masukkan keluhan"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="fisik" className="block text-sm font-medium mb-2">Keluhan fisik</label>
              <textarea
                id="fisik"
                value={formData.fisik}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="masukkan keluhan"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="aktivitas_terakhir" className="block text-sm font-medium mb-2">Aktivitas terakhir</label>
              <textarea
                id="aktivitas_terakhir"
                value={formData.aktivitas_terakhir}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="masukkan aktivitas"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full p-4 bg-green-400 text-white font-bold rounded">Simpan</button>
          </form>
        </div>
      </div>
    </>
  );
}

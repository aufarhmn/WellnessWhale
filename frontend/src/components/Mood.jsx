import React from 'react'

export default function Mood() {
  return (
    <>
      <div className='w-full h-[950px] bg-green-100 flex justify-center items-center font-["Poppins"]'>
        <div className='bg-white p-6 rounded-lg shadow-md w-96'>
          <h1 className='text-xl font-bold mb-4 text-center'>Masukkan mood anda</h1>
          <p className='text-center mb-6'>Dapatkan rekomendasi tindakan untuk memperbaiki mood anda</p>
          <form>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>Mood</label>
              <input type='text' id='nama' className='w-full p-2 border border-gray-300 rounded' placeholder='masukkan nama' required />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>Ceritakan keluhan</label>
              <textarea id='keluhan' className='w-full p-2 border border-gray-300 rounded' placeholder='masukkan keluhan' required></textarea>
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>Keluhan fisik</label>
              <textarea id='keluhanFisik' className='w-full p-2 border border-gray-300 rounded' placeholder='masukkan keluhan' required></textarea>
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>Aktivitas terakhir</label>
              <textarea id='aktivitas' className='w-full p-2 border border-gray-300 rounded' placeholder='masukkan aktivitas' required></textarea>
            </div>
            <button type='submit' className='w-full p-2 bg-green-400 text-white font-bold rounded'>Simpan</button>
          </form>
        </div>
      </div>
    </>
  )
}

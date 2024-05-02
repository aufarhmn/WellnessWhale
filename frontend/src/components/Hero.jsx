import React from 'react'
import Image from 'next/image'
import Woman from '../assets/images/hero/woman.png'

export default function Hero() {
  return (
    <>
      <div className='pt-24 flex flex-row bg-green-400 w-full h-[720px] font-["Poppins"]'>
        <div className='w-full h-full flex flex-col px-20 py-20'>
          <div className='w-full h-full flex flex-col-reverse'>
            <div className='w-fit h-fit bg-white rounded-[10px]'>
                <p className='px-[15px] py-[10px] font-bold'> #MentalAman </p>
            </div>
          </div>
          <div className='w-full h-full'>
            <p className='text-white font-bold text-[55px] mt-2'>Konsultasi Mudah</p>
            <p className='text-white font-bold text-[56px] mt-2'>dan Murah</p>
            <p className='text-white text-[16px] mt-2'>Cek psikolog terbaik kami dan jadwalkan konsultasi untuk</p>
            <p className='text-white text-[16px] mt-2'>mental yang lebih baik</p>
          </div>
          <div className='w-full h-full'>
            <button className='font-bold text-green-400 w-1/2 h-3/2 mt-4 bg-white rounded-[10px] px-[10px] py-[10px]'>
              {' '}
              List Psikolog{' '}
            </button>
          </div>
        </div>

        <div className='w-full h-full flex flex-row items-center justify-center'>
          <Image src={Woman} width={454} height={446} />
        </div>
      </div>
    </>
  )
}

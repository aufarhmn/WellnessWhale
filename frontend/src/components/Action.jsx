import React from 'react'
import Image from 'next/image'
import Sport from '../assets/images/action/sport.png'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Action() {
  return (
    <>
      <div className='w-full h-[900px] bg-white flex flex-row py-32'>
        <div className='w-4/5 h-full '>
            <Image className="h-full w-full" src={Sport} width={600} height={400}/>
        </div>
        <div className='w-full h-full flex flex-col px-20'>
            <div className='w-full h-full font-["Poppins"] my-4 flex flex-col justify-end gap-2'>
                <p className='font-bold text-[56px]'>Rekomendasi Tindakan</p>
                <p className='text-[21px]'>Cek keadaanmu sekarang dan dapatkan rekomendasi pencegahan penyakit mental</p>
            </div>
            <div className='w-full h-full flex flex-row'>
                {/* <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    >
                <SwiperSlide> 
                    <div className='w-[200px] h-[200px] bg-green-400 rounded-[12px]'>
                        <p className='text-white text-[20px] font-bold'>Sport</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide> 
                    <div className='w-[200px] h-[200px] bg-green-400 rounded-[12px]'>
                        <p className='text-white text-[20px] font-bold'>Sport</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide> 1 </SwiperSlide>
                </Swiper> */}
            </div>
            <div className='w-full h-min mb-10'>
                <button className='px-24 py-6 bg-green-400 rounded-[12px]'>
                    <p className='text-white text-[20px] font-bold'>Masukan Mood</p>
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

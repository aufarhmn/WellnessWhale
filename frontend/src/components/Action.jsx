import React from "react";
import Image from "next/image";
import Sport from "../assets/images/action/sport.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Action() {
  return (
    <div className="w-full bg-white flex flex-col md:flex-row md:items-center py-8">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="max-w-md md:max-w-lg">
          <Image src={Sport} alt="Sport" width={600} height={400} />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:px-8 mt-8 md:mt-0">
        <div className="text-center md:text-left mb-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            Rekomendasi Tindakan
          </h1>
          <p className="text-lg md:text-xl">
            Cek keadaanmu sekarang dan dapatkan rekomendasi pencegahan penyakit
            mental
          </p>
        </div>
        <div className="w-full flex justify-center md:justify-start mb-8">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="max-w-lg"
          >
            <SwiperSlide>
              <div className="w-48 md:w-56 h-64 bg-green-400 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg md:text-xl font-bold">Sport</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-48 md:w-56 h-64 bg-green-400 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg md:text-xl font-bold">Sport</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-48 md:w-56 h-64 bg-green-400 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg md:text-xl font-bold">Sport</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-48 md:w-56 h-64 bg-green-400 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg md:text-xl font-bold">Sport</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-48 md:w-56 h-64 bg-green-400 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg md:text-xl font-bold">Sport</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mb-10">
          <button className="px-8 py-4 bg-green-400 rounded-lg">
            <p className="text-white text-lg font-bold">Masukan Mood</p>
          </button>
        </div>
      </div>
    </div>
  );
}

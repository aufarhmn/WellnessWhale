import React from "react";
import Image from "next/image";
import Sport from "../assets/images/action/sport.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";

import Lari from "../assets/images/action/lari.png";
import Buah from "../assets/images/action/buah.png";
import Minum from "../assets/images/action/minum.png";
import off from "../assets/images/action/off-phone.png";

import "swiper/css";
import "swiper/css/pagination";

export default function Action() {
  return (
    <div className="w-full my-24 bg-white flex flex-col md:flex-row md:items-center py-8">
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
            slidesPerView={2}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="max-w-lg"
          >
            <SwiperSlide>
              <div className="w-48 md:w-56 h-64 bg-green-400 rounded-lg flex flex-col items-center justify-center">
                <Image src={Lari} alt="Sport" width={100} height={100} />
                <p className="text-white text-lg md:text-xl font-bold">Lari</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-48 md:w-56 h-64 bg-green-400 rounded-lg flex flex-col items-center justify-center">
                <Image src={Buah} alt="Buah" width={100} height={100} />
                <p className="text-white text-lg md:text-xl font-bold">Makan Buah</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-48 md:w-56 h-64 bg-green-400 rounded-lg flex flex-col items-center justify-center">
                <Image src={Minum} alt="Sport" width={100} height={100} />
                <p className="text-white text-lg md:text-xl font-bold">Minum Air</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-48 md:w-56 h-64 bg-green-400 rounded-lg flex flex-col items-center justify-center">
                <Image src={off} alt="Sport" width={100} height={100} />
                <p className="text-white text-lg md:text-xl font-bold">Off Sosmed</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mb-10">
          <Link href="/mood">
            <button className="px-8 py-4 bg-green-400 rounded-lg">
              <p className="text-white text-lg font-bold">Masukan Mood</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

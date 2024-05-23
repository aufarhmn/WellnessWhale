import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import Image from "next/image";
import Beras from "../../assets/images/hero/beras.png";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

export default function ArticleOption() {
  return (
    <>
      <div className="flex flex-col w-full h-auto px-24 py-12">
        <div className="w-full h-fit">
          <p className="font-['Poppins'] text-[36px] font-semibold">
            Artikel Interaktif
          </p>
        </div>
        <div className="w-full h-fit">
          <Swiper
            slidesPerView={1}
            grid={{
              rows: 3,
              fill: "row"
            }}
            spaceBetween={10}
            pagination={{
              clickable: true
            }}
            modules={[Grid, Pagination]}
          >
            <SwiperSlide>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-row items-center justify-around border rounded-lg px-8 py-8">
                  <p className="font-['Poppins'] text-[20px] font-semibold">
                    Relaksasi dengan air beras
                  </p>
                  <Image src={Beras} className="rounded-full w-24 h-24" />
                </div>
                <div className="flex flex-row items-center justify-around border rounded-lg px-8 py-8">
                  <p className="font-['Poppins'] text-[20px] font-semibold">
                    Relaksasi dengan air beras
                  </p>
                  <Image src={Beras} className="rounded-full w-24 h-24" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-row items-center justify-around border rounded-lg px-8 py-8">
                  <p className="font-['Poppins'] text-[20px] font-semibold">
                    Relaksasi dengan air beras
                  </p>
                  <Image src={Beras} className="rounded-full w-24 h-24" />
                </div>
                <div className="flex flex-row items-center justify-around border rounded-lg px-8 py-8">
                  <p className="font-['Poppins'] text-[20px] font-semibold">
                    Relaksasi dengan air beras
                  </p>
                  <Image src={Beras} className="rounded-full w-24 h-24" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-row items-center justify-around border rounded-lg px-8 py-8">
                  <p className="font-['Poppins'] text-[20px] font-semibold">
                    Relaksasi dengan air beras
                  </p>
                  <Image src={Beras} className="rounded-full w-24 h-24" />
                </div>
                <div className="flex flex-row items-center justify-around border rounded-lg px-8 py-8">
                  <p className="font-['Poppins'] text-[20px] font-semibold">
                    Relaksasi dengan air beras
                  </p>
                  <Image src={Beras} className="rounded-full w-24 h-24" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

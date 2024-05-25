import React from "react";
import Image from "next/image";
import Article1 from "../assets/images/hero/Article.png";
import Gerd from "../assets/images/article/gerd.png";
import Obat from "../assets/images/article/obat.png";
import Kantuk from "../assets/images/article/kantuk.png";
import Link from "next/link";

export default function Article() {
  return (
    <>
      <div className="flex flex-col w-full h-auto bg-white">
        <div className="w-full h-auto flex flex-col justify-center items-center font-['Poppins'] p-4">
          <p className="text-[24px] md:text-[36px] font-bold">Artikel Kami</p>
          <p className="text-[16px] md:text-[20px] pt-4 text-center">
            Anda bisa membaca artikel edukasi dan artikel interaktif untuk
            pengetahuan
          </p>
          <p className="text-[16px] md:text-[20px] text-center">
            anda tentang solusi dari keluhan anda
          </p>
        </div>
        <div className="w-full h-auto flex flex-row justify-between items-center px-4 md:px-24 mt-4">
          <p className="text-[24px] md:text-[36px] font-bold">Edukasi</p>
          <Link href="/article">
            <button className="border-2 px-4 py-2 rounded-[20px] border-green-400 text-sm md:text-base">
              Selengkapnya
            </button>
          </Link>
        </div>
        <div className="w-full h-max flex flex-col md:flex-row mt-4 px-4 md:px-24 space-y-4 md:space-y-0 md:space-x-4">
          <div className="h-full w-full bg-white flex flex-col px-2">
            <div className="w-full h-fit">
              <Image src={Article1} className="aspect-auto" alt="Article 1" />
            </div>
            <div className="w-full h-fit mt-4 md:mt-8">
              <p className="font-bold font-['Poppins'] text-[20px] md:text-[26px]">
                Solusi susah tidur
              </p>
              <p className="font-['Poppins'] text-[16px] md:text-[20px]">
                Berikut adalah penjelasan bagaimana anda bisa susah...
              </p>
            </div>
          </div>
          <div className="h-full w-full bg-white flex flex-col px-2">
            <div className="w-full h-fit">
              <Image src={Gerd} className="aspect-auto" alt="Gerd" />
            </div>
            <div className="w-full h-fit mt-4 md:mt-8">
              <p className="font-bold font-['Poppins'] text-[20px] md:text-[26px]">
                Solusi susah tidur
              </p>
              <p className="font-['Poppins'] text-[16px] md:text-[20px]">
                Berikut adalah penjelasan bagaimana anda bisa susah...
              </p>
            </div>
          </div>
          <div className="h-full w-full bg-white flex flex-col px-2">
            <div className="w-full h-fit">
              <Image src={Obat} className="aspect-auto" alt="Obat" />
            </div>
            <div className="w-full h-fit mt-4 md:mt-8">
              <p className="font-bold font-['Poppins'] text-[20px] md:text-[26px]">
                Solusi susah tidur
              </p>
              <p className="font-['Poppins'] text-[16px] md:text-[20px]">
                Berikut adalah penjelasan bagaimana anda bisa susah...
              </p>
            </div>
          </div>
          <div className="h-full w-full bg-white flex flex-col px-2">
            <div className="w-full h-fit">
              <Image src={Kantuk} className="aspect-auto" alt="Kantuk" />
            </div>
            <div className="w-full h-fit mt-4 md:mt-8">
              <p className="font-bold font-['Poppins'] text-[20px] md:text-[26px]">
                Solusi susah tidur
              </p>
              <p className="font-['Poppins'] text-[16px] md:text-[20px]">
                Berikut adalah penjelasan bagaimana anda bisa susah...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

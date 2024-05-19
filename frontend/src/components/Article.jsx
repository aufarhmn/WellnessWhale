import React from "react";
import Image from "next/image";
import Article1 from "../assets/images/hero/Article.png";

export default function Article() {
  return (
    <>
      <div className="flex flex-col w-full h-[700px] bg-white">
        <div className="w-full h-[150px] flex flex-col justify-center items-center font-['Poppins']">
          <p className="text-[36px] font-bold"> Artikel Kami </p>
          <p className="text-[20px] pt-4">
            {" "}
            Anda bisa membaca artikel edukasi dan artikel interaktif untuk
            pengetahuan{" "}
          </p>
          <p className="text-[20px]">anda tentang solusi dari keluhan anda</p>
        </div>
        <div className="w-full h-[70px] flex flex-row justify-between items-center px-24 mt-4">
          <p className="text-[36px] font-bold"> Edukasi </p>
          <button className="border-2 px-4 py-2 rounded-[20px] border-green-400">
            {" "}
            Selengkapnya{" "}
          </button>
        </div>
        <div className="w-full h-max flex flex-row mt-4 px-24">
          <div className="h-full w-full bg-white flex flex-col px-2">
            <div className="w-full h-fit">
              <Image src={Article1} className="aspect-auto" />
            </div>
            <div className="w-full h-fit mt-8">
              <p className="font-bold font-['Poppins'] text-[26px]">
                {" "}
                Solusi susah tidur{" "}
              </p>
              <p className="font-['Poppins'] text-[20px]">
                {" "}
                Berikut adalah penjelasan bagaimana anda bisa susah...{" "}
              </p>
            </div>
          </div>
          <div className="h-full w-full bg-white flex flex-col px-2">
            <div className="w-full h-fit">
              <Image src={Article1} className="aspect-auto" />
            </div>
            <div className="w-full h-fit mt-8">
              <p className="font-bold font-['Poppins'] text-[26px]">
                {" "}
                Solusi susah tidur{" "}
              </p>
              <p className="font-['Poppins'] text-[20px]">
                {" "}
                Berikut adalah penjelasan bagaimana anda bisa susah...{" "}
              </p>
            </div>
          </div>
          <div className="h-full w-full bg-white flex flex-col px-2">
            <div className="w-full h-fit">
              <Image src={Article1} className="aspect-auto" />
            </div>
            <div className="w-full h-fit mt-8">
              <p className="font-bold font-['Poppins'] text-[26px]">
                {" "}
                Solusi susah tidur{" "}
              </p>
              <p className="font-['Poppins'] text-[20px]">
                {" "}
                Berikut adalah penjelasan bagaimana anda bisa susah...{" "}
              </p>
            </div>
          </div>
          <div className="h-full w-full bg-white flex flex-col px-2">
            <div className="w-full h-fit">
              <Image src={Article1} className="aspect-auto" />
            </div>
            <div className="w-full h-fit mt-8">
              <p className="font-bold font-['Poppins'] text-[26px]">
                {" "}
                Solusi susah tidur{" "}
              </p>
              <p className="font-['Poppins'] text-[20px]">
                {" "}
                Berikut adalah penjelasan bagaimana anda bisa susah...{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

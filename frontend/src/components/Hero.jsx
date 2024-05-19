import React from "react";
import Image from "next/image";
import Woman from "../assets/images/hero/woman.png";

export default function Hero() {
  return (
    <>
      <div className='pt-24 flex flex-col lg:flex-row bg-green-400 w-full h-auto lg:h-[720px] font-["Poppins"]'>
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-6 lg:px-20 py-20">
          <div className="w-full max-w-max bg-white rounded-[10px]">
            <p className="px-[15px] py-[10px] font-bold"> #MentalAman </p>
          </div>
          <div className="mt-8">
            <p className="text-white font-bold text-[30px] lg:text-[55px] mt-2">
              Konsultasi Mudah
            </p>
            <p className="text-white font-bold text-[30px] lg:text-[56px] mt-2">
              dan Murah
            </p>
            <p className="text-white text-[14px] lg:text-[16px] mt-2">
              Cek psikolog terbaik kami dan jadwalkan konsultasi untuk
            </p>
            <p className="text-white text-[14px] lg:text-[16px] mt-2">
              mental yang lebih baik
            </p>
          </div>
          <div className="mt-8">
            <button className="font-bold text-green-400 w-full lg:w-1/2 h-[50px] lg:h-[3.5rem] mt-4 bg-white rounded-[10px] px-[10px] py-[10px]">
              {" "}
              List Psikolog{" "}
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[300px] lg:h-full flex items-center justify-center">
          <Image src={Woman} width={300} height={300} />{" "}
        </div>
      </div>
    </>
  );
}

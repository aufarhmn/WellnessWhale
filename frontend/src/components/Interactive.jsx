import React from "react";
import Image from "next/image";
import Beras from "../assets/images/hero/beras.png";

export default function interactive() {
  return (
    <>
      <div className="flex flex-col w-full h-[450px] bg-white mt-8 mb-12">
        <div className="w-full h-[70px] flex flex-row justify-between items-center px-24 mt-4">
          <p className="text-[36px] font-bold"> Edukasi </p>
          <button className="border-2 px-4 py-2 rounded-[20px] border-green-400">
            {" "}
            Selengkapnya{" "}
          </button>
        </div>
        <div className="flex flex-row w-full h-full mt-4 px-20 py-2">
            <div className="w-1/2 h-full bg-white border-4 border-green-400 rounded-[18px] mx-4 flex flex-row justify-center items-center">
                <p className="w-1/2 font-['Poppins'] font-semibold text-[36px] mx-8 my-8">
                    Relaksasi dengan Air Beras
                </p>
                <Image src={Beras} className="w-min aspect-square" width={180}/>
            </div>
            <div className="w-1/2 h-full bg-white border-4 border-green-400 rounded-[18px] mx-4 flex flex-row justify-center items-center">
                <p className="w-1/2 font-['Poppins'] font-semibold text-[36px] mx-8 my-8">
                    Relaksasi dengan Air Beras
                </p>
                <Image src={Beras} className="w-min aspect-square" width={180}/>
            </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Beras from "../assets/images/hero/beras.png";
import Latsol from "../assets/images/article/latsol.png";

export default function Interactive() {
  return (
    <>
      <div className="flex flex-col w-full bg-white mt-8 mb-12">
        <div className="w-full px-6 py-4 lg:px-24 lg:py-6 flex flex-row justify-between items-center">
          <p className="text-xl lg:text-3xl font-bold">Edukasi</p>
          <Link href="/article">
            <button className="border-2 px-4 py-2 rounded-[20px] border-green-400">
              Selengkapnya
            </button>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row w-full px-6 lg:px-20 py-2">
          <div className="w-full lg:w-1/2 lg:mx-4 flex flex-col justify-center items-center mb-4 lg:mb-0">
            <Link href="/article/1">
              <div className="w-full h-[300px] lg:h-[250px] bg-white border-4 border-green-400 rounded-[18px] flex flex-row justify-between items-center">
                <div className="text-center px-12 lg:text-left w-[70%]">
                  <p className="text-lg lg:text-[32px] font-semibold my-2">
                    Relaksasi dengan Air Beras
                  </p>
                </div>
                <div className="w-[30%]">
                  <Image
                    src={Beras}
                    className="aspect-square"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full lg:w-1/2 lg:mx-4 flex flex-col justify-center items-center">
            <Link href="/article/2">
              <div className="w-full h-[300px] lg:h-[250px] bg-white border-4 border-green-400 rounded-[18px] flex flex-row justify-between items-center">
                <div className="text-center px-12 lg:text-left w-[70%]">
                  <p className="text-lg lg:text-[32px] font-semibold my-2">
                    Meditasi dengan Air Hujan
                  </p>
                </div>
                <div className="w-[30%]">
                  <Image
                    src={Latsol}
                    className="aspect-square"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

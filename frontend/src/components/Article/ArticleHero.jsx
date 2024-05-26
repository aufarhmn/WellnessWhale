import React from "react";
import Image from "next/image";
import Hero from "../../assets/images/article/ArticleHero.png";

export default function ArticleHero() {
  return (
    <>
      <div className="relative w-full h-screen pt-20 overflow-hidden">
        <Image src={Hero} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold font-poppins">
            Therapy Mental Health
          </h1>
        </div>
      </div>
    </>
  );
}

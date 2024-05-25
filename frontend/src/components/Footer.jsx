import React from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <div className='bg-green-400 text-white font-["Poppins"]'>
      <div className="container mx-auto flex flex-col lg:flex-row py-8 px-12">
        <div className="flex-1 px-4 lg:px-0">
          <div className="flex justify-center lg:justify-start">
            <Image src="/Logo-White.png" width={200} height={44} alt="Logo" />
          </div>
          <p className="text-center lg:text-left text-lg lg:text-xl mt-4">
            Tingkatkan kesehatan mental dengan mudah
          </p>
          <div className="flex justify-center lg:justify-start mt-4 lg:mt-6">
            <p className="text-lg lg:text-xl font-bold mr-4">Follow us</p>
            <div className="flex space-x-4">
              <AiFillInstagram className="text-orange-100 text-xl" />
              <FaFacebook className="text-orange-100 text-xl" />
              <FaLinkedin className="text-orange-100 text-xl" />
              <IoLogoWhatsapp className="text-orange-100 text-xl" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-y-0">
            <div className="text-center">
              <p className="font-bold text-xl">Tentang</p>
              <p>Perusahaan</p>
              <p>Blog</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl">Produk</p>
              <p>Ringkasan</p>
              <p>Fitur</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl">Bantuan</p>
              <p>Syarat dan Ketentuan</p>
              <p>Kebijakan Privasi</p>
              <p>Kontak</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-200 py-4 text-center">
        <p className="text-white text-sm lg:text-base">
          Copyright 2024 - Wellnes Whale All Rights Reserved
        </p>
      </div>
    </div>
  );
}

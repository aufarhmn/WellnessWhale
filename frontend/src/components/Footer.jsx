import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaLinkedin   } from 'react-icons/fa'
import { AiFillInstagram } from "react-icons/ai"
import { IoLogoWhatsapp } from "react-icons/io"

export default function Footer() {
  return (
    <>
      <div className='flex flex-col w-full h-[420px] bg-green-400'>
        <div className='w-full h-[330px] flex flex-row'>
          <div className='w-4/5 h-full flex flex-col'>
            <div className='flex flex-col justify-center pl-12'>
              <Image
                src='/Logo-White.png'
                className='aspect-auto w-1/2 pt-14'
                width={200}
                height={44}
              />
              <div className='w-full h-full'>
                <p className="text-white font-['Poppins'] pt-4 text-[20px]">
                  {' '}
                  Tingkatkan kesehatan mental dengan mudah{' '}
                </p>
              </div>
              <div className='flex flex-row pt-10 justify-start gap-10 w-full '>
                <p className="text-white text-[20px] font-['Poppins'] font-bold">
                  {' '}
                  Follow us{' '}
                </p>
                <div className='bg-white h-[40px] rounded-[20px]'>
                  <AiFillInstagram  className='text-orange-100 text-[20px] mx-2 my-2' />
                </div>
                <div className='bg-white rounded-[20px]'>
                  <FaFacebook  className='text-orange-100 text-[20px] mx-2 my-2' />
                </div>
                <div className='bg-white rounded-[20px]'>
                  <FaLinkedin className='text-orange-100 text-[20px] mx-2 my-2' />
                </div>
                <div className='bg-white rounded-[20px]'>
                  <IoLogoWhatsapp className='text-orange-100 text-[20px] mx-2 my-2' />
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-full bg-white flex flex-row font-["Poppins"] text-[20px]'>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <p className='font-bold text-[24px]'> Tentang </p>
                <p> Perusahaan </p>
                <p> Blog </p>
            </div>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <p className='font-bold text-[24px]'> Produk </p>
                <p> Ringkasan </p>
                <p> Fitur </p>
            </div>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <p className='font-bold text-[24px]'> Bantuan </p>
                <p> Syarat dan Ketentuan </p>
                <p> Kebijakan Privasi </p>
                <p> Kontak </p>
            </div>
          </div>
        </div>
        <div className='bg-green-200 w-full h-[90px] flex flex-row items-center justify-center'>
          <p className="text-white font-['Poppins'] text-[18px]">
            Copyright 2024 - Wellnes Whale All Rights Reserved
          </p>
        </div>
      </div>
    </>
  )
}

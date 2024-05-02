import React from 'react'
import Image from 'next/image'
import Woman from '../assets/images/hero/woman.png'

export default function Hero() {
  return (
    <>
      <div className='pt-24 flex flex-row bg-green-400 w-full h-[720px]'>
        <div className='w-full h-full flex flex-col px-20 py-20'>
          <div className='w-full h-full flex flex-col-reverse'>
            <div className='w-fit h-fit bg-white rounded-[10px]'>
                <p className='px-[15px] py-[10px] font-bold'> #MentalAman </p>
            </div>
          </div>
          <div className='w-full h-full'>
            
          </div>
           
          <div className='w-full h-full'>
            
          </div>
        </div>

        <div className='w-full h-full flex flex-row items-center justify-center'>
          <Image src={Woman} width={454} height={446} />
        </div>
      </div>
    </>
  )
}

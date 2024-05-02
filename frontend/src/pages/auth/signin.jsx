import React from 'react'
import Image from 'next/image'
import Actor from '../../assets/images/signin/actor.png'

export default function Signin() {
  return (
    <main>
      <div className='w-screen justify-center items-center flex flex-row font-["Poppins"]'>
        <div className='flex flex-col justify-stretch justify-items-center h-screen w-1/2 bg-white gap-4'>
          <div className='w-full h-full'>
            <div className='flex flex-row justify-center py-10'>
              <Image src='/Logo.png' width={272} height={44} />
            </div>
          </div>
          <div className='w-full h-min flex flex-col px-20'>
            <div className='w-full h-3/2'>
              <p className='text-[35px] font-bold'> Welcome back! </p>
              <p className='text-l'> Start your journey again! </p>
            </div>
            <div className=''>
              <p className='font-bold text-xl py-3'> Email </p>
              <input
                type='email'
                placeholder='Email'
                className='border-2 border-black rounded-lg w-full h-12'
              />
              <p className='font-bold text-xl py-3'> Password </p>
              <input
                type='text'
                placeholder='Password'
                className='border-2 border-black rounded-lg w-full h-12'
              />
            </div>
          </div>
          <div className='w-full h-full'>
            <div className='flex flex-row justify-center py-4'>
              <button className='bg-green-400 w-1/2 h-12 rounded-lg text-white'>
                {' '}
                Sign In{' '}
              </button>
            </div>
            <div>
              <p className='text-center'>
                {' '}
                Don't have an account?{' '}
                <a href='/signup' className='text-orange-100'>
                  {' '}
                  Sign Up{' '}
                </a>{' '}
              </p>
            </div>
          </div>
        </div>
        <div className='h-screen w-1/2 bg-green-400 justify-center flex items-center flex-row'>
          <div className='h-3/4 w-3/4 mx-10 my-10 bg-white bg-opacity-40 rounded-[30px] flex flex-col px-10 py-10'>
            <div>
              <p className='text-white text-[36px]'> Pantau Terus Mood, </p>
              <p className='text-white text-[36px]'> Ciptakan Dunia Yang </p>
              <p className='text-white text-[36px]'> Indah! </p>
            </div>
            {/* <div className='h-full w-full flex flex-row justify-center'>
              <Image src={Actor} className="h-min w-min" />
            </div> */}
          </div>
        </div>
      </div>
    </main>
  )
}

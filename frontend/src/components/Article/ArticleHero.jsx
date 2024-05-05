import React from 'react'
import Image from 'next/image'
import Hero from '../../assets/images/article/ArticleHero.png'

export default function ArticleHero() {
  return (
    <>
      <div className='w-full h-min pt-20'>
        <Image src={Hero} className="aspect-video"/>
      </div>
    </>
  )
}

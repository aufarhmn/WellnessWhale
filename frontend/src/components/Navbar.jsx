import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <>
      <nav className='bg-white px-[30px] py-[29px] w-full fixed h-fit flex items-center justify-between z-[999]'>
          <Link href='/'>
            <Image src='/Logo.png' width={272} height={44} />
          </Link>
        <div className='flex self-center gap-[32px] text-gray-100'>
          <Link href='/'>Konsultasi</Link>
          <Link href='/'>Artikel</Link>
          <Link href='/'>Riwayat</Link>
        </div>
        <div className='w-[272px] flex flex-row-reverse'>
          <Link href='/'>
            <Image src='/Profile.png' width={50} height={50} />
          </Link>
        </div>
      </nav>
    </>
  )
}

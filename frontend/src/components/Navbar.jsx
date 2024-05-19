import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white px-[30px] py-[20px] w-full fixed h-fit flex flex-wrap items-center justify-between z-[999]">
        <Link href="/">
          <Image src="/Logo.png" width={272} height={44} />
        </Link>
        <div className="flex flex-wrap items-center gap-[32px] text-gray-100">
          <Link href="/">Konsultasi</Link>
          <Link href="/">Artikel</Link>
          <Link href="/">Riwayat</Link>
        </div>
        <div className="flex items-center">
          <Link href="/">
            <Image src="/Profile.png" width={50} height={50} />
          </Link>
        </div>
      </nav>
    </>
  );
}

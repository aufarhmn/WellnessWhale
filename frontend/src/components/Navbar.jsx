import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.reload();
  };

  return (
    <>
      <nav className="bg-white px-[30px] py-[20px] w-full fixed h-fit flex flex-wrap items-center justify-between z-[999]">
        <Link href="/">
          <Image src="/Logo.png" width={272} height={44} alt="Logo" />
        </Link>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-100 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`w-full md:flex md:items-center md:gap-[32px] ${isOpen ? 'block' : 'hidden'} md:w-auto`}>
          <div className="flex flex-col md:flex-row md:items-center gap-[32px] text-gray-100">
            <Link href="/">Konsultasi</Link>
            <Link href="/">Artikel</Link>
            <Link href="/">Riwayat</Link>
          </div>
          <div className="relative flex items-center mt-4 md:mt-0">
            <button onClick={toggleProfileMenu} className="focus:outline-none">
              <Image src="/Profile.png" width={50} height={50} alt="Profile" />
            </button>
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1 z-10">
                <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Profile
                </Link>
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

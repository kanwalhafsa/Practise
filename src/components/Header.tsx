import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Header  ()  {
 
  return (
<div>
        <header className="bg-[#F5F5F5] border-b font-[Helvetica Neue] flex justify-between items-center px-10 py-2">
 {/* Logo Section */}
 <div className='flex w-42px h-24px mt-6px ml-48px'>
 <Image 
 src="/images/img1.png"
  alt="Logo 1"
  width={19}
  height={18} 
  className="object-contain"/></div>

    
    {/* Links Section */}
    <nav>
      <ul className="flex items-center space-x-3 text-black text-[11px] font-medium">
        <li>
          <Link href="/store">Find a Store</Link>
        </li>
        <span className="h-[14px] w-px bg-gray-400" />
        <li>
          <Link href="/help">Help</Link>
        </li>
        <span className="h-[14px] w-px bg-gray-400" />
        <li>
          <Link href="/joinus">Join Us</Link>
        </li>
        <span className="h-[14px] w-px bg-gray-400" />
        <li>
                <Link href="/signIn">Sign In</Link>
              </li>
            </ul>
          </nav>
      </header>
      {/* Main navbar */}
    
    <header className="bg-white border-b shadow-sm">
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 md:px-8 py-2">
        {/* Logo */}
        <div className='flex w-78.47px h-78.47 mt-8.74 ml-38.26px'>
        <Image
         src="/images/img2.png" 
         alt="Logo 2"
         width={59} 
         height={20}
         className="object-contain" /></div>

        {/* Navigation Links (hidden on mobile) */}
        <nav className="hidden md:flex space-x-6 items-center font-medium">
        <a href="/shop" className="text-black hover:underline">
            New & Features
          </a>
          <a href="/men" className="text-black hover:underline">
            Men
          </a>
          <a href="/women" className="text-black hover:underline">
            Women
          </a>
          <a href="/kids" className="text-black hover:underline">
            Kids
          </a>
          <a href="/shopAirMax" className="text-black hover:underline">
            SNKRS
          </a>
        </nav>

  {/* Search and Icons */}
  <div className="flex items-center space-x-4">
          {/* Search Bar (hidden on small screens) */}
          <div className="flex items-center bg-slate-100 rounded-full px-3 py-1">
            <CiSearch className="text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm flex-grow pl-2"
            />
          </div>

          {/* Icons */}
          <Link href="/wishlist"><FaRegHeart className="text-black text-lg" /></Link>
          {/* <Image src={Bag} alt="Bag Icon" className="w-6 h-6" /> */}
          <Link href="/addtoCart"><IoBagOutline className="text-black "/></Link> 
        </div>
        {/* Mobile Menu (visible only on small screens) */}
        <button className="md:hidden text-black text-lg">
       Menu   <GiHamburgerMenu />
      
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className="md:hidden bg-white w-full px-4 py-3 hidden" id="mobile-menu">
        <a href="#" className="block text-black py-1 hover:underline">
          New & Features
        </a>
        <a href="#" className="block text-black py-1 hover:underline">
          Men
        </a>
        <a href="#" className="block text-black py-1 hover:underline">
          Women
        </a>
        <a href="#" className="block text-black py-1 hover:underline">
          Kids
        </a>
        <a href="#" className="block text-black py-1 hover:underline">
          SNKRS
        </a>
      </div>
    </header>
    </div>
 )
};







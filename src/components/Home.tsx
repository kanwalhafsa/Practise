
import Image from 'next/image'
import React from 'react'
import Link from "next/link"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Home = () => {
  return (
    <div className="md:max-w-full h-auto bg-white">
      <div className="md:max-w-full text-center bg-gray-100 py-2">
        <p className="text-lg text-black">Hello Nike App</p>
        <p className="text-gray-600">
          Download the app to access everything Nike. <span className="text-black underline">Get Your Great</span>
        </p>
      </div>

      {/* Hero Section */}
      <div className="flex justify-center px-4 md:px-10 bg-white">
        <Image
          src="/images/shoeImg.png"
          alt="shoes banner"
          width={1344}
          height={700}
          className="object-cover w-full h-auto"
        />
      </div>

      <div className="text-center text-black mt-8 md:mt-16 bg-white">
        <span className="font-semibold text-sm md:text-lg lg:text-xl">First Look</span>
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-semibold uppercase text-black mt-2">Nike Air Max Pulse</h1>
        <p className="mt-4 text-sm md:text-base">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />—designed to push you past your limits and help you go to the max.
        </p>

        <div className="flex items-center justify-center mt-8 gap-4 mb-20">
          <button className="hover:scale-90 px-4 py-2 text-white bg-black rounded-full w-32 md:w-40 h-10">
            Notify Me
          </button>
          <Link href="/shopAirMax" className="hover:scale-90 px-4 py-2 text-white bg-black rounded-full w-32 md:w-40 h-10">
            Shop Air Max
            </Link>
        </div>
      </div>
      <div className="mt-16 md:mt-28 px-4 md:px-10 lg:px-16">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Best of Air Max</h2>
          <div className="flex items-center gap-3">
          <Link href="/shopAirMax">Shop</Link>
            <button className="p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800">
              <ChevronLeft />
            </button>
            <button className="p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Shoes List */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-24">
          {[
            { src: "/images/shoe1.png", name: "Nike Air Max Pulse", price: "₹ 13 995", category: "Women's Shoes" },
            { src: "/images/shoe2.png", name: "Nike Air Max Pulse", price: "₹ 13 995", category: "Men's Shoes" },
            { src: "/images/shoe3.png", name: "Nike Air Max Pulse", price: "₹ 16 996", category: "Women's Shoes" },
            { src: "/images/shoe4.png", name: "Nike Air Max Pulse", price: "₹ 16 996", category: "Men's Shoes" },
          ].map((shoe, index) => (
            <div key={index} className="flex flex-col justify-start ">
              <Image
                src={shoe.src}
                alt={shoe.name}
                width={440}
                height={440}
                className="hover:scale-105 duration-300 w-full"
              />
              <div className='flex justify-between items-center mt-2'>
              <h3 className="text-base mt-4">{shoe.name}</h3>
              <span className=" text-lg font-semibold text-right">{shoe.price}</span></div>
              <p className=" text-[#757575] mt-2">{shoe.category}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
  )
}
export default Home
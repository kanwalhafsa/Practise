
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
      <div className="flex justify-center px-4 md:px-20 bg-white">
        <Image
          src="/images/shoeImg.png"
          alt="shoes banner"
          width={1300}
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
          <Link href="/notify-me" className="hover:scale-90 px-4 py-2 text-white bg-black rounded-full w-32 md:w-40 h-10">
            Notify Me
          </Link>
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

        
{/* Section: Don't Miss */}
<div className="flex flex-col mt-40 mb-9 px-4 md:px-10 lg:px-14">
  <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Don't Miss</h1>
</div>
<div className="flex justify-center w-full overflow-hidden">
  <Image
    src="/images/DMimg.png"
    alt=""
    width={1344}
    height={700}
    className="hover:scale-105 duration-300 object-cover w-full max-w-7xl"
  />
</div>
<div className="flex justify-center items-center mt-16">
  <h2 className="text-xl md:text-3xl lg:text-6xl font-semibold uppercase text-center">
    Flight Essentials
  </h2>
</div>
<p className="flex justify-center items-center mt-4 text-center px-4">
  Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
</p>

{/* Button */}

<div className="flex justify-center mt-10">
  <Link
    href="/men"
    className="flex items-center justify-center text-white text-center hover:scale-90 bg-black rounded-full font-semibold w-28 md:w-32 h-10"
  >
    Shop
  </Link>
</div>


{/* Section: The Essentials */}
<div className="mt-28 mb-12 px-4 md:px-10 lg:px-14">
  <span className="text-lg md:text-xl lg:text-2xl font-semibold">The Essentials</span>
</div>

{/* Image Row */}
<div className="flex justify-evenly flex-wrap gap-4 mb-16 md:mb-28">
  {[1, 2, 3].map((num) => (
    <div key={num} className="w-full max-w-[300px] md:max-w-[440px] h-auto overflow-hidden">
      <Image
        className="hover:scale-105 duration-300 object-cover w-full"
        src={`/images/Eimg${num}.png`}
        alt={`Image ${num}`}
        width={440}
        height={540}
      />
    </div>
  ))}
</div>
      {/* Footer */}
<div className="mt-16  py-10 px-4 md:px-10 justify-center items-center">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left mx-auto justify-center items-center max-w-7xl">
    {[
      { title: "Icons", items: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"] },
      { title: "Shoes", items: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"] },
      { title: "Clothing", items: ["All Clothing", "Modest Clothing", "Hoodies & Pullovers", "Shirts & Tops"] },
      { title: "Kids", items: ["Infant & Toddler Shoes", "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes"] },
    ].map((section, index) => (
      <div key={index}>
        <h4 className="font-semibold mb-4">{section.title}</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
      </div>
      </div>
      </div>
  )
}
export default Home
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { IoIosArrowUp } from "react-icons/io";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { FiFilter } from "react-icons/fi";
// import { Button } from '../../component/ui/button';
// import { Carousel } from '../../component/ui/carousel';

// export default function Shop() {
//   return (
//         <main className="my-20 max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-4 lg:gap-20">
//       <section className="flex flex-col max-w-full lg:w-1/6">
//         <h1 className="font-semibold text-sm md:text-2xl">New(500)</h1>
//         <div className="font-medium text-[9px] lg:text-sm max-w-[150px] space-y-2 mt-6 flex flex-col">
//           <Link href={"/shop"}>Shoes</Link>
//           <Link href={""}>Sports Bras</Link>
//           <Link href={""}>Tops & T-Shirts</Link>
//           <Link href={""}>Hoodies & Sweatshirts</Link>
//           <Link href={""}>Jackets</Link>
//           <Link href={""}>Trousers & Tights</Link>
//           <Link href={""}>Shorts</Link>
//           <Link href={""}>Tracksuits</Link>
//           <Link href={""}>Jumpsuits & Rompers</Link>
//           <Link href={""}>Skirts & Dresses</Link>
//           <Link href={""}>Socks</Link>
//           <Link href={""}>Accessories & Equipment</Link>
//         </div>
    
//         {/* Gender Filters */}
//         <div className="mt-10">
//           <hr />
//           <h1 className="font-semibold flex justify-start items-center gap-x-14 mt-1">
//             Gender
//             <span>
//               <IoIosArrowUp />
//             </span>
//           </h1>
//           <div className="mt-5 text-[9px] lg:text-sm">
//             <h1 className="flex gap-2 items-center"><input type="checkbox" className="w-4 h-4" /> Men</h1>
//             <h1 className="flex mt-2 gap-2 items-center"><input type="checkbox" className="w-4 h-4" /> Women</h1>
//             <h1 className="flex mt-2 gap-2 items-center"><input type="checkbox" className="w-4 h-4" /> Unisex</h1>
//           </div>
//         </div>
    
//         {/* Kids Filters */}
//         <div className="mt-10">
//           <hr />
//           <h1 className="font-semibold flex justify-start items-center gap-x-14 mt-1">
//             Kids
//             <span>
//               <IoIosArrowUp />
//             </span>
//           </h1>
//           <div className="mt-5 text-[9px] lg:text-sm">
//             <h1 className="flex gap-2 items-center"><input type="checkbox" className="w-4 h-4" /> Boys</h1>
//             <h1 className="flex mt-2 gap-2 items-center"><input type="checkbox" className="w-4 h-4" /> Girls</h1>
//           </div>
//         </div>
    
//         {/* Price Filters */}
//         <div className="mt-10">
//           <hr />
//           <h1 className="font-semibold flex justify-start items-center gap-x-14 mt-1">
//             Shop By Price
//             <span>
//               <IoIosArrowUp />
//             </span>
//           </h1>
//           <div className="mt-5 text-[9px] lg:text-sm ">
//             <h1 className="flex gap-2 items-center "><input type="checkbox" className="w-4 h-4" /> Under ₹ 2 500.00</h1>
//             <h1 className="flex mt-2 gap-2 items-center"><input type="checkbox" className="w-4 h-4" /> ₹ 2 501.00 - ₹ 7 500.00</h1>
//           </div>
//         </div>
//       </section>
//       <section className="w-full lg:w-2/2 mx-auto overflow-hidden px-6 md:px-10">
//       <div className="flex justify-end items-center gap-4">
//         {/* Hide Filters Button */}
//         <h1 className="flex items-center gap-2 font-semibold text-sm md:text-lg">
//           Hide Filters
//           <span>
//             <FiFilter size={14} />
//           </span>
//         </h1>
//         {/* Sort By Dropdown */}
//         <h2 className="flex items-center gap-2 font-semibold text-sm md:text-lg">
//           Sort By
//           <span>
//             <RiArrowDropDownLine size={25} />
//           </span>
//         </h2>
//       </div>
//       {/* Carousel */}
//       <div className="mb-10">
//         <Carousel />
//       </div>
//       <hr />
//       <section>
//   {/* Right side */}
//   <div className="md:max-w-full h-auto bg-white">
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10 justify-center">
//       {[
//         { src: "/images/shoe1.png",title: "Just In", name: "Nike Air Max Pulse", price: "₹ 13 995", category: "Women's Shoes", color:"1 Colour" },
//         { src: "/images/shoe2.png",title: "Just In",  name: "Nike Air Max Pulse", price: "₹ 13 995", category: "Men's Shoes", color:"1 Colour"  },
//         { src: "/images/shoe3.png",title: "Just In",  name: "Nike Air Max Pulse", price: "₹ 16 996", category: "Women's Shoes", color:"1 Colour"  },
//         { src: "/images/shoe4.png",title: "Just In",  name: "Nike Air Max Pulse", price: "₹ 16 996", category: "Men's Shoes", color:"1 Colour"  },
//         { src: "/images/pimg1.png",title: "Just In",  name: "Nike Air Force 1 Mid '07", price: "₹ 10 975.00", category: "Men's Shoes", color:"1 Colour"  },
//         { src: "/images/pimg2.png",title: "Just In",  name: "Nike Court Vision Low Next Nature", price: "₹ 4 995.00", category: "Men's Shoes", color:"1 Colour"  },
//         { src: "/images/pimg3.png",title: "Just In",  name: "Nike Air Force 1 PLT.AF.ORM", price: "₹ 8 695.00", category: "Women's Shoes", color:"1 Colour"  },
//         { src: "/images/pimg4.png",title: "Just In",  name: "Nike Air Force 1 React", price: "₹ 13 295", category: "Men's Shoes", color:"1 Colour"  },
//         { src: "/images/pimg5.png",title: "Promo Exclusion",  name: "Air Jordan 1 Elevate Low", price: "₹ 11 895", category: "Women's Shoes", color:"1 Colour"  },
//         { src: "/images/pimg7.png",title: "Just In",  name: "Nike Dunk Low Retro SE", price: "₹ 9 695", category: "Men's Shoes", color:"1 Colour"  },
//         { src: "/images/pimg9.png",title: "Promo Exclusion",  name: "Nike Court Vision Low", price: "₹ 5 695", category: "Men's Shoes", color:"1 Colour"  },
//         { src: "/images/pimg12.png",title: "Just In",  name: "Nike Air Force 1 LV8 3", price: "₹ 7 495", category: "Older Kid's Shoes", color:"1 Colour"  },
//         { src: "/images/pimg13.png",title: "Just In",  name: "Nike Blazer Low Platform", price: "₹ 8 195", category: "Women's Shoes", color:"1 Colour"  },
//         { src: "/images/pimg14.png",title: "Just In",  name: "Nike Air Force 1 '07", price: "₹ 8 195", category: "women's Shoes", color:"2 Colour"  },
//         { src: "/images/pimg16.png",title: "Just In",  name: "Nike Dunk Low Retro", price: "₹ 8 695", category: "Men's Shoes", color:"1 Colour"  },
//         { src: "/images/pimg17.png",title: "Just In",  name: "Nike Air Max SC", price: "₹ 5 995", category: "Women's Shoes", color:"2 Colour"  },
//         { src: "/images/pimg19.png",title: "Just In",  name: "Nike Air Max SYSTM", price: "₹ 6 495", category: "Older Kid's Shoes", color:"1 Colour"  },
//         { src: "/images/pimg21.png",title: "Just In",  name: "Nike Court Legacy Lift", price: "₹ 7 495", category: "Women's Shoes", color:"2 Colour"  },
//         { src: "/images/pimg23.png",title: "Just In",  name: "Nike SB Zoom Janoski OG+", price: "₹ 8 595", category: "Shoes", color:"1 Colour"  },
//         { src: "/images/pimg26.png",title: "Just In",  name: "Jordan Series ES", price: "₹ 7 495", category: "Men's Shoes", color:"2 Colour"  },
//         { src: "/images/pimg29.png",title: "Just In",  name: "Nike Blazer Low '77 Jumbo", price: "₹ 8 595", category: "Women's Shoes", color:"1 Colour"  },
//       ].map((shoe, index) => (
//         <div key={index} className="flex flex-col justify-start">
//           <Image
//             src={shoe.src}
//             alt={shoe.name}
//             width={440}
//             height={440}
//             className="hover:scale-105 duration-300 w-full"
//           />
//           <div className="flex justify-between items-center mt-2">
//           <p className=" text-[#9E3500] ">{shoe.title}</p> 
//           </div>
//             <h3 className="text-base mt-2">{shoe.name}</h3>
//           <p className="text-[#757575]">{shoe.category}</p>
//           <p className="text-[#757575] ">{shoe.color}</p>
//             <span className="text-lg font-semibold mt-2">{shoe.price}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//             </section>
          
//             </main>
//         )

//       }


"use client"
import Image from "next/image"
import Link from "next/link"
import { IoIosArrowUp } from "react-icons/io"
import { RiArrowDropDownLine } from "react-icons/ri"
import { FiFilter } from "react-icons/fi"
import { Button } from "../../../component/ui/button"
import { Carousel } from "../../../component/ui/carousel"
import { useCart } from "@/components/CartProvider"

export default function Shop() {
  const { addToCart } = useCart()

  const handleAddToCart = (product: { id?: number; src: string; title: string; name: string; price: string; category: string; color: string }) => {
    addToCart({
      ...product,
      quantity: 1,
      id: product.id || Math.random(), // Fallback to random ID if not provided
      price: parseFloat(product.price.replace(/[^0-9.-]+/g,"")), // Convert price to number
    })
  }

  return (
    <main className="my-20 max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-4 lg:gap-20">
      <section className="flex flex-col max-w-full lg:w-1/6">
        <h1 className="font-semibold text-sm md:text-2xl">New(500)</h1>
        <div className="font-medium text-[9px] lg:text-sm max-w-[150px] space-y-2 mt-6 flex flex-col">
          <Link href={"/shop"}>Shoes</Link>
          <Link href={""}>Sports Bras</Link>
          <Link href={""}>Tops & T-Shirts</Link>
          <Link href={""}>Hoodies & Sweatshirts</Link>
          <Link href={""}>Jackets</Link>
          <Link href={""}>Trousers & Tights</Link>
          <Link href={""}>Shorts</Link>
          <Link href={""}>Tracksuits</Link>
          <Link href={""}>Jumpsuits & Rompers</Link>
          <Link href={""}>Skirts & Dresses</Link>
          <Link href={""}>Socks</Link>
          <Link href={""}>Accessories & Equipment</Link>
        </div>

        {/* Gender Filters */}
        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex justify-start items-center gap-x-14 mt-1">
            Gender
            <span>
              <IoIosArrowUp />
            </span>
          </h1>
          <div className="mt-5 text-[9px] lg:text-sm">
            <h1 className="flex gap-2 items-center">
              <input type="checkbox" className="w-4 h-4" /> Men
            </h1>
            <h1 className="flex mt-2 gap-2 items-center">
              <input type="checkbox" className="w-4 h-4" /> Women
            </h1>
            <h1 className="flex mt-2 gap-2 items-center">
              <input type="checkbox" className="w-4 h-4" /> Unisex
            </h1>
          </div>
        </div>

        {/* Kids Filters */}
        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex justify-start items-center gap-x-14 mt-1">
            Kids
            <span>
              <IoIosArrowUp />
            </span>
          </h1>
          <div className="mt-5 text-[9px] lg:text-sm">
            <h1 className="flex gap-2 items-center">
              <input type="checkbox" className="w-4 h-4" /> Boys
            </h1>
            <h1 className="flex mt-2 gap-2 items-center">
              <input type="checkbox" className="w-4 h-4" /> Girls
            </h1>
          </div>
        </div>

        {/* Price Filters */}
        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex justify-start items-center gap-x-14 mt-1">
            Shop By Price
            <span>
              <IoIosArrowUp />
            </span>
          </h1>
          <div className="mt-5 text-[9px] lg:text-sm ">
            <h1 className="flex gap-2 items-center ">
              <input type="checkbox" className="w-4 h-4" /> Under ₹ 2 500.00
            </h1>
            <h1 className="flex mt-2 gap-2 items-center">
              <input type="checkbox" className="w-4 h-4" /> ₹ 2 501.00 - ₹ 7 500.00
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full lg:w-2/2 mx-auto overflow-hidden px-6 md:px-10">
        <div className="flex justify-end items-center gap-4">
          {/* Hide Filters Button */}
          <h1 className="flex items-center gap-2 font-semibold text-sm md:text-lg">
            Hide Filters
            <span>
              <FiFilter size={14} />
            </span>
          </h1>
          {/* Sort By Dropdown */}
          <h2 className="flex items-center gap-2 font-semibold text-sm md:text-lg">
            Sort By
            <span>
              <RiArrowDropDownLine size={25} />
            </span>
          </h2>
        </div>
        {/* Carousel */}
        <div className="mb-10">
          <Carousel />
        </div>
        <hr />
        <section>
          {/* Right side */}
          <div className="md:max-w-full h-auto bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10 justify-center">
              {[
                {
                  id: 1,
                  src: "/images/shoe1.png",
                  title: "Just In",
                  name: "Nike Air Max Pulse",
                  price: "₹ 13 995",
                  category: "Women's Shoes",
                  color: "1 Colour",
                },
                {
                  id: 2,
                  src: "/images/shoe2.png",
                  title: "Just In",
                  name: "Nike Air Max Pulse",
                  price: "₹ 13 995",
                  category: "Men's Shoes",
                  color: "1 Colour",
                },
                {
                  id: 3,
                  src: "/images/shoe3.png",
                  title: "Just In",
                  name: "Nike Air Max Pulse",
                  price: "₹ 16 996",
                  category: "Women's Shoes",
                  color: "1 Colour",
                },
                {
                  id: 4,
                  src: "/images/shoe4.png",
                  title: "Just In",
                  name: "Nike Air Max Pulse",
                  price: "₹ 16 996",
                  category: "Men's Shoes",
                  color: "1 Colour",
                },
                {
                  id: 5,
                  src: "/images/pimg1.png",
                  title: "Just In",
                  name: "Nike Air Force 1 Mid '07",
                  price: "₹ 10 975.00",
                  category: "Men's Shoes",
                  color: "1 Colour",
                },
                {
                  id: 6,
                  src: "/images/pimg2.png",
                  title: "Just In",
                  name: "Nike Court Vision Low Next Nature",
                  price: "₹ 4 995.00",
                  category: "Men's Shoes",
                  color: "1 Colour",
                },
                {
                  id: 7,
                  src: "/images/pimg3.png",
                  title: "Just In",
                  name: "Nike Air Force 1 PLT.AF.ORM",
                  price: "₹ 8 695.00",
                  category: "Women's Shoes",
                  color: "1 Colour",
                },
                {
                  id: 8,
                  src: "/images/pimg4.png",
                  title: "Just In",
                  name: "Nike Air Force 1 React",
                  price: "₹ 13 295",
                  category: "Men's Shoes",
                  color: "1 Colour",
                },
                {
                  id: 9,
                  src: "/images/pimg5.png",
                  title: "Promo Exclusion",
                  name: "Air Jordan 1 Elevate Low",
                  price: "₹ 11 895",
                  category: "Women's Shoes",
                  color: "1 Colour",
                },
                {
                  id: 10,
                  src: "/images/pimg7.png",
                  title: "Just In",
                  name: "Nike Dunk Low Retro SE",
                  price: "₹ 9 695",
                  category: "Men's Shoes",
                  color: "1 Colour",
                },
                {
                  id: 11,
                  src: "/images/pimg9.png",
                  title: "Promo Exclusion",
                  name: "Nike Court Vision Low",
                  price: "₹ 5 695",
                  category: "Men's Shoes",
                  color: "1 Colour",
                },
                {
                  id: 12,
                  src: "/images/pimg12.png",
                  title: "Just In",
                  name: "Nike Air Force 1 LV8 3",
                  price: "₹ 7 495",
                  category: "Older Kid's Shoes",
                  color: "1 Colour",
                },
                {
                  id: 13,
                  src: "/images/pimg13.png",
                  title: "Just In",
                  name: "Nike Blazer Low Platform",
                  price: "₹ 8 195",
                  category: "Women's Shoes",
                  color: "1 Colour",
                },
                {
                  id: 14,
                  src: "/images/pimg14.png",
                  title: "Just In",
                  name: "Nike Air Force 1 '07",
                  price: "₹ 8 195",
                  category: "women's Shoes",
                  color: "2 Colour",
                },
                {
                  id: 15,
                  src: "/images/pimg16.png",
                  title: "Just In",
                  name: "Nike Dunk Low Retro",
                  price: "₹ 8 695",
                  category: "Men's Shoes",
                  color: "1 Colour",
                },
                {
                  id: 16,
                  src: "/images/pimg17.png",
                  title: "Just In",
                  name: "Nike Air Max SC",
                  price: "₹ 5 995",
                  category: "Women's Shoes",
                  color: "2 Colour",
                },
                {
                  id: 17,
                  src: "/images/pimg19.png",
                  title: "Just In",
                  name: "Nike Air Max SYSTM",
                  price: "₹ 6 495",
                  category: "Older Kid's Shoes",
                  color: "1 Colour",
                },
                {
                  id: 18,
                  src: "/images/pimg21.png",
                  title: "Just In",
                  name: "Nike Court Legacy Lift",
                  price: "₹ 7 495",
                  category: "Women's Shoes",
                  color: "2 Colour",
                },
                {
                  id: 19,
                  src: "/images/pimg23.png",
                  title: "Just In",
                  name: "Nike SB Zoom Janoski OG+",
                  price: "₹ 8 595",
                  category: "Shoes",
                  color: "1 Colour",
                },
                {
                  id: 20,
                  src: "/images/pimg26.png",
                  title: "Just In",
                  name: "Jordan Series ES",
                  price: "₹ 7 495",
                  category: "Men's Shoes",
                  color: "2 Colour",
                },
                {
                  id: 21,
                  src: "/images/pimg29.png",
                  title: "Just In",
                  name: "Nike Blazer Low '77 Jumbo",
                  price: "₹ 8 595",
                  category: "Women's Shoes",
                  color: "1 Colour",
                },
              ].map((shoe, index) => (
                <div key={index} className="flex flex-col justify-start">
                  <Link href={`/product/${shoe.id}`}>
                    <Image
                      src={shoe.src || "/placeholder.svg"}
                      alt={shoe.name}
                      width={440}
                      height={440}
                      className="hover:scale-105 duration-300 w-full"
                    />
                  </Link>
                  <div className="flex justify-between items-center mt-2">
                    <p className=" text-[#9E3500] ">{shoe.title}</p>
                  </div>
                  <h3 className="text-base mt-2">{shoe.name}</h3>
                  <p className="text-[#757575]">{shoe.category}</p>
                  <p className="text-[#757575] ">{shoe.color}</p>
                  <span className="text-lg font-semibold mt-2">{shoe.price}</span>
                  {/* <Button onClick={() => handleAddToCart(shoe)} className="mt-2 ">
                    Add to Cart
                  </Button> */}
                  <Link href={`/product/${shoe.id}`}
  onClick={() => handleAddToCart(shoe)}
  className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold rounded-lg shadow-md transition-all duration-300"
>
  Add to Cart
</Link>

                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}


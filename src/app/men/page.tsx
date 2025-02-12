// import React from 'react'
// import Image from 'next/image'

// function Men() {
//   return (
//       <div className='md:max-w-full h-auto bg-white mt-24 px-4 lg:px-12'> 
//             <h1 className='text-4xl font-bold text-center mb-8'>Men's Shop</h1>
//               <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-24 px-9">
//                     {[
//                       { src: "/images/Cimg1.jpeg", name: "Nike Dri-FIT ADV TechKnit Ultra", price: "₹ 3 895", description: "Men's Short-Sleeve Running Top" },
//                       { src: "/images/pimg8.png", name: "Nike Dri-FIT UV Hyverse", price: "₹ 2 495", description: "Men's Short-Sleeve Graphic Fitness Top" },
//                       { src: "/images/pimg10.png", name: "Nike Dri-FIT Ready", price: "₹ 2 496", description: "Men's Short-Sleeve Fitness Top" },
//                       { src: "/images/pimg15.png", name: "Nike Pro Dri-FIT", price: "₹ 1 496", description: "Men's Tight-Fit Sleeveless Top" },
//                       { src: "/images/pimg18.png", name: "Nike Dri-FIT UV Miler", price: "₹ 1 695", description: "Men's Short-Sleeve Running Top"},
//               { src: "/images/pimg24.png", name: "Nike Dri-FIT Run Division Rise 365", price: "₹ 3 495", description: "Men's Running Tank"},
//               { src: "/images/pimg25.png", name: "Nike Dri-FIT Challenger", price: "₹ 2 495", description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts"},
//               { src: "/images/mimg.png", name: "Nike Sportswear Club", price: "₹ 2 495", description: "Long-Sleeve T-Shirt"},
//               { src: "/images/mimg1.png", name: "Nike Sportswear", price: "₹ 3 195", description: "Max90 T-Shirt"},
//               { src: "/images/mimg2.png", name: "Nike Sportswear JDI", price: "₹ 3 195", description: "Men's T-Shirt"},
//               { src: "/images/mimg3.png", name: "Nike Pro", price: "₹ 1 695", description: "Men's Dri-FIT Tight Sleeveless Fitness Top"},
//               { src: "/images/mimg4.png", name: "Nike Spotswear", price: "₹ 2 995", description: "Men's Tank"},
//               { src: "/images/mimg5.png", name:"Nike Pro", price: "₹ 6 495", description: "Dri-FIT 6 Basketball Shorts"},
//               { src: "/images/mimg6.png", name: "Nike Culture of Football", price: "₹ 7 495", description: "Men's 5 Dri-FIT Soccer Shorts"},
//               { src: "/images/mimg7.png", name: "Nike Culture of Football", price: "₹ 2 595", description: "Men's 5 Dri-FIT Soccer Shorts"},
//               { src: "/images/mimg8.png", name: "Nike ACG", price: "₹ 3 195", description: "Men's Hiking Shorts"},
           
//                     ].map((shoe, index) => (
//                       <div key={index} className="flex flex-col justify-start ">
//                         <Image
//                           src={shoe.src}
//                           alt={shoe.name}
//                           width={340}
//                           height={340}
//                           className="hover:scale-105 duration-300 w-full"
//                         />
//                         <div className='flex justify-between items-center mt-2'>
//                         <h3 className="text-base mt-4">{shoe.name}</h3>
//                         <span className=" text-lg font-semibold text-right">{shoe.price}</span></div>
//                         <p className=" text-[#757575] mt-2">{shoe.description}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
      
          
//         )
//       }


// export default Men


"use client"

import { useState } from "react"
import Image from "next/image"
import { useCart } from "@/components/CartProvider"
import { Button } from "../../../component/ui/button"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const products = [
  {
    id: 1,
    src: "/images/Cimg1.jpeg",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: 3895,
    description: "Men's Short-Sleeve Running Top",
  },
  {
    id: 2,
    src: "/images/pimg8.png",
    name: "Nike Dri-FIT UV Hyverse",
    price: 2495,
    description: "Men's Short-Sleeve Graphic Fitness Top",
  },
  {
    id: 3,
    src: "/images/pimg10.png",
    name: "Nike Dri-FIT Ready",
    price: 2496,
    description: "Men's Short-Sleeve Fitness Top",
  },
  {
    id: 4,
    src: "/images/pimg15.png",
    name: "Nike Pro Dri-FIT",
    price: 1496,
    description: "Men's Tight-Fit Sleeveless Top",
  },
  {
    id: 5,
    src: "/images/pimg18.png",
    name: "Nike Dri-FIT UV Miler",
    price: 1695,
    description: "Men's Short-Sleeve Running Top",
  },
  {
    id: 6,
    src: "/images/pimg24.png",
    name: "Nike Dri-FIT Run Division Rise 365",
    price: 3495,
    description: "Men's Running Tank",
  },
  {
    id: 7,
    src: "/images/pimg25.png",
    name: "Nike Dri-FIT Challenger",
    price: 2495,
    description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
  },
  {
    id: 8,
    src: "/images/mimg.png",
    name: "Nike Sportswear Club",
    price: 2495,
    description: "Long-Sleeve T-Shirt",
  },
  { id: 9, src: "/images/mimg1.png", name: "Nike Sportswear", price: 3195, description: "Max90 T-Shirt" },
  { id: 10, src: "/images/mimg2.png", name: "Nike Sportswear JDI", price: 3195, description: "Men's T-Shirt" },
  {
    id: 11,
    src: "/images/mimg3.png",
    name: "Nike Pro",
    price: 1695,
    description: "Men's Dri-FIT Tight Sleeveless Fitness Top",
  },
  { id: 12, src: "/images/mimg4.png", name: "Nike Spotswear", price: 2995, description: "Men's Tank" },
  { id: 13, src: "/images/mimg5.png", name: "Nike Pro", price: 6495, description: "Dri-FIT 6 Basketball Shorts" },
  {
    id: 14,
    src: "/images/mimg6.png",
    name: "Nike Culture of Football",
    price: 7495,
    description: "Men's 5 Dri-FIT Soccer Shorts",
  },
  {
    id: 15,
    src: "/images/mimg7.png",
    name: "Nike Culture of Football",
    price: 2595,
    description: "Men's 5 Dri-FIT Soccer Shorts",
  },
  { id: 16, src: "/images/mimg8.png", name: "Nike ACG", price: 3195, description: "Men's Hiking Shorts" },
]

function Men() {
  const { addToCart } = useCart()
  const [selectedProduct, setSelectedProduct] = useState<{
    id: number;
    src: string;
    name: string;
    price: number;
    description: string;
  } | null>(null)
  
  const handleAddToCart = (product: { id: number; src: string; name: string; price: number; description: string }) => {
    addToCart({
      ...product,
      quantity: 1,
    })
  }

  return (
    <div className="md:max-w-full h-auto bg-white mt-24 px-4 lg:px-12">
      <h1 className="text-4xl font-bold text-center mb-8">Men's Shop</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-24 px-9">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col justify-start">
            <Dialog>
              <DialogTrigger asChild>
                <Image
                  src={product.src || "/placeholder.svg"}
                  alt={product.name}
                  width={340}
                  height={340}
                  className="hover:scale-105 duration-300 w-full cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                />
              </DialogTrigger>
              <DialogContent className="md:max-w-[640px]">
                <DialogHeader>
                  <DialogTitle>{product.name}</DialogTitle>
                  <DialogDescription>{product.description}</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src={product.src || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full"
                  />
                  <div>
                    <p className="text-lg font-semibold mt-12">{product.price}</p>
                    <p className="mt-2 mb-24">{product.description}</p>
                    <Link href="/addtoCart" onClick={() => handleAddToCart(product)} 
                    className="mt-12 w-28 bg-blue-600 text-center hover:to-blue-700 py-2 px-4 text-white font-bold rounded">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <div className="flex justify-between items-center mt-2">
              <h3 className="text-base mt-4">{product.name}</h3>
              <span className="text-lg font-semibold text-right">{product.price}</span>
            </div>
            {/* <p className="text-[#757575] mt-2">{product.description}</p> */}
            <Link href="/addtoCart" onClick={() => handleAddToCart(product)}
             className="mt-4 w-32 bg-blue-600 text-center mb-12 hover:to-blue-700 py-2 px-4 text-white font-bold rounded">
              Add to Cart
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Men


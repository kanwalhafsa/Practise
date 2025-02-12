// import React from 'react'
// import Image from 'next/image'

// export default function AirMax() {
//   return (
//     <div className='md:max-w-full h-auto bg-white mt-24 px-4 lg:px-12'> 
//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-24">
//               {[
//                 { src: "/images/shoe1.png", name: "Nike Air Max Pulse", price: "₹ 13 995", category: "Women's Shoes" },
//                 { src: "/images/shoe2.png", name: "Nike Air Max Pulse", price: "₹ 13 995", category: "Men's Shoes" },
//                 { src: "/images/shoe3.png", name: "Nike Air Max Pulse", price: "₹ 16 996", category: "Women's Shoes" },
//                 { src: "/images/shoe4.png", name: "Nike Air Max Pulse", price: "₹ 16 996", category: "Men's Shoes" },
//                 { src: "/images/pimg5.png", name: "Nike Air Max Pulse", price: "₹ 11 895", category: "Women's Shoes"},
//         { src: "/images/pimg7.png", name: "Nike Air Max Pulse", price: "₹ 9 695", category: "Men's Shoes"},
//         { src: "/images/pimg9.png", name: "Nike Air Max Pulse", price: "₹ 5 695", category: "Men's Shoes"},
//         { src: "/images/pimg12.png", name: "Nike Air Max Pulse", price: "₹ 7 495", category: "Older Kid's Shoes"},
//         { src: "/images/pimg13.png", name: "Nike Air Max Pulse", price: "₹ 8 195", category: "Women's Shoes"},
//         { src: "/images/pimg14.png", name: "Nike Air Max Pulse", price: "₹ 8 195", category: "women's Shoes"},
//         { src: "/images/pimg16.png", name: "Nike Air Max Pulse", price: "₹ 8 695", category: "Men's Shoes"},
//         { src: "/images/pimg17.png", name: "Nike Air Max Pulse", price: "₹ 5 995", category: "Women's Shoes"},
//         { src: "/images/pimg19.png", name:"Nike Air Max Pulse", price: "₹ 6 495", category: "Older Kid's Shoes"},
//         { src: "/images/pimg21.png", name: "Nike Air Max Pulse", price: "₹ 7 495", category: "Women's Shoes"},
//         { src: "/images/pimg23.png", name: "Nike Air Max Pulse", price: "₹ 8 595", category: "Women's Shoes"},
//         { src: "/images/pimg29.png", name: "Nike Air Max Pulse", price: "₹ 8 195", category: "Men's Shoes"},
     
//               ].map((shoe, index) => (
//                 <div key={index} className="flex flex-col justify-start ">
//                   <Image
//                     src={shoe.src}
//                     alt={shoe.name}
//                     width={440}
//                     height={440}
//                     className="hover:scale-105 duration-300 w-full"
//                   />
//                   <div className='flex justify-between items-center mt-2'>
//                   <h3 className="text-base mt-4">{shoe.name}</h3>
//                   <span className=" text-lg font-semibold text-right">{shoe.price}</span></div>
//                   <p className=" text-[#757575] mt-2">{shoe.category}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

    
//   )
// }

"use client"

import { useState } from "react"
import Image from "next/image"
import { useCart } from "@/components/CartProvider"
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
    src: "/images/shoe1.png",
    name: "Nike Air Max Pulse",
    price: 13995,
    description: "Women's Shoes",
  },
  {
    id: 2,
    src: "/images/shoe2.png",
    name: "Nike Air Max Pulse",
    price: 13995,
    description: "Men's Shoes",
  },
  {
    id: 3,
    src: "/images/shoe3.png",
    name: "Nike Air Max Pulse",
    price: 16996,
    description: "Women's Shoes",
  },
  {
    id: 4,
    src: "/images/shoe4.png",
    name: "Nike Air Max Pulse",
    price: 16996,
    description: "Men's Shoes",
  },
  {
    id: 5,
    src: "/images/pimg5.png",
    name: "Nike Air Max Pulse",
    price: 11895,
    description: "Women's Shoes",
  },
  {
    id: 6,
    src: "/images/pimg7.png",
    name: "Nike Air Max Pulse",
    price: 9695,
    description: "Men's Shoes",
  },
  {
    id: 7,
    src: "/images/pimg9.png",
    name: "Nike Air Max Pulse",
    price: 5695,
    description: "Men's Shoes",
  },
  {
    id: 8,
    src: "/images/pimg12.png",
    name: "Nike Air Max Pulse",
    price: 7495,
    description: "Older Kid's Shoes",
  },
  {
    id: 9,
    src: "/images/pimg13.png",
    name: "Nike Air Max Pulse",
    price: 8195,
    description: "Women's Shoes",
  },
  {
    id: 10,
    src: "/images/pimg14.png",
    name: "Nike Air Max Pulse",
    price: 8195,
    description: "Women's Shoes",
  },
  {
    id: 11,
    src: "/images/pimg16.png",
    name: "Nike Air Max Pulse",
    price: 8695,
    description: "Men's Shoes",
  },
  {
    id: 12,
    src: "/images/pimg17.png",
    name: "Nike Air Max Pulse",
    price: 5995,
    description: "Women's Shoes",
  },
  {
    id: 13,
    src: "/images/pimg19.png",
    name: "Nike Air Max Pulse",
    price: 6495,
    description: "Older Kid's Shoes",
  },
  {
    id: 14,
    src: "/images/pimg21.png",
    name: "Nike Air Max Pulse",
    price: 7495,
    description: "Women's Shoes",
  },
  {
    id: 15,
    src: "/images/pimg23.png",
    name: "Nike Air Max Pulse",
    price: 8595,
    description: "Women's Shoes",
  },
  {
    id: 16,
    src: "/images/pimg29.png",
    name: "Nike Air Max Pulse",
    price: 8195,
    description: "Men's Shoes",
  },
]

function AirMax() {
  const { addToCart } = useCart()
  const [selectedProduct, setSelectedProduct] = useState<{
    id: number
    src: string
    name: string
    price: number
    description: string
  } | null>(null)

  const handleAddToCart = (product: { id: number; src: string; name: string; price: number; description: string }) => {
    addToCart({
      ...product,
      quantity: 1,
    })
  }

  return (
    <div className="md:max-w-full h-auto bg-white mt-24 px-4 lg:px-12">
      <h1 className="text-4xl font-bold text-center mb-8">Air Max Collection</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-24">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col justify-start">
            <Dialog>
              <DialogTrigger asChild>
                <Image
                  src={product.src || "/placeholder.svg"}
                  alt={product.name}
                  width={440}
                  height={440}
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
                    <p className="text-lg font-semibold mt-12">₹ {product.price}</p>
                    <p className="mt-2 mb-24">{product.description}</p>
                    <Link
                      href="/addtoCart"
                      onClick={() => handleAddToCart(product)}
                      className="mt-12 w-28 bg-blue-600 text-center hover:to-blue-700 py-2 px-4 text-white font-bold rounded"
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <div className="flex justify-between items-center mt-2">
              <h3 className="text-base mt-4">{product.name}</h3>
              <span className="text-lg font-semibold text-right">₹ {product.price}</span>
            </div>
            <p className="text-[#757575] mt-2">{product.description}</p>
            <Link
              href="/addtoCart"
              onClick={() => handleAddToCart(product)}
              className="mt-4 w-32 bg-blue-600 text-center mb-12 hover:to-blue-700 py-2 px-4 text-white font-bold rounded"
            >
              Add to Cart
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AirMax


// import React from 'react'
// import Image from 'next/image'

// function Kids() {
//   return (
//       <div className='md:max-w-full h-auto bg-white mt-24 px-4 lg:px-12'> 
//             <h1 className='text-4xl font-bold text-center mb-8'>Kid's Shop</h1>
//               <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-24 px-9">
//                     {[
//                       { src: "/images/pimg27.jpeg", name: "Nike Outdoor Play", price: "₹ 5 295", description: "Older Kids' Oversized Woven Jacket" },
//                       { src: "/images/pimg28.png", name: "Nike Sportswear Trend", price: "₹ 2 495", description: "Older Kids' (Girls') High-waisted Woven Shorts" },
//                       { src: "/images/kimg.png", name: "Nike Sportswear Club Fleece", price: "₹ 2 496", description: "Big Kid's Hoodie" },
//                       { src: "/images/kimg1.png", name: "Nike Sportwear Club", price: "₹ 3 396", description: "Big Kid's Shorts" },
//                       { src: "/images/kimg2.png", name: "Nike Sportswear", price: "₹ 2 695", description: "Girl's Cropped Long Sleeve Top"},
//               { src: "/images/kimg3.png", name: "Nike Pro", price: "₹ 3 495", description: "Toddler Tights"},
//               { src: "/images/kimg4.png", name: "Nike Sportswear Club ", price: "₹ 2 495", description: "Little Kid's Fleece Joggers"},
//               { src: "/images/kimg5.png", name: "Jordan MJ Brooklyn", price: "₹ 2 495", description: "Big Kid's Fleece Full-Zip Hoodie"},
//               { src: "/images/kimg6.png", name: "Jordan MJ Brooklyn", price: "₹ 3 195", description: "Big Kid's Fleece Pullover Hoodie"},
//               { src: "/images/kimg7.png", name: "Jordan Soft Touch Mixed Pullover Hoodie", price: "₹ 3 195", description: "Big kids Hoodie"},
//               { src: "/images/kimg8.png", name: "Jordan", price: "₹ 3 695", description: "Little Kid's Air Bubble Jumpsuit"},
//               { src: "/images/kimg9.png", name: "Nike Spotswear", price: "₹ 2 995", description: "Girls' Pleated Sweatshirt"},
//               { src: "/images/kimg10.png", name:"Nike Sportswear", price: "₹ 6 495", description: "Big Kids' T-Shirt"},
//               { src: "/images/kimg11.png", name: "Nike Sportswear", price: "₹ 7 495", description: "Big Kids' Tracksuit"},
//               { src: "/images/kimg12.png", name: "Nike Vapour Select 2", price: "₹ 2 595", description: "Big Kids' Pipped Baseball Pants"},
//               { src: "/images/kimg13.png", name: "Nike Dri-FIT Strike", price: "₹ 3 195", description: "Big Kids' Soccer Pants"},
           
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


// export default Kids

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
    src: "/images/pimg27.jpeg",
    name: "Nike Outdoor Play",
    price: 5295,
    description: "Older Kids' Oversized Woven Jacket",
  },
  {
    id: 2,
    src: "/images/pimg28.png",
    name: "Nike Sportswear Trend",
    price: 2495,
    description: "Older Kids' (Girls') High-waisted Woven Shorts",
  },
  {
    id: 3,
    src: "/images/kimg.png",
    name: "Nike Sportswear Club Fleece",
    price: 2496,
    description: "Big Kid's Hoodie",
  },
  {
    id: 4,
    src: "/images/kimg1.png",
    name: "Nike Sportwear Club",
    price: 3396,
    description: "Big Kid's Shorts",
  },
  {
    id: 5,
    src: "/images/kimg2.png",
    name: "Nike Sportswear",
    price: 2695,
    description: "Girl's Cropped Long Sleeve Top",
  },
  {
    id: 6,
    src: "/images/kimg3.png",
    name: "Nike Pro",
    price: 3495,
    description: "Toddler Tights",
  },
  {
    id: 7,
    src: "/images/kimg4.png",
    name: "Nike Sportswear Club",
    price: 2495,
    description: "Little Kid's Fleece Joggers",
  },
  {
    id: 8,
    src: "/images/kimg5.png",
    name: "Jordan MJ Brooklyn",
    price: 2495,
    description: "Big Kid's Fleece Full-Zip Hoodie",
  },
  {
    id: 9,
    src: "/images/kimg6.png",
    name: "Jordan MJ Brooklyn",
    price: 3195,
    description: "Big Kid's Fleece Pullover Hoodie",
  },
  {
    id: 10,
    src: "/images/kimg7.png",
    name: "Jordan Soft Touch Mixed Pullover Hoodie",
    price: 3195,
    description: "Big kids Hoodie",
  },
  {
    id: 11,
    src: "/images/kimg8.png",
    name: "Jordan",
    price: 3695,
    description: "Little Kid's Air Bubble Jumpsuit",
  },
  {
    id: 12,
    src: "/images/kimg9.png",
    name: "Nike Spotswear",
    price: 2995,
    description: "Girls' Pleated Sweatshirt",
  },
  {
    id: 13,
    src: "/images/kimg10.png",
    name: "Nike Sportswear",
    price: 6495,
    description: "Big Kids' T-Shirt",
  },
  {
    id: 14,
    src: "/images/kimg11.png",
    name: "Nike Sportswear",
    price: 7495,
    description: "Big Kids' Tracksuit",
  },
  {
    id: 15,
    src: "/images/kimg12.png",
    name: "Nike Vapour Select 2",
    price: 2595,
    description: "Big Kids' Pipped Baseball Pants",
  },
  {
    id: 16,
    src: "/images/kimg13.png",
    name: "Nike Dri-FIT Strike",
    price: 3195,
    description: "Big Kids' Soccer Pants",
  },
]

function Kids() {
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
      <h1 className="text-4xl font-bold text-center mb-8">Kid's Shop</h1>
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

export default Kids


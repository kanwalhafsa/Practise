
// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { FaRegHeart } from "react-icons/fa";
// import { useCart } from "@/components/CartProvider"
// import { useWishlist } from "@/components/WishlistProvider"
// import Link from "next/link"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { LinkIcon } from "lucide-react";

// const products = [
//   {
//     id: 1,
//     src: "/images/wimg.png",
//     name: "Nike Dri-FIT ADV Run Division",
//     price: 5295,
//     description: "Women's Long-Sleeve Running Top",
//   },
//   {
//     id: 2,
//     src: "/images/wimg1.png",
//     name: "Nike Fast",
//     price: 2495,
//     description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
//   },
//   {
//     id: 3,
//     src: "/images/pimg6.png",
//     name: "Nike Standard Issue",
//     price: 2496,
//     description: "Women's Basketball Jersey",
//   },
//   {
//     id: 4,
//     src: "/images/pimg11.png",
//     name: "Nike One Leak Protection: Period",
//     price: 3396,
//     description: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
//   },
//   {
//     id: 5,
//     src: "/images/pimg20.png",
//     name: "Nike Alate All U",
//     price: 2695,
//     description: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
//   },
//   {
//     id: 6,
//     src: "/images/pimg22.png",
//     name: "Nike Swoosh",
//     price: 3495,
//     description: "Women's Medium-support Padded Sports Bra Tank",
//   },
//   {
//     id: 7,
//     src: "/images/wimg2.png",
//     name: "Nike Dri-FIT",
//     price: 2495,
//     description: "Women's T-Shirt",
//   },
//   {
//     id: 8,
//     src: "/images/wimg3.png",
//     name: "Nike Sportswear Classic",
//     price: 2495,
//     description: "Women's High-Waisted 8 Biker Shorts",
//   },
//   {
//     id: 9,
//     src: "/images/wimg4.png",
//     name: "Nike Sportswear",
//     price: 3195,
//     description: "Women's Slider Sportswear Shorts",
//   },
//   {
//     id: 10,
//     src: "/images/wimg5.png",
//     name: "Nike Sportswear Chill Knit",
//     price: 3195,
//     description: "Women's Tight Mini-Rib Flared Leggings",
//   },
//   {
//     id: 11,
//     src: "/images/wimg6.png",
//     name: "Nike Sportswear Club Fleece",
//     price: 3695,
//     description: "Women's Pullover Hoodie",
//   },
//   {
//     id: 12,
//     src: "/images/wimg7.png",
//     name: "Nike Spotswear Phoenix Fleece",
//     price: 2995,
//     description: "Women's 1/2-Zip Cropped Sweatshirt",
//   },
//   {
//     id: 13,
//     src: "/images/wimg8.png",
//     name: "Nike Therma-FIT Swift",
//     price: 6495,
//     description: "Women's Running Jacket",
//   },
//   {
//     id: 14,
//     src: "/images/wimg9.png",
//     name: "Nike Court Slam",
//     price: 7495,
//     description: "Women's 5 Dri-FIT Tennis Skirt",
//   },
//   {
//     id: 15,
//     src: "/images/wimg10.png",
//     name: "Nike Advantage",
//     price: 2595,
//     description: "Women's 5 Dri-FIT Tennis Skirt",
//   },
//   {
//     id: 16,
//     src: "/images/wimg11.png",
//     name: "Nike Dri-FIT UV Victory",
//     price: 3195,
//     description: "Women's Long-Sleeve Printed Golf Top",
//   },
// ]

// function Women() {
//   const { addToCart } = useCart()
//   const [wishlist, setWishlist] = useState<number[]>([])

//   const handleWishlist = (productId: number) => {
//     setWishlist((prevWishlist) =>
//       prevWishlist.includes(productId)
//         ? prevWishlist.filter((id) => id !== productId)
//         : [...prevWishlist, productId]
//     )
//   }
//   const [selectedProduct, setSelectedProduct] = useState<{
//     id: number
//     src: string
//     name: string
//     price: number
//     description: string
//   } | null>(null)

//   const handleAddToCart = (product: { id: number; src: string; name: string; price: number; description: string }) => {
//     addToCart({
//       ...product,
//       quantity: 1,
//     })
//   }

//   return (
//     <div className="md:max-w-full h-auto bg-white mt-24 px-4 lg:px-12">
//       <h1 className="text-4xl font-bold text-center mb-8">Women's Shop</h1>
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-24 px-9">
//         {products.map((product, index) => (
//           <div key={index} className="flex flex-col justify-start">
//             <Dialog>
//               <DialogTrigger asChild>
//                 <Image
//                   src={product.src || "/placeholder.svg"}
//                   alt={product.name}
//                   width={340}
//                   height={340}
//                   className="hover:scale-105 duration-300 w-full cursor-pointer"
//                   onClick={() => setSelectedProduct(product)}
//                 />
//               </DialogTrigger>
//               <DialogContent className="md:max-w-[640px]">
//                 <DialogHeader>
//                   <DialogTitle>{product.name}</DialogTitle>
//                   <DialogDescription>{product.description}</DialogDescription>
//                 </DialogHeader>
//                 <div className="grid grid-cols-2 gap-4">
//                   <Image
//                     src={product.src || "/placeholder.svg"}
//                     alt={product.name}
//                     width={200}
//                     height={200}
//                     className="w-full"
//                   />
//                   <div>
//                     <p className="text-lg font-semibold mt-12">₹ {product.price}</p>
//                     <p className="mt-2 mb-24">{product.description}</p>
//                     <Link
//                       href="/addtoCart"
//                       onClick={() => handleAddToCart(product)}
//                       className="mt-12 w-28 bg-blue-600 text-center hover:to-blue-700 py-2 px-4 text-white font-bold rounded"
//                     >
//                       Add to Cart
//                     </Link>
//                   </div>
//                 </div>
//               </DialogContent>
//             </Dialog>
//             <div className="flex justify-between items-center mt-2">
//               <h3 className="text-base mt-4">{product.name}</h3>
//               <span className="text-lg font-semibold text-right">₹ {product.price}</span>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//   {/* Wishlist Button (Heart Icon) */}
//   <Link
//     href="/wishlist"
//     onClick={() => handleAddToCart(product)}
//     className="text-black text-lg hover:text-red-500 transition-all duration-300"
//   >
//     <FaRegHeart />
//   </Link>
//   <Link href={`/wishlist`}
//                 onClick={() => handleWishlist(product.id)}
//                 className={`text-2xl ${
//                   wishlist.includes(product.id) ? "text-red-500" : "text-gray-400"
//                 } hover:text-red-500 transition-all duration-300`}
//               >
//                 <FaRegHeart />
//               </Link>

//   {/* Add to Cart Button */}
//   <Link
//     href="/addtoCart"
//     onClick={() => handleAddToCart(product)}
//     className="w-32 bg-blue-600 hover:bg-blue-700 py-2 px-4 text-white font-bold rounded"
//   >
//     Add to Cart
//   </Link>
// </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { useCart } from "@/components/CartProvider"
import { useWishlist } from "@/components/WishlistProvider"
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
    src: "/images/wimg.png",
    name: "Nike Dri-FIT ADV Run Division",
    price: 5295,
    description: "Women's Long-Sleeve Running Top",
  },
  {
    id: 2,
    src: "/images/wimg1.png",
    name: "Nike Fast",
    price: 2495,
    description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
  },
  {
    id: 3,
    src: "/images/pimg6.png",
    name: "Nike Standard Issue",
    price: 2496,
    description: "Women's Basketball Jersey",
  },
  {
    id: 4,
    src: "/images/pimg11.png",
    name: "Nike One Leak Protection: Period",
    price: 3396,
    description: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
  },
  {
    id: 5,
    src: "/images/pimg20.png",
    name: "Nike Alate All U",
    price: 2695,
    description: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
  },
  {
    id: 6,
    src: "/images/pimg22.png",
    name: "Nike Swoosh",
    price: 3495,
    description: "Women's Medium-support Padded Sports Bra Tank",
  },
  {
    id: 7,
    src: "/images/wimg2.png",
    name: "Nike Dri-FIT",
    price: 2495,
    description: "Women's T-Shirt",
  },
  {
    id: 8,
    src: "/images/wimg3.png",
    name: "Nike Sportswear Classic",
    price: 2495,
    description: "Women's High-Waisted 8 Biker Shorts",
  },
  {
    id: 9,
    src: "/images/wimg4.png",
    name: "Nike Sportswear",
    price: 3195,
    description: "Women's Slider Sportswear Shorts",
  },
  {
    id: 10,
    src: "/images/wimg5.png",
    name: "Nike Sportswear Chill Knit",
    price: 3195,
    description: "Women's Tight Mini-Rib Flared Leggings",
  },
  {
    id: 11,
    src: "/images/wimg6.png",
    name: "Nike Sportswear Club Fleece",
    price: 3695,
    description: "Women's Pullover Hoodie",
  },
  {
    id: 12,
    src: "/images/wimg7.png",
    name: "Nike Spotswear Phoenix Fleece",
    price: 2995,
    description: "Women's 1/2-Zip Cropped Sweatshirt",
  },
  {
    id: 13,
    src: "/images/wimg8.png",
    name: "Nike Therma-FIT Swift",
    price: 6495,
    description: "Women's Running Jacket",
  },
  {
    id: 14,
    src: "/images/wimg9.png",
    name: "Nike Court Slam",
    price: 7495,
    description: "Women's 5 Dri-FIT Tennis Skirt",
  },
  {
    id: 15,
    src: "/images/wimg10.png",
    name: "Nike Advantage",
    price: 2595,
    description: "Women's 5 Dri-FIT Tennis Skirt",
  },
  {
    id: 16,
    src: "/images/wimg11.png",
    name: "Nike Dri-FIT UV Victory",
    price: 3195,
    description: "Women's Long-Sleeve Printed Golf Top",
  },
]

function Women() {
  const { addToCart } = useCart()
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist()
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

  const handleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      removeFromWishlist(productId)
    } else {
      addToWishlist(productId)
    }
  }

  return (
    <div className="md:max-w-full h-auto bg-white mt-24 px-4 lg:px-12">
      <h1 className="text-4xl font-bold text-center mb-8">Women's Shop</h1>
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
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-12 w-28 bg-blue-600 text-center hover:bg-blue-700 py-2 px-4 text-white font-bold rounded"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <div className="flex justify-between items-center mt-2">
              <h3 className="text-base mt-4">{product.name}</h3>
              <span className="text-lg font-semibold text-right">₹ {product.price}</span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Link href={`/wishlist`}
                onClick={() => handleWishlist(product.id)}
                className="text-2xl text-gray-400 hover:text-red-500 transition-all duration-300"
              >
                {wishlist.includes(product.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
              </Link>
              <Link href={`/addtoCart`}
                onClick={() => handleAddToCart(product)}
                className="w-32 bg-blue-600 hover:bg-blue-700 py-2 px-4 text-white font-bold rounded"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Women


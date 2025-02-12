// "use client"
// import { useCart } from "@/components/CartProvider"
// import { useWishlist } from "@/components/WishlistProvider"
// import { ProductCard } from "@/components/ProductCard"

// interface Product {
//   id: number;
//   src: string;
//   name: string;
//   price: number;
//   description: string;
// }

// const products: Product[] = [
//   // ... (keep your existing products array)
// ]

// export default function Women() {
//   const { addToCart } = useCart()
//   const { wishlist, addToWishlist, removeFromWishlist } = useWishlist()

//   const handleAddToCart = (product: { id: number; src: string; name: string; price: number; description: string }) => {
//     addToCart({
//       ...product,
//       quantity: 1,
//     })
//   }

//   const handleWishlistToggle = (productId: number) => {
//     if (wishlist.includes(productId)) {
//       removeFromWishlist(productId)
//     } else {
//       addToWishlist(productId)
//     }
//   }

//   return (
//     <div className="md:max-w-full h-auto bg-white mt-24 px-4 lg:px-12">
//       <h1 className="text-4xl font-bold text-center mb-8">Women's Shop</h1>
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-24 px-9">
//         {products.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             isWishlisted={wishlist.includes(product.id)}
//             onWishlistToggle={() => handleWishlistToggle(product.id)}
//             onAddToCart={() => handleAddToCart(product)}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { useCart } from "@/components/CartProvider"
import { useWishlist } from "@/components/WishlistProvider"
import { ProductCard } from "@/components/ProductCard"

interface Product {
  id: number;
  src: string;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  // ... (keep your existing products array)
]

export default function Women() {
  const { addToCart } = useCart()
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const handleAddToCart = (product: { id: number; src: string; name: string; price: number; description: string }) => {
    addToCart({
      ...product,
      quantity: 1,
    })
  }

  const handleWishlistToggle = (productId: number) => {
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
          <ProductCard
            key={`${product.id}-${index}`}
            product={product}
            isWishlisted={wishlist.includes(product.id)}
            onWishlistToggle={() => handleWishlistToggle(product.id)}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  )
}



"use client"

import { useWishlist } from "@/components/WishlistProvider"
import { useCart } from "@/components/CartProvider"
import Image from "next/image"
import Link from "next/link"
import { FaTrash, FaShoppingCart } from "react-icons/fa"
import { womenProducts } from "../data/womenProducts"
import { menProducts } from "../data/menProducts"
import { kidsProducts } from "../data/kidsProducts"
import { shopProducts } from "../data/shopProducts"
import { airMaxProducts } from "../data/airMaxProducts"

// Combine all products into a single array
const allProducts = [...womenProducts, ...menProducts, ...kidsProducts, ...shopProducts, ...airMaxProducts]

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  const wishlistProducts = allProducts.filter((product) => wishlist.includes(product.id))

  const handleAddToCart = (product: {
    id: number
    src: string
    name: string
    price: number | string
    description?: string
  }) => {
    addToCart({
      ...product,
      price: Number(product.price),
      quantity: 1,
    })
    removeFromWishlist(product.id)
  }

  const handleRemoveFromWishlist = (productId: number) => {
    removeFromWishlist(productId)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      {wishlistProducts.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-4">Your wishlist is empty.</p>
          <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlistProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 flex flex-col">
              <Image
                src={product.src || "/placeholder.svg"}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2 flex-grow">{'description' in product ? product.description : "No description available"}</p>
              <p className="text-lg font-bold mb-4">₹ {product.price}</p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
                >
                  <FaShoppingCart className="mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label="Remove from wishlist"
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          ← Back to Home
        </Link>
        <Link href="/women" className="text-blue-600 hover:text-blue-800">
          Women's Shop
        </Link>
        <Link href="/men" className="text-blue-600 hover:text-blue-800">
          Men's Shop
        </Link>
        <Link href="/kids" className="text-blue-600 hover:text-blue-800">
          Kids' Shop
        </Link>
        <Link href="/new-and-featured" className="text-blue-600 hover:text-blue-800">
          New & Featured
        </Link>
        <Link href="/shoes" className="text-blue-600 hover:text-blue-800">
          Shoe Shop
        </Link>
      </div>
    </div>
  )
}


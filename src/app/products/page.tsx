"use client"

import { useState, useEffect } from "react"
import { sanityFetch } from "@/sanity/lib/fetch"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
import { allProductsQuery } from "@/sanity/lib/queries"

interface Product {
  _id: string
  productName: string
  description: string
  price: number
  imageUrl: string
  slug?: { current: string }
  available: boolean
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await sanityFetch({ query: allProductsQuery })
        console.log("Fetched Products:", fetchedProducts)
        setProducts(fetchedProducts)
      } catch (error) {
        console.error("Error fetching products:", error)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">All Products</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-md">
              <Image
                src={urlFor(product.imageUrl).url() || "/placeholder.svg"}
                alt={product.productName}
                width={300}
                height={300}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold">{product.productName}</h3>
              <p className="text-lg font-bold mb-2">${product.price.toFixed(2)}</p>

              <div className="flex justify-between items-center">
                {product.available ? (
                  <Link href={`/products/${product.slug?.current}`} className="text-blue-600 hover:underline">
                    View Details
                  </Link>
                ) : (
                  <Link href={`/notify-me?product=${product.slug?.current}`} className="text-red-600 hover:underline">
                    Notify Me
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { sanityFetch } from "@/sanity/lib/fetch"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

interface Product {
  _id: string
  productName: string
  description: string
  price: number
  imageUrl: string
  colors?: string[]
  inventory: number
  slug: { current: string }
}

export default function ProductDetails({ slug }: { slug: string }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        console.log("Fetching product with slug:", slug)
        const query = `*[_type == "product" && slug.current == "${slug}"][0]`
        const fetchedProduct: Product = await sanityFetch({ query })
        console.log("Fetched product:", fetchedProduct)

        if (fetchedProduct) {
          setProduct(fetchedProduct)
        } else {
          setError("Product not found")
        }
      } catch (error) {
        console.error("Error fetching product details:", error)
        setError("Failed to fetch product details")
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchProductDetails()
    } else {
      setError("Invalid product slug")
    }
  }, [slug])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!product) return <p>Product not found!</p>

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{product.productName}</h1>
      <Image
        src={urlFor(product.imageUrl).url() || "/placeholder.svg"}
        alt={product.productName}
        width={500}
        height={500}
        className="w-full h-auto object-cover mt-4"
      />
      <p className="mt-4 text-lg">{product.description}</p>
      <p className="text-xl font-bold mt-2">${product.price.toFixed(2)}</p>

      {product.colors && product.colors.length > 0 && (
        <div className="mt-4">
          <p className="font-semibold">Available Colors:</p>
          <div className="flex gap-2 mt-2">
            {product.colors.map((color) => (
              <span key={color} className="px-3 py-1 border rounded">
                {color}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6">
        {product.inventory > 0 ? (
          <button className="bg-green-500 text-white px-4 py-2 rounded">Buy Now</button>
        ) : (
          <button className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed">Out of Stock</button>
        )}
      </div>
    </div>
  )
}


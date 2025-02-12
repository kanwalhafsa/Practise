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
}

export default function NotifyMePage() {  
  const [products, setProducts] = useState<Product[]>([])
  const [notifiedProducts, setNotifiedProducts] = useState<string[]>([])
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

    const storedNotified = JSON.parse(localStorage.getItem("notifiedProducts") || "[]")
    setNotifiedProducts(storedNotified)
  }, [])

  const handleNotify = (productId: string, productName: string) => {
    alert(`You will be notified when ${productName} is available!`)

    const updatedNotified = [...notifiedProducts, productId]
    setNotifiedProducts(updatedNotified)
    localStorage.setItem("notifiedProducts", JSON.stringify(updatedNotified))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Notify Me Products</h2>

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
                {product.slug?.current ? (
                  <Link href={`/products/${product.slug.current}`} className="text-blue-600 hover:underline">
                    View Details
                  </Link>
                ) : (
                  <span className="text-gray-500">No Details Available</span>
                )}

                <button
                  onClick={() => handleNotify(product._id, product.productName)}
                  disabled={notifiedProducts.includes(product._id)}
                  className={`px-4 py-2 text-white rounded ${
                    notifiedProducts.includes(product._id)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  {notifiedProducts.includes(product._id) ? "Notified" : "Notify Me"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


// "use client"

// import { useState, useEffect } from "react"
// import { sanityFetch } from "@/sanity/lib/fetch"
// import { urlFor } from "@/sanity/lib/image"
// import Image from "next/image"
// import Link from "next/link"
// import { allProductsQuery } from "@/sanity/lib/queries"

// interface Product {
//   _id: string
//   productName: string
//   description: string
//   price: number
//   imageUrl: string
//   slug: { current: string } | null
// }

// export default function NotifyMeSection() {
//   const [products, setProducts] = useState<Product[]>([])
//   const [notifiedProducts, setNotifiedProducts] = useState<string[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts: Product[] = await sanityFetch({ query: allProductsQuery })
//         console.log("Fetched Products:", fetchedProducts)
//         setProducts(fetchedProducts)
//       } catch (error) {
//         console.error("Error fetching products:", error)
//         setProducts([])
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchProducts()

//     const storedNotified = JSON.parse(localStorage.getItem("notifiedProducts") || "[]")
//     setNotifiedProducts(storedNotified)
//   }, [])

//   const handleNotify = (productId: string, productName: string) => {
//     alert(`You will be notified when ${productName} is available!`)

//     const updatedNotified = [...notifiedProducts, productId]
//     setNotifiedProducts(updatedNotified)
//     localStorage.setItem("notifiedProducts", JSON.stringify(updatedNotified))
//   }
//   // console.log("Product Slug:", product.slug?.current)

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h2 className="text-3xl font-bold text-gray-900 mb-8">Notify Me Products</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products.map((product) => (
          
//           <div key={product._id} className="border p-4 rounded-lg shadow-md">
//             <Image
//               src={urlFor(product.imageUrl).url() || "/placeholder.svg"}
//               alt={product.productName}
//               width={300}
//               height={300}
//               className="w-full h-48 object-cover mb-4 rounded"
//               />
            
//             <h3 className="text-lg font-semibold">{product.productName}</h3>
//             <p className="text-lg font-bold mb-2">${product.price.toFixed()}</p>
//             <div className="flex justify-between items-center">
//               {/* <Link
//                 href={product.slug?.current ? `/products/${product.slug.current}` : "/products"}
//                 className="text-blue-600 hover:underline"
//               >
//                 View Details
//               </Link> */}
//               <Link
//   href={product.slug?.current ? `/products/${product.slug.current}` : "/products"}
//   className="text-blue-600 hover:underline"
// >
//   View Details
// </Link>


//               <button
//                 onClick={() => handleNotify(product._id, product.productName)}
//                 disabled={notifiedProducts.includes(product._id)}
//                 className={`px-4 py-2 text-white rounded ${
//                   notifiedProducts.includes(product._id)
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-blue-500 hover:bg-blue-600"
//                 }`}
//               >
//                 {notifiedProducts.includes(product._id) ? "Notified" : "Notify Me"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
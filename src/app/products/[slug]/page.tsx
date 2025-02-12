


// "use client"

// import { allProductsQuery } from "@/sanity/lib/queries"
// import { sanityFetch } from "@/sanity/lib/fetch"
// import { urlFor } from "@/sanity/lib/image"
// import Image from "next/image"
// import { useState, useEffect } from "react"
// import { CiShoppingCart } from "react-icons/ci"
// import Link from "next/link"

// interface Product {
//   _id: string
//   productName: string
//   price: number
//   imageUrl: string
//   slug: { current: string } | null
//   description: string
// }

// export default function ProductsPage() {
//   const [products, setProducts] = useState<Product[]>([])
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
//   const [notifiedProducts, setNotifiedProducts] = useState<string[]>([])

//   useEffect(() => {
//     async function fetchProducts() {
//       const fetchedProducts: Product[] = await sanityFetch({ query: allProductsQuery })
//       setProducts(fetchedProducts)
//     }
//     fetchProducts()

//     const storedNotifiedProducts = JSON.parse(localStorage.getItem("notifiedProducts") || "[]")
//     setNotifiedProducts(storedNotifiedProducts)
//   }, [])

//   const handleNotify = (product: Product) => {
//     if (notifiedProducts.includes(product._id)) {
//       const updatedNotifiedProducts = notifiedProducts.filter((id) => id !== product._id)
//       setNotifiedProducts(updatedNotifiedProducts)
//       localStorage.setItem("notifiedProducts", JSON.stringify(updatedNotifiedProducts))
//     } else {
//       const updatedNotifiedProducts = [...notifiedProducts, product._id]
//       setNotifiedProducts(updatedNotifiedProducts)
//       localStorage.setItem("notifiedProducts", JSON.stringify(updatedNotifiedProducts))
//     }
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <div key={product._id} className="group">
//             <div
//               className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 cursor-pointer"
//               onClick={() => setSelectedProduct(product)}
//             >
//               {product.imageUrl && (
//                 <Image
//                   src={urlFor(product.imageUrl).url() || "/placeholder.svg"}
//                   alt={product.productName}
//                   width={500}
//                   height={500}
//                   className="object-cover object-center group-hover:opacity-75"
//                 />
//               )}
//             </div>
//             <h3 className="mt-4 text-sm text-gray-700">{product.productName}</h3>
//             <p className="mt-1 text-lg font-medium text-gray-900">${product.price.toFixed(2)}</p>
//             <button
//               onClick={() => handleNotify(product)}
//               className={`mt-2 px-4 py-2 rounded-full ${
//                 notifiedProducts.includes(product._id) ? "bg-green-500 text-white" : "bg-blue-600 text-white"
//               }`}
//             >
//               {notifiedProducts.includes(product._id) ? "Notified" : "Notify Me"}
//             </button>
//           </div>
//         ))}
//       </div>

//       {selectedProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white p-8 rounded-lg max-w-6xl w-full">
//             <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
//               {/* Left Section - Image */}
//               <div className="relative flex items-center justify-center w-full lg:w-1/2">
//                 <Image
//                   src={urlFor(selectedProduct.imageUrl).url() || "/placeholder.svg"}
//                   alt={selectedProduct.productName}
//                   width={400}
//                   height={400}
//                   className="w-full h-auto object-cover rounded-lg"
//                 />
//               </div>

//               {/* Right Section - Content */}
//               <div className="lg:w-1/2 mt-6 lg:mt-0 text-center lg:text-left">
//                 <h2 className="text-xl sm:text-2xl lg:text-4xl font-medium text-black mb-4">
//                   {selectedProduct.productName}
//                 </h2>
//                 <p className="text-sm sm:text-base font-light text-gray-700 mb-10 leading-7">
//                   {selectedProduct.description}
//                 </p>
//                 <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-6">
//                   ${selectedProduct.price.toFixed(2)}
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                   <button
//                     className={`flex items-center justify-center py-2 px-6 rounded-full ${
//                       notifiedProducts.includes(selectedProduct._id)
//                         ? "bg-green-500 text-white"
//                         : "bg-blue-600 text-white"
//                     }`}
//                     onClick={() => handleNotify(selectedProduct)}
//                   >
//                     {notifiedProducts.includes(selectedProduct._id) ? "Remove Notification" : "Notify Me"}
//                   </button>
//                   <button className="flex items-center justify-center bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300">
//                     <CiShoppingCart className="w-6 h-6 mr-2" />
//                     <Link href="/addtoCart">Add to Cart</Link>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <button className="mt-6 text-gray-600 hover:text-gray-800" onClick={() => setSelectedProduct(null)}>
//               Close
//             </button>
//             console.log(useParams())
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { sanityFetch } from "@/sanity/lib/fetch"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

interface Product {
  _id: string
  productName: string
  description: string
  price: number
  imageUrl: string
  slug?: { current: string }
}

export default function NotifyMePage() {
  const searchParams = useSearchParams()
  const productSlug = searchParams.get("product")

  const [product, setProduct] = useState<Product | null>(null)
  const [notified, setNotified] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!productSlug) return

    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product" && slug.current == "${productSlug}"][0]`
        const fetchedProduct: Product = await sanityFetch({ query })

        if (fetchedProduct) {
          setProduct(fetchedProduct)
        }
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [productSlug])

  const handleNotify = () => {
    setNotified(true)
    alert(`You will be notified when ${product?.productName} is available!`)
  }

  if (loading) {
    return <p className="text-center text-gray-500">Loading product details...</p>
  }

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Notify Me for {product.productName}</h2>

      <Image
        src={urlFor(product.imageUrl).url() || "/placeholder.svg"}
        alt={product.productName}
        width={400}
        height={400}
        className="w-full h-64 object-cover mb-4 rounded"
      />

      <p className="text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
      <p className="text-gray-600 mb-4">{product.description}</p>

      <button
        onClick={handleNotify}
        disabled={notified}
        className={`px-6 py-3 text-white text-lg font-semibold rounded ${
          notified ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {notified ? "You will be notified" : "Notify Me"}
      </button>
    </div>
  )
}

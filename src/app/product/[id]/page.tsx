"use client"
import Image from "next/image"
import { useCart } from "@/components/CartProvider"
import  { Button } from "../../../../component/ui/button"
import { useParams } from "next/navigation"
import Link from "next/link"

const products = [
  {
    id: 1,
    src: "/images/shoe1.png",
    title: "Just In",
    name: "Nike Air Max Pulse",
    price: 13995,
    category: "Women's Shoes",
    color: "1 Colour",
  },
  {
    id: 2,
    src: "/images/shoe2.png",
    title: "Just In",
    name: "Nike Air Max Pulse",
    price: 13995,
    category: "Men's Shoes",
    color: "1 Colour",
  },
  {
    id: 3,
    src: "/images/shoe3.png",
    title: "Just In",
    name: "Nike Air Max Pulse",
    price: 16996,
    category: "Women's Shoes",
    color: "1 Colour",
  },
  {
    id: 4,
    src: "/images/shoe4.png",
    title: "Just In",
    name: "Nike Air Max Pulse",
    price: 16996,
    category: "Men's Shoes",
    color: "1 Colour",
  },
  {
    id: 5,
    src: "/images/pimg1.png",
    title: "Just In",
    name: "Nike Air Force 1 Mid '07",
    price: 10975.00,
    category: "Men's Shoes",
    color: "1 Colour",
  },
  {
    id: 6,
    src: "/images/pimg2.png",
    title: "Just In",
    name: "Nike Court Vision Low Next Nature",
    price: 4995.00,
    category: "Men's Shoes",
    color: "1 Colour",
  },
  {
    id: 7,
    src: "/images/pimg3.png",
    title: "Just In",
    name: "Nike Air Force 1 PLT.AF.ORM",
    price: 8695.00,
    category: "Women's Shoes",
    color: "1 Colour",
  },
  {
    id: 8,
    src: "/images/pimg4.png",
    title: "Just In",
    name: "Nike Air Force 1 React",
    price: 13295,
    category: "Men's Shoes",
    color: "1 Colour",
  },
  {
    id: 9,
    src: "/images/pimg5.png",
    title: "Promo Exclusion",
    name: "Air Jordan 1 Elevate Low",
    price: 11895,
    category: "Women's Shoes",
    color: "1 Colour",
  },
  {
    id: 10,
    src: "/images/pimg7.png",
    title: "Just In",
    name: "Nike Dunk Low Retro SE",
    price: 9695,
    category: "Men's Shoes",
    color: "1 Colour",
  },
  {
    id: 11,
    src: "/images/pimg9.png",
    title: "Promo Exclusion",
    name: "Nike Court Vision Low",
    price: 5695,
    category: "Men's Shoes",
    color: "1 Colour",
  },
  {
    id: 12,
    src: "/images/pimg12.png",
    title: "Just In",
    name: "Nike Air Force 1 LV8 3",
    price: 7495,
    category: "Older Kid's Shoes",
    color: "1 Colour",
  },
  {
    id: 13,
    src: "/images/pimg13.png",
    title: "Just In",
    name: "Nike Blazer Low Platform",
    price: 8195,
    category: "Women's Shoes",
    color: "1 Colour",
  },
  {
    id: 14,
    src: "/images/pimg14.png",
    title: "Just In",
    name: "Nike Air Force 1 '07",
    price: 8195,
    category: "women's Shoes",
    color: "2 Colour",
  },
  {
    id: 15,
    src: "/images/pimg16.png",
    title: "Just In",
    name: "Nike Dunk Low Retro",
    price: 8695,
    category: "Men's Shoes",
    color: "1 Colour",
  },
  {
    id: 16,
    src: "/images/pimg17.png",
    title: "Just In",
    name: "Nike Air Max SC",
    price: 5995,
    category: "Women's Shoes",
    color: "2 Colour",
  },
  {
    id: 17,
    src: "/images/pimg19.png",
    title: "Just In",
    name: "Nike Air Max SYSTM",
    price: 6495,
    category: "Older Kid's Shoes",
    color: "1 Colour",
  },
  {
    id: 18,
    src: "/images/pimg21.png",
    title: "Just In",
    name: "Nike Court Legacy Lift",
    price: 7495,
    category: "Women's Shoes",
    color: "2 Colour",
  },
  {
    id: 19,
    src: "/images/pimg23.png",
    title: "Just In",
    name: "Nike SB Zoom Janoski OG+",
    price: 8595,
    category: "Shoes",
    color: "1 Colour",
  },
  {
    id: 20,
    src: "/images/pimg26.png",
    title: "Just In",
    name: "Jordan Series ES",
    price: 7495,
    category: "Men's Shoes",
    color: "2 Colour",
  },
  {
    id: 21,
    src: "/images/pimg29.png",
    title: "Just In",
    name: "Nike Blazer Low '77 Jumbo",
    price: 8595,
    category: "Women's Shoes",
    color: "1 Colour",
  },
  // ... add all other products here
]

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      <div className="md:w-1/2 items-end ml-44">
        <Image
          src={product.src || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={400}
          className="object-cover items-center"
        />
      </div>
      <div className="md:w-1/2 mt-8">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl mb-2">{product.category}</p>
        <p className="text-xl mb-4">₹ {Number(product.price).toFixed(2)}</p>
        <p className="mb-4">{product.color}</p>
        <Link href="/addtoCart" onClick={() => addToCart({ ...product, quantity: 1 })} 
        className="w-full md:w-auto mt-12 text-xl bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </Link>
      </div>
    </div>
  )
}


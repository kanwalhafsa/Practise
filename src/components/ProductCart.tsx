import Image from "next/image"
import { FaRegHeart, FaHeart, FaShoppingCart } from "react-icons/fa"
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

interface Product {
  id: number
  src: string
  name: string
  price: number
  description: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
    })
  }

  const handleWishlist = () => {
    if (wishlist.includes(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product.id)
    }
  }

  return (
    <div className="flex flex-col justify-start">
      <Dialog>
        <DialogTrigger asChild>
          <Image
            src={product.src || "/placeholder.svg"}
            alt={product.name}
            width={340}
            height={340}
            className="hover:scale-105 duration-300 w-full cursor-pointer"
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
                onClick={handleAddToCart}
                className="mt-12 w-full bg-blue-600 text-center hover:bg-blue-700 py-2 px-4 text-white font-bold rounded"
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
        <button
          onClick={handleWishlist}
          className="text-2xl text-gray-400 hover:text-red-500 transition-all duration-300"
        >
          {wishlist.includes(product.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </button>
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center w-32 bg-blue-600 hover:bg-blue-700 py-2 px-4 text-white font-bold rounded"
        >
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}


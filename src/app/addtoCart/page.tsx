

// "use client"

// import { useCart } from "@/components/CartProvider"
// import { FaRegHeart } from "react-icons/fa"
// import { RiDeleteBin6Line } from "react-icons/ri"
// import Link from "next/link"

// const CartPage = () => {
//   const { cart, removeFromCart, updateQuantity } = useCart()

//   const totalPrice = cart.reduce((total, item) => total + (item.price ?? 0) * item.quantity, 0)

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center py-8 mt-10">
//       <div className="max-w-7xl w-full bg-white p-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//           <div className="lg:col-span-8">
//             <div className="bg-gray-100 font-semibold h-24 px-6 py-4">
//               <h1 className="text-lg">Free Delivery</h1>
//               <p className="text-sm mt-2">
//                 Applies to orders of ₹14,000.00 or more.
//                 <span className="font-bold cursor-pointer border-b border-black">View details</span>
//               </p>
//             </div>

//             <h2 className="text-2xl font-bold mt-7">Bag</h2>

//             {cart.map((item) => (
//               <div key={item._id} className="flex items-start border-b pb-4 mt-9">
//                 <img
//                   src={item.imageUrl || "/placeholder.svg"}
//                   alt={item.productName}
//                   width={150}
//                   height={150}
//                   className="rounded-md border"
//                 />
//                 <div className="ml-4 flex-1 space-y-1">
//                   <h3 className="font-medium text-gray-800">{item.productName}</h3>
//                   <div className="flex items-center text-gray-500 space-x-9">
//                     <p>
//                       Quantity:
//                       <button onClick={() => updateQuantity(item._id, item.quantity - 1)} className="mx-2">
//                         -
//                       </button>
//                       {item.quantity}
//                       <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="mx-2">
//                         +
//                       </button>
//                     </p>
//                   </div>
//                   <div className="flex items-center space-x-4 mt-2">
//                     <FaRegHeart className="text-gray-600 w-6 h-6 cursor-pointer" />
//                     <RiDeleteBin6Line
//                       className="text-gray-600 w-6 h-6 cursor-pointer"
//                       onClick={() => removeFromCart(item._id)}
//                     />
//                   </div>
//                 </div>
//                 <div className="text-right ml-auto">
//                   <p className="font-medium">
//                     MRP: ₹ {item.price != null ? (item.price * item.quantity).toFixed(2) : "N/A"}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="lg:col-span-4 bg-white rounded-lg p-6 border border-gray-200">
//             <h2 className="text-lg font-bold mb-4">Summary</h2>
//             <div className="flex mb-4 justify-between">
//               <p className="text-black">Subtotal</p>
//               <p className="font-medium ml-10 text-right">₹ {totalPrice.toFixed(2)}</p>
//             </div>
//             <div className="flex mb-4 justify-between">
//               <p className="text-gray-600">Estimated Delivery & Handling</p>
//               <p className="font-medium ml-10">Free</p>
//             </div>
//             <div className="flex justify-between text-lg font-bold border-t pt-4">
//               <p>Total</p>
//               <p className="font-medium ml-10">₹ {totalPrice.toFixed(2)}</p>
//             </div>
//             <button className="bg-black justify-center items-center text-white font-medium py-4 rounded-full lg:w-52 h-16 w-48 mt-11">
//               <Link href="/checkout"> Member Checkout</Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CartPage

"use client"

import { useCart } from "@/components/CartProvider"
import { FaRegHeart } from "react-icons/fa"
import { RiDeleteBin6Line } from "react-icons/ri"
import Link from "next/link"
import { Button } from "../../../component/ui/button"
import AuthGuard from "@/components/AuthGuard"

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart()

  const totalPrice = cart.reduce((total, item) => {
    const price = Number.parseFloat(String(item.price).replace("₹ ", "").replace(" ", ""))
    return total + price * item.quantity
  }, 0)

  return (
    <AuthGuard>
    <div className="min-h-screen bg-white flex items-center justify-center py-8 mt-10">
      <div className="max-w-7xl w-full bg-white p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="bg-gray-100 font-semibold h-24 px-6 py-4">
              <h1 className="text-lg">Free Delivery</h1>
              <p className="text-sm mt-2">
                Applies to orders of ₹14,000.00 or more.
                <span className="font-bold cursor-pointer border-b border-black">View details</span>
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-7">Bag</h2>

            {cart.map((item) => (
              <div key={item.id} className="flex items-start border-b pb-4 mt-9">
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="rounded-md border"
                />
                <div className="ml-4 flex-1 space-y-1">
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <div className="flex items-center text-gray-500 space-x-9">
                    <p className="flex items-center">
                      Quantity:
                      <Button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="mx-2">
                        -
                      </Button>
                      {item.quantity}
                      <Button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="mx-2">
                        +
                      </Button>
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <FaRegHeart className="text-gray-600 w-6 h-6 cursor-pointer" />
                    <RiDeleteBin6Line
                      className="text-gray-600 w-6 h-6 cursor-pointer"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                </div>
                <div className="text-right ml-auto">
                  <p className="font-medium">
                    MRP: ₹{" "}
                    {(Number.parseFloat(String(item.price).replace("₹ ", "").replace(" ", "")) * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-lg font-bold mb-4">Summary</h2>
            <div className="flex mb-4 justify-between">
              <p className="text-black">Subtotal</p>
              <p className="font-medium ml-10 text-right">₹ {totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex mb-4 justify-between">
              <p className="text-gray-600">Estimated Delivery & Handling</p>
              <p className="font-medium ml-10">Free</p>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-4">
              <p>Total</p>
              <p className="font-medium ml-10">₹ {totalPrice.toFixed(2)}</p>
            </div>
            <Button className="w-full mt-4">
              <Link href="/checkout">Member Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </AuthGuard>
  )
}

export default CartPage



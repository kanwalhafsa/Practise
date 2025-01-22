import React from 'react'
import Image from 'next/image'

export default function AirMax() {
  return (
    <div className='md:max-w-full h-auto bg-white mt-24 px-4 lg:px-12'> 
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-24">
              {[
                { src: "/images/shoe1.png", name: "Nike Air Max Pulse", price: "₹ 13 995", category: "Women's Shoes" },
                { src: "/images/shoe2.png", name: "Nike Air Max Pulse", price: "₹ 13 995", category: "Men's Shoes" },
                { src: "/images/shoe3.png", name: "Nike Air Max Pulse", price: "₹ 16 996", category: "Women's Shoes" },
                { src: "/images/shoe4.png", name: "Nike Air Max Pulse", price: "₹ 16 996", category: "Men's Shoes" },
                { src: "/images/pimg5.png", name: "Nike Air Max Pulse", price: "₹ 11 895", category: "Women's Shoes"},
        { src: "/images/pimg7.png", name: "Nike Air Max Pulse", price: "₹ 9 695", category: "Men's Shoes"},
        { src: "/images/pimg9.png", name: "Nike Air Max Pulse", price: "₹ 5 695", category: "Men's Shoes"},
        { src: "/images/pimg12.png", name: "Nike Air Max Pulse", price: "₹ 7 495", category: "Older Kid's Shoes"},
        { src: "/images/pimg13.png", name: "Nike Air Max Pulse", price: "₹ 8 195", category: "Women's Shoes"},
        { src: "/images/pimg14.png", name: "Nike Air Max Pulse", price: "₹ 8 195", category: "women's Shoes"},
        { src: "/images/pimg16.png", name: "Nike Air Max Pulse", price: "₹ 8 695", category: "Men's Shoes"},
        { src: "/images/pimg17.png", name: "Nike Air Max Pulse", price: "₹ 5 995", category: "Women's Shoes"},
        { src: "/images/pimg19.png", name:"Nike Air Max Pulse", price: "₹ 6 495", category: "Older Kid's Shoes"},
        { src: "/images/pimg21.png", name: "Nike Air Max Pulse", price: "₹ 7 495", category: "Women's Shoes"},
        { src: "/images/pimg23.png", name: "Nike Air Max Pulse", price: "₹ 8 595", category: "Women's Shoes"},
        { src: "/images/pimg29.png", name: "Nike Air Max Pulse", price: "₹ 8 195", category: "Men's Shoes"},
     
              ].map((shoe, index) => (
                <div key={index} className="flex flex-col justify-start ">
                  <Image
                    src={shoe.src}
                    alt={shoe.name}
                    width={440}
                    height={440}
                    className="hover:scale-105 duration-300 w-full"
                  />
                  <div className='flex justify-between items-center mt-2'>
                  <h3 className="text-base mt-4">{shoe.name}</h3>
                  <span className=" text-lg font-semibold text-right">{shoe.price}</span></div>
                  <p className=" text-[#757575] mt-2">{shoe.category}</p>
                </div>
              ))}
            </div>
          </div>

    
  )
}


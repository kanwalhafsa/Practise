import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Featured() {
  return (
    <div className='felx sm:max-w-screen-sm lg:max-w-full'>
         {/* Heading */}
<div className="flex flex-col mt-28 mb-12 px-4 md:px-10 lg:px-14">
  <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Featured</h1>
</div>

{/* Image */}
<div className="flex justify-center px-4 md:px-10 overflow-hidden">
  <Image
    src="/images/fimg.jpeg"
    alt="img"
    width={1344}
    height={700}
    className="object-cover w-full h-auto hover:scale-105 duration-300"
  />
</div>

{/* Heading */}
<div className="flex justify-center mt-16">
  <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold uppercase text-center">
    Step Into What Feels Good
  </h2>
</div>
<p className="flex justify-center mt-4 text-center px-4">
  Cause everyone should know the feeling of running in that perfect pair.
</p>

{/* Button */}
<div className="flex justify-center items-center mt-10 mb-32">
  <Link href="/shop" className="text-white hover:scale-90 bg-black text-center items-center rounded-full font-semibold w-32 md:w-40 h-10 ">
    Find Your Shoe
    </Link>
</div>

    </div>
  )
}


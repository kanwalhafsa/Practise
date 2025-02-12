
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { CiShoppingCart } from "react-icons/ci";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ProductDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between p-6 rounded-lg bg-white mt-32 w-[90%] max-w-[1200px] mx-auto py-6 lg:gap-20">
      {/* Left Section - Image */}
      <div className="relative flex items-center justify-center w-full lg:w-1/2 mb-10">
        <Image
          src="/images/productImg.png" // Ensure this path is correct
          alt="Nike Air Force 1"
          className="w-full h-auto object-cover"
          width={400}
          height={400}
        />
      </div>

      {/* Right Section - Content */}
      <div className="lg:w-1/2 mt-6 lg:mt-0 text-center lg:text-left">
        <h2 className={`text-xl sm:text-2xl lg:text-6xl font-medium text-black mb-4 ${poppins.className}`}>
          Nike Air Force 1 <br /> PLT.AF.ORM
        </h2>
        <p className={`text-sm sm:text-base font-light text-gray-700 mb-10 leading-7 ${poppins.className}`}>
          Turn style on its head with this crafted take on the <br /> Air Jordan 1 Mid.
          Its "inside out"-inspired <br /> construction, including unique layering and <br /> exposed foam accents, ups the ante on this <br /> timeless Jordan Brand silhouette.
          Details like the <br /> deco stitching on the Swoosh add coveted <br /> appeal, while the unexpected shading, rich <br /> mixture of materials and aged midsole aesthetic <br /> give this release an artisan finish.
        </p>
        <p className={`text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-6 ${poppins.className}`}>
          ₹ 8 695.00
        </p>
        <button className="flex items-center justify-center bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300">
          <CiShoppingCart className="w-6 h-6 mr-2" />
          <Link href='/addtoCart'> Add to Cart </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
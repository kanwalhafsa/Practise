
// // import Home from "@/components/Home";
// import Image from "next/image";
// import { sanityFetch } from "@/sanity/lib/fetch";
// import { allproducts } from "@/sanity/lib/queries";

import Home from "@/components/Home";

// // export default function Mainpage() {
// //   return (
// //     <Home />
// //     )
// //   }

// type Product ={
//   _id: string;
//   productName: string;
//   description: string;
//   price: number; 
//   imageUrl: string
// }

// export default async function Home(){
//   const products :Product[] = await sanityFetch({query: allproducts})

//   return(
//     <div>
//        {/* <Home /> */}
//       <h1>
//         My products
//       </h1>
//       <div className="grid grid-cols-3 gap-4">
//         {
//           products.map((product) => (
//             <div className="border p-4 rounded-lg shadow-sm flex flex-col items-center" key={product._id}>
//               <Image
//               src={product.imageUrl}
//               alt={product.productName}
//               className="w-60"
//               width={500}
//               height={500}></Image>
//               <h2 className="text-xl font-bold text-center">
//                 {product.productName}
//              </h2>
//              <p className="text-center">
//               {product.description}
//              </p>
//              <p className="text-center">
//               {product.price}
//              </p>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }


export default function MainPage(){
  return(
    <div>
      <Home />
    </div>
  )
}
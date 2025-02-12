// type Product ={
//     _id: string;
//     productName: string;
//     description: string;
//     price: number | null; 
//     // image? :{
//     //     asset: {
//     //         _ref: string;
//     //         _type: "image"
//     //     }
//     // };
//     _type: string;
//     image: any
//     slug: {
//       _type: "slug"
//       current: string
//     }
//   }

export interface Product {
    _id: string
    productName: string
    description: string
    _type: string
    image: any // You might want to define a more specific type for Sanity image
    price: number
    slug: {
              _type: "slug"
              current: string
            }
  }
  
  
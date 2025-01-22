import { defineQuery } from "next-sanity";


export const allproducts = defineQuery(`
    *[_type == "product"]{
    _id,
    productName,
    category,
    price,
    inventory,
    colors,
    status,
    "imageUrl": image.asset->url,
    description
    }
    `)
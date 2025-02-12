import { groq } from "next-sanity"

export const singleProductQuery = groq`
  *[_type == "product" && slug.current == "$slug"][0] {
    _id,
    productName,
    description,
    price,
    "imageUrl": image.asset->url,
    slug
  }
`

export const allProductsQuery = groq`
  *[_type == "product"]{
    _id,
    productName,
    category,
    price,
    inventory,
    colors,
    status,
    "imageUrl": image.asset->url,
    description,
    slug
  }
`


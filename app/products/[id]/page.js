"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const {id} = useParams()
  const [product, setProduct] = useState(null)
   const fetchProduct = async () => {
    const url = `https://dummyjson.com/products/${id}`;
       const res = await fetch(url)
       const data = await res.json()

       setProduct(data)

       console.log(data)


   }
   useEffect(() => {
    if(!id) return
    fetchProduct()
   },[id])

   if(!product) return <p>Loading.....</p>
  return (
    <>
    <h1>{product.title}</h1>
    </>
  )
}
export default ProductDetail
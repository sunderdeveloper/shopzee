"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

const ProductDetail = () => {
  const {id} = useParams()
  const [product, setProduct] = useState(null)
  const [itemNum, setItemNum] = useState("1")
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
    <div className="max-w-8/12 mx-auto w-full flex items-center gap-6 justify-center mt-10">
      <div>
        <Image src={product.images[0]} width={400} height={500} alt="product Image"
        className="bg-gray-100"
        />
      </div>
      <div className="w-6/12">
        <h1 className="text-4xl font-normal">{product.title}</h1>
        <h3 className="flex items-end justify-start my-2 text-3xl text-orange-500 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ff6900"
          >
            <path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z" />
          </svg>
          {Math.floor(
            Math.floor(product.price * 81) -
              (Math.floor(product.price * 81) *
                Math.floor(product.discountPercentage)) /
                100,
          )}
          <span className="text-gray-500 font-normal text-lg flex items-center ml-2 line-through">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="12px"
              fill="#6a7282"
            >
              <path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z" />
            </svg>
            {Math.floor(product.price * 81)}{" "}
            <span> ({Math.floor(product.discountPercentage)} % OFF)</span>
          </span>
        </h3>
        <p className="py-2 text-gray-600">{product.description}</p>
         <p className="py-2  flex items-center justify-start text-yellow-500 gap-1 text-md">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar /> {product.rating}
                </p>
        <div className="flex items-center gap-4 my-4">
          <div className="flex items-center gap-4 py-2 px-4 border border-gray-500 rounded-sm w-fit text-sm"><span className="text-lg cursor-pointer">-</span> {itemNum} <span className="text-lg cursor-pointer">+</span></div>
          <div><button className="bg-black text-white py-3 px-6 rounded-sm uppercase text-sm cursor-pointer">add to cart</button></div>
        </div>
        <div className="py-2 px-4 text-md text-gray-600 uppercase rounded-sm border border-gray-500 w-fit">sku: {product.sku}</div>
      </div>
    </div>
    </>
  )
}
export default ProductDetail
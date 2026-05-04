"use client"
import Link from "next/link"
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaUser  } from "react-icons/fa6";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
const NavBar = () => {
   const {cartItems} = useContext(CartContext)
 
    return <>
    <div className="flex items-center justify-between max-w-295 w-full p-4 px-6 my-6 rounded-lg mx-auto bg-gray-100">
        <Link href="/">
        <h1 className="font-bold text-orange-500 cursor-pointer">SHOPZEE</h1>
        </Link>
        <ul className="flex items-center gap-4">
            <li className="text-gray-500 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="text-gray-500 cursor-pointer">
              <Link href="/products">Products</Link>
            </li>
           
            <li className="text-gray-500 cursor-pointer">
              <Link href="/orders">Orders</Link>
            </li>
            
        </ul>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-5">
            <Link href="/cart">
            <div className="relative">
              <FiShoppingCart  className="text-gray-500 text-lg"/>
              <span className="absolute text-[8px] flex items-center justify-center w-3 h-3 rounded-xl text-white bg-red-500 font-bold -top-2 -right-2">{cartItems.length}</span>
            </div>
            </Link>
          <FaRegHeart  className="text-gray-500 text-lg"/>
          </div>
          <Link href="/login">
        <button className="flex items-center gap-2 p-2 bg-orange-600 text-sm font-semibold px-4 text-white rounded-md cursor-pointer">Login <FaUser /></button>
        </Link>
        </div>
        
    </div>
     </>
}
export default NavBar
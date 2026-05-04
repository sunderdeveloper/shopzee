"use client";
import CartContext from "@/components/context/CartContext";
import Link from "next/link";
import { useContext } from "react";
import Image from "next/image";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  console.log(cartItems)
  return (
    <div className="max-w-11/12 mx-auto mt-8">
      {cartItems.length >= 1 ? (
        cartItems.map((item) => {
          return (
            <div key={item.id} className="flex items-center justify-between gap-8 pb-5 border-b border-dashed border-b-gray-300 mb-5">
              <div className="flex items-center gap-6">
                <Image
                className="bg-gray-100 rounded-md"
                width={150}
                height={150}
                src={item.images[0]}
                alt="product image"
              />
              <div>
                <span className="capitalize text-gray-400">{item.category}</span>
                <h1 className="uppercase my-2 text-sm">{item.title}</h1>
                <p className="flex items-center gap-2"><span className="w-2 h-2 bg-black rounded-md block"></span> In stock ({item.stock})</p>
              </div>
              </div>
                <div className="flex items-center gap-4 py-1 px-4 border border-gray-500 rounded-sm w-fit text-sm">
              <span className="text-lg cursor-pointer" onClick={() => decreaseItem()}>-</span> 1
              <span className="text-lg cursor-pointer" onClick={() => increaseItem()}>+</span>
            </div>
            </div>
          );
        })
      ) : (
        <div className="min-h-[calc(100vh-150px)] flex flex-col items-center justify-center ">
          <h1>Looks like your cart is empty</h1>
          <Link href="/products">
            <button className="my-2 bg-black text-white py-1 px-3 rounded-md cursor-pointer uppercase text-[12px] font-semibold">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Cart;

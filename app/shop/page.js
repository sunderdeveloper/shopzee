"use client";
import Card from "@/components/UI/Card";
import { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const renderProducts = async () => {
    const url = "https://dummyjson.com/products";

    const data = await fetch(url);
    const res = await data.json();
    console.log(res.products);
    setProducts(res.products);
  };
  useEffect(() => {
    renderProducts();
  }, []);
  return (
    <>
      <div className="grid grid-cols-[300px_1fr] gap-4 mx-4 max-w-7xl overflow-x-hidden">
        <div className="w-full h-screen border-gray-300 border rounded-xl">

        </div>
        <div className="grid grid-cols-3 gap-8 w-full">
          {products.map((item) => {
        return <Card data={item} key={item.id} />
      })}
        </div>
      </div>
    </>
  );
};
export default Shop;

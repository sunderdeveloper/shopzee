"use client";
import Card from "@/components/UI/Card";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

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

  const [min, setMin] = useState(100);
  const [max, setMax] = useState(600);

  const minLimit = 0;
  const maxLimit = 800;
  return (
    <>
      <div className="grid grid-cols-[300px_1fr] gap-4 mx-4 max-w-7xl">
        <div className="w-full h-screen border-gray-300 rounded-xl p-4 sticky top-5">
          <div className="flex items-center justify-between bg-gray-100 rounded-md py-2 px-4">
            <input type="text" placeholder="search" className="flex-1 outline-0 border-0 text-gray-700"/>
             <IoSearch className="text-gray-400"/>
          </div>
          <div className="p-4 bg-gray-50 mt-4 border border-gray-100 rounded-md">
            <h3 className="text-orange-500 font-semibold text-[18px]">Categories</h3>
            <div className="flex items-center gap-2 my-2 text-gray-600">
              <input type="checkbox" className=""/>
              <p className="text-sm text-gray-600">Mens</p>
            </div>
            <div className="flex items-center gap-2 my-2 text-gray-600">
              <input type="checkbox" className=""/>
              <p className="text-sm">Womens</p>
            </div>
            <div className="flex items-center gap-2 my-2 text-gray-600">
              <input type="checkbox" className=""/>
              <p className="text-sm">Kids</p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 mt-4 border border-gray-100 rounded-md">
            <h3 className="text-orange-500 font-semibold text-[18px]">Price</h3>
            <div className="flex items-center gap-2 my-2 text-gray-600">
              <input type="checkbox" className=""/>
              <p className="text-sm text-gray-600">Mens</p>
            </div>
            
            
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 w-full">
          {products.map((product) => {
        return <Card product={product} key={product.id} />
      })}
        </div>
      </div>
    </>
  );
};
export default Shop;

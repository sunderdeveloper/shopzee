"use client";
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
      {products.map((item) => {
        return <h1 key={item.id}>{item.title}</h1>;
      })}
    </>
  );
};
export default Shop;

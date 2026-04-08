import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
const Card = ({ product }) => {
  const router = useRouter()
  return (
    <>
      <div className="bg-gray-100 rounded-xl p-4 text-center relative group overflow-hidden">
        <div className="absolute gap-2 p-2 right-5 top-5 translate-x-100 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-400">
         
          <span onClick={() => router.push(`/products/${product.id}`)} 
          className="bg-white/80 w-10 h-10 flex items-center justify-center text-lg cursor-pointer text-gray-600 mb-2">
            <IoEyeOutline />
          </span> 
         
          <span className="bg-white/80 w-10 h-10 flex items-center justify-center text-lg cursor-pointer text-gray-600">
            <FaRegHeart />
          </span>
        </div>

        <Image className="" width={250} height={100} src={product.images[0]} alt="product image"/>
        <h1>{product.title}</h1>
        <h3 className="flex items-end justify-center my-2 text-xl text-orange-500 font-semibold">
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
          <span className="text-gray-500 font-normal text-[12px] flex items-center ml-2 line-through">
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

        <p className="py-2  flex items-center justify-center text-yellow-500 gap-1 text-sm">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar /> {product.rating}
        </p>

        <button className="my-2 bg-black text-white py-1 px-3 rounded-md cursor-pointer uppercase text-[12px] font-semibold">
          Add to cart
        </button>
      </div>
    </>
  );
};
export default Card;

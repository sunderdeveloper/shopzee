import Link from "next/link"
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaUser  } from "react-icons/fa6";
const NavBar = () => {
    return <>
    <div className="flex items-center justify-between max-w-295 w-full p-4 px-6 my-6 rounded-lg mx-auto bg-gray-100">
        <h1 className="font-bold text-orange-500">SHOPZEE</h1>
        <ul className="flex items-center gap-4">
            <li className="text-gray-500 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="text-gray-500 cursor-pointer">
              <Link href="/products">Products</Link>
            </li>
            {/* <li className="text-gray-500 cursor-pointer">
              <Link href="/categories">Categories</Link>
            </li> */}
            <li className="text-gray-500 cursor-pointer">
              <Link href="/orders">Orders</Link>
            </li>
        </ul>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-5">
            <FiShoppingCart  className="text-gray-500 text-lg"/>
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
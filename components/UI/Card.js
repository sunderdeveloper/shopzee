const Card = ({ data }) => {
  // console.log(data)
  return (
    <>
      <div className="bg-gray-100 rounded-xl p-4 text-center">
        <img className="w-75" src={data.images[0]} />
        <h1>{data.title}</h1>
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
          {Math.floor(Math.floor(data.price * 81) - Math.floor(data.price * 81) * Math.floor(data.discountPercentage) / 100)}
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
            {Math.floor(data.price * 81)}{" "}
            <span> ({Math.floor(data.discountPercentage)} % OFF)</span>
          </span>
        </h3>
        <div></div>
      </div>
    </>
  );
};
export default Card;

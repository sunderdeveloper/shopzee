const ProductShimmer = () => {
    return (
        <div className="animate-pulse p-4 w-6/12 flex items-center mx-auto mt-12 justify-center gap-10">
      <div className="w-6/12 h-64 bg-gray-300 rounded mb-4"></div>
      <div className="w-6/12">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-5 bg-gray-300 rounded w-1/4 mb-4"></div>
      <div className="h-2 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-2 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-2 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-2 bg-gray-300 rounded w-3/6 mb-2"></div>
      <div className="flex items-center w-full mt-2 gap-2">
      <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
         <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      </div>
      </div>
    </div>
    )
}
export default ProductShimmer
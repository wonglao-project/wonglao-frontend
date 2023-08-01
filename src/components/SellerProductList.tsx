import ProductCard from "./ProductCard"
import useSellerProductList from "../hooks/useSellerProductList"

const SellerProductList = () => {
  const { sellerProductList, isLoading, error } = useSellerProductList()

  if (isLoading || !sellerProductList) return <p>Loading...</p>

  if (error || !sellerProductList) {
    return <p className='text-center text-red-500'>{error}</p>
  }

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch justify-stretch my-9 h-auto'>
        {sellerProductList &&
          sellerProductList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default SellerProductList

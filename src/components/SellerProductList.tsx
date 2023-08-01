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
      <div className='grid grid-cols-2 gap-20 items-stretch justify-stretch m-20 h-auto'>
        {sellerProductList &&
          sellerProductList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default SellerProductList

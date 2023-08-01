import { useEffect, useState } from "react"
import useProductList from "../hooks/useProductList"
import ProductCard from "./ProductCard"
import {
  EnumProductCategory,
  ProductCategory,
  ProductDto,
} from "../types/types"

const ProductList = () => {
  const { productList, isLoading, error } = useProductList()
  const [selectedProductCategory, setSelectedProductCategory] =
    useState<ProductCategory>(EnumProductCategory.GIN)
  const [currentProductList, setCurrentProductList] = useState<
    ProductDto[] | null
  >(null)

  useEffect(() => {
    const filterProduct = () => {
      if (productList) {
        setCurrentProductList(() => {
          return productList.filter(
            (product: ProductDto) =>
              product.product_category === selectedProductCategory
          )
        })
      }
    }

    filterProduct()
  }, [selectedProductCategory, productList])

  if (isLoading || !productList) return <p>Loading...</p>

  if (error || !productList) {
    return <p className='text-center text-red-500'>{error}</p>
  }

  console.log(productList)

  return (
    <div>
      <ul>
        <li onClick={() => setSelectedProductCategory(EnumProductCategory.GIN)}>
          Gin
        </li>
        <li onClick={() => setSelectedProductCategory(EnumProductCategory.RUM)}>
          Rum
        </li>
        <li
          onClick={() =>
            setSelectedProductCategory(EnumProductCategory.WHITE_SPIRIT)
          }
        >
          White Spirit
        </li>
      </ul>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch justify-stretch my-9 h-auto'>
        {currentProductList &&
          currentProductList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default ProductList

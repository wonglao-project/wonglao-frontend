import { List, ListItem } from "@material-tailwind/react"
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
    <div className="<div className='flex flex-col mx-20 justify-between'>">
      <div className='flex flex-col w-1/5'>
        <p className='pb-3 px-20 pt-20 border-b border-[#797979]/40'>Filter</p>
        <List className='py-5 px-20'>
          <ListItem
            onClick={() => setSelectedProductCategory(EnumProductCategory.GIN)}
            className='py-3 my-2 hover:bg-gray-200 hover:text-white focus:bg-gray-200 focus:text-white'
          >
            Gin
          </ListItem>
          <ListItem
            onClick={() => setSelectedProductCategory(EnumProductCategory.RUM)}
            className='py-3 my-2 hover:bg-gray-200 hover:text-white focus:bg-gray-200 focus:text-white'
          >
            Rum
          </ListItem>
          <ListItem
            onClick={() =>
              setSelectedProductCategory(EnumProductCategory.WHITE_SPIRIT)
            }
            className='py-3 my-2 hover:bg-gray-200 hover:text-white focus:bg-gray-200 focus:text-white'
          >
            White Spirit
          </ListItem>
        </List>
      </div>
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

import { useState } from "react"
import ContentList from "../components/ContentList"
import { EnumSellerCategory, SellerCategory } from "../types/types"
import ProductList from "../components/ProductList"
import { Link } from "react-router-dom"
import { useAuth } from "../providers/AuthProvider"

const Content = () => {
  const { isLoggedIn } = useAuth()
  const [selectedCategory, setSelectedCategory] = useState<SellerCategory>(
    EnumSellerCategory.BREWER
  )

  return (
    <>
      <ul className='flex flex-row mx-20 border-b border-[#797979]/40'>
        <li
          className='p-5 hover:cursor-pointer'
          onClick={() => setSelectedCategory(EnumSellerCategory.BAR)}
        >
          BAR
        </li>
        <li
          className='p-5 hover:cursor-pointer'
          onClick={() => setSelectedCategory(EnumSellerCategory.BREWER)}
        >
          BREWER
        </li>
        <li
          className='p-5 hover:cursor-pointer'
          onClick={() => setSelectedCategory(EnumSellerCategory.PRODUCT)}
        >
          PRODUCT
        </li>
      </ul>
      <div className='flex flex-row mx-20 justify-between'>
        <div className='flex flex-col'>
          <p className='pb-3 px-20 pt-20 border-b border-[#797979]/40'>
            Filter
          </p>
          <ul className='py-5 px-20'>
            <li>Gin</li>
            <li>Rum</li>
            <li>White Spirit</li>
          </ul>
        </div>
        <div className=''>
          {/* grid grid-cols-3 gap-32 p-20 */}
          {selectedCategory === EnumSellerCategory.PRODUCT ? (
            <ProductList />
          ) : (
            <ContentList selectedCategory={selectedCategory} />
          )}
        </div>
        {isLoggedIn && (
          <Link
            to={"/create"}
            className='bg-gray-200 p-3 rounded-lg text-white hover:bg-[#797979] text-lg'
          >
            Create New Content
          </Link>
        )}
      </div>
    </>
  )
}

export default Content

import { useState } from "react"
import ContentList from "../components/ContentList"
import { EnumSellerCategory, SellerCategory } from "../types/types"

const Content = () => {
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
            <li>Beer</li>
            <li>Gin</li>
            <li>Wine</li>
          </ul>
        </div>
        <div className='grid grid-cols-3 gap-32 p-20'>
          <img src='/img/list-product.png' alt='product list' />
          <img src='/img/list-product.png' alt='product list' />
          <img src='/img/list-product.png' alt='product list' />
        </div>
      </div>
      {selectedCategory === EnumSellerCategory.PRODUCT ? (
        // TODO: Change to Product component
        <ContentList selectedCategory={selectedCategory} />
      ) : (
        <ContentList selectedCategory={selectedCategory} />
      )}
    </>
  )
}

export default Content
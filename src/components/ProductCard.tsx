import { ProductDto } from "../types/types"

interface ProductCardProps {
  product: ProductDto
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className='group hover:cursor-default w-[300px] h-[300px] overflow-hidden relative flex  items-center'>
      <div className=' w-full h-full flex justify-center content-between gap-6 items-center group-hover:blur-lg transition-all duration-300'>
        <img
          src={product.images[0]}
          className=' top-0 left-0 object-cover absoulute  w-full h-full  '
        />
      </div>
      <p className='opacity-0  group-hover:opacity-100 transition-opacity duration-300 absolute text-gray-500 text-center text-6xl font-extralight z-50'>
        {product.product_name}
      </p>
    </div>
  )
}

export default ProductCard

import { ProductDto } from "../types/types"

interface ProductCardProps {
  product: ProductDto
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className=''>
      <img src={product.images[0]} />
      <div>
        <p>{product.product_name}</p>
        <p>{product.description}</p>
        <p>{product.product_category}</p>
      </div>
    </div>
  )
}

export default ProductCard

import { useEffect, useState } from "react"
import { ProductDto } from "../types/types"
import { host } from "../constant/host"

const useProductList = () => {
  const [productList, setProductList] = useState<ProductDto[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`${host}/product`)
        const product = await res.json()

        setProductList(product)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { productList, isLoading, error }
}

export default useProductList

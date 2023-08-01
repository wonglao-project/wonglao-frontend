import { useEffect, useState } from "react"
import { ProductDto } from "../types/types"
import { host } from "../constant/host"

const useProduct = (id: string) => {
  const [product, setProduct] = useState<ProductDto | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`${host}/product/${id}`)
        const data = await res.json()

        setProduct(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { product, isLoading, error }
}

export default useProduct

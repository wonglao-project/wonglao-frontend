import { useEffect, useState } from "react"
import { ProductDto } from "../types/types"
import { host } from "../constant/host"
import { useParams } from "react-router-dom"

const useSellerProductList = () => {
  const { id } = useParams()
  const [sellerProductList, setSellerProductList] = useState<
    ProductDto[] | null
  >(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`${host}/content/product/${id}`)
        const product = await res.json()

        setSellerProductList(product)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { sellerProductList, isLoading, error }
}

export default useSellerProductList

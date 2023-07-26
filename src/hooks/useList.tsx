import { useEffect, useState } from 'react'
import { ContentDto } from '../types/types'
import { host } from '../constant/host'

const useList = () => {
  const [list, setList] = useState<ContentDto[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`${host}/content`)
        const data = await res.json()

        setList(data.data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { list, isLoading, error }
}

export default useList
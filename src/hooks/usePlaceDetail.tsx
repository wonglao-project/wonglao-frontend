import { useState } from "react"
import { WebApiService } from "../services/WebApi"
import { PlaceDetails } from "../types/types"

export default function usePlaceDetails() {
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails>({
    place_name: "",
    weekday_text: [""],
    latitude: 0,
    longitude: 0,
    address: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = async (placeName: string) => {
    setIsLoading(true)
    try {
      const api = new WebApiService()
      const result = await api.searchByPlaceName(placeName)
      setPlaceDetails({
        place_name: result.place_name,
        address: result.address,
        latitude: result.latitude,
        longitude: result.longitude,
        weekday_text: result.weekday_text,
      })
    } catch (err) {
      if (err instanceof Error) {
        setError(err)
      } else {
        setError(new Error("something went wrong when search place by name"))
        console.error("fetchData error", err)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return { fetchData, placeDetails, setPlaceDetails, isLoading, error }
}

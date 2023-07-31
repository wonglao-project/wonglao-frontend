import { host } from "../constant/host"
import { CreatePlaceDetails, PlaceDetails } from "../types/types"

export class WebApiService {
  async searchByPlaceName(name: string): Promise<PlaceDetails> {
    const queryParams = new URLSearchParams()
    queryParams.append("name", name)

    const url = new URL(`${host}/service/places/search`)
    url.search = queryParams.toString()

    const res = await fetch(url)

    const rawData = await res.json()

    const placeBySearch: PlaceDetails = {
      place_name: rawData.place_name as string,
      weekday_text: rawData.operating_time as string[],
      latitude: rawData.latitude,
      longitude: rawData.longitude,
      address: rawData.address,
    }

    return placeBySearch
  }

  async createPlaceWithDetails(details: CreatePlaceDetails): Promise<void> {
    const placeWithDetails = {
      place_name: details.place_name,
      operating_time: details.weekday_text,
      latitude: details.latitude,
      longitude: details.longitude,
      address: details.address,
      tel: details.tel,
      description: details.description,
      category: details.category,
      images: details.images,
      email: details.email,
    }

    console.log(placeWithDetails)

    const res = await fetch(`${host}/content`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(placeWithDetails),
    })
    const createData = await res.json()

    return createData
  }
}

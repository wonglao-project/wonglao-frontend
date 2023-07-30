import { host } from "../constant/host"
import {
  CreatePlaceDetails,
  PlaceDetails,
  SearchPlaceDetails,
} from "../types/types"

// export class SearchByPlaceNameResponse {
//   @Expose({ name: "place_name" })
//   placeName!: string

//   @Expose({ name: "operating_time" })
//   operatingTime!: string[]

//   @Expose({ name: "latitude" })
//   latitude!: number

//   @Expose({ name: "longtitude" })
//   longtitude!: number

//   @Expose({ name: "address" })
//   address!: string

//   @Expose({ name: "tel" })
//   tel?: string
// }

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
    // convert plain javascript object named `raw` to the SearchPlaceDetails class instance.
    // const response = plainToInstance(SearchByPlaceNameResponse, raw)
    // // check if the instance of the SearchPlaceDetails class meet the constraints.
    // const validationErrors = await validate(response)
    // if (validationErrors.length > 0) {
    //   // only throw the first validation error.
    //   throw validationErrors[0]
    // }

    return placeBySearch
  }

  async createPlaceWithDetails(details: CreatePlaceDetails): Promise<void> {
    // const instance = plainToInstance(CreatePlaceWithDetailsRequest, details)
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
    // TODO: handle response
    const createData = await res.json()

    return createData
  }
}

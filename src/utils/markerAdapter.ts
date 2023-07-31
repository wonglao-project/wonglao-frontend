import { ContentDto } from "../types/types"

export const markerAdapter = (contentList: ContentDto[]) => {
  return contentList.map((content) => {
    return {
      id: content.id,
      name: content.place_name,
      position: {
        lat: content.latitude,
        lng: content.longitude,
      },
    }
  })
}

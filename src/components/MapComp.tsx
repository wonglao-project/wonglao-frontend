import { useMemo, useRef, useState, useCallback } from "react"
import {
  GoogleMap,
  MarkerF,
  InfoWindowF,
  useLoadScript,
} from "@react-google-maps/api"
import useContentList from "../hooks/useContentList"
import { markerAdapter } from "../utils/markerAdapter"
import { EnumSellerCategory } from "../types/types"

type LatLngLiteral = google.maps.LatLngLiteral
type MapOptions = google.maps.MapOptions

interface IMapCompProps {
  filterMode: "sellerId" | "sellerCategory" | "none"
  filterBySeller?: string
  filterBySellerCategory?: EnumSellerCategory
}

const MapComp = ({
  filterMode,
  filterBySeller,
  filterBySellerCategory,
}: IMapCompProps) => {
  const { contentList } = useContentList()
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  })
  const [activeMarker, setActiveMarker] = useState<number | null>(null)

  const filteredContentList = useMemo(() => {
    if (contentList && filterMode === "sellerId") {
      return contentList.filter(
        (content) => content.id === Number(filterBySeller)
      )
    } else if (contentList && filterMode === "sellerCategory") {
      return contentList.filter(
        (content) => content.category === filterBySellerCategory
      )
    } else if (contentList && filterMode === "none") {
      return contentList
    }
  }, [contentList])

  const markers = useMemo(() => {
    if (filteredContentList) {
      return markerAdapter(filteredContentList)
    }
  }, [filteredContentList])

  const mapRef = useRef<google.maps.Map>()
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 13.75398, lng: 100.50144 }),
    []
  )
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "7e546cc0ad90f3cc",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  )
  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map
  }, [])

  const handleActiveMarker = (marker: number) => {
    if (marker === activeMarker) {
      return
    }
    setActiveMarker(marker)
  }

  // const handleOnLoad = (map: google.maps.Map) => {
  //   const bounds = new google.maps.LatLngBounds();
  //   markers.forEach(({ position }) => bounds.extend(position));
  //   map.fitBounds(bounds);
  // };

  if (!isLoaded) return <div>Loading...</div>

  return (
    <GoogleMap
      onClick={() => setActiveMarker(null)}
      zoom={6}
      center={center}
      mapContainerClassName='w-[100%] h-[100%]'
      options={options}
      onLoad={onLoad}
    >
      {markers &&
        markers.map(({ id, name, position }) => (
          <MarkerF
            key={id}
            position={position}
            onClick={() => handleActiveMarker(id)}
            icon={{
              url: "/img/beer.png",
              scaledSize: new google.maps.Size(30, 30),
            }}
          >
            {activeMarker === id && (
              <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                <div>{name}</div>
              </InfoWindowF>
            )}
          </MarkerF>
        ))}
    </GoogleMap>
  )
}

export default MapComp

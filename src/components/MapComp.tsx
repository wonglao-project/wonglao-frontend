import { useMemo, useRef, useState, useCallback } from 'react'
import { GoogleMap, MarkerF, InfoWindowF, useLoadScript } from "@react-google-maps/api"

type LatLngLiteral = google.maps.LatLngLiteral
type MapOptions = google.maps.MapOptions

const markers = [
    {
      id: 1,
      name: "Surin",
      position: { lat: 14.882905, lng: 103.49371070000007 }
    },
    {
      id: 2,
      name: "Phuket",
      position: { lat: 7.9810496, lng: 98.36388239999997 }
    },
    {
      id: 3,
      name: "Chaingmai",
      position: { lat: 18.7877477, lng: 98.99313110000003 }
    },
    {
      id: 4,
      name: "Nonthaburi",
      position: { lat: 13.8621125, lng: 100.51435279999998 }
    },
    {
      id: 5,
      name: "Bangkok",
      position: { lat: 13.75398, lng: 100.50144 }
    }
  ];

const MapComp = () => {
    const mapRef = useRef<google.maps.Map>();
    const center = useMemo<LatLngLiteral>(() => ({lat: 13.75398, lng: 100.50144}), [])
    const options = useMemo<MapOptions>(() => ({
        mapId: "7e546cc0ad90f3cc",
        disableDefaultUI: true,
        clickableIcons: false
    }), [])
    const onLoad = useCallback((map: google.maps.Map) => {mapRef.current = map}, [])

    const [activeMarker, setActiveMarker] = useState<number | null>(null);

    const { isLoaded } = useLoadScript({
      googleMapsApiKey: import.meta.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    })


  const handleActiveMarker = (marker: number) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

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
            {markers.map(({ id, name, position }) => (
                <MarkerF
                    key={id}
                    position={position}
                    onClick={() => handleActiveMarker(id)}
                    icon={{url: 'src/img/beer.png', scaledSize : new google.maps.Size(30, 30) }}
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
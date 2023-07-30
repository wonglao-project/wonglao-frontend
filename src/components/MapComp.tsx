<<<<<<< Updated upstream
import { useMemo, useRef, useState, useCallback } from "react"
import {
  GoogleMap,
  MarkerF,
  InfoWindowF,
  useLoadScript,
} from "@react-google-maps/api"
=======
import { useCallback, useMemo, useRef } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
>>>>>>> Stashed changes

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const markers = [
  {
    id: 1,
    name: "Surin",
    position: { lat: 14.882905, lng: 103.49371070000007 },
  },
  {
    id: 2,
    name: "Phuket",
    position: { lat: 7.9810496, lng: 98.36388239999997 },
  },
  {
    id: 3,
    name: "Chaingmai",
    position: { lat: 18.7877477, lng: 98.99313110000003 },
  },
  {
    id: 4,
    name: "Nonthaburi",
    position: { lat: 13.8621125, lng: 100.51435279999998 },
  },
  {
    id: 5,
    name: "Bangkok",
    position: { lat: 13.75398, lng: 100.50144 },
  },
]

const MapComp = () => {
<<<<<<< Updated upstream
  const mapRef = useRef<google.maps.Map>()
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 13.75398, lng: 100.50144 }),
    []
  )
=======
  const mapRef = useRef<google.maps.Map>();
  const center = useMemo<LatLngLiteral>(() => ({ lat: 44, lng: -80 }), []);
>>>>>>> Stashed changes
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "7e546cc0ad90f3cc",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
<<<<<<< Updated upstream
  )
  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map
  }, [])

  const [activeMarker, setActiveMarker] = useState<number | null>(null)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  })

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
      {markers.map(({ id, name, position }) => (
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
=======
  );
  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  return (
    <div className="flex h-[100vh]">
      <div className="w-[20%] p-[1rem] bg-[#14161a]">
        <h1>Places</h1>
      </div>
      <div className="w-[80%] h-[100vh]">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="w-[100%] h-[100vh]"
          options={options}
          onLoad={onLoad}
        >
          <Marker position={{ lat: 44, lng: -80 }} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default MapComp;
>>>>>>> Stashed changes

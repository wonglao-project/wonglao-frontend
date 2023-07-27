import { useMemo, useRef, useState } from 'react'
import { GoogleMap, MarkerF, InfoWindowF } from "@react-google-maps/api"

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
    // const mapRef = useRef<GoogleMap>();
    const center = useMemo<LatLngLiteral>(() => ({lat: 13.75398, lng: 100.50144}), [])
    const options = useMemo<MapOptions>(() => ({
        mapId: "7e546cc0ad90f3cc",
        disableDefaultUI: true,
        clickableIcons: false
    }), [])
    // const onLoad = useCallback((map) => (mapRef.current = map), [])

    const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const handleActiveMarker = (marker: number) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

//   const handleOnLoad = (map) => {
//     const bounds = new google.maps.LatLngBounds();
//     markers.forEach(({ position }) => bounds.extend(position));
//     map.fitBounds(bounds);
//   };

  return (
    // <div className='flex h-[100vh]'>
    //     <div className='w-[20%] p-[1rem] bg-[#f6f6fc]'>
    //         <h1>Places</h1>
    //     </div>
    //     <div className='w-[80%] h-[100vh]'>
        <GoogleMap 
            onClick={() => setActiveMarker(null)}
            zoom={6} 
            center={center} 
            mapContainerClassName='w-[100%] h-[100%]'
            options={options}
            // OnLoad={handleOnLoad}
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
    //     </div>
    // </div>
  )
}

export default MapComp
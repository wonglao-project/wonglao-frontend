import { useMemo, useRef, useState } from 'react'
import { GoogleMap, MarkerF, InfoWindowF } from "@react-google-maps/api"

type LatLngLiteral = google.maps.LatLngLiteral
type MapOptions = google.maps.MapOptions

const markers = [
    {
      id: 1,
      name: "Chicago, Illinois",
      position: { lat: 41.881832, lng: -87.623177 }
    },
    {
      id: 2,
      name: "Denver, Colorado",
      position: { lat: 39.739235, lng: -104.99025 }
    },
    {
      id: 3,
      name: "Los Angeles, California",
      position: { lat: 34.052235, lng: -118.243683 }
    },
    {
      id: 4,
      name: "New York, New York",
      position: { lat: 40.712776, lng: -74.005974 }
    }
  ];

const MapComp = () => {
    // const mapRef = useRef<GoogleMap>();
    const center = useMemo<LatLngLiteral>(() => ({lat: 44, lng: -80}), [])
    const options = useMemo<MapOptions>(() => ({
        mapId: "7e546cc0ad90f3cc",
        disableDefaultUI: true,
        clickableIcons: false
    }), [])
    // const onLoad = useCallback((map) => (mapRef.current = map), [])

    const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
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
    <div className='flex h-[100vh]'>
        <div className='w-[20%] p-[1rem] bg-[#f6f6fc]'>
            <h1>Places</h1>
        </div>
        <div className='w-[80%] h-[100vh]'>
        <GoogleMap 
            onClick={() => setActiveMarker(null)}
            zoom={10} 
            center={center} 
            mapContainerClassName='w-[100%] h-[100vh]'
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
        </div>
    </div>
  )
}

export default MapComp
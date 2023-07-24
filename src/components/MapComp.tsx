import React, { useCallback, useMemo, useRef } from 'react'
import { GoogleMap, Marker} from "@react-google-maps/api"

type LatLngLiteral = google.maps.LatLngLiteral
type MapOptions = google.maps.MapOptions

const MapComp = () => {
    const mapRef = useRef<GoogleMap>();
    const center = useMemo<LatLngLiteral>(() => ({lat: 44, lng: -80}), [])
    const options = useMemo<MapOptions>(() => ({
        mapId: "7e546cc0ad90f3cc",
        disableDefaultUI: true,
        clickableIcons: false
    }), [])
    const onLoad = useCallback((map: google.maps.Map) => (mapRef.current = map), [])

  return (
    <div className='flex h-[100vh]'>
        <div className='w-[20%] p-[1rem] bg-[#14161a]'>
            <h1>Places</h1>
        </div>
        <div className='w-[80%] h-[100vh]'>
            <GoogleMap 
                zoom={10} 
                center={center} 
                mapContainerClassName='w-[100%] h-[100vh]'
                options={options}
                onLoad={onLoad}
            >
            <Marker position={{lat: 44, lng: -80}}/>
        </GoogleMap>
        </div>
    </div>
  )
}

export default MapComp
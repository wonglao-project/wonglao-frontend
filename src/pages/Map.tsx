import { useLoadScript} from '@react-google-maps/api'
import MapComp from '../components/MapComp'

const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        // googleMapsApiKey: 'AIzaSyDfVdrHDVmJbHu04rHTdnjXV1p-VNaYuXw'
    })

    if (!isLoaded) return <div>Loading...</div>
    return <MapComp />
}



export default Map
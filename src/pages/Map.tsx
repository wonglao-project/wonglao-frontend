import MapComp from "../components/MapComp"

const Map = () => {
  return (
    <div className='flex h-[100vh]'>
      <div className='w-[20%] p-[1rem] bg-[#f6f6fc]'>
        <h1>Places</h1>
      </div>
      <div className='w-[80%] h-[100vh]'>
        <MapComp />
      </div>
    </div>
  )
}

export default Map

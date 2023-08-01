import MapComp from "../components/MapComp"
import { EnumSellerCategory } from "../types/types"
// import { List, ListItem, Card } from "@material-tailwind/react"

const Map = () => {
  return (
    <div className='flex h-[100vh]'>
      {/* <div className='w-[20%] p-[1rem] bg-[#f6f6fc]'>
        <Card className='w-50'>
          <List>
            <ListItem className='hover:bg-gray-200 hover:text-white focus:bg-gray-400 focus:text-white'>
              Bar
            </ListItem>
            <ListItem className='hover:bg-gray-200 hover:text-white focus:bg-gray-400 focus:text-white'>
              Brewer
            </ListItem>
          </List>
        </Card>
      </div> */}
      {/* <div className='w-[80%] h-[100vh]'> */}
      <MapComp
        filterMode='sellerCategory'
        filterBySellerCategory={
          EnumSellerCategory.BAR && EnumSellerCategory.BREWER
        }
      />
    </div>
    // </div>
  )
}

export default Map

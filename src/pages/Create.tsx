import { ChangeEvent, FormEvent, useState } from "react"
import usePlaceDetails from "../hooks/usePlaceDetail"
import { WebApiService } from "../services/WebApi"
import { CreatePlaceDetails, EnumSellerCategory } from "../types/types"

const Create = () => {
  const { fetchData, placeDetails, setPlaceDetails } = usePlaceDetails()

  const [isSubmitPlaceName, setSubmitPlaceName] = useState<boolean>(false)
  const [placeName, setPlaceName] = useState<string>("")

  const [description, setDescription] = useState<string>("")
  const [category, setCategory] = useState<
    EnumSellerCategory.BAR | EnumSellerCategory.BREWER
  >(EnumSellerCategory.BAR)
  const [email, setEmail] = useState<string>("")
  const [tel, setTel] = useState<string>("")

  const handleSubmitPlaceName = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitPlaceName) return

    setSubmitPlaceName(true)

    try {
      await fetchData(placeName)
    } catch (err) {
      console.log(err)
    } finally {
      setSubmitPlaceName(false)
    }
  }

  const handleCreatePlaceWithDetailsSubmitted = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    const api = new WebApiService()
    const details: CreatePlaceDetails = {
      place_name: placeDetails.place_name,
      address: placeDetails.address,
      latitude: placeDetails.latitude,
      longitude: placeDetails.longitude,
      weekday_text: placeDetails.weekday_text,
      category: category,
      description: description,
      email: email,
      tel: tel,
      // TODO: put images url here
      images: ["mock-url-1", "mock-url-1"],
    }

    console.log("details", details)

    await api.createPlaceWithDetails(details)
  }

  const handleChangeWeekdayText = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const weekday_text = placeDetails.weekday_text
    weekday_text[index] = e.target.value

    setPlaceDetails({ ...placeDetails, weekday_text })
  }

  if (!placeDetails) return null

  return (
    <div className='py-12 flex flex-col items-center'>
      <h1 className='text-center'>New Seller</h1>

      {/* search place form       */}
      <form
        className='flex flex-col items-left w-2/6 mt-10'
        onSubmit={handleSubmitPlaceName}
      >
        <label className='text-[#797979] text-md mb-2 mt-10'>
          Search Place
        </label>
        <input
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]'
          type='text'
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)}
          required
        />

        <div className='flex justify-center'>
          <button
            className='bg-gray-200 p-1 rounded-lg text-white hover:bg-[#797979] text-lg mt-2'
            type='submit'
            disabled={isSubmitPlaceName}
          >
            Send
          </button>
        </div>
      </form>

      {/* create place form */}
      <form
        className='flex flex-col items-left w-2/6 mt-10'
        onSubmit={handleCreatePlaceWithDetailsSubmitted}
      >
        <label className='text-[#797979] text-md mb-5 mt-10'>Name</label>
        <input
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]'
          type='text'
          value={placeDetails.place_name}
          onChange={(e) =>
            setPlaceDetails({ ...placeDetails, place_name: e.target.value })
          }
          required
        />

        <label className='text-[#797979] text-md mb-5 mt-10'>
          Operating Time
        </label>
        <input
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979] placeholder-gray-300'
          type='text'
          placeholder='Mon'
          value={placeDetails.weekday_text[0]}
          onChange={(e) => handleChangeWeekdayText(0, e)}
        />
        <input
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979] placeholder-gray-300'
          type='text'
          placeholder='Tue'
          value={placeDetails.weekday_text[1]}
          onChange={(e) => handleChangeWeekdayText(1, e)}
        />
        <input
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979] placeholder-gray-300'
          type='text'
          placeholder='Wed'
          value={placeDetails.weekday_text[2]}
          onChange={(e) => handleChangeWeekdayText(2, e)}
        />
        <input
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979] placeholder-gray-300'
          type='text'
          placeholder='Thu'
          value={placeDetails.weekday_text[3]}
          onChange={(e) => handleChangeWeekdayText(3, e)}
        />
        <input
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979] placeholder-gray-300'
          type='text'
          placeholder='Fri'
          value={placeDetails.weekday_text[4]}
          onChange={(e) => handleChangeWeekdayText(4, e)}
        />
        <input
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979] placeholder-gray-300'
          type='text'
          placeholder='Sat'
          value={placeDetails.weekday_text[5]}
          onChange={(e) => handleChangeWeekdayText(5, e)}
        />
        <input
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979] placeholder-gray-300'
          type='text'
          placeholder='Sun'
          value={placeDetails.weekday_text[6]}
          onChange={(e) => handleChangeWeekdayText(6, e)}
        />

        <label className='text-[#797979] text-md mb-5 mt-10'>Address</label>
        <input
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]'
          type='text'
          value={placeDetails.address}
          onChange={(e) =>
            setPlaceDetails({ ...placeDetails, address: e.target.value })
          }
          required
        />

        <label className='text-[#797979] text-md mb-5 mt-10'>Tel.</label>
        <input
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]'
          type='text'
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          required
        />

        <label className='text-[#797979] text-md mb-5 mt-10'>Email</label>
        <input
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979] placeholder-gray-300'
          type='email'
          placeholder='email@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className='text-[#797979] text-md mb-5 mt-10'>Category</label>
        <select
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]'
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value as
                | EnumSellerCategory.BAR
                | EnumSellerCategory.BREWER
            )
          }
          required
        >
          <option value={EnumSellerCategory.BAR}>Bar</option>
          <option value={EnumSellerCategory.BREWER}>Brewer</option>
        </select>

        <label className='text-[#797979] text-md mb-5 mt-10'>Description</label>
        <textarea
          className='mt-0 mb-10 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input type='submit' value='Create' />
      </form>
    </div>
  )
}

export default Create

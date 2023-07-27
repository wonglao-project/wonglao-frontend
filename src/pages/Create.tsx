const Create = () => {
  return (
    <div className="py-12 flex flex-col items-center">
    <h1 className='text-center'>New Seller</h1>
    <form className="flex flex-col items-left w-2/6 mt-10">
      <label className='text-[#797979] text-md mb-2 mt-10'>Name</label>
      <input className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]' type="text" required />

      <label className='text-[#797979] text-md mb-5 mt-10'>Operating Time</label>
        <input className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979] placeholder-gray-300' type="text" placeholder='Mon'/>
        <input className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979] placeholder-gray-300' type="text" placeholder='Tue'/>
        <input className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979] placeholder-gray-300' type="text" placeholder='Wed'/>
        <input className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979] placeholder-gray-300' type="text" placeholder='Thu'/>
        <input className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979] placeholder-gray-300' type="text" placeholder='Fri'/>
        <input className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979] placeholder-gray-300' type="text" placeholder='Sat'/>
        <input className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979] placeholder-gray-300' type="text" placeholder='Sun'/>

      <label className='text-[#797979] text-md mb-5 mt-10'>Address</label>
      <input className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]' type="text" required />

      <label className='text-[#797979] text-md mb-5 mt-10'>Tel.</label>
      <input className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]' type="text" required />

      <label className='text-[#797979] text-md mb-5 mt-10'>Email</label>
      <input className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979] placeholder-gray-300' type="email" placeholder="seller@example.com" required />

      <label className='text-[#797979] text-md mb-5 mt-10'>Category</label>
      <select className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]' required >
        <option>Bar</option>
        <option>Brewer</option>
      </select>

      <label className='text-[#797979] text-md mb-5 mt-10'>Description</label>
      <textarea className='mt-0 mb-10 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]' required />

        <input type="submit" value="Create" />
    </form>
  </div>
  )
}

export default Create
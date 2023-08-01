import React, { useState, FormEvent } from "react"
import { host } from "../constant/host"
import { useNavigate, useParams } from "react-router-dom"
import { storage } from "../services/Firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 } from "uuid"
import { EnumProductCategory } from "../types/types"

const CreateProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [productName, setProductName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [productCategory, setProductCategory] = useState<EnumProductCategory>(
    EnumProductCategory.GIN
  )
  const [files, setFiles] = useState<FileList | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files)
  }

  const handleCreateProductSubmitted = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    const token = localStorage.getItem("token")

    //submitImages//

    if (!files) {
      return
    }

    const arrayOfFiles = [...files]
    const urlImages: string[] = []
    console.log(arrayOfFiles)

    for (let i = 0; i < arrayOfFiles.length; i++) {
      const v4uuid = v4()
      const imageRef = ref(storage, `images/${arrayOfFiles[i].name}${v4uuid}`)

      await uploadBytes(imageRef, arrayOfFiles[i])
      const url = await getDownloadURL(imageRef)
      urlImages.push(url)
      console.log(url)
    }
    console.log(`upload success!`)
    console.log(urlImages)

    try {
      await fetch(`${host}/product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product_name: productName,
          description,
          images: urlImages,
          sellerId: id,
          product_category: productCategory,
        }),
      })

      navigate(`/content/${id}`)
    } catch (err: any) {
      console.log(err.message)
    }
  }

  return (
    <div>
      <h1 className='text-center'>New Seller</h1>
      <form
        className='flex flex-col items-left w-2/6 mt-10'
        onSubmit={handleCreateProductSubmitted}
      >
        <label className='text-[#797979] text-md mb-5 mt-10'>Name</label>
        <input
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]'
          type='text'
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />

        <label className='text-[#797979] text-md mb-5 mt-10'>
          Product Category
        </label>
        <select
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]'
          value={productCategory}
          onChange={(e) =>
            setProductCategory(e.target.value as EnumProductCategory)
          }
          required
        >
          <option value={EnumProductCategory.GIN}>Gin</option>
          <option value={EnumProductCategory.RUM}>Rum</option>
          <option value={EnumProductCategory.WHITE_SPIRIT}>White Spirit</option>
        </select>

        <label className='text-[#797979] text-md mb-5 mt-10'>Description</label>
        <textarea
          className='mt-0 mb-10 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label className='text-[#797979] text-md mb-5 mt-10'>IMAGES</label>
        <input
          className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]'
          onChange={handleFileChange}
          type='file'
          accept='image/*'
          multiple={true}
          required
        />
        {files &&
          [...files].map((file, index) => (
            <section key={file.name}>
              File number {index + 1} details:
              <ul>
                <li>Name: {file.name}</li>
                <li>Type: {file.type}</li>
                <li>Size: {file.size}</li>
              </ul>
            </section>
          ))}

        <input type='submit' value='Create' />
      </form>
    </div>
  )
}

export default CreateProduct

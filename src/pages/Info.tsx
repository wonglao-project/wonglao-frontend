import useContent from "../hooks/useContent"
import { useParams } from "react-router-dom"

const Info = () => {
  const { id } = useParams()
  const { content, isLoading, error } = useContent(id || "1")

  if (isLoading || !content) return <p>Loading...</p>

  if (error) return <p className='text-center text-red-500'>{error}</p>

  return (
    <div>
      <header className='relative'>
        <img src='/img/info-banner.png' alt='info-banner' />
        <img
          className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[30.5%]'
          src='/img/info-product.png'
          alt='info-product'
        />
      </header>
      <main className='mt-52'>
        <div className='flex flex-row'>
          <img
            className='m-20 max-w-[50%]'
            src='/img/info-product-1.png'
            alt='info-product-1'
          />
          <div className='m-20 max-w-[50%]'>
            <h3>INFO</h3>
            <p className='mt-5'>{content.description}</p>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='m-20 max-w-[50%]'>
            <h3>INFO</h3>
            <p className='mt-5'>{content.operating_time}</p>
            <p className='mt-5'>{content.address}</p>
            <p className='mt-5'>{content.email}</p>
          </div>
          <img
            className='m-20 max-w-[50%]'
            src='/img/info-map.png'
            alt='info-product-2'
          />
        </div>
        <div className='flex flex-row'>
          <img
            className='m-20 max-w-[50%]'
            src='/img/info-product-2.png'
            alt='info-product-2'
          />
          <div className='m-20 max-w-[50%]'>
            <h3>INFO</h3>
            <p className='mt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam reprehenderit quisquam doloribus repellendus fugit
              sapiente esse necessitatibus, nihil voluptate quod aspernatur quos
              sint optio, consequuntur quia dignissimos aperiam nostrum
              veritatis?
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Info

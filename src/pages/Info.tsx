import { useState } from "react"
import ContentIntro from "../components/ContentIntro"
import { ContentDto } from "../types/types"

const Info = () => {
  const [intro, setIntro] = useState<ContentDto[] | null>(null)

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
            <p className='mt-5'>
              {intro &&
                intro.map((content) => (
                  <ContentIntro key={content.id} content={content} />
                ))}
            </p>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='m-20 max-w-[50%]'>
            <h3>INFO</h3>
            <div className='mt-5'></div>
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

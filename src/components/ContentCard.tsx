import { Link } from "react-router-dom"
import { ContentDto } from "../types/types"

interface ContentCardProps {
  content: ContentDto
}

const ContentCard = ({ content }: ContentCardProps) => {
  return (
    <Link
      to={`/content/${content.id}`}
      className='bg-gray-100 shadow-md overflow-hidden p-0'
    >
      <div className=''>
        {/* flex flex-col gap-4 justify-between h-full */}
        {/* <p>{content.place_name}</p> */}
        <img src={content.images[0]} />
      </div>
    </Link>
  )
}

export default ContentCard

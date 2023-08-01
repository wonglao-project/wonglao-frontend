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
      <img src={content.images[0]} className='object-none object-center' />
    </Link>
  )
}

export default ContentCard

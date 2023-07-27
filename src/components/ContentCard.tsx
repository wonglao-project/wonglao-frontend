import { Link } from 'react-router-dom'
import { ContentDto } from '../types/types'

interface ContentCardProps {
  content: ContentDto
}

const ContentCard = ({ content }: ContentCardProps) => {
  return (
    <Link to={`/content/${content.id}`} className="flex flex-col bg-gray-100 rounded-xl shadow-lg overflow-hidden">
      {/* <img src={content.thumbnailUrl} className="w-full aspect-video object-cover" /> */}
      <div className="flex flex-col gap-4 p-4 justify-between h-full">
          <p>{content.place_name}</p>
          <p>{content.operating_time}</p>
          <p>{content.description}</p>
          <p>{content.address}</p>
          <p>{content.tel}</p>
          <p>{content.email}</p>
      </div>
    </Link>
  )
}

export default ContentCard
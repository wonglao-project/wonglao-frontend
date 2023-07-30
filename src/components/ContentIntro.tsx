import { ContentDto } from "../types/types"

interface ContentCardProps {
  content: ContentDto
}

const ContentIntro = ({ content }: ContentCardProps) => {
  return (
    <div>
      <p>{content.place_name}</p>
      <p>{content.description}</p>
    </div>
  )
}

export default ContentIntro

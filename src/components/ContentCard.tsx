import { Link } from "react-router-dom";
import { ContentDto } from "../types/types";

interface ContentCardProps {
  content: ContentDto;
}

const ContentCard = ({ content }: ContentCardProps) => {
  return (
    <Link
      to={`/content/${content.id}`}
      className="group hover:cursor-pointer w-[300px] h-[300px] overflow-hidden relative flex justify-center items-center"
    >
      <div className="w-full h-full relative flex justify-center items-center group-hover:blur-lg transition-all duration-300">
        <img
          src={content.images[0]}
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
      </div>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute text-gray-500 text-center text-6xl font-extralight z-50">
        {content.place_name}
      </p>
    </Link>
  );
};

export default ContentCard;

import useContentList from "../hooks/useContentList";
import ContentCard from "./ContentCard";
import { ContentDto, SellerCategory } from "../types/types";
import { useEffect, useState } from "react";

interface IContentListProps {
  selectedCategory: SellerCategory;
}

const ContentList = ({ selectedCategory }: IContentListProps) => {
  const { contentList, isLoading, error } = useContentList();
  const [currentContentList, setCurrentContentList] = useState<
    ContentDto[] | null
  >(null);

  useEffect(() => {
    const filterContent = () => {
      if (contentList) {
        setCurrentContentList(() => {
          return contentList.filter(
            (content: ContentDto) => content.category === selectedCategory
          );
        });
      }
    };

    filterContent();
  }, [selectedCategory, contentList]);

  if (isLoading || !contentList) return <p>Loading...</p>;

  if (error || !contentList) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="mx-20 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-16 items-stretch justify-between m-10 h-auto">
        {currentContentList &&
          currentContentList.map((content) => (
            <ContentCard key={content.id} content={content} />
          ))}
      </div>
    </div>
  );
};

export default ContentList;

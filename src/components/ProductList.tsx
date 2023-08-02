import { List, ListItem } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useProductList from "../hooks/useProductList";
import ProductCard from "./ProductCard";
import {
  EnumProductCategory,
  ProductCategory,
  ProductDto,
} from "../types/types";

const ProductList = () => {
  const { productList, isLoading, error } = useProductList();
  const [selectedProductCategory, setSelectedProductCategory] =
    useState<ProductCategory>(EnumProductCategory.GIN);
  const [currentProductList, setCurrentProductList] = useState<
    ProductDto[] | null
  >(null);

  useEffect(() => {
    const filterProduct = () => {
      if (productList) {
        setCurrentProductList(() => {
          return productList.filter(
            (product: ProductDto) =>
              product.product_category === selectedProductCategory
          );
        });
      }
    };

    filterProduct();
  }, [selectedProductCategory, productList]);

  if (isLoading || !productList) return <p>Loading...</p>;

  if (error || !productList) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="flex gap-4 mx-20 ">
      <div className="flex flex-col w-1/5">
        <p className="pb-3 pt-20 text-center border-b border-[#797979]/40">
          Filter
        </p>
        <List>
          <ListItem
            onClick={() => setSelectedProductCategory(EnumProductCategory.GIN)}
            selected
            className="py-3 my-2 hover:bg-gray-200 hover:text-white focus:bg-gray-200 focus:text-white"
          >
            Gin
          </ListItem>
          <ListItem
            onClick={() => setSelectedProductCategory(EnumProductCategory.RUM)}
            className="py-3 my-2 hover:bg-gray-200 hover:text-white focus:bg-gray-200 focus:text-white"
          >
            Rum
          </ListItem>
          <ListItem
            onClick={() =>
              setSelectedProductCategory(EnumProductCategory.WHITE_SPIRIT)
            }
            className="py-3 my-2 hover:bg-gray-200 hover:text-white focus:bg-gray-200 focus:text-white"
          >
            White Spirit
          </ListItem>
        </List>
      </div>
      <div className="flex flex-row flex-wrap md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 items-stretch justify-between my-9 h-auto px-16">
        {currentProductList &&
          currentProductList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;

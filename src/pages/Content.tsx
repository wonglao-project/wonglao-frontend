import { useState } from "react";
import ContentList from "../components/ContentList";
import { EnumSellerCategory, SellerCategory } from "../types/types";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { motion } from "framer-motion";

const Content = () => {
  const { isLoggedIn } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<SellerCategory>(
    EnumSellerCategory.BREWER
  );

  return (
    <>
      <div className="flex flex-row mx-20 border-b border-[#797979]/40 justify-between">
        <ul className="flex flex-row">
          <motion.button whileHover={{ scale: 1.3, color: "#303234" }}>
            <li
              className="p-5 hover:cursor-pointer hover:underline"
              onClick={() => setSelectedCategory(EnumSellerCategory.BREWER)}
            >
              BREWER
            </li>
          </motion.button>

          <motion.button whileHover={{ scale: 1.3, color: "#303234" }}>
            <li
              className="p-5 hover:cursor-pointer hover:underline"
              onClick={() => setSelectedCategory(EnumSellerCategory.BAR)}
            >
              BAR
            </li>
          </motion.button>

          <motion.button whileHover={{ scale: 1.3, color: "#303234" }}>
            <li
              className="p-5 hover:cursor-pointer hover:underline"
              onClick={() => setSelectedCategory(EnumSellerCategory.PRODUCT)}
            >
              PRODUCT
            </li>
          </motion.button>
        </ul>
        <div className="flex items-center mx-5">
          {isLoggedIn && (
            <Link
              to={"/create"}
              className="bg-gray-200  rounded-lg text-white hover:bg-[#797979] text-lg items-center p-2"
            >
              CREATE
            </Link>
          )}
        </div>
      </div>

      {selectedCategory === EnumSellerCategory.PRODUCT ? (
        <ProductList />
      ) : (
        <ContentList selectedCategory={selectedCategory} />
      )}
    </>
  );
};

export default Content;

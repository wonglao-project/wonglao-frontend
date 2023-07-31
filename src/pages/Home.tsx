import { Link } from "react-router-dom";
import MapComp from "../components/MapComp";
import { motion } from "framer-motion";

interface IMenu {
  href: string;
  text: string;
  imgSrc: string;
  customClassname?: string;
}

const menu: IMenu[] = [
  {
    href: "/content",
    text: "BAR",
    imgSrc: "/img/bar.png",
    customClassname: "left-[33%]",
  },
  {
    href: "/content",
    text: "BREWER",
    imgSrc: "/img/brewer.png",
    customClassname: "left-[15%]",
  },
  {
    href: "/content",
    text: "PRODUCT",
    imgSrc: "/img/product.png",
    customClassname: "left-[10%]",
  },
];

const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <header>
          <img src="/img/banner.png" alt="banner" />
        </header>
      </motion.div>

      <main>
        <motion.div>
          <div className="flex flex-row sticky">
            <div className="m-20 w-[50%] h-[500px]">
              <MapComp />
            </div>
            <div className="m-20 w-[50%]">
              <h3>INFO</h3>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam reprehenderit quisquam doloribus repellendus fugit
                sapiente esse necessitatibus, nihil voluptate quod aspernatur
                quos sint optio, consequuntur quia dignissimos aperiam nostrum
                veritatis?
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div>
          <div className="flex flex-row m-20 justify-between">
            {menu.map(({ href, imgSrc, text, customClassname }) => (
              <div key={imgSrc} className="relative">
                <Link to={href}>
                  <img src={imgSrc} alt="bar" />
                  <p
                    className={`absolute text-6xl font-extralight text-white top-[45%] ${
                      customClassname ?? ""
                    }`}
                  >
                    {text}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      <footer>
        <p>FOOTER</p>
      </footer>
    </div>
  );
};

export default Home;

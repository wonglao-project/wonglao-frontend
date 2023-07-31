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
    <>
      <div
        className="h-screen"
        data-aos="fade-up"
        data-aos-offset={100}
        data-aos-duration="1500"
      >
        <img
          className="object-cover w-full h-full"
          src="/img/banner.png"
          alt="banner"
        />
      </div>
      <main className="h-auto">
        <div
          className="flex flex-row h-screen"
          data-aos="fade-up"
          data-aos-offset={200}
          data-aos-duration="1500"
        >
          <div className="m-20 w-[50%] h-[500px]">
            <MapComp />
          </div>
          <div className="m-20 w-[50%]">
            <h3>INFO</h3>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam reprehenderit quisquam doloribus repellendus fugit
              sapiente esse necessitatibus, nihil voluptate quod aspernatur quos
              sint optio, consequuntur quia dignissimos aperiam nostrum
              veritatis?
            </p>
          </div>
        </div>
        <div
          className="flex flex-row m-20 justify-between h-screen"
          data-aos="fade-up"
          data-aos-offset={400}
          data-aos-duration="1500"
        >
          {menu.map(({ href, imgSrc, text, customClassname }) => (
            <div key={imgSrc} className="h-[350px] w-[350px]">
              <Link
                className="relative w-full h-full flex justify-center items-center"
                to={href}
              >
                <p
                  className={`text-6xl font-extralight text-white ${
                    customClassname ?? ""
                  }`}
                >
                  {text}
                </p>
                <img
                  src={imgSrc}
                  className="absolute top-0 left-0 -z-10"
                  alt="bar"
                />
              </Link>
            </div>
          ))}
          </div> 
      </main>

      <footer>
        <p>FOOTER</p>
      </footer>
    </>
  );
};

export default Home;

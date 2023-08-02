import MapComp from "../components/MapComp";
import SellerProductList from "../components/SellerProductList";
import useContent from "../hooks/useContent";
import { Link, useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams();
  const { content, isLoading, error } = useContent(id || "1");

  if (isLoading || !content) return <p>Loading...</p>;

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      <div
        className="h-screen"
        data-aos="fade-up"
        data-aos-offset={100}
        data-aos-duration="1000"
      >
        <header className="relative">
          <img src="/img/info-banner.png" alt="info-banner" />
          <img
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[30.5%] w-[400px] h-[400px] overflow-hidden"
            src={content.images[0]}
            alt="info-product"
          />
        </header>
      </div>

      <main className="mt-52">
        <div
          className="h-screen"
          data-aos="fade-right"
          data-aos-offset={200}
          data-aos-duration="1500"
        >
          <div className="flex flex-row">
            <img
              className="m-20 w-[50%]"
              src="/img/info-product-1.png"
              alt="info-product-1"
            />
            <div className="m-20 w-[50%]">
              <h3>Description</h3>
              <p className="mt-5">{content.description}</p>
            </div>
          </div>
        </div>

        <div
          className="h-screen"
          data-aos="fade-left"
          data-aos-offset={300}
          data-aos-duration="1500"
        >
          <div className="flex flex-row">
            <div className="m-20 w-[50%]">
              <h3>Operating time</h3>
              {content.operating_time &&
                content.operating_time.map((d) => <p className="mt-5">{d}</p>)}
              {/* <p className="mt-5">{content.operating_time}</p> */}
              <p className="mt-5">{content.address}</p>
              <h3>Contact us</h3>
              <p className="mt-5">{content.email}</p>
            </div>
            <div className="m-20 w-[50%] h-[500px]">
              <MapComp filterMode="sellerId" filterBySeller={id || "0"} />
            </div>
          </div>
        </div>

        <div
          className="h-screen"
          data-aos="fade-right"
          data-aos-offset={400}
          data-aos-duration="1500"
        >
          <div className="flex flex-row">
            <img
              className="m-20 w-[50%]"
              src="/img/info-product-2.png"
              alt="info-product-2"
            />
            <div className="m-20 w-[50%]">
              <p className="mt-5">
                At our local brewer, sustainability and environmental
                consciousness are at the heart of everything we do. Our
                commitment to being a green product brewery sets us apart, as we
                prioritize eco-friendly practices throughout the brewing
                process. From sourcing organic ingredients to implementing
                energy-efficient brewing methods, we strive to reduce our carbon
                footprint and minimize waste. With each sip of our refreshing
                creations, you're not just enjoying a great brew, but also
                contributing to a greener, more sustainable future. Cheers to a
                taste that's good for you and the planet!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center m-20">
          <Link to={`/content/${id}/product/create`}>
            <button
              type="submit"
              className="bg-gray-200 p-1 rounded-lg text-white hover:bg-[#797979] text-lg mt-2"
            >
              CREATE PRODUCT
            </button>
          </Link>
          <SellerProductList />
        </div>
      </main>
    </div>
  );
};

export default Info;

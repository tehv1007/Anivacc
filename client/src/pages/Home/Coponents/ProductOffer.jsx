import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Poultry from "../../../assets/images/productTypes/Poultry-480-480.webp";
import Swine from "../../../assets/images/productTypes/Swine-480-480.webp";
import Bovine from "../../../assets/images/productTypes/Bovine-Sheep-480-480.webp";
import Pet from "../../../assets/images/productTypes/pet.jpg";
import Disinfectant from "../../../assets/images/productTypes/Disinfectant-480-480.webp";
import ProductArrow from "./arrows/ProductArrow";
import ProductImage from "../../../assets/images/xinweining-weikuangquan-gai-460-460.webp";

SwiperCore.use([Navigation, Pagination]);

const categories = [
  {
    id: 1,
    name: "Gia cầm",
    image: Poultry,
  },
  {
    id: 2,
    name: "Lợn",
    image: Swine,
  },
  {
    id: 3,
    name: "Đại gia súc",
    image: Bovine,
  },
  {
    id: 4,
    name: "Thú cảnh",
    image: Pet,
  },
  {
    id: 5,
    name: "Thuốc sát trùng",
    image: Disinfectant,
  },
];

const ProductOffer = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    // Thay đổi cấu hình Swiper dựa trên kích thước màn hình
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 768;
      const slidesPerView = isLargeScreen ? 3 : 2;

      // Tùy chỉnh Swiper
      // const mySwiper = document.querySelector(".swiper-container")?.swiper;
      // mySwiper.params.slidesPerView = slidesPerView;
      // mySwiper.update();
    };

    // Gọi hàm handleResize khi thay đổi kích thước màn hình
    window.addEventListener("resize", handleResize);
    handleResize(); // Gọi hàm handleResize lần đầu khi tải trang

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-10">
      <div className="py-5 px-[15px]">
        {/* Heading */}
        <div className="max-w-[1200px] mx-auto">
          <div className="text-gray-800 text-4xl leading-[51px] font-[Montserrat] font-bold text-center">
            <h2>See What Products We Offer</h2>
          </div>
          <div className="text-gray-800 text-4xl leading-[51px] pb-5 font-[Montserrat] font-bold text-center">
            <span className="text-gray-800 inline font-bold leading-5 text-center text-sm">
              Focus on{"  "}
              <a href="https://www.sinderanimalhealth.com/Feed-Additives-pl3477388.html">
                <span className="text-blue-900">
                  <strong>Feed Additives</strong>
                </span>
              </a>
              , PCR test kit, Pig Vaccine, Poultry Medicine, Poultry Vaccine
            </span>
          </div>
        </div>
        {/* Product categories */}
        <ul className="grid grid-cols-1 md:grid-cols-5">
          {categories.map((category) => (
            <li
              key={category.id}
              className={`max-w-[268px] px-[10px] pb-5 text-center relative ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="">
                <img className="" src={category.image} alt={category.name} />
              </div>
              <a href="" className="text-gray-800 text-lg">
                {category.name}
              </a>

              <>
                <div
                  className={`absolute w-full h-1 bg-gray-200 bottom-0 left-0`}
                >
                  <div
                    className={`home-after ${
                      activeCategory === category.id ? "block" : "hidden"
                    }`}
                  />
                </div>
                <div
                  className={`${
                    activeCategory === category.id
                      ? "bg-blue-900"
                      : "bg-gray-200"
                  } absolute w-full h-1 bg-blue-900 bottom-0 left-0 -z-1 `}
                />
              </>
            </li>
          ))}
        </ul>
        {activeCategory && (
          <div className="product-slider">
            <Swiper
              className="swiper-container"
              navigation={window.innerWidth >= 768}
              pagination={!window.innerWidth >= 768}
            >
              {categories.map((category) =>
                category.id === activeCategory
                  ? category.products.map((product) => (
                      <SwiperSlide key={product.id}>
                        <div className="product-item">
                          {/* Hiển thị thông tin sản phẩm */}
                        </div>
                      </SwiperSlide>
                    ))
                  : null
              )}
            </Swiper>
          </div>
        )}

        {/* product item */}
        <li className="group product-group max-w-[427px]">
          <div className="">
            <div className="">
              <a
                href="/Infectious-Coryza-Serotype-A-Serotype-B-Serotype-C-Vaccine-Inactivated-pd572926798.html"
                title="Infectious Coryza (Serotype A + Serotype B + Serotype C) Vaccine, Inactivated"
                tabIndex={0}
              >
                <img
                  src={ProductImage}
                  alt="Infectious Coryza (Serotype A + Serotype B + Serotype C) Vaccine, Inactivated"
                />
              </a>
            </div>

            {/* Description */}
            <div className="items-center bg-gray-200 group-hover:bg-blue-900 flex justify-between p-5 text-left">
              <a
                className="line-clamp-2 text-gray-800 group-hover:text-white text-lg text-left"
                href="/Infectious-Coryza-Serotype-A-Serotype-B-Serotype-C-Vaccine-Inactivated-pd572926798.html"
                title="Infectious Coryza (Serotype A + Serotype B + Serotype C) Vaccine, Inactivated"
              >
                Infectious Coryza (Serotype A + Serotype B + Serotype C)
                Vaccine, Inactivated
              </a>
              <div className="w-[27px] h-[27px] group-hover:bg-white bg-blue-900 relative rounded-[50%] flex-shrink-0">
                <div className="absolute flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <ProductArrow className="fill-white group-hover:fill-blue-900" />
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    </section>
  );
};

export default ProductOffer;

import { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Poultry from "../../../assets/images/productTypes/Poultry-480-480.webp";
import Swine from "../../../assets/images/productTypes/Swine-480-480.webp";
import Bovine from "../../../assets/images/productTypes/Bovine-Sheep-480-480.webp";
import Pet from "../../../assets/images/productTypes/pet.jpg";
import Disinfectant from "../../../assets/images/productTypes/Disinfectant-480-480.webp";
import Heading from "../../../components/Common/Heading";
import { useProductsByCategory } from "../../../hooks/useProduct";
import ProductItem from "./ProductItem";
import ArrowRight from "./arrows/ArrowRight";
import ArrowLeft from "./arrows/ArrowLeft";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination]);

const categories = [
  {
    id: 1,
    name: "Vaccine cho gia cầm",
    label: "Vaccine phòng bệnh cho gia cầm",
    image: Poultry,
  },
  {
    id: 2,
    name: "Kháng thể",
    label: "Kháng thể",
    image: Swine,
  },
  {
    id: 3,
    name: "Dung môi pha vaccine",
    label: "Dung môi pha vaccine",
    image: Bovine,
  },
  {
    id: 4,
    name: "Thức ăn bổ sung",
    label: "Thức ăn bổ sung",
    image: Pet,
  },
  {
    id: 5,
    name: "Thuốc sát trùng",
    label: "Thuốc sát trùng",
    image: Disinfectant,
  },
];

const CategoryItem = ({
  handleCategoryClick,
  selectedCategory,
  category,
  small,
}) => {
  return (
    <>
      <li
        key={category.id}
        className={`sm:max-w-[268px] px-[10px] pb-5 text-center relative ${
          selectedCategory === category.label ? "active" : ""
        }`}
        onClick={() => handleCategoryClick(category.label)}
      >
        <div className="">
          <img className="" src={category.image} alt={category.name} />
        </div>
        <Link to={`/${category.label}`} className="text-gray-800 text-[16px]">
          {category.name}
        </Link>

        <>
          <div className={`absolute w-full h-1 bg-gray-200 bottom-0 left-0`}>
            <div
              className={`home-after ${
                small
                  ? "block"
                  : selectedCategory === category.label
                  ? "block"
                  : "hidden"
              }`}
            />
          </div>
          <div
            className={`${
              small
                ? "bg-blue-900"
                : selectedCategory === category.label
                ? "bg-blue-900"
                : "bg-gray-200"
            } absolute w-full h-1 bg-blue-900 b-5 bottom-0 left-0 -z-1`}
          />
        </>
      </li>
    </>
  );
};

const ProductOffer = () => {
  const [selectedCategory, setSelectedCategory] = useState("Kháng thể");

  const { data, isLoading, isError, error } = useProductsByCategory([
    selectedCategory,
  ]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);

  return (
    <section className="max-w-[1440px] mx-auto px-[10px] md:px-5 xl:px-10">
      {/* Heading */}
      <div className="">
        <Heading title="See What Products We Offer" />
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
      <ul className="sm:grid sm:grid-cols-5 pb-[10px] hidden">
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem
              category={category}
              handleCategoryClick={handleCategoryClick}
              selectedCategory={selectedCategory}
            />
          </div>
        ))}
      </ul>

      {/* smallScreen */}
      <div className="pb-[10px] categorySmall">
        <Swiper
          modules={[Pagination]}
          className="swiper-container !overflow-hidden"
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryItem
                category={category}
                handleCategoryClick={handleCategoryClick}
                selectedCategory={selectedCategory}
                small={true}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination !relative !bottom-0 mt-5"></div>
        </Swiper>
      </div>

      {selectedCategory && (
        <>
          <div className="product-slider hidden bigScreen w-[calc(100%-80px)] mx-auto relative mt-10 mb-[62px]">
            <div className="swiper-button image-swiper-button-next">
              <ArrowRight />
            </div>
            <div className="swiper-button image-swiper-button-prev">
              <ArrowLeft />
            </div>
            <Swiper
              className="swiper-container"
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
                disabledClass: "swiper-button-disabled",
              }}
            >
              {data.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="product-item">
                    <ProductItem product={product} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 768px */}
          <div className="product-slider smallScreen mt-10 mb-[62px]">
            <Swiper
              modules={[Pagination]}
              className="swiper-container !overflow-hidden"
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              breakpoints={{
                510: {
                  slidesPerView: 2,
                },
              }}
            >
              {data.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="product-item">
                    <ProductItem product={product} />
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination !relative !bottom-0 mt-5"></div>
            </Swiper>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductOffer;

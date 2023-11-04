import { useState } from "react";
import { Autoplay, Grid, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Poultry from "/images/productTypes/Poultry-480-480.webp";
import Swine from "/images/productTypes/Swine-480-480.webp";
import Duck from "/images/productTypes/duck.jpg";
import Bovine from "/images/productTypes/Bovine-Sheep.webp";
import Pet from "/images/productTypes/pet.jpg";
import Aquatic from "/images/productTypes/Aquatic.webp";
import ImportedProducts from "/images/productTypes/imported_products.png";
import Disinfectant from "/images/productTypes/Disinfectant-480-480.webp";
import Heading from "../../../components/Common/Heading";
import { useProductsByCategory } from "../../../hooks/useProduct";
import ProductItem from "./ProductItem";
import ArrowRight from "./arrows/ArrowRight";
import ArrowLeft from "./arrows/ArrowLeft";
import GlobalSpinner from "../../../components/Common/loading/GlobalSpinner";
import { useTranslation } from "react-i18next";
import CategoryItem from "../../Products/components/CategoryItem";

const ProductOffer = ({ lang_code }) => {
  const { t, i18n } = useTranslation();

  const categories = [
    {
      id: 1,
      name: i18n.t("home_product_cate1"),
      label: "Sản-phẩm-cho-gia-cầm",
      image: Poultry,
    },
    {
      id: 2,
      name: i18n.t("home_product_cate2"),
      label: "Sản-phẩm-cho-lợn",
      image: Swine,
    },
    {
      id: 3,
      name: i18n.t("home_product_cate3"),
      label: "Sản-phẩm-cho-vịt-ngan",
      image: Duck,
    },
    {
      id: 4,
      name: i18n.t("home_product_cate4"),
      label: "Sản-phẩm-cho-thú-nhỏ",
      image: Pet,
    },
    {
      id: 5,
      name: i18n.t("home_product_cate5"),
      label: "Sản-phẩm-cho-đại-gia-súc",
      image: Bovine,
    },
    {
      id: 6,
      name: i18n.t("home_product_cate6"),
      label: "Sản-phẩm-cho-thủy-sản",
      image: Aquatic,
    },
    {
      id: 7,
      name: i18n.t("home_product_cate7"),
      label: "Sản-phẩm-nhập-khẩu",
      image: ImportedProducts,
    },
    {
      id: 8,
      name: i18n.t("home_product_cate8"),
      label: "Sản-phẩm-sát-trùng",
      image: Disinfectant,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    categories[0].label.split("-").join(" ")
  );
  const { data, isLoading } = useProductsByCategory(
    [selectedCategory],
    lang_code
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.split("-").join(" "));
  };

  return (
    <section className="max-w-[1440px] mx-auto px-[10px] md:px-5 xl:px-10">
      {/* Heading */}
      <div className="">
        <Heading title={t("home_product_heading")} />
        <div className="text-gray-800 text-4xl leading-[51px] pb-5 font-[Montserrat] font-bold text-center">
          <span className="text-gray-800 inline font-bold leading-5 text-center text-sm">
            {t("home_product_p1")}
            {"  "}
            <a href="https://cnc-animalhealth.com/products/Sản-phẩm-cho-gia-cầm">
              <span className="text-blue-900">
                <strong>{t("home_product_cate1")}</strong>
              </span>
            </a>
            , {t("home_product_p2")}
          </span>
        </div>
      </div>

      {/* Product categories */}
      <ul className="pb-[20px] hidden sm:block">
        <Swiper
          modules={[Pagination, Navigation, Autoplay, Mousewheel]}
          className="swiper-container"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // loop={true}
          mousewheel={true}
          navigation={true}
          slidesPerView={5}
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
                selectedCategory={selectedCategory.replace(/\s+/g, "-")}
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
                selectedCategory={selectedCategory.replace(/\s+/g, "-")}
                small={true}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination !relative !bottom-0 mt-5"></div>
        </Swiper>
      </div>

      {selectedCategory && (
        <>
          <div className="product-slider hidden bigScreen w-[calc(100%-80px)] mx-auto relative z-[1] mt-10 mb-[62px]">
            <div className="swiper-button image-swiper-button-next">
              <ArrowRight className="w-[28px] h-[28px]" />
            </div>
            <div className="swiper-button image-swiper-button-prev">
              <ArrowLeft />
            </div>
            <Swiper
              modules={[Grid, Pagination, Autoplay]}
              className="swiper-container"
              grid={{
                rows: 2,
                fill: "row",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
                disabledClass: "swiper-button-disabled",
              }}
            >
              {isLoading ? (
                <GlobalSpinner />
              ) : (
                data.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="product-item">
                      <ProductItem product={product} />
                    </div>
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>

          {/* 768px */}
          <div className="product-slider smallScreen mt-10 mb-[62px]">
            <Swiper
              modules={[Pagination, Autoplay]}
              className="swiper-container !overflow-hidden"
              spaceBetween={20}
              speed={1000}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
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
              {isLoading ? (
                <GlobalSpinner />
              ) : (
                data.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="product-item">
                      <ProductItem product={product} />
                    </div>
                  </SwiperSlide>
                ))
              )}
              <div className="swiper-pagination !relative !bottom-0 mt-5"></div>
            </Swiper>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductOffer;

import SwiperCore, { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "react-modal";
import { useState } from "react";
import LearnMore from "./LearnMore";
import Heading from "../../../components/Common/Heading";
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation, EffectFade]);

const Certificate = () => {
  const { t } = useTranslation();

  const [isModalOpen, setModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleZoomIn = (event) => {
    event.stopPropagation();
    setZoomLevel((prevZoomLevel) => prevZoomLevel + 0.1);
  };

  const handleZoomOut = (event) => {
    event.stopPropagation();
    setZoomLevel((prevZoomLevel) => prevZoomLevel - 0.1);
  };

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const mainSliderOptions = {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: true,
  };

  const subSliderOptions = {
    slidesPerView: 1,
    effect: "fade",
    navigation: true,
    initialSlide: selectedImageIndex,
  };

  const handleSlideClick = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  return (
    <section className="bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-[10px] md:px-5 xl:px-10 relative pt-[62px]">
        <div className="py-5 px-[15px]">
          {/* Heading */}
          <div className="">
            <Heading title={t("home_certificate")} />
          </div>
          {/* News list */}
          <div className="Article_Container">
            <div
              className={`text-gray-700 text-sm leading-6 text-center px-[25px] ${
                isModalOpen ? "hidden" : ""
              }`}
            >
              <div>
                <img
                  src="/images/others/chung-nhan-iso-scaled.jpg"
                  alt="certificate"
                  className="w-full object-cover block max-w-[540px] mx-auto"
                />
              </div>
              {/* <div>
                <img
                  src="/images/certificate.png"
                  alt="certificate"
                  className="w-full object-cover block"
                />
              </div> */}
            </div>
            {/* <div
              className={`text-gray-700 text-sm leading-6 text-center px-[25px] ${
                isModalOpen ? "hidden" : ""
              }`}
              onClick={openModal}
            >
              <img
                src="../../../src/assets/images/certificate.png"
                alt="certificate"
                className="w-full object-cover"
              />
            </div>
            {isModalOpen && (
              <div
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-9999"
                onClick={closeModal}
              >
                <div className="relative">
                  <img
                    src="../../../src/assets/images/certificate.png"
                    alt="certificate"
                    className="max-w-full max-h-full"
                    style={{ transform: `scale(${zoomLevel})` }}
                  />
                  <div className="absolute top-0 right-0 mx-4 flex items-center gap-2">
                    <h4 className="font-bold">ZOOM</h4>
                    <button
                      onClick={handleZoomIn}
                      className="bg-white text-gray-700 rounded p-2 border border-black"
                    >
                      +
                    </button>
                    <button
                      onClick={handleZoomOut}
                      className="bg-white text-gray-700 rounded p-2 border border-black"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            )} */}
            {/* <Swiper {...mainSliderOptions}>
                <SwiperSlide onClick={() => handleSlideClick(0)}>
                  <div className="text-gray-700 text-sm leading-6 text-center">
                    <img
                      className="block"
                      src="https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <h3 className="">ISO45001-Shandong Sinder-EN&CN_01</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => handleSlideClick(1)}>
                  <div className="text-gray-700 text-sm leading-6 text-center">
                    <img
                      className="block"
                      src="https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <h3 className="">ISO45001-Shandong Sinder-EN&CN_01</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => handleSlideClick(2)}>
                  <div className="text-gray-700 text-sm leading-6 text-center">
                    <img
                      className="block"
                      src="https://images.unsplash.com/photo-1685903112462-e51c7d3c4aae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <h3 className="">ISO45001-Shandong Sinder-EN&CN_01</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => handleSlideClick(3)}>
                  <div className="text-gray-700 text-sm leading-6 text-center">
                    <img
                      className="block"
                      src="https://images.unsplash.com/photo-1685996836517-e88a8cd4078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <h3 className="">ISO45001-Shandong Sinder-EN&CN_01</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => handleSlideClick(4)}>
                  <div className="text-gray-700 text-sm leading-6 text-center">
                    <img
                      className="block"
                      src="https://images.unsplash.com/photo-1685968579781-191b2428146b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <h3 className="">ISO45001-Shandong Sinder-EN&CN_01</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => handleSlideClick(5)}>
                  <div className="text-gray-700 text-sm leading-6 text-center">
                    <img
                      className="block"
                      src="https://images.unsplash.com/photo-1685875673516-6559ff4289c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <h3 className="">ISO45001-Shandong Sinder-EN&CN_01</h3>
                  </div>
                </SwiperSlide>
              </Swiper> */}
            {/* Button */}
            <LearnMore
              type="certificate"
              bgColor="bg-blue-900"
              href="/advantage"
            />
            {/* Modal */}
            {/* <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              ariaHideApp={false}
              className="bg-black/70 z-9999 h-full"
            >
              <button onClick={closeModal}>Close</button>
              <Swiper {...subSliderOptions} className="">
                <SwiperSlide>
                  <div className="text-gray-700 text-sm leading-6 flex justify-center items-center">
                    <img
                      className="block h-full w-auto"
                      src="https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <h3 className="">ISO45001-Shandong Sinder-EN&CN_01</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-gray-700 text-sm leading-6 flex justify-center items-center text-center">
                    <img
                      className="block"
                      src="https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <h3 className="">ISO45001-Shandong Sinder-EN&CN_01</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-gray-700 text-sm leading-6 flex justify-center items-center text-center">
                    <img
                      className="block"
                      src="https://images.unsplash.com/photo-1685903112462-e51c7d3c4aae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <h3 className="">ISO45001-Shandong Sinder-EN&CN_01</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-gray-700 text-sm leading-6 flex justify-center items-center text-center">
                    <img
                      className="block"
                      src="https://images.unsplash.com/photo-1685996836517-e88a8cd4078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <h3 className="">ISO45001-Shandong Sinder-EN&CN_01</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-gray-700 text-sm leading-6 flex justify-center items-center text-center">
                    <img
                      className="block"
                      src="https://images.unsplash.com/photo-1685968579781-191b2428146b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <h3 className="">ISO45001-Shandong Sinder-EN&CN_01</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-gray-700 text-sm leading-6 flex justify-center items-center text-center">
                    <img
                      className="block"
                      src="https://images.unsplash.com/photo-1685875673516-6559ff4289c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <h3 className="">ISO45001-Shandong Sinder-EN&CN_01</h3>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Modal> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;

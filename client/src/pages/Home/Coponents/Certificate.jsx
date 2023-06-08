import SwiperCore, { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "react-modal";
import { useState } from "react";

SwiperCore.use([Navigation, EffectFade]);

const Certificate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-10">
      <div className="py-5 px-[15px]">
        {/* Heading */}
        <div className="">
          <div className="text-gray-800 text-4xl leading-[51px] mb-5 font-[Montserrat] font-bold text-center">
            <h2>Certificate</h2>
          </div>
        </div>
        {/* News list */}
        <div className="Article_Container">
          <div
            className={`text-gray-700 text-sm leading-6 text-center px-[25px] ${
              isModalOpen ? "hidden" : ""
            }`}
          >
            <Swiper {...mainSliderOptions}>
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
            </Swiper>
          </div>

          {/* Button */}
          <div className="text-gray-700 leading-7 text-center mt-[30px]">
            <a
              href="/our-advantage.html"
              className="py-3 leading-11 px-10 bg-blue-900 rounded-sm text-white inline-block text-sm font-light text-center learn-button"
            >
              <span className="relative z-10">Learn More &gt;&gt;</span>
            </a>
          </div>

          {/* Modal */}
          <Modal
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
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Certificate;

import { useEffect, useState } from "react";
import PopUp from "./PopUp";
import ServiceItem from "./ServiceItem";

const OnlineService = () => {
  const [showButton, setShowButton] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleItemClick = () => {
    setShowPopup(true); // Thay đổi trạng thái của Popup thành true
  };

  const handleScrollToTop = () => {
    // Di chuyển view lên top của trang
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Ẩn nút bấm "Lên Top"
    setShowButton(false);
  };

  const handleScroll = () => {
    // Kiểm tra vị trí cuộn của trang
    // Nếu vị trí cuộn lớn hơn một giá trị xác định (ví dụ: 500px), hiển thị nút bấm "Lên Top"
    if (window.scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Lắng nghe sự kiện cuộn trang
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Thanh bên phải (>900px) */}
      <section className="relative max-[900px]:hidden rounded-full">
        <div className="fixed z-[99] left-auto right-[10px] top-1/2 transform -translate-y-1/2 text-center">
          <div className="text-base leading-7 text-gray-700 font-normal tracking-normal text-left">
            <ul className="w-[50px]">
              {/* Phone */}
              <ServiceItem
                icon="fa-solid fa-phone"
                href="tel:+84-2466846622"
                content="+84-2466846622"
              />
              {/* Email */}
              <ServiceItem
                icon="fa-solid fa-envelope"
                onClick={handleItemClick}
                type="button"
                content="thuocthuycnc@gmail.com"
              />
              {/* Whatsapp */}
              <ServiceItem
                icon="fa-brands fa-whatsapp"
                target="blank"
                href="https://api.whatsapp.com/send?phone=842466846622"
                content="+84246.684.6622"
              />
              {/* To top */}
              {showButton && (
                <button
                  className="w-[50px] h-[50px] relative mb-0 whitespace-nowrap bg-gray-600/30"
                  style={{ display: "list-item" }}
                  onClick={handleScrollToTop}
                >
                  <div
                    className="block w-full h-full text-center text-white box-border border-b-0 overflow-hidden"
                    // rel="nofollow"
                    // href=""
                  >
                    <div className="relative p-0 w-32 h-12 border-0 transition-all duration-200">
                      <div className="w-[50px] h-[50px] p-0 rounded-none relative float-left border-0 text-white">
                        <i className="fa-solid fa-arrow-up-from-bracket bg-blue-900 text-base w-10 block h-10 leading-10 mt-1 absolute ml-0 rounded-1/2 left-1/2 transform -translate-x-1/2 hover:scale-105"></i>
                      </div>
                    </div>
                  </div>
                </button>
              )}
            </ul>
          </div>
        </div>
        {showPopup && (
          <PopUp showPopup={showPopup} setShowPopup={setShowPopup} />
        )}
      </section>

      {/* Thanh bên dưới (<900px) */}
      <section className="relative min-[899px]:hidden">
        <div className="fixed z-[99] bottom-0 top-auto mr-5 max-[900px]:mr-0 text-center w-full">
          <div className="text-base leading-7 text-gray-700 font-normal tracking-normal text-left">
            <ul className="flex items-center justify-center">
              {/* Phone */}
              <ServiceItem
                icon="fa-solid fa-phone"
                href="tel:+84-2466846622"
                content="+84-2466846622"
                position={"left-0"}
              />
              {/* Email */}
              <ServiceItem
                icon="fa-solid fa-envelope"
                onClick={handleItemClick}
                type="button"
                content="thuocthuycnc@gmail.com"
              />
              {/* Whatsapp */}
              <ServiceItem
                icon="fa-brands fa-whatsapp"
                target="blank"
                href="https://api.whatsapp.com/send?phone=842466846622"
                content="+84246.684.6622"
                position={"right-0"}
              />
            </ul>
          </div>
        </div>
        {showPopup && (
          <PopUp showPopup={showPopup} setShowPopup={setShowPopup} />
        )}
      </section>
    </div>
  );
};

export default OnlineService;

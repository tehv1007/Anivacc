import {
  faEnvelope,
  faHouseChimney,
  faPhone,
  faTeletype,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTiktok,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PopUp from "../../FixComponent/PopUp";
import { useTranslation } from "react-i18next";

const FollowUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { t } = useTranslation();

  const handleItemClick = () => {
    setShowPopup(true); // Thay đổi trạng thái của Popup thành true
  };

  return (
    <>
      <div>
        <p className="text-white font-semibold text-lg text-left font-montserrat">
          {t("footer_follow")}
        </p>
        <ul className="text-[#b5ccec] mt-5">
          <li className="py-1">
            <FontAwesomeIcon
              style={{
                fontSize: "12px",
                marginTop: "5px",
                marginRight: "6px",
              }}
              icon={faHouseChimney}
            />
            {t("footer_address")}
          </li>
          <li className="py-1">
            <a href="tel:+84-2466846622">
              <FontAwesomeIcon
                style={{
                  fontSize: "12px",
                  marginTop: "5px",
                  marginRight: "6px",
                }}
                icon={faPhone}
              />
              +84-246.684.6622
            </a>
          </li>
          <li className="py-1">
            <a href="tel:+84-2466846622">
              <FontAwesomeIcon
                style={{
                  fontSize: "12px",
                  marginTop: "5px",
                  marginRight: "6px",
                }}
                icon={faTeletype}
              />
              +84-246.684.6622
            </a>
          </li>
          <li className="py-1">
            <a
              href="https://api.whatsapp.com/send?phone=842466846622"
              target="blank"
            >
              <FontAwesomeIcon
                style={{
                  fontSize: "12px",
                  marginTop: "5px",
                  marginRight: "6px",
                }}
                icon={faWhatsapp}
              />
              +84-2466846622
            </a>
          </li>
          <li className="py-1">
            <button onClick={handleItemClick}>
              <FontAwesomeIcon
                style={{
                  fontSize: "12px",
                  marginTop: "5px",
                  marginRight: "6px",
                }}
                icon={faEnvelope}
              />
              thuocthuycnc@gmail.com
            </button>
          </li>
        </ul>

        {showPopup && (
          <PopUp showPopup={showPopup} setShowPopup={setShowPopup} />
        )}

        <div className="text-[#b5ccec]">
          <a href="https://www.facebook.com/anivaccvet" target="blank">
            <FontAwesomeIcon
              className="hover:text-blue-800"
              style={{
                height: "20px",
                width: "20px",
                marginRight: "10px",
                border: "1px solid #cccccc",
                borderRadius: 9999,
                padding: "5px",
              }}
              icon={faFacebook}
            />
          </a>
          <a href="https://www.tiktok.com/@anivacc.cnc" target="blank">
            <FontAwesomeIcon
              className="hover:text-gray-800"
              style={{
                height: "20px",
                width: "20px",
                marginRight: "10px",
                border: "1px solid #cccccc",
                borderRadius: 9999,
                padding: "5px",
              }}
              icon={faTiktok}
            />
          </a>
          <a href="/" target="blank">
            <FontAwesomeIcon
              className="hover:text-red-600"
              style={{
                height: "20px",
                width: "20px",
                marginRight: "10px",
                border: "1px solid #cccccc",
                borderRadius: 9999,
                padding: "5px",
              }}
              icon={faYoutube}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default FollowUs;

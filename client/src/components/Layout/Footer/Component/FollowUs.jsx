import {
  faEnvelope,
  faHouseChimney,
  faPhone,
  faTeletype,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FollowUs = () => {
  return (
    <>
      <div>
        <p className="text-white font-semibold text-lg text-left font-montserrat">
          Follow Us
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
            Lô số 28 KCN Quang Minh, TT. Quang Minh, H. Mê Linh, TP. Hà Nội
          </li>
          <li className="py-1">
            <FontAwesomeIcon
              style={{
                fontSize: "12px",
                marginTop: "5px",
                marginRight: "6px",
              }}
              icon={faPhone}
            />
            +84-246.684.6622
          </li>
          <li className="py-1">
            <FontAwesomeIcon
              style={{
                fontSize: "12px",
                marginTop: "5px",
                marginRight: "6px",
              }}
              icon={faTeletype}
            />
            +84-246.684.6622
          </li>
          <li className="py-1">
            <FontAwesomeIcon
              style={{
                fontSize: "12px",
                marginTop: "5px",
                marginRight: "6px",
              }}
              icon={faWhatsapp}
            />
            +84-2466846622
          </li>
          <li className="py-1">
            <FontAwesomeIcon
              style={{
                fontSize: "12px",
                marginTop: "5px",
                marginRight: "6px",
              }}
              icon={faEnvelope}
            />
            thuocthuycnc@gmail.com
          </li>
        </ul>
        <div className="text-[#b5ccec]">
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
            icon={faLinkedin}
          />
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
        </div>
      </div>
    </>
  );
};

export default FollowUs;

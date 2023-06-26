import { Link } from "react-router-dom";

const LearnMore = ({ borderColor = "", bgColor, type, href }) => {
  return (
    <>
      <div className="text-gray-700 leading-7 text-center mt-[30px] z-1 hover:text-blue-900">
        <Link
          to={href}
          className={`py-3 leading-11 px-10 ${bgColor} ${borderColor} rounded-sm inline-block text-sm font-light text-center learn-button ${type}`}
        >
          <span className={`relative z-10 ${type}`}>Learn More &gt;&gt;</span>
        </Link>
      </div>
    </>
  );
};

export default LearnMore;

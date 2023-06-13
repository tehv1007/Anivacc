import { Link } from "react-router-dom";

const QuickLink = () => {
  return (
    <>
      <div className="pl-10">
        <p className="text-white font-semibold text-lg text-left font-montserrat">
          Quick Links
        </p>
        <ul className="list-disc list-inside text-[#b5ccec] mt-5">
          <li>
            <Link className="hover:text-white leading-7" to="/">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link className="hover:text-white leading-7" to="/products">
              Sản phẩm
            </Link>
          </li>
          <li>
            <Link className="hover:text-white leading-7" to="/solutions">
              Giải pháp
            </Link>
          </li>
          <li>
            <Link className="hover:text-white leading-7" to="/about">
              Về chúng tôi
            </Link>
          </li>
          <li>
            <Link className="hover:text-white leading-7" to="/resource">
              Tài nguyên
            </Link>
          </li>
          <li>
            <Link className="hover:text-white leading-7" to="/news">
              Tin tức
            </Link>
          </li>
          <li>
            <Link className="hover:text-white leading-7" to="/contact">
              Liên hệ
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default QuickLink;

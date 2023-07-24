import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const QuickLink = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="lg:pl-10">
        <p className="text-white font-semibold text-lg text-left font-montserrat">
          {t("footer_quicklink")}
        </p>
        <ul className="list-disc list-inside text-[#b5ccec] mt-5">
          <li>
            <Link className="hover:text-white leading-7" to="/">
              {t("nav-home")}
            </Link>
          </li>
          <li>
            <Link className="hover:text-white leading-7" to="/products/all">
              {t("nav-products")}
            </Link>
          </li>
          <li>
            <Link className="hover:text-white leading-7" to="/solutions">
              {t("nav-solutions")}
            </Link>
          </li>
          <li>
            <Link className="hover:text-white leading-7" to="/about">
              {t("nav-about-us")}
            </Link>
          </li>
          <li>
            <Link className="hover:text-white leading-7" to="/guide">
              {t("nav-resources")}
            </Link>
          </li>
          <li>
            <Link className="hover:text-white leading-7" to="/posts">
              {t("nav-news")}
            </Link>
          </li>
          <li>
            <Link className="hover:text-white leading-7" to="/contact">
              {t("nav-contact")}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default QuickLink;

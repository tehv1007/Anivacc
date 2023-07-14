import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../../SearchBar/SearchBar";
import { AiOutlineGlobal, AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { LANGUAGES } from "../../../utils/language";
import { useTranslation } from "react-i18next";

export default function NavBar({ setLangCode, setPage }) {
  const navigate = useNavigate();
  const [navHeight, setNavHeight] = useState(`h-[80px]`);
  const [color, setColor] = useState("bg-black/20");
  const [active, setActive] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("vi");
  const { i18n, t } = useTranslation();

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleNavItemClick = () => {
    setSidebarOpen(false);
    setPage(1);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?query=${searchTerm}`);
    setSearchTerm("");
  };

  const handleUnderline = (id) => {
    setActive(
      active.map((e, index) => {
        if (index === id) {
          return true;
        } else {
          return false;
        }
      })
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setNavHeight(`h-[60px]`);
        setColor("bg-black/50");
      } else {
        setNavHeight(`h-[80px]`);
        setColor("bg-black/20");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="drawer fixed top-0 left-0 right-0 z-50 text-white font-medium">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        {/* NAVBAR */}
        <div className="drawer-content flex flex-col">
          <div className={`flex w-full navbar justify-between ${color}`}>
            {/* button */}
            <button
              onClick={() => {
                setSidebarOpen(true);
              }}
              className="flex-none xl:hidden"
            >
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </button>

            {/* LOGO IMAGE */}
            <div className="px-2 mx-2">
              <Link to="/">
                <img
                  src="/images/logo/anivacC.png"
                  alt="CÔNG TY CỔ PHẦN SẢN XUẤT VÀ THƯƠNG MẠI THUỐC THÚ Y CNC"
                  className={`transition-all duration-[0.4s] ${navHeight} `}
                />
              </Link>
            </div>

            {/* NAVIGATION */}
            <div className="xl:flex hidden">
              {isNavVisible && (
                <ul className="menu menu-horizontal hover:text-white text-[16px] flex [&>li]:relative [&>li]:w-fit [&>li]:after:content-[''] [&>li]:after:block  [&>li]:after:w-0 [&>li]:after:h-[3px] [&>li]:after:bg-white [&>li]:after:mx-auto  hover:[&>li]:hover:after:w-full [&>li]:after:transition-all [&>li]:hover:transition-all [&>li]:after:duration-[0.8s] [&>li]:hover:duration-[0.8s] [&>li]:after:absolute [&>li]:after:bottom-[-30%] capitalize [&>li>ul]:absolute [&>li>ul]:shadow-xl [&>li>ul]:text-black [&>li>ul]:top-[150%] [&>li>ul]:bg-white [&>li>ul>li]:pl-6 [&>li>ul>li]:pr-2 [&>li>ul>li]:py-3 [&>li>ul]:flex-col [&>li>ul]:text-sm hover:[&>li>ul>li]:hover:bg-black/20 [&>li>ul>li>a]:block [&>li>ul>li>a]:w-full p-0">
                  <li
                    onClick={() => handleUnderline(0)}
                    className={`${active[0] ? `after:animate-still` : ``}`}
                  >
                    <Link to="/">
                      <span className="hover:text-white text-white">
                        {t("nav-home")}
                      </span>
                    </Link>
                  </li>
                  <li
                    onClick={() => handleUnderline(1)}
                    className={`${
                      active[1] ? `after:animate-still` : ``
                    } group [&>ul]:hidden before:content-[''] before:w-full before:h-full before:bg-transparent before:block before:absolute relative before:top-[100%]`}
                  >
                    <Link to="#">
                      <span className="hover:text-white text-white">
                        {t("nav-about")}
                      </span>
                    </Link>
                    <ul className="pl-0 group-hover:transition-all group-hover:animate-change group-hover:[&>ul]:opacity-100 group-hover:flex">
                      <li>
                        <Link to={`/about`}>{t("nav-about-us")}</Link>
                      </li>
                      <li>
                        <Link to={`/advantage`}>
                          {t("nav-about-advantage")}
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    onClick={() => handleUnderline(2)}
                    className={`${
                      active[2] ? `after:animate-still` : ``
                    } group [&>ul]:hidden before:content-[''] before:w-full before:h-full before:bg-transparent before:block before:absolute relative before:top-[100%]`}
                  >
                    <Link to="/products/all">
                      <span className="hover:text-white text-white">
                        {t("nav-products")}
                      </span>
                    </Link>
                    <ul className="pl-0 group-hover:transition-all group-hover:animate-change  group-hover:[&>ul]:opacity-100 group-hover:flex">
                      {t("nav-category-arr", { returnObjects: true }).map(
                        (category, index) => {
                          return (
                            <li key={index}>
                              <Link
                                to={`/products/${t(`${category["link"]}`)}`}
                                onClick={() => setPage(1)}
                              >
                                {t(`${category["nav-category"]}`)}
                              </Link>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </li>

                  <li
                    onClick={() => handleUnderline(3)}
                    className={`${
                      active[3] ? `after:animate-still` : ``
                    } group  [&>ul]:hidden before:content-[''] before:w-full before:h-full before:bg-transparent before:block before:absolute relative before:top-[100%]`}
                  >
                    <Link to="/solutions">
                      <span className="hover:text-white text-white">
                        {t("nav-solutions")}
                      </span>
                    </Link>
                    <ul className="pl-0 group-hover:transition-all group-hover:animate-change  group-hover:[&>ul]:opacity-100   group-hover:flex">
                      {t("nav-solutions-arr", { returnObjects: true }).map(
                        (type, index) => (
                          <li key={index}>
                            <Link to={`/solutions/${t(type["link"])}`}>
                              {t(`${type["nav-solution"]}`)}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </li>

                  <li
                    onClick={() => handleUnderline(4)}
                    className={`${
                      active[4] ? `after:animate-still` : ``
                    } group [&>ul]:hidden before:content-[''] before:w-full before:h-full before:bg-transparent before:block before:absolute relative before:top-[100%]`}
                  >
                    <Link to="/posts">
                      <span className="hover:text-white text-white">
                        {t("nav-news")}
                      </span>
                    </Link>
                    <ul className="pl-0 group-hover:transition-all group-hover:animate-change group-hover:[&>ul]:opacity-100 group-hover:flex">
                      <li>
                        <Link to={`/posts/category/company`}>
                          {t("nav-news-1")}
                        </Link>
                      </li>
                      <li>
                        <Link to={`/posts/category/industry`}>
                          {t("nav-news-2")}
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    onClick={() => handleUnderline(5)}
                    className={`${
                      active[5] ? `after:animate-still` : ``
                    } group [&>ul]:hidden before:content-[''] before:w-full before:h-full before:bg-transparent before:block before:absolute relative before:top-[100%]`}
                  >
                    <Link to="#">
                      <span className="hover:text-white text-white">
                        {t("nav-resources")}
                      </span>
                    </Link>
                    <ul className="pl-0 group-hover:transition-all group-hover:animate-change group-hover:[&>ul]:opacity-100 group-hover:flex">
                      <li>
                        <Link to={`/faq`}>{t("nav-resources-1")}</Link>
                      </li>
                      <li>
                        <Link to={`/guide`}>{t("nav-resources-2")}</Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    onClick={() => handleUnderline(6)}
                    className={`${active[6] ? `after:animate-still` : ``} `}
                  >
                    <Link to="/contact">
                      <span className="hover:text-white text-white">
                        {t("nav-contact")}
                      </span>
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Right bar */}
            {/* SEARCH */}
            <section className="flex items-center justify-center gap-2">
              <div className=" justify-between my-3 hidden xl:flex">
                {!isNavVisible && (
                  <form
                    onSubmit={handleSearch}
                    className="flex items-center border border-white relative right-[-30px] h-[38px] "
                  >
                    <input
                      type="text"
                      className="p-3 bg-transparent flex-grow focus:outline-none inline-block w-[452px] text-white placeholder-gray-200"
                      placeholder={t("search_placeholder")}
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                    />
                  </form>
                )}
                <button
                  type="button"
                  onClick={toggleNavVisibility}
                  className="z-10"
                >
                  <AiOutlineSearch className="text-white w-[21px] h-[21px] " />
                </button>
              </div>

              {/* language */}
              <div className="relative xl:w-[150px] w-[82px] md:w-[110px]">
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  value={value}
                  className="w-full hover:rounded-t-[6px] hover:border text-sm tracking-wider hover:border-white transition-all duration-300 md:text-base text-white cursor-pointer h-[32px] flex items-center justify-center gap-2"
                >
                  <span className="pl-2 hidden xl:block">
                    <AiOutlineGlobal className="w-[21px] h-[21px]" />
                  </span>
                  {LANGUAGES.find((item) => item.code == value).label}
                  {!isOpen ? (
                    <FiChevronDown className="h-8 hidden md:block" />
                  ) : (
                    <FiChevronUp className="h-8 hidden md:block" />
                  )}
                </button>

                {isOpen && (
                  <div className="bg-white text-black/60 absolute top-[32px] flex flex-col rounded-b-lg lg:p-2 w-full">
                    {LANGUAGES.filter((item) => item.code != value).map(
                      (item, index) => (
                        <div key={index} className="w-full cursor-pointer">
                          <h3
                            onClick={(e) => {
                              const lang_code = LANGUAGES.find(
                                (item) => item.label == e.target.outerText
                              ).code;
                              setValue(lang_code);
                              i18n.changeLanguage(lang_code);
                              setIsOpen(false);
                              setLangCode(lang_code);
                            }}
                            className="text-center"
                          >
                            {item.label}
                          </h3>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className={`drawer-side`}>
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

          {/* NAVIGATION */}
          <ul className=" text-white menu p-4 w-80 h-full bg-black/80 text-[16px] flex [&>li]:relative [&>li]:w-full uppercase [&>li>ul]:absolute [&>li>ul]:shadow-xl  [&>li>ul]:text-black [&>li>ul]:top-[150%] [&>li>ul]:bg-white [&>li>ul>li]:pl-6 [&>li>ul>li]:pr-2 [&>li>ul>li]:py-3 [&>li>ul]:flex-col [&>li>ul]:text-sm hover:[&>li>ul>li]:hover:bg-black/20 [&>li>ul>li>a]:block [&>li>ul>li>a]:w-full">
            <SearchBar setSidebarOpen={setSidebarOpen} />

            {/* Nav */}
            <li>
              <Link to="/" onClick={handleNavItemClick}>
                <span className="hover:text-white text-white">
                  {t("nav-home")}
                </span>
              </Link>
            </li>
            <div className="group relative">
              <div className="collapse collapse-arrow [&_a]:line-clamp-none ">
                <input
                  className="line-clamp-none absolute right-0"
                  type="radio"
                  name="my-accordion-2"
                />
                <Link
                  to="#"
                  onClick={handleNavItemClick}
                  className="collapse-title after:p-2 "
                >
                  {t("nav-about")}
                </Link>
                <ul className="collapse-content capitalize">
                  <li>
                    <Link to={`/about`} onClick={handleNavItemClick}>
                      <span className="hover:text-white text-white">
                        {t("nav-about-us")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/advantage`} onClick={handleNavItemClick}>
                      <span className="hover:text-white text-white">
                        {t("nav-about-advantage")}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="collapse collapse-arrow [&_a]:line-clamp-none ">
                <input
                  className="w-10 h-full  line-clamp-none absolute right-0   "
                  type="radio"
                  name="my-accordion-2"
                />
                <Link
                  to="/products/all"
                  onClick={handleNavItemClick}
                  className="collapse-title after:p-2"
                >
                  {t("nav-products")}
                </Link>
                <ul className="collapse-content capitalize">
                  {t("nav-category-arr", { returnObjects: true }).map(
                    (category, index) => (
                      <li key={index}>
                        <Link
                          to={`/products/${t(`${category["link"]}`)}`}
                          onClick={handleNavItemClick}
                        >
                          <span className="hover:text-white text-white">
                            {t(`${category["nav-category"]}`)}
                          </span>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="collapse collapse-arrow [&_a]:line-clamp-none ">
                <input
                  className="w-10 h-full  line-clamp-none absolute right-0   "
                  type="radio"
                  name="my-accordion-2"
                />
                <Link
                  to="/solutions"
                  onClick={handleNavItemClick}
                  className="collapse-title after:p-2"
                >
                  {t("nav-solutions")}
                </Link>
                <ul className="collapse-content capitalize">
                  {t("nav-solutions-arr", { returnObjects: true }).map(
                    (type, index) => (
                      <li key={index}>
                        <Link to={`/solutions`} onClick={handleNavItemClick}>
                          <span className="hover:text-white text-white">
                            {t(`${type["nav-solution"]}`)}
                          </span>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="collapse collapse-arrow [&_a]:line-clamp-none ">
                <input
                  className="w-10 h-full  line-clamp-none absolute right-0   "
                  type="radio"
                  name="my-accordion-2"
                />
                <Link
                  to="/posts"
                  onClick={handleNavItemClick}
                  className="collapse-title after:p-2 "
                >
                  {t("nav-news")}
                </Link>
                <ul className="collapse-content capitalize">
                  <li>
                    <Link
                      to={`/posts/category/company`}
                      onClick={handleNavItemClick}
                    >
                      <span className="hover:text-white text-white">
                        {t("nav-news-1")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/posts/category/industry`}
                      onClick={handleNavItemClick}
                    >
                      <span className="hover:text-white text-white">
                        {t("nav-news-2")}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="collapse collapse-arrow [&_a]:line-clamp-none ">
                <input
                  className="w-10 h-full  line-clamp-none absolute right-0"
                  type="radio"
                  name="my-accordion-2"
                />
                <Link
                  to="#"
                  onClick={handleNavItemClick}
                  className="collapse-title after:p-2 "
                >
                  {t("nav-resources")}
                </Link>
                <ul className="collapse-content capitalize">
                  <li>
                    <Link to={`/faq`} onClick={handleNavItemClick}>
                      <span className="hover:text-white text-white">
                        {t("nav-resources-1")}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/guide`} onClick={handleNavItemClick}>
                      <span className="hover:text-white text-white">
                        {t("nav-resources-2")}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <li>
              <Link to="/contact" onClick={handleNavItemClick}>
                <span className="hover:text-white text-white">
                  {t("nav-contact")}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

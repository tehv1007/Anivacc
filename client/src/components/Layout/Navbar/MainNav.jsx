import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubNavItem = ({ href = "", title }) => {
  return (
    <li className="leading-5 inline-block align-top font-normal py-[10px] px-[35px]">
      <a
        target="_self"
        href={href}
        className="whitespace-no-wrap text-sm inline-block mb-0 relative text-black/60"
      >
        {title}
      </a>
    </li>
  );
};

const MainNav = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="sq_header_1 sq_header_2 has_blockHeadFixed sq_header_1_screen flex justify-between items-center">
        <i style={{ display: "none", color: "rgba(0, 0, 0, 0.6)" }} />
        {/* Logo */}
        <div className={`backstage-componet-bd ${shrink ? "shrink" : ""}`}>
          <div className="backstage-componet-bd">
            <Link className="blocks-image" to="/">
              <picture>
                <img
                  className={`ml-[61px] transition-all duration-500 ease-in-out ${
                    shrink ? "h-[40px]" : "h-[60px]"
                  }`}
                  src="/images/anivacc-logo.png"
                  alt="CÔNG TY CỔ PHẦN SẢN XUẤT VÀ THƯƠNG MẠI THUỐC THÚ Y CNC"
                />
              </picture>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div
          className="sq_nav_1 transition-opacity duration-500 opacity-100 h-auto"
          style={{ display: "block" }}
        >
          {/*  */}
          <div className="navigation">
            <ul className="blockNavBar fix flex">
              <li className="ItemLi inline-block text-base relative float-left py-[10px] mx-[15px]">
                <a target="_self" href="/" className="">
                  Home
                </a>
              </li>

              {/* Product */}
              <li className="parent text-base relative float-left py-[10px] mx-[15px]">
                <a href="/products.html" className="relative ">
                  Products
                </a>
                <div className="sub absolute top-full -left-[4px] transition-all duration-300 overflow-hidden z-10 bg-gray-500">
                  <ul className="child flex flex-col">
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                  </ul>
                </div>
              </li>

              {/* Solution */}
              <li className="parent text-base relative float-left py-[10px] mx-[15px]">
                <a href="/products.html" className="relative ">
                  Products
                </a>
                <div className="sub absolute top-full -left-[4px] transition-all duration-300 overflow-hidden z-10 bg-gray-500">
                  <ul className="child flex flex-col">
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                  </ul>
                </div>
              </li>

              {/* About */}
              <li className="parent text-base relative float-left py-[10px] mx-[15px]">
                <a href="/products.html" className="relative ">
                  About
                </a>
                <div className="sub absolute top-full -left-[4px] transition-all duration-300 overflow-hidden z-10 bg-gray-500">
                  <ul className="child flex flex-col">
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                  </ul>
                </div>
              </li>

              {/* Resource */}
              <li className="parent text-base relative float-left py-[10px] mx-[15px]">
                <a href="/products.html" className="relative ">
                  Resource
                </a>
                <div className="sub absolute top-full -left-[4px] transition-all duration-300 overflow-hidden z-10 bg-gray-500">
                  <ul className="child flex flex-col">
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                  </ul>
                </div>
              </li>

              {/* News */}
              <li className="parent text-base relative float-left py-[10px] mx-[15px]">
                <a href="/products.html" className="relative ">
                  News
                </a>
                <div className="sub absolute top-full -left-[4px] transition-all duration-300 overflow-hidden z-10 bg-gray-500">
                  <ul className="child flex flex-col">
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                    <SubNavItem title="Poultry" />
                  </ul>
                </div>
              </li>

              {/* Contact */}
              <li className="ItemLi inline-block text-base relative float-left py-[10px] mx-[15px]">
                <a target="_self" href="/" className="">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Language */}
        <div className="sq_right_1">
          <div className="sq_search_1">
            <div className="backstage-blocksEditor-wrap serach">
              <form action="/phoenix/admin/prod/search" method="get" noValidate>
                <div className="search-wrap">
                  <div className="search-input">
                    <input
                      type="text"
                      name="searchValue"
                      id="inputSearch"
                      placeholder="Search"
                      autoComplete="off"
                    />
                    {/* <svg
                      className="icon sousuoOne"
                      style={{ color: "#fff", marginRight: 12 }}
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width={21}
                      height={21}
                    >
                      <path d="M811.1616 769.8944l203.52 201.3184a30.72 30.72 0 0 1-43.2128 43.6736L768 813.568a30.72 30.72 0 1 1 43.2128-43.6736zM448 0a448 448 0 1 1 0 896 448 448 0 0 1 0-896z m0 61.44a386.56 386.56 0 1 0 0 773.12 386.56 386.56 0 0 0 0-773.12z" />
                    </svg>
                    <svg
                      className="icon sousuoTwo"
                      style={{ color: "#fff", marginRight: 6 }}
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width={21}
                      height={21}
                    >
                      <path d="M811.1616 769.8944l203.52 201.3184a30.72 30.72 0 0 1-43.2128 43.6736L768 813.568a30.72 30.72 0 1 1 43.2128-43.6736zM448 0a448 448 0 1 1 0 896 448 448 0 0 1 0-896z m0 61.44a386.56 386.56 0 1 0 0 773.12 386.56 386.56 0 0 0 0-773.12z" />
                    </svg> */}
                    <button type="submit" className="">
                      <svg
                        className="tttt"
                        style={{ color: "#fff", marginRight: 6 }}
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width={21}
                        height={21}
                      >
                        <path d="M811.1616 769.8944l203.52 201.3184a30.72 30.72 0 0 1-43.2128 43.6736L768 813.568a30.72 30.72 0 1 1 43.2128-43.6736zM448 0a448 448 0 1 1 0 896 448 448 0 0 1 0-896z m0 61.44a386.56 386.56 0 1 0 0 773.12 386.56 386.56 0 0 0 0-773.12z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="sq_language_1">
            <div className="backstage-blocksEditor-wrap langBar">
              <div className="lang-show-word">
                <span className="sq_language_span">
                  <svg
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                  >
                    <path d="M494.8992 0h34.048c59.2384 2.304 117.6576 14.6432 172.7488 36.5056a513.9456 513.9456 0 0 1 266.6496 243.3024A513.5872 513.5872 0 0 1 1024 502.784v18.3808a513.536 513.536 0 0 1-54.3232 220.3136 514.048 514.048 0 0 1-141.2608 172.9536 510.208 510.208 0 0 1-206.4384 97.5872c-30.5664 6.5024-61.6448 10.496-92.8256 11.9808H495.104a545.8432 545.8432 0 0 1-120.9344-18.8928 512.1024 512.1024 0 0 1-247.3984-155.9552A511.3344 511.3344 0 0 1 0 521.1648V502.784a513.28 513.28 0 0 1 79.7696-265.1136A513.9968 513.9968 0 0 1 302.6944 44.6976 521.2672 521.2672 0 0 1 494.8992 0zM397.1584 109.2608c-32.4096 40.704-53.6064 89.088-70.8096 137.8816 24.1664 6.0416 48.9472 8.704 73.5232 12.3904a932.352 932.352 0 0 0 91.648 6.144V42.9568c-39.0144 8.192-70.4 35.7888-94.3104 66.304zM532.48 265.6256a871.424 871.424 0 0 0 123.8528-10.8544c13.8752-1.792 27.6992-4.352 41.3184-7.7312-20.1216-57.1392-46.08-114.1248-88.576-158.2592-20.7872-21.76-46.6944-39.6288-76.544-45.9776v222.8224H532.48zM356.7104 67.2256a471.0912 471.0912 0 0 0-190.3616 124.928c37.9904 20.0704 78.6944 34.9184 120.32 45.568 21.76-65.536 52.224-130.2528 101.2736-179.8656-10.6496 2.2016-20.8896 5.888-31.232 9.3696z m279.1424-9.6256c10.24 9.472 18.432 20.6848 27.392 31.2832 33.3824 44.6976 56.832 96.0512 74.24 148.9408a577.6384 577.6384 0 0 0 120.32-45.568 468.224 468.224 0 0 0-221.952-134.656zM139.008 224.2048A471.3984 471.3984 0 0 0 41.472 491.52c68.3008-0.1024 136.4992-0.0512 204.8-0.0512 1.28-72.2432 10.5472-144.384 28.672-214.4256A604.928 604.928 0 0 1 139.008 224.256z m609.9968 52.992c18.2272 69.9392 27.4944 142.08 28.7744 214.3232h204.8a472.2176 472.2176 0 0 0-97.6384-267.3664c-43.008 23.0912-88.6272 40.96-135.936 53.0432zM287.1296 491.3152c68.096 0.4096 136.2944 0.1024 204.3904 0.2048V306.5856a904.3968 904.3968 0 0 1-176.64-19.968 877.8752 877.8752 0 0 0-27.8016 204.6464v0.0512zM532.48 306.688V491.52c68.1472-0.1024 136.2944 0.2048 204.3904-0.2048A879.872 879.872 0 0 0 709.12 286.72c-58.0096 12.8-117.2992 18.8928-176.64 19.968zM41.472 532.48a471.8592 471.8592 0 0 0 97.536 267.3152 605.696 605.696 0 0 1 135.9872-52.992A924.7232 924.7232 0 0 1 246.272 532.48c-68.3008 0.1024-136.5504 0.1024-204.8 0l0.0512 0.0512z m245.7088 0.2048c1.536 68.9152 9.984 137.984 27.7504 204.6976a889.2928 889.2928 0 0 1 176.5376-19.968V532.48c-68.096 0.1024-136.192-0.2048-204.288 0.2048zM532.48 532.48v184.8832c59.3408 1.1264 118.7328 7.3216 176.64 19.9168 17.408-66.816 26.624-135.7824 27.4944-204.8512-67.9936 0.256-136.0896 0-204.1344 0.0512z m245.248 0a916.2752 916.2752 0 0 1-28.672 214.4256c47.2576 12.032 92.8768 29.7984 135.8848 52.8896a472.2176 472.2176 0 0 0 97.6384-267.264h-204.8l-0.0512-0.0512z m-451.328 244.2752c19.968 57.2928 46.08 114.2784 88.576 158.464 20.7872 21.76 46.6944 39.5776 76.4928 45.824v-222.72a862.4128 862.4128 0 0 0-165.0688 18.432z m206.08-18.4832l0.0512 222.8736c38.912-8.2944 70.2464-35.7376 94.1568-66.2016 32.512-40.8064 53.8112-89.1904 70.912-138.24-24.832-5.9392-50.2272-8.8064-75.52-12.4928a988.16 988.16 0 0 0-89.6-5.9392z m-366.2848 73.472a467.456 467.456 0 0 0 221.9008 134.5024c-49.1008-49.664-79.7696-114.432-101.4272-180.0192-41.7792 10.496-82.176 25.7536-120.4736 45.4656v0.0512z m571.1872-45.568c-21.8112 65.6384-52.4288 130.56-101.5808 180.224a469.2992 469.2992 0 0 0 221.952-134.6048 553.984 553.984 0 0 0-120.32-45.6192z" />
                  </svg>
                  <span>Tiếng Việt</span>
                  <img src="/images/arrow-down.webp" />
                </span>
              </div>
              <ul className="lang-list hide">
                <li className="lang-item">
                  <a href="https://vi.sinderanimalhealth.com">English</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sq_nav_menu" style={{ display: "none" }}>
            <div className="menuopen">
              <img
                className="fa-bars"
                src="/images/osw-nav-mo.webp"
                width={22}
                height={22}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="menuclose">
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
              >
                <path
                  d="M512 32C251.4285715625 32 32 251.4285715625 32 512s219.4285715625 480 480 480 480-219.4285715625 480-480-219.4285715625-480-480-480z m205.7142853125 617.142856875c20.5714284375 20.5714284375 20.5714284375 48 0 61.714286249999994-20.5714284375 20.5714284375-48 20.5714284375-61.714285312499996 0l-137.142856875-137.1428578125L374.857143125 717.7142853125c-20.5714284375 20.5714284375-48 20.5714284375-68.5714284375 0s-20.5714284375-54.857143125 0-68.5714284375l144-144-137.1428578125-137.142856875c-20.5714284375-13.714285312500001-20.5714284375-41.142856875 0-61.714285312499996 20.5714284375-20.5714284375 48-20.5714284375 61.714286249999994 0l137.142856875 137.142856875 144-144c20.5714284375-20.5714284375 48-20.5714284375 68.5714284375 0 20.5714284375 20.5714284375 20.5714284375 48 0 68.5714284375L580.5714284375 512l137.142856875 137.142856875z"
                  fill="block"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;

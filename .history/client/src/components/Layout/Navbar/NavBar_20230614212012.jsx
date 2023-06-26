import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";
import { supabase } from "../../../config/supabase";

export default function NavBar() {
  const [navHeight, setNavHeight] = useState(`h-[80px]`);
  const [color, setColor] = useState("bg-black/30");
  const [active, setActive] = useState([false, false, false, false, false, false, false]);
  const [categoryType, solutionType] = useQueries({
    queries: [
      {
        queryKey: ["category_type"],
        queryFn: () => supabase.from("category_type").select(),
        select: (res) => res.data,
      },
      {
        queryKey: ["solution_type"],
        queryFn: () => supabase.from("solution_type").select(),
        select: (res) => res.data,
      },
    ],
  });

  const handleUnderline = (id) => {
    setActive(active.map( (e, index) => {
      if (index === id) {
        return true
      } else {
        return false
      }
    }))
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setNavHeight(`h-[60px]`);
        setColor("bg-black/60");
      } else {
        setNavHeight(`h-[80px]`);
        setColor("bg-black/30");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  if (categoryType.isLoading || solutionType.isLoading) {
    return <></>;
  }

  return (
    <>
      <nav className="drawer fixed top-0 left-0 right-0 z-50 text-white font-medium">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        {/* NAVBAR */}
        <div className="drawer-content flex flex-col">
          <div className={`flex w-full navbar justify-between ${color}`}>
            <div className="flex-none xl:hidden">
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
            </div>

            {/* LOGO IMAGE */}
            <div className="px-2 mx-2">
              <img
                src="/images/logo-white.png"
                alt="CÔNG TY CỔ PHẦN SẢN XUẤT VÀ THƯƠNG MẠI THUỐC THÚ Y CNC"
                className={`transition-all duration-[0.4s] ${navHeight} `}
              />
            </div>

            {/* NAVIGATION */}
            <div className="xl:flex hidden">
              <ul className="menu menu-horizontal hover:text-white text-[16px] flex [&>li]:relative [&>li]:w-fit [&>li]:after:content-[''] [&>li]:after:block [&>li]:after:w-0 [&>li]:after:h-[3px] [&>li]:after:bg-white [&>li]:after:mx-auto hover:[&>li]:hover:after:w-full [&>li]:after:transition-all [&>li]:hover:transition-all [&>li]:after:duration-[0.8s] [&>li]:hover:duration-[0.8s] [&>li]:after:absolute [&>li]:after:bottom-[-30%] capitalize [&>li>ul]:absolute [&>li>ul]:shadow-xl [&>li>ul]:text-black [&>li>ul]:top-[150%] [&>li>ul]:bg-white [&>li>ul>li]:pl-6 [&>li>ul>li]:pr-2 [&>li>ul>li]:py-3 [&>li>ul]:flex-col [&>li>ul]:text-sm hover:[&>li>ul>li]:hover:bg-black/20 [&>li>ul>li>a]:block [&>li>ul>li>a]:w-full p-0">
                <li onClick={()=>handleUnderline(0)} className="active[] ? after:animate-still : ``after:animate-still">
                  <Link to="/">
                    <span className="hover:text-white text-white">Trang chủ</span>
                  </Link>
                </li>
                <li onClick={()=>handleUnderline(1)} className="active[] ? after:animate-still : ``group [&>ul]:hidden before:content-[''] before:w-full before:h-full before:bg-transparent before:block before:absolute relative before:top-[100%]">
                  <Link to="/about">
                    <span className="hover:text-white text-white">Giới thiệu</span>
                  </Link>
                  <ul className="pl-0 group-hover:transition-all group-hover:animate-change group-hover:[&>ul]:opacity-100 group-hover:flex">
                    <li>
                      <Link to={`/about`}>Về chúng tôi</Link>
                    </li>
                    <li>
                      <Link to={`/advantage`}>Lợi thế</Link>
                    </li>
                  </ul>
                </li>

                <li onClick={()=>handleUnderline(2)} className="active[] ? after:animate-still : ``group [&>ul]:hidden before:content-[''] before:w-full before:h-full before:bg-transparent before:block before:absolute relative before:top-[100%]">
                  <Link to="/products">
                    <span className="hover:text-white text-white">Sản phẩm</span>
                  </Link>
                  <ul className="pl-0 group-hover:transition-all group-hover:animate-change  group-hover:[&>ul]:opacity-100 group-hover:flex">
                    {categoryType.data.map((type) => (
                      <li key={type.id}>
                        <Link
                          // to={`/products/search?type=${type.category_type}`}
                          to={`/products/search?type=${type.category_type}`}
                        >
                          {type.category_type}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li onClick={()=>handleUnderline(3)} className="active[] ? after:animate-still : ``group  [&>ul]:hidden before:content-[''] before:w-full before:h-full before:bg-transparent before:block before:absolute relative before:top-[100%]">
                  <Link to="/solutions">
                    <span className="hover:text-white text-white">Phòng thí nghiệm CNC</span>
                  </Link>
                  <ul className="pl-0 group-hover:transition-all group-hover:animate-change  group-hover:[&>ul]:opacity-100   group-hover:flex">
                    {solutionType.data.map((type) => (
                      <li key={type.id}>
                        <Link
                          // to={`/solutions/search?type=${type.solution_type}`}
                          to={`/solutions`}
                        >
                          {type.solution_type}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li  onClick={()=>handleUnderline(4)} className="active[] ? after:animate-still : ``group [&>ul]:hidden before:content-[''] before:w-full before:h-full before:bg-transparent before:block before:absolute relative before:top-[100%]">
                  <Link to="/posts">
                    <span className="hover:text-white text-white">Tin tức</span>
                  </Link>
                  <ul className="pl-0 group-hover:transition-all group-hover:animate-change group-hover:[&>ul]:opacity-100 group-hover:flex">
                    <li>
                      <Link to={`/posts/category/company`}>Tin công ty</Link>
                    </li>
                    <li>
                      <Link to={`/posts/category/industry`}>
                        Tin trong ngành
                      </Link>
                    </li>
                  </ul>
                </li>

                <li  onClick={()=>handleUnderline(5)} className="active[] ? after:animate-still : ``group [&>ul]:hidden before:content-[''] before:w-full before:h-full before:bg-transparent before:block before:absolute relative before:top-[100%]">
                  <Link to="/faq">
                    <span className="hover:text-white text-white">
                      Tài nguyên
                    </span>
                  </Link>
                  <ul className="pl-0 group-hover:transition-all group-hover:animate-change group-hover:[&>ul]:opacity-100 group-hover:flex">
                    <li>
                      <Link to={`/faq`}>FAQ</Link>
                    </li>
                    <li>
                      <Link to={`/guide`}>Hướng dẫn</Link>
                    </li>
                  </ul>
                </li>

                <li onClick={()=>handleUnderline(6)} className="active[] ? after:animate-still : ``">
                  <Link to="/contact">
                    <span className="hover:text-white text-white">Liên hệ</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* SEARCH */}
            <div className="px-3">
              <i className="fa-solid fa-magnifying-glass text-white"></i>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="drawer-side ">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

          {/* NAVIGATION */}
          <ul className=" text-white menu p-4 w-80 h-full bg-black/80 text-[16px] flex [&>li]:relative [&>li]:w-full  uppercase [&>li>ul]:absolute [&>li>ul]:shadow-xl  [&>li>ul]:text-black [&>li>ul]:top-[150%] [&>li>ul]:bg-white [&>li>ul>li]:pl-6 [&>li>ul>li]:pr-2 [&>li>ul>li]:py-3  [&>li>ul]:flex-col   [&>li>ul]:text-sm hover:[&>li>ul>li]:hover:bg-black/20 [&>li>ul>li>a]:block [&>li>ul>li>a]:w-full">
            <div className=" border-white border-[2px] flex justify-between my-3">
              <input
                type="text"
                className="p-3 bg-transparent flex-grow focus:outline-none"
                placeholder="Search..."
              />
              <i className="fa-solid fa-magnifying-glass text-white p-3"></i>
            </div>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <div className="group relative">
              <div className="collapse collapse-arrow [&_a]:line-clamp-none ">
                <input
                  className="line-clamp-none absolute right-0"
                  type="checkbox"
                  name="my-accordion-2"
                />
                <Link to="/about" className="collapse-title after:p-2 ">
                  Giới thiệu
                </Link>
                <ul className="collapse-content capitalize">
                  <li>
                    <Link to={`/about`}>Về chúng tôi</Link>
                  </li>
                  <li>
                    <Link to={`/advantage`}>Lợi ích</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="collapse collapse-arrow [&_a]:line-clamp-none ">
                <input
                  className="w-10 h-full  line-clamp-none absolute right-0   "
                  type="checkbox"
                  name="my-accordion-2"
                />
                <Link to="/products" className="collapse-title  after:p-2 ">
                  Sản phẩm
                </Link>
                <ul className="collapse-content capitalize">
                  {categoryType.data.map((type) => (
                    <li key={type.id}>
                      <Link to={`/products/search?type=${type.category_type}`}>
                        {type.category_type}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="collapse collapse-arrow [&_a]:line-clamp-none ">
                <input
                  className="w-10 h-full  line-clamp-none absolute right-0   "
                  type="checkbox"
                  name="my-accordion-2"
                />
                <Link to="/solutions" className="collapse-title  after:p-2 ">
                  Phòng thí nghiệm CNC
                </Link>
                <ul className="collapse-content capitalize">
                  {solutionType.data.map((type) => (
                    <li key={type.id}>
                      {/* <Link to={`/solutions/search?type=${type.solution_type}`}> */}
                      <Link to={`/solutions`}>{type.solution_type}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="collapse collapse-arrow [&_a]:line-clamp-none ">
                <input
                  className="w-10 h-full  line-clamp-none absolute right-0   "
                  type="checkbox"
                  name="my-accordion-2"
                />
                <Link to="/posts" className="collapse-title after:p-2 ">
                  Tin tức
                </Link>
                <ul className="collapse-content capitalize">
                  <li>
                    <Link to={`/poste/category/company`}>Tin tức công ty</Link>
                  </li>
                  <li>
                    <Link to={`/poste/category/industry`}>Tin trong ngành</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="collapse collapse-arrow [&_a]:line-clamp-none ">
                <input
                  className="w-10 h-full  line-clamp-none absolute right-0   "
                  type="checkbox"
                  name="my-accordion-2"
                />
                <Link to="/faq" className="collapse-title after:p-2 ">
                  Tài nguyên
                </Link>
                <ul className="collapse-content capitalize">
                  <li>
                    <Link to={`/faq`}>FAQ</Link>
                  </li>
                  <li>
                    <Link to={`/guide`}>Hướng dẫn</Link>
                  </li>
                </ul>
              </div>
            </div>

            <li>
              <Link to="/contact">Liên hệ</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

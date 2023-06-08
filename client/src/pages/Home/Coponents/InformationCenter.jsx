import React from "react";

const NewsItem = () => {
  return (
    <div
      className="group md:max-w-[376px] md:pt-10 "
      aria-describedby="slick-slide-control30"
      aria-hidden="false"
    >
      {/* image */}
      <div className="overflow-hidden hidden md:block">
        <div className="group-hover:scale-110 transition-all ease-linear duration-360">
          <a
            href="/New-Research-Found-Launched-by-SINDER-Lanzhou-University-and-Veterinary-Institute-of-Chinese-Academy-of-Agricultural-id42006037.html"
            title="New Research Found Launched by SINDER, Lanzhou University and Veterinary Institute of Chinese Academy of Agricultural."
          >
            <picture>
              <source
                media="(min-width: 450px)"
                srcSet="https://images.unsplash.com/photo-1686007579079-550a74a0decb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
              />
              <source
                media="(max-width: 449px)"
                srcSet="https://images.unsplash.com/photo-1686007579079-550a74a0decb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
              />
              <img
                className="headlines-content-img ArticlePicList_ItemImg"
                src="https://images.unsplash.com/photo-1686007579079-550a74a0decb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                alt="1.jpeg"
              />
            </picture>
          </a>
        </div>
      </div>
      {/* Content */}
      <div className="">
        <h5 className="mt-[40px] mb-[14px]">
          <a
            className="text-gray-800 group-hover:text-blue-800 line-clamp-1"
            href="/New-Research-Found-Launched-by-SINDER-Lanzhou-University-and-Veterinary-Institute-of-Chinese-Academy-of-Agricultural-id42006037.html"
            title="New Research Found Launched by SINDER, Lanzhou University and Veterinary Institute of Chinese Academy of Agricultural."
          >
            New Research Found Launched by SINDER, Lanzhou University and
            Veterinary Institute of Chinese Academy of Agricultural.
          </a>
        </h5>
        <div className="timeTwo md:hidden">2023-05-09</div>
        <p className="line-clamp-2 text-gray-500 text-xs leading-6 mb-[30px]">
          In order to give full play to the multiple advantages of research
          institutes, universities and enterprises, promote the efficient
          transformation of scientific research results and cultivate innovative
          talents with excellent professional abilities, on April 13 and 14,
          Zheng Haixue, Director of Lanzhou Veterinary Research Institute,
          Chinese Academy of Agricultural Sciences and Dean of School of Animal
          Medicine and Biosafety, Lanzhou University, Wang Chengbin, Secretary
          of Party Committee and Vice Dean of School of Animal Medicine and
          Biosafety, Lanzhou University, Zhang Keshan, Professor of School of
          Animal Medicine and Biosafety, Lanzhou University Professor Zhang
          Keshan, College of Animal Medicine and Biosafety, Lanzhou University;
          Executive Deputy Director, Research Center for Pathogen Biology of
          Livestock Diseases, Lanzhou Veterinary Research Institute, Chinese
          Academy of Agricultural Sciences came to SINDER for visit and launch a
          new found for reseach cooperation.
        </p>
        <div className="hidden md:block w-full h-[1.2px] bg-transparent transition-all duration-360 ease-in group-hover:bg-blue-900" />
        <div className="hidden md:flex border-gray-200 text-gray-600 text-xl leading-[70px] justify-between items-center group-hover:text-blue-900 border-t">
          2023-05-09
          <div className="hidden text-blue-900 group-hover:inline leading-4 mr-5">
            <a href="">
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
        <hr className="md:hidden" />
      </div>
    </div>
  );
};

const InformationCenter = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-10">
      <div className="py-5 px-[15px]">
        {/* Heading */}
        <div className="flex justify-between items-center pr-[5px] pl-[15px]">
          <div className="text-gray-800 text-4xl leading-[51px] font-[Montserrat] font-bold text-left">
            <h2>Information Center</h2>
          </div>

          <div className="px-[5px] hidden md:block">
            <ul className="flex gap-[10px]">
              <li className="bg-blue-900 border text-white text-xs leading-7 text-left px-[22px] rounded-[30px]">
                <a
                  className="btnGroup-link"
                  title="Company News"
                  target
                  href="/Company-News-ic247188.html"
                >
                  Company News
                </a>
              </li>
              <li className="border-gray-500 border text-gray-600 hover:bg-blue-900 hover:text-white transition-all duration-360 ease-linear text-xs leading-7 text-left px-[22px] rounded-[30px]">
                <a
                  className="btnGroup-link"
                  title="Industry News"
                  target
                  href="/Industry-News-ic257188.html"
                >
                  Industry News
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* News list */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </div>
          {/* Navigation */}
          {/* <ul className="slick-dots">
                <li className="slick-active" role="presentation">
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control30"
                    aria-controls="slick-slide30"
                    aria-label="1 of 1"
                    tabIndex={0}
                    aria-selected="true"
                  >
                    1
                  </button>
                </li>
              </ul> */}
          <ol className="flex justify-center gap-1 text-xs font-medium mt-[15px]">
            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                1
              </a>
            </li>
            <li className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
              2
            </li>
            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default InformationCenter;

import { useState } from "react";

const NewsItem = () => {
  return (
    <dd className="p-[10px] text-[16px] text-gray-500 text-left w-full">
      <div className="group hover:bg-blue-900 leading-7 mb-5 p-2 transition-all duration-500 ease-in-out flex items-center">
        {/* Time */}
        <div className="date w-[100px] flex-shrink-0 text-gray-800 text-center flex flex-col justify-center leading-7 gap-1 group-hover:text-white">
          <div className="text-2xl leading-11">2023</div>
          <div className="text-sm leading-6 uppercase">DATE</div>
          <div className="text-[18px] leading-8">
            <span className="month text-4xl leading-15">05</span>- 09
          </div>
        </div>

        {/* Thumbnail */}
        <a
          className="block flex-shrink-0 group-hover:text-white"
          href="/New-Research-Found-Launched-by-SINDER-Lanzhou-University-and-Veterinary-Institute-of-Chinese-Academy-of-Agricultural-id42006037.html"
        >
          <img
            className="w-[388px] h-[226px] object-cover block"
            alt="New Research Found Launched by SINDER, Lanzhou University and Veterinary Institute of Chinese Academy of Agricultural."
            src="https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          />
        </a>

        {/* Summary */}
        <div className="flex-grow pl-[15px] pr-3 pt-[18px] self-stretch h-full">
          <div className="line-clamp-1 text-lg text-gray-900 leading-8 text-left mb-3 group-hover:text-white">
            <a href="/New-Research-Found-Launched-by-SINDER-Lanzhou-University-and-Veterinary-Institute-of-Chinese-Academy-of-Agricultural-id42006037.html">
              New Research Found Launched by SINDER, Lanzhou University and
              Veterinary Institute of Chinese Academy of Agricultural.
            </a>
          </div>

          <div className="line-clamp-3 mb-[25px] text-gray-500 text-sm leading-6 group-hover:text-white">
            In order to give full play to the multiple advantages of research
            institutes, universities and enterprises, promote the efficient
            transformation of scientific research results and cultivate
            innovative talents with excellent professional abilities, on April
            13 and 14, Zheng Haixue, Director of Lanzhou Veterinary Research
            Institute, Chinese Academy of Agricultural Sciences and Dean of
            School of Animal Medicine and Biosafety, Lanzhou University, Wang
            Chengbin, Secretary of Party Committee and Vice Dean of School of
            Animal Medicine and Biosafety, Lanzhou University, Zhang Keshan,
            Professor of School of Animal Medicine and Biosafety, Lanzhou
            University Professor Zhang Keshan, College of Animal Medicine and
            Biosafety, Lanzhou University; Executive Deputy Director, Research
            Center for Pathogen Biology of Livestock Diseases, Lanzhou
            Veterinary Research Institute, Chinese Academy of Agricultural
            Sciences came to SINDER for visit and launch a new found for reseach
            cooperation.
          </div>
          <a
            className="border-gray-400 rounded border-solid border font-[FuturaLTMedium] text-gray-900 group-hover:text-white inline-block text-lg leading-7 text-center py-[5px] px-[15px]"
            href="/New-Research-Found-Launched-by-SINDER-Lanzhou-University-and-Veterinary-Institute-of-Chinese-Academy-of-Agricultural-id42006037.html"
          >
            Read More
          </a>
        </div>
      </div>
    </dd>
  );
};

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-[1200px] mx-auto py-10">
      <div className="flex-col lg:max-w-[990px] xl:max-w-[1200px] mx-auto px-[10px]">
        {/* News category */}
        <ul className="leading-6 text-center flex justify-center gap-[10px]">
          <li
            className={`inline-block ${
              selectedCategory === "company"
                ? "text-white bg-blue-900"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            <a
              href="#"
              className="table-cell w-[230px] h-[44px] border-solid border-0 rounded-none align-middle text-center transition-all duration-300 ease-in-out hover:text-white hover:bg-blue-900"
              onClick={() => handleCategoryClick("company")}
            >
              Company News
            </a>
          </li>
          <li
            className={`inline-block ${
              selectedCategory === "industry"
                ? "text-white bg-blue-900"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            <a
              href="#"
              className="table-cell w-[230px] h-[44px] border-solid border-0 rounded-none align-middle text-center transition-all duration-300 ease-in-out hover:text-white hover:bg-blue-900"
              onClick={() => handleCategoryClick("industry")}
            >
              Industry News
            </a>
          </li>
        </ul>
        <div className="resizee h-5" />

        {/* News List */}
        <div className="">
          <dl className="">
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </dl>
        </div>
      </div>
    </div>
  );
};

export default News;

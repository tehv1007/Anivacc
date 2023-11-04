import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const timelineData = [
  {
    time: "05.2013",
    event:
      "In April 2005, Sichuan Huaxi Animal Pharmaceutical Co., Ltd. was successfully acquired and entered the animal health insurance market.",
  },
  {
    time: "06.2014",
    event:
      "In June 2005, a Sino foreign joint venture was established to open overseas international cooperation on animal insurance products.",
  },
  {
    time: "07.2015",
    event:
      "In September 2007, the shareholding system reform was completed and Shandong Sinder Technology Co., Ltd. was established. The corporate governance structure was more standardized.",
  },
  {
    time: "08.2016",
    event:
      "In February 2010, the transfer factor workshop passed the GMP acceptance.",
  },
  {
    time: "09.2017",
    event:
      " In February 2013, the inactivated recombinant avian influenza virus vaccine produced by suspension culture process was successfully marketed.",
  },
  {
    time: "10.2018",
    event: `In May 2014, the "Sinder Technology" WeChat public platform was officially launched.`,
  },
  {
    time: "11.2019",
    event:
      "In October 2014, Shandong Sinder Animal Vaccine Co., Ltd. was recognized as a high-tech enterprise.",
  },
  {
    time: "12.2020",
    event:
      "In August 2015, Qingdao R&D Base was built in Laoshan District, Qingdao, covering an area of 25,000 square meters, with a testing center, research institute and R&D center.",
  },
  {
    time: "01.2021",
    event:
      "In April 2005, Sichuan Huaxi Animal Pharmaceutical Co., Ltd. was successfully acquired and entered the animal health insurance market.",
  },
  {
    time: "02.2022",
    event:
      "In April 2005, Sichuan Huaxi Animal Pharmaceutical Co., Ltd. was successfully acquired and entered the animal health insurance market.",
  },
];

const TimelineItem = ({ item, handleTimeClick, activeTime }) => {
  return (
    <div className="group">
      <div
        className="w-[120px] flex self-center items-center justify-center content-center flex-col"
        onClick={() => handleTimeClick(item.time)}
      >
        <div className="cursor-pointer border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
          {/* inside centered point */}
          <div
            className={`h-2 w-2 rounded-full ${
              activeTime === item.time ? "bg-[#003d79]" : ""
            }`}
          ></div>
        </div>
        <h3
          className={`group-hover:text-[#003d79] mb-10 ${
            activeTime === item.time ? "text-[#003d79]" : ""
          }`}
        >
          {item.time}
        </h3>
      </div>
    </div>
  );
};

const EventDisplay = ({ item }) => {
  return (
    <div className="h-[212px] lg:h-[156px] min-w-[1024px]:h-[128px]">
      <p>{item.event}</p>
    </div>
  );
};

export default function History() {
  const [activeTime, setActiveTime] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    setActiveTime(timelineData[0].time); // Lựa chọn sự kiện đầu tiên
  }, []);

  const handleTimeClick = (time) => {
    setActiveTime(time);
  };

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="text-[34px] font-montserrat text-[#333333] font-bold text-center mb-11 uppercase">
        {t("company_history")}
      </h1>
      <div className="">
        <Slider {...settings}>
          {timelineData.map((item, index) => (
            <div key={index}>
              <TimelineItem
                item={item}
                handleTimeClick={handleTimeClick}
                activeTime={activeTime}
              />
            </div>
          ))}
        </Slider>
        {activeTime && (
          <EventDisplay
            item={timelineData.find((item) => item.time === activeTime)}
          />
        )}
      </div>
    </div>
  );
}

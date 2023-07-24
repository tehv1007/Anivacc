import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

const Time = ({ time }) => {
  return (
    <div className="">
      <div className="w-[120px] flex self-center items-center justify-center content-center flex-col">
        <div className="cursor-pointer border border-[#003d79] border-solid rounded-full flex items-center justify-center w-[26px] h-[26px]">
          <div className="h-2 w-2 bg-[#003d79] rounded-full"></div>
        </div>
        <h3 className="hover:text-[#003d79] mb-10">{time}</h3>
      </div>
    </div>
  );
};

export default function History() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);

  const settings = {
    asNavFor: nav1,
    ref: slider2Ref,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    // initialSlide: 0,
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
          // initialSlide: 1,
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
      <h1 className="text-[34px] font-montserrat text-[#333333] font-bold text-center mb-11 capitalize">
        {t("company_history")}
      </h1>
      <Slider {...settings}>
        <Time time="05.2014" />
        <Time time="05.2015" />
        <Time time="05.2016" />
        <Time time="05.2017" />
        <Time time="05.2018" />
        <Time time="05.2019" />
        <Time time="05.2020" />
        <Time time="05.2021" />
        <Time time="05.2022" />
        <Time time="05.2023" />
        <Time time="06.2023" />
        <Time time="07.2023" />
      </Slider>
      <Slider asNavFor={nav2} ref={slider1Ref}>
        <div>
          <p>
            In April 2005, Sichuan Huaxi Animal Pharmaceutical Co., Ltd. was
            successfully acquired and entered the animal health insurance
            market.
          </p>
        </div>
        <div>
          <p>
            In June 2005, a Sino foreign joint venture was established to open
            overseas international cooperation on animal insurance products.
          </p>
        </div>
        <div>
          <p>
            In September 2007, the shareholding system reform was completed and
            Shandong Sinder Technology Co., Ltd. was established. The corporate
            governance structure was more standardized.
          </p>
        </div>
        <div>
          <p>
            In February 2010, the transfer factor workshop passed the GMP
            acceptance.
          </p>
        </div>
        <div>
          <p>
            In February 2013, the inactivated recombinant avian influenza virus
            vaccine produced by suspension culture process was successfully
            marketed.
          </p>
        </div>
        <div>
          <p>
            In May 2014, the "Sinder Technology" WeChat public platform was
            officially launched.
          </p>
        </div>
        <div>
          <p>
            In October 2014, Shandong Sinder Animal Vaccine Co., Ltd. was
            recognized as a high-tech enterprise.
          </p>
        </div>
        <div>
          <p>
            In August 2015, Qingdao R&D Base was built in Laoshan District,
            Qingdao, covering an area of 25,000 square meters, with a testing
            center, research institute and R&D center.
          </p>
        </div>
      </Slider>
    </div>
  );
}

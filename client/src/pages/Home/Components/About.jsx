import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CounterBlock = ({ title, count, border, type = "+" }) => {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayCount((prevCount) => {
        if (prevCount < count) {
          return prevCount + 1;
        }
        return prevCount;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className={`w-1/2 ${border} border-gray-400`}>
      <div className="py-6">
        <div className="text-gray-700 leading-5 text-center">
          <div className="text-blue-900 text-5xl leading-[62px]">
            <span className="leading-[72.8px]">{displayCount}</span>
            <span>{type}</span>
            {/* <span className={`${displayCount == count ? "hidden" : ""}`}>
              +
            </span> */}
          </div>
          <div className="text-gray-700 leading-5 text-center ">{title}</div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1440px] mx-auto px-[10px] md:px-5 xl:px-10 mt-10 mb-10">
      {/* video */}
      <div className="max-w-[1360px] mb-10 md:mb-0">
        <div className="row">
          <div className="videoBox" id="video_box">
            <video
              className="w-full h-full"
              x-webkit-airplay="allow"
              x5-video-player-type="h5-page"
              t7-video-player-type="inline"
              x5-video-player-fullscreen="true"
              playsInline="isiPhoneShowPlaysinline"
              webkit-playsinline="isiPhoneShowPlaysinline"
              controls="controls"
              muted="muted"
              loop="loop"
              data-loaded="true"
              autoPlay={true}
            >
              <source
                src="https://laptrinhlythu.com/wp-content/uploads/2023/07/AnivacC.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="flex flex-col lg:flex-row mt-[10px]">
        <div className="lg:w-7/12 w-full">
          <div>
            {/* Heading */}
            <div className="pl-5 pb-5">
              <div className="text-gray-800 text-2xl md:text-4xl md:leading-[51px] font-[Montserrat] font-bold text-left">
                <h2>
                  <strong>
                    About <span className="text-blue-900">AnivacC</span>
                  </strong>
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="px-5">
              <div className="text-gray-700 text-sm font-light leading-6 text-left">
                <p className="pb-[10px]">{t("home_about1")}</p>
                <p>{t("home_about2")}</p>
              </div>
            </div>

            {/* Learn more */}
            <div className="pt-5 pl-5">
              <div className="text-gray-700 leading-7 text-left learn-more">
                <div className="text-blue-900 inline-block text-left leading-5">
                  <Link to="/about" className="h-20 leading-20 relative">
                    Learn More &gt;&gt;
                    <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-blue-900 transition-all duration-300 transform scale-x-0"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company size */}
        <div className="lg:w-5/12 w-full mt-[22px]">
          {/* block 1 */}
          <div className="row flex">
            <CounterBlock
              title={t("home_count_b1")}
              count={85}
              border={`border-r border-b`}
            />
            <CounterBlock
              title={t("home_count_b2")}
              count={108}
              border={`border-b`}
            />
          </div>

          {/* block 2 */}
          <div className="row flex">
            <CounterBlock
              title={t("home_count_b3")}
              count={30}
              border="border-r"
            />
            <CounterBlock title={t("home_count_b4")} count={100} type="%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";

const CounterBlock = ({ title, count, border }) => {
  return (
    <div className={`w-1/2 ${border} border-gray-400`}>
      <div className="py-6">
        <div className="text-gray-700 leading-5 text-center">
          <div className="text-blue-900 text-5xl leading-[62px]">
            <span className="leading-[72.8px]">{count}</span>
            <span className="plus hide">+</span>
          </div>
          <div className="text-gray-700 leading-5 text-center ">{title}</div>
        </div>
      </div>
    </div>
  );
};
const About = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-10 md:px-20 relative mt-10 mb-10">
      {/* video */}
      {/* <div className="col-md-12 col-md-first col-md-last mb-10 md:mb-0">
        <div className="row flex">
          <div className="videoBox" id="video_box">
            <video
              className="video-js vjs-big-play-centered 1 lozad absolute top-0 left-0 w-full h-full"
              poster="//iqrorwxhnnojlp5p-static.micyjz.com/cloud/liBprKqqllSRrjjiiqkjjo/video.jpg"
              data-poster="//rororwxhnnojlp5p-static.micyjz.com/cloud/liBprKqqllSRrjjiiqkjjo/video.jpg"
              x-webkit-airplay="allow"
              x5-video-player-type="h5-page"
              t7-video-player-type="inline"
              x5-video-player-fullscreen="true"
              playsInline="isiPhoneShowPlaysinline"
              webkit-playsinline="isiPhoneShowPlaysinline"
              controls="controls"
              muted="muted"
              loop="loop"
              __idm_id__={3457025}
              data-loaded="true"
            >
              <source
                src="https://video-c.ldycdn.com/jjBkrKqqlli-jiirKBqrlqRliSqorpmponknooi-abf598b6723d49469eeb098a9a721d17.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div> */}

      {/* About */}
      <div className="row flex">
        <div className="lg:w-7/12">
          <div>
            {/* Heading */}
            <div className="pl-5 pb-5">
              <div className="text-gray-800 text-4xl leading-[51px] font-[Montserrat] font-bold text-left">
                <h2>
                  <strong>About SINDER</strong>
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="px-5">
              <div className="text-gray-700 text-sm font-light leading-6 text-left">
                <div className=" sitewidget-bd ">
                  Shandong Sinder Technology Co., Ltd is a China animal health
                  joint venture company with SUMITOMO JAPAN that develops,
                  <a href="https://www.sinderanimalhealth.com/our-story.html">
                    <span style={{ color: "#003d79" }}>
                      <strong>manufactures</strong>
                    </span>
                  </a>
                  and markets a broad range of
                  <a href="https://www.sinderanimalhealth.com/products.html">
                    <span style={{ color: "#003d79" }}>
                      <strong>veterinary medicines and services</strong>
                    </span>
                  </a>
                  .
                  <div>
                    <br />
                    <span style={{ color: "#003d79" }}>
                      <strong>
                        <i className="fa"></i>
                      </strong>
                    </span>
                    &nbsp;Based on more than 20 years of experience, we offer
                    quality medicines, vaccines and feed additives, complemented
                    by diagnostic products to support customer and their value.
                    <br />
                    <span style={{ color: "#003d79" }}>
                      <strong>
                        <i className="fa"></i>
                      </strong>
                    </span>
                    &nbsp;We are a fast-growing, international, reliable and
                    diversified company with a strong experience in the biggest
                    livestock market in the world.
                    <br />
                    <span style={{ color: "#003d79" }}>
                      <strong>
                        <i className="fa"></i>
                      </strong>
                    </span>
                    &nbsp;Our Goal is The Relentless Pursuit of Increasing
                    Customer Value, understanding and addressing all the feeding
                    challenges of the animals.
                  </div>
                </div>
              </div>
            </div>

            {/* Learn more */}
            <div className="pt-5 pl-5">
              <div className="text-gray-700 leading-7 text-left learn-more">
                <div className="bg-white text-blue-900 inline-block text-left leading-5">
                  <a
                    href="/our-story.html"
                    className="h-20 leading-20 relative"
                  >
                    Learn More &gt;&gt;
                    <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-blue-900 transition-all duration-300 transform scale-x-0"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company size */}
        <div className="lg:w-5/12 mt-[22px]">
          {/* block 1 */}
          <div className="row flex">
            <CounterBlock
              title="GMP Production Lines"
              count={35}
              border={`border-r border-b`}
            />
            <CounterBlock
              title="CNAS Laboratory"
              count={3}
              border={`border-b`}
            />
          </div>

          {/* block 2 */}
          <div className="row flex">
            <CounterBlock
              title="GMP Production Lines"
              count={35}
              border="border-r"
            />
            <CounterBlock title="CNAS Laboratory" count={3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

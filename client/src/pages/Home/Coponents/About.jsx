import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CounterBlock = ({ title, count, border }) => {
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
            <span className={`${displayCount == count ? "hidden" : ""}`}>
              +
            </span>
          </div>
          <div className="text-gray-700 leading-5 text-center ">{title}</div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-[10px] md:px-5 xl:px-10 mt-10 mb-10">
      {/* video */}
      <div className="max-w-[1360px] mb-10 md:mb-0">
        <div className="row flex">
          <div className="videoBox" id="video_box">
            <video
              className=" w-full h-full"
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
                src="https://rxtqfewjikyslunondlw.supabase.co/storage/v1/object/public/anivacc/video/jjBkrKqqlli-jiirKBqrlqRliSqorpmponknooi-abf598b6723d49469eeb098a9a721d17.mp4?t=2023-06-10T16%3A25%3A32.184Z"
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
                <p className="pb-[10px]">
                  Công ty cổ phần sản xuất và thương mại thuốc thú y CNC được
                  thành lập từ năm 2014 với 4 thành viên sáng lập là những
                  chuyên gia hàng đầu trong lĩnh vực nghiên cứu và sản xuất vắc
                  xin thú y của Việt Nam. Giai đoạn mới thành lập, công ty tập
                  trung nghiên cứu và sản xuất các chế phẩm sinh học, kháng thể
                  dùng trong thú y như CNC Pig01, CNC Dog01, CNC AntiGUM, CNC
                  AntiDHV, CNC AntiE.coli,…và các sản phẩm dung môi pha vắc xin
                  như CNC Diluent và CNC Diluent Blue. Sau gần 10 năm thành lập,
                  công ty đã xây dựng được thương hiệu và tạo ra nhiều sản phẩm
                  chất lượng và có uy tín được khách hàng tin dùng, đặc biệt là
                  các sản phẩm dung môi pha vắc xin.
                </p>
                <p>
                  Tiếp tục nghiên cứu và phát triển các sản phẩm vắc xin thú y,
                  tháng 5/2019 Hội đồng quản trị công ty đã quyết định mở rộng
                  công ty và triển khai xây dựng một nhà máy sản xuất vắc xin
                  thú y đạt tiêu chuẩn GMP-WHO tại lô 28, khu công nghiệp Quang
                  Minh, thị trấn Quang Minh, Mê Linh, Hà Nội. Công ty đã triển
                  khai xây dựng một dây chuyền sản xuất vắc xin virus trên tế
                  bào đạt chuẩn GMP-WHO,, đầu tư các thiết bị tự động với một
                  dây chuyền sản xuất tự động đạt tiêu chuẩn WHO như máy rửa
                  chai tự động, máy chia liều tự động, máy viền nút nhôm tự
                  động, máy dán nhãn, hoàn thiện tự động và máy đông khô vắc
                  xin, đầu tư cho cán bộ kỹ thuật sang Châu âu học tập công nghệ
                  mới.{" "}
                </p>
              </div>
            </div>

            {/* Learn more */}
            <div className="pt-5 pl-5">
              <div className="text-gray-700 leading-7 text-left learn-more">
                <div className="bg-white text-blue-900 inline-block text-left leading-5">
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
              title="Vaccine phòng bệnh"
              count={10}
              border={`border-r border-b`}
            />
            <CounterBlock title="Kháng thể" count={5} border={`border-b`} />
          </div>

          {/* block 2 */}
          <div className="row flex">
            <CounterBlock
              title="Thuốc sát trùng và TABS"
              count={10}
              border="border-r"
            />
            <CounterBlock title="Dung môi pha vaccine" count={2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

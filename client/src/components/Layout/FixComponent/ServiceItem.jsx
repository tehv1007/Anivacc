import { useState } from "react";

const ServiceItem = ({
  icon,
  content,
  href,
  onClick,
  type,
  target = "none",
  position,
}) => {
  const [hovered, setHovered] = useState(false);

  function handleMouseEnter() {
    setHovered(true);
  }
  function handleMouseLeave() {
    setHovered(false);
  }

  const handleClick = () => {
    onClick();
  };

  return (
    <li className="group blocks-items w-[50px] max-[900px]:w-1/3 h-[50px] relative mb-0 whitespace-nowrap bg-gray-700/30">
      {type === "button" ? (
        <button
          className="z-10 block w-full h-full text-center text-white box-border border-b-0 overflow-hidden max-[900px]:flex items-center justify-center group-hover:bg-blue-900 lg:group-hover:rounded-tr-[30px] lg:group-hover:rounded-br-[30px]"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative p-0 rounded-none w-32 h-[50px] border-0 transition-all duration-200 bg-transparent max-[900px]:flex items-center justify-center">
            <div className="w-[50px] h-[50px] p-0 rounded-none relative float-left border-0 text-white bg-transparent">
              <i
                className={`${icon} inline bg-[0 -56px] text-2xl leading-[50px] bg-none bg-no-repeat`}
              ></i>
            </div>
          </div>
          {hovered && (
            <div className="min-[900px]:hidden absolute bottom-[50px] bg-[#003d79] w-screen rounded-full h-[50px] flex items-center justify-center mx-[10px]">
              <p className="text-base cursor-pointer">{content}</p>
            </div>
          )}
        </button>
      ) : (
        <a
          className="z-10 block w-full h-full text-center text-white box-border border-b-0 overflow-hidden max-[900px]:flex items-center justify-center group-hover:bg-blue-900 lg:group-hover:rounded-tr-[30px] lg:group-hover:rounded-br-[30px]"
          rel="nofollow"
          target={target}
          href={href}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative p-0 rounded-none w-32 h-[50px] border-0 transition-all duration-200 bg-transparent max-[900px]:flex items-center justify-center">
            <div className="w-[50px] h-[50px] p-0 rounded-none relative float-left border-0 text-white bg-transparent">
              <i
                className={`${icon} inline bg-[0 -56px] text-2xl leading-[50px] bg-none bg-no-repeat`}
              ></i>
            </div>
          </div>
          {hovered && (
            <div
              className={`min-[900px]:hidden absolute bottom-[50px] bg-[#003d79] w-screen rounded-full h-[50px] flex items-center text-center center justify-center ${position}`}
            >
              <p className="text-base">{content}</p>
            </div>
          )}
        </a>
      )}

      <ul className="blocks-tips overflow-hidden w-0 absolute left-auto top-0 p-0 h-auto right-[50px] z-[1] transition-all duration-200 transform translate-x-0 min-h-[50px] rounded-tl-[30px] rounded-bl-[30px] max-[900px]:hidden">
        <li className="w-auto h-auto px-[15px]">
          {type === "button" ? (
            <button
              className="block text-center text-white text-sm min-w-[30px] min-h-[22px] leading-[50px]"
              onClick={handleClick}
            >
              {content}
            </button>
          ) : (
            <a
              className="block text-center text-white text-sm min-w-[30px] min-h-[22px] leading-[50px]"
              rel="nofollow"
              target={target}
              href={href}
            >
              {content}
            </a>
          )}
        </li>
      </ul>
    </li>
  );
};

export default ServiceItem;

const ServiceItem = ({
  icon,
  content,
  href,
  onClick,
  type,
  target = "none",
}) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <li className="blocks-items w-[50px] h-[50px] relative z-99 mb-0 whitespace-nowrap hover:bg-blue-900">
      {type === "button" ? (
        <button
          className="block w-full h-full text-center text-white box-border border-b-0 bg-gray-400 overflow-hidden"
          onClick={handleClick}
        >
          <div className="relative p-0 rounded-none w-32 h-[50px] border-0 transition-all duration-200 bg-transparent">
            <div className="ico_f ico_all w-[50px] h-[50px] p-0 rounded-none relative float-left border-0 text-white bg-transparent">
              <i
                className={`${icon} inline bg-[0 -56px] text-2xl leading-[50px] bg-none bg-no-repeat`}
              ></i>
            </div>
          </div>
        </button>
      ) : (
        <a
          className="block w-full h-full text-center text-white box-border border-b-0 bg-gray-400 overflow-hidden"
          rel="nofollow"
          target={target}
          href={href}
        >
          <div className="relative p-0 rounded-none w-32 h-[50px] border-0 transition-all duration-200 bg-transparent">
            <div className="ico_f ico_all w-[50px] h-[50px] p-0 rounded-none relative float-left border-0 text-white bg-transparent">
              <i
                className={`${icon} inline bg-[0 -56px] text-2xl leading-[50px] bg-none bg-no-repeat`}
              ></i>
            </div>
          </div>
        </a>
      )}

      <ul
        className="blocks-tips overflow-hidden rounded-none w-0 absolute left-auto top-0 p-0 h-auto right-[50px] z-1 transition-all duration-200 transform translate-x-0 min-h-[50px] rounded-tl-[30px] rounded-bl-[30px]"
        data-wt="155px"
      >
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
      <i className="fa fa-caret-right triangleMb lg:hidden" />
    </li>
  );
};

export default ServiceItem;

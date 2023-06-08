import { memo } from "react";
import { NavLink } from "react-router-dom";

const SubHeading = ({ content, to, hrefText }) => {
  return (
    <p className="text-[#808191] text-[14px]">
      {content}{" "}
      <span className="text-[#1DC071] font-medium underline">
        <NavLink to={to}>{hrefText}</NavLink>
      </span>
    </p>
  );
};

export default memo(SubHeading);

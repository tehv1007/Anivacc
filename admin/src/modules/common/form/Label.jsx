import { memo } from "react";

const Label = ({ text, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-[#808191] font-medium text-[14px] lg:text-md"
    >
      {text}
    </label>
  );
};

export default memo(Label);

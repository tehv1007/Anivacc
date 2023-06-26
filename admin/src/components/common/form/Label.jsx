import { memo } from "react";

const Label = ({ text, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-[#808191] font-medium text-sm lg:text-md dark:text-white"
    >
      {text}
    </label>
  );
};

export default memo(Label);

import { memo } from "react";

const Label = ({ text, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-gray-700 font-medium text-sm lg:text-md dark:text-white"
    >
      {text}
    </label>
  );
};

export default memo(Label);

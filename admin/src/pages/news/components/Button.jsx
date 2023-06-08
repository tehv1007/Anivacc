import classNames from "classnames";
import { memo } from "react";

const Button = ({ type, children, disabled, className = "", onClick }) => {
  return (
    <button
      className={classNames(
        "text-white font-semibold text-[16px] w-full py-4 bg-[#1DC071] rounded-lg shadow-md hover:opacity-75 active:scale-90 duration-300",
        className
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);

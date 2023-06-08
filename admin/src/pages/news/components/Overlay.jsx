import { memo } from "react";
import classNames from "classnames";

const Overlay = ({ toggle, setToggle = () => {}, className }) => {
  return (
    <div
      className={classNames(
        "fixed inset-0 bg-black bg-opacity-70 opacity-0 invisible duration-200 lg:hidden",
        toggle && "!opacity-70 !visible",
        className
      )}
      onClick={() => setToggle(false)}
    />
  );
};

export default memo(Overlay);

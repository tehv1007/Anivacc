import { memo } from "react";
import classNames from "classnames";

const Container = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "max-w-[1024px] w-full mx-auto pl-[20px] pr-[20px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default memo(Container);

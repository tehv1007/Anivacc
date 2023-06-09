import React from "react";
import { memo } from "react";

const Heading = ({ content, children }) => {
  return (
    <div className="flex flex-col gap-y-[5px] lg:gap-y-[10px] text-center">
      <h1 className="font-semibold text-[18px] lg:text-[20px] text-white">
        {content}
      </h1>
      {children}
    </div>
  );
};

export default memo(Heading);

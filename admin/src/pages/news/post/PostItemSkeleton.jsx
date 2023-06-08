import { memo } from "react";
import LoadingSkeleton from "../../../components/common/loading/LoadingSkeleton";

const PostItemSkeleton = () => {
  return (
    <div className="block h-full duration-100 shadow-2xl select-none hover:opacity-60">
      <div className="bg-[#1C1C24] rounded-lg h-full flex flex-col">
        <div className="h-[250px] w-full rounded-t-lg overflow-hidden">
          <LoadingSkeleton height="100%" radius="8px" />
        </div>
        <div className="flex flex-col flex-1 px-5 py-4">
          <div className="flex flex-col gap-y-2">
            <LoadingSkeleton radius="8px" height="24px" />
            <LoadingSkeleton radius="8px" height="12px" />
          </div>

          <div className="mt-4">
            <LoadingSkeleton radius="8px" height="12px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PostItemSkeleton);

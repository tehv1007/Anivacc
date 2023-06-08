import { memo } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="p-6 lg-[40px] relative w-full h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default memo(AuthLayout);

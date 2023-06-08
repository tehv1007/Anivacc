import { useContext } from "react";
import { AuthContext } from "./Auth";
import Heading from "../news/components/Heading";

const Login = () => {
  const { onLogin } = useContext(AuthContext);

  return (
    <div className="max-w-[556px] flex flex-col items-center justify-center w-full shadow-md px-[30px] lg:px-[50px] py-[20px] lg:py-[63px] bg-[#1C1C24] rounded-lg">
      <Heading content={"Đăng Nhập"}></Heading>
      <button
        onClick={onLogin}
        className="px-4 py-2 mt-5 border flex gap-2 border-slate-200 rounded-lg text-slate-500 hover:border-slate-400 hover:text-slate-200 hover:shadow transition duration-150"
      >
        <img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Login with Google</span>
      </button>
    </div>
  );
};

export default Login;

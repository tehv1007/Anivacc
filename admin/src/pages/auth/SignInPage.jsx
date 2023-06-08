import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from "../news/components/Heading";
import Field from "../common/form/Field";
import Button from "../news/components/Button";
import { useAuth } from "./supabase-context";
import useSupabaseAuth from "../../hooks/useSupabaseAuth";
import SubHeading from "../news/components/SubHeading";
import { schema } from "../../config/schema";

const SignInPage = () => {
  const { session } = useAuth();
  console.log(session);
  const { signIn } = useSupabaseAuth();
  if (session?.user) return <Navigate to={"/dashboard"} />;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  return (
    <div className="max-w-[556px] w-full shadow-md px-[30px] lg:px-[50px] py-[20px] lg:py-[63px] bg-[#1C1C24] rounded-lg">
      <SubHeading
        content={"Chưa có tài khoản?"}
        hrefText={"Đăng ký ngay"}
        to={"/signup"}
      />
      <Heading content={"Đăng Nhập"}></Heading>

      <form
        onSubmit={handleSubmit(signIn)}
        className="mt-[20px] flex flex-col gap-y-[20px] lg:gap-y-[20px]"
      >
        <Field
          register={register}
          error={errors?.email?.message}
          labelText="Email"
          name="email"
          placeholder="Nhập địa chỉ email của bạn"
          type="email"
        />

        <Field
          register={register}
          error={errors?.password?.message}
          labelText="Password"
          name="password"
          placeholder="Điền mật khẩu của bạn"
          type="password"
        />
        <Button
          className="duration-75 active:scale-90"
          type={"submit"}
          // disabled={isSubmitting}
        >
          Đăng Nhập
        </Button>
      </form>
      {/* <button className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
        <img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Login with Google</span>
      </button> */}
    </div>
  );
};

export default SignInPage;

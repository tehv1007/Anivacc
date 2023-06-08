import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { supabase } from "../config/supabase";

const useSupabaseAuth = () => {
  const navigate = useNavigate();

  const signIn = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Đăng nhập thành công!");
      navigate("/dashboard");
    }

    // if (error) {
    //   toast.error(error.message);
    // } else {
    //   // Kiểm tra vai trò của người dùng
    //   supabase
    //     .from("user")
    //     .select()
    //     .eq("email", data.user.email)
    //     .single()
    //     .then((res) => {
    //       console.log(res);
    //       if (!res.data) {
    //         toast.error("Lỗi: Something went wrong!");
    //       } else {
    //         if (res.data.roleId === 1) {
    //           // Người dùng có vai trò 1
    //           toast.error("Lỗi: Người dùng không có quyền truy cập.");
    //         } else if (res.data.roleId === 2) {
    //           // Người dùng có vai trò 2
    //           toast.success("Đăng nhập thành công!");
    //           navigate("/dashboard");
    //         }
    //       }
    //     });
    // }
  };

  const signUp = async ({ email, password }) => {
    console.log(email, password);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    const user = data.user;
    await supabase.from("user").insert({
      uuid: user?.id,
      email: user?.email,
      username: user?.email?.split("@")[0],
      roleId: 1,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Đăng ký thành công!");
      navigate("/login");
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) toast.error(error.message);
  };

  return { signIn, signUp, signOut };
};

export default useSupabaseAuth;

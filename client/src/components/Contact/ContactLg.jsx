import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { supabase } from "../../config/supabase";

export default function ContactLg({
  products,
  bgColor = "#fff",
  eraseCart,
  setCart,
}) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
    await supabase.from("inquire").insert({ ...data, products: products });
    if (eraseCart) {
      localStorage.removeItem("cart");
      setCart([]);
    }
    reset();
  };

  return (
    <div className={`mt-10 bg-[${bgColor}]`}>
      <div className="px-4 pt-6">
        {/* <h3 className="font-bold text-3xl text-center">Product Inquiry</h3> */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6 [&_input]:bg-transparent  [&_input]:border-[2px] [&_input]:border-black/20 [&_input]:h-10 [&_input]:pl-2 mt-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className="w-full"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 font-medium absolute top-[100%] w-fit left-0">
                  This field is required
                </span>
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="*E-mail"
                {...register("email", { required: true })}
                className="w-full"
              />
              {errors.email && (
                <span className="text-red-500 font-medium absolute top-[100%] w-fit left-0">
                  This field is required
                </span>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Company Name"
                {...register("company", { required: true })}
                className="w-full"
              />
              {errors.company && (
                <span className="text-red-500 font-medium absolute top-[100%] w-fit left-0">
                  This field is required
                </span>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Tel"
                {...register("tel", { required: true })}
                className="w-full"
              />
              {errors.tel && (
                <span className="text-red-500 font-medium absolute top-[100%] w-fit left-0">
                  This field is required
                </span>
              )}
            </div>
          </div>

          <div className="relative">
            <textarea
              className="bg-transparent border-[2px] pl-2 border-black/20 h-[200px] w-full"
              placeholder="*Message"
              {...register("message", { required: true })}
            ></textarea>

            {errors.message && (
              <span className="text-red-500 font-medium absolute top-[100%] w-fit left-0">
                This field is required
              </span>
            )}
          </div>

          <button className="bg-[#003d79] text-white p-3">Submit</button>
        </form>
      </div>
    </div>
  );
}

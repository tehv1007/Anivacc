import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { supabase } from "../../config/supabase";

export default function ContactSm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
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
      title: "Đã gửi thông tin yêu cầu thành công",
    });
    await supabase.from("inquire").insert(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col  gap-6 p-3 [&_.group]:border-blue-500 [&_.group]:border  [&_.group]:w-full  [&_.group]:h-10 focus:[&_.group]:outline-[#003d79] [&_.group]:pl-2  [&_span]:z-10 "
    >
      <h3 className="text-2xl font-bold py-2">Contact Us</h3>
      <div className="relative">
        <input
          type="text"
          placeholder="Name"
          className="w-full group"
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
          className="w-full group"
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
          className="w-full group"
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
          className="w-full group"
        />
        {errors.tel && (
          <span className="text-red-500 font-medium absolute top-[100%] w-fit left-0">
            This field is required
          </span>
        )}
      </div>

      <div className="relative">
        <textarea
          className="bg-transparent border-[2px] pl-2 w-full border-blue-500 focus:outline-[#003d79] h-[200px]"
          placeholder="*Message"
          {...register("message", { required: true })}
        ></textarea>

        {errors.message && (
          <span className="text-red-500 font-medium absolute top-[100%] w-fit left-0">
            This field is required
          </span>
        )}
      </div>
      <div className="flex [&>button]:w-[80%] justify-center">
        <button
          type="submit"
          className="text-white bg-[#003d79] w-fit px-5 py-3 rounded-xl grow-0  transition hover:scale-110 hover:shadow-slate-400 hover:shadow-md active:scale-100"
        >
          <i className="fa-solid fa-pen-to-square"></i> Submit
        </button>
      </div>
    </form>
  );
}

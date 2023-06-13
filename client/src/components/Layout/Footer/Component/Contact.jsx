import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { supabase } from "../../../../config/supabase";
import { inquirySchema } from "../../../../utils/inquirySchema";
import FormRowError from "../../../Feature/FormRowError";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(inquirySchema),
  });

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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-white font-semibold text-lg text-left font-montserrat">
          Contact Us
        </p>
        <div className="text-[#b5ccec] mt-4 bg-inherit">
          <div className="mb-2.5">
            <input
              className="w-full bg-transparent py-1 px-2 border border-solid border-white "
              type="text"
              placeholder="*Họ tên"
              {...register("name")}
            />
            <FormRowError error={errors.name} />
          </div>

          <div className="mb-2.5">
            <input
              className="w-full bg-transparent py-1 px-2 border border-solid border-white"
              type="text"
              placeholder="*Email"
              {...register("email")}
            />
            <FormRowError error={errors.email} />
          </div>

          <div className="mb-2.5">
            <input
              className="w-full bg-transparent py-1 px-2 border border-solid border-white"
              type="text"
              placeholder="*Điện thoại"
              {...register("tel")}
            />
            <FormRowError error={errors.tel} />
          </div>

          <div className="mb-2.5">
            <textarea
              className="w-full bg-transparent py-1 px-2 border border-solid border-white pb-10"
              type="text"
              placeholder="*Nội dung"
              {...register("message")}
            />
            <FormRowError error={errors.message} />
          </div>

          <br />
          <button
            type="submit"
            className="w-full border border-solid border-white py-1.5 text-white hover:bg-white hover:text-[#003d79]"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;

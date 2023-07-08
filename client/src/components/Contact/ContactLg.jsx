import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { supabase } from "../../config/supabase";
import FormRowError from "../Feature/FormRowError";
import { buildInquirySchema } from "../../utils/buildInquirySchema";
import { useTranslation } from "react-i18next";

export default function ContactLg({
  products,
  bgColor = "#fff",
  eraseCart,
  setCart,
  display,
}) {
  const { t } = useTranslation();
  const translations = {
    schema_required: t("schema_required"),
    schema_phoneNumber: t("schema_phoneNumber"),
    schema_email: t("schema_email"),
  };

  const inquirySchema = buildInquirySchema(translations);
  // console.log(products);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
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
      title: t("toast-success"),
    });
    await supabase.from("inquire").insert({ ...data, products: products });
    if (eraseCart) {
      localStorage.removeItem("cart");
      setCart([]);
    }
    reset();
  };

  return (
    <div className={`mt-10 ${bgColor}`}>
      <div className="px-4 pt-6">
        <div className={`text-center ${display}`}>
          <h1 className="text-3xl font-bold text-[#003d79]">
            {t("product_inquiry")}
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6 [&_input]:bg-transparent  [&_input]:border-[2px] [&_input]:border-black/20 [&_input]:h-10 [&_input]:pl-2 mt-6">
            <div className="relative">
              <input
                type="text"
                placeholder={`*${t("placeholder_name")}`}
                className="w-full"
                {...register("name")}
              />
              <FormRowError error={errors.name} />
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="*E-mail"
                className="w-full"
                {...register("email")}
              />
              <FormRowError error={errors.email} />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder={`${t("placeholder_company")}`}
                {...register("company")}
                className="w-full"
              />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder={`*${t("placeholder_tel")}`}
                className="w-full"
                {...register("tel")}
              />
              <FormRowError error={errors.tel} />
            </div>
          </div>

          <div className="relative">
            <textarea
              className="bg-transparent border-[2px] pl-2 border-black/20 h-[200px] w-full"
              placeholder={`*${t("placeholder_message")}`}
              {...register("message")}
            />
            <FormRowError error={errors.message} />
          </div>

          <button className="bg-[#003d79] text-white p-3 mb-5">Submit</button>
        </form>
      </div>
    </div>
  );
}

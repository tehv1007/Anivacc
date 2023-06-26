import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { supabase } from "../../config/supabase";
import FormRowError from "../Feature/FormRowError";
import { inquirySchema } from "../../utils/inquirySchema";
import { useTranslation } from "react-i18next";
import { buildInquirySchema } from "../../utils/buildInquirySchema";

export default function ContactSm() {
  const { t } = useTranslation();
  const translations = {
    schema_required: t("schema_required"),
    schema_phoneNumber: t("schema_phoneNumber"),
    schema_email: t("schema_email"),
  };

  const inquirySchema = buildInquirySchema(translations);

  const {
    register,
    handleSubmit,
    watch,
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
      title: t("toast-success"),
    });
    await supabase.from("inquire").insert(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-gray-100 p-3 [&_.group]:border-blue-500 [&_.group]:border [&_.group]:w-full [&_.group]:h-10 focus:[&_.group]:outline-[#003d79] [&_.group]:pl-2 [&_span]:z-10 "
    >
      <h3 className="text-[20px] font-bold py-2">{t("nav-contact")}</h3>
      <div className="mb-[10px]">
        <input
          type="text"
          placeholder={`*${t("placeholder_name")}`}
          className="w-full group text-sm"
          {...register("name")}
        />
        <FormRowError error={errors.name} />
      </div>

      <div className="mb-[10px]">
        <input
          type="email"
          placeholder="*E-mail"
          className="w-full group text-sm"
          {...register("email")}
        />
        <FormRowError error={errors.email} />
      </div>

      <div className="mb-[10px]">
        <input
          type="text"
          placeholder={`${t("placeholder_company")}`}
          {...register("company")}
          className="w-full group text-sm"
        />
      </div>

      <div className="mb-[10px]">
        <input
          type="text"
          placeholder={`*${t("placeholder_tel")}`}
          className="w-full group text-sm"
          {...register("tel")}
        />
        <FormRowError error={errors.tel} />
      </div>

      <div className="mb-[10px]">
        <textarea
          className="bg-transparent border-[2px] pl-2 w-full border-blue-500 focus:outline-[#003d79] h-[80px] text-sm"
          placeholder={`*${t("placeholder_message")}`}
          {...register("message")}
        />
        <FormRowError error={errors.message} />
      </div>

      <div className="flex [&>button]:w-[80%] justify-center">
        <button
          type="submit"
          className="text-white text-sm bg-[#003d79] w-fit px-5 py-3 rounded-xl grow-0  transition hover:scale-110 hover:shadow-slate-400 hover:shadow-md active:scale-100"
        >
          <i className="fa-solid fa-pen-to-square"></i> Submit
        </button>
      </div>
    </form>
  );
}

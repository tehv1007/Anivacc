import FormRowError from "../../Feature/FormRowError";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { inquirySchema } from "../../../utils/inquirySchema";
import { supabase } from "../../../config/supabase";
import { buildInquirySchema } from "../../../utils/buildInquirySchema";
import { useTranslation } from "react-i18next";

const PopUp = ({ setShowPopup, showPopup }) => {
  const { t } = useTranslation();
  const translations = {
    schema_required: t("schema_required"),
    schema_phoneNumber: t("schema_phoneNumber"),
    schema_email: t("schema_email"),
  };

  const inquirySchema = buildInquirySchema(translations);

  const handleClose = () => {
    setShowPopup(false);
  };

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
      title: t("toast-success"),
    });
    await supabase.from("inquire").insert(data);
    reset();
  };

  return (
    <>
      {showPopup ? (
        <section className="popup-overlay z-[99]">
          <div
            className="overflow-hidden w-full sm:w-2/3 md:w-[760px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-600 bg-gray-100"
            aria-modal="true"
            role="dialog"
            tabIndex={-1}
          >
            <div className="relative">
              <button
                onClick={handleClose}
                className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex">
                <div className="hidden md:block basis-[45%]">
                  <img
                    src="/images/others/contact.webp"
                    alt="Contact"
                    className="block h-full w-full object-cover"
                  />
                </div>

                {/* form */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="text-sm text-left md:basis-[55%]"
                >
                  <div className="px-[10px] md:px-8 pt-12 pb-6">
                    <div span={24} className="drawing-item my-[10px]">
                      <div>
                        <div className="l-edit text-left font-bold text-[32px] text-blue-800">
                          <p>
                            <span className="text-[28px] leading uppercase">
                              {t("popup_title")}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div span={24} className="drawing-item my-[10px]">
                      <div>
                        <div className="l-edit text-left text-sm text-black/70">
                          <p>{t("popup_description")}</p>
                        </div>
                      </div>
                    </div>
                    {/* Name */}
                    <div span={24} className="my-[10px]">
                      <div className="flex items-center border border-gray-600 text-black/60 w-full bg-white text-xs h-9">
                        <span className="pr-2 text-red-500 bg-inherit">*</span>
                        <input
                          type="text"
                          clearable="true"
                          placeholder={`${t("placeholder_name")}`}
                          className="pr-[15px] mx-0 inline-block w-full h-full outline-none"
                          {...register("name")}
                        />
                      </div>
                      <FormRowError error={errors.name} />
                    </div>
                    {/* Email */}
                    <div span={24} className="my-[10px]">
                      <div className="flex items-center border border-gray-600 text-black/60 w-full bg-white text-xs h-9">
                        <span className="pr-2 text-red-500 bg-inherit">*</span>
                        <input
                          type="text"
                          clearable="true"
                          placeholder="Email"
                          className="pr-[15px] mx-0 inline-block w-full h-full outline-none"
                          {...register("email")}
                        />
                      </div>
                      <FormRowError error={errors.email} />
                    </div>
                    {/* Phone */}
                    <div span={24} className="my-[10px]">
                      <div className="flex items-center border border-gray-600 text-black/60 w-full bg-white text-xs h-9">
                        <span className="pr-2 text-red-500 bg-inherit">*</span>
                        <input
                          type="text"
                          clearable="true"
                          placeholder={`${t("placeholder_tel")}`}
                          className="pr-[15px] mx-0 inline-block w-full h-full outline-none"
                          {...register("tel")}
                        />
                      </div>
                      <FormRowError error={errors.tel} />
                    </div>
                    {/* Message */}
                    <div span={24} className="my-[10px]">
                      <div className="flex  border border-gray-600 text-black/60 w-full bg-white text-xs">
                        <span className="pr-2 pt-2 text-red-500 bg-inherit ">
                          *
                        </span>
                        <textarea
                          autoComplete="off"
                          rows={4}
                          clearable="true"
                          placeholder={`*${t("placeholder_message")}`}
                          className="l-textarea_inner min-h-[32px] w-full border-0 py-[10px] outline-none resize-none"
                          {...register("message")}
                        />
                      </div>
                      <FormRowError error={errors.message} />
                    </div>
                    {/* Button */}
                    <div className="form-btn text-center my-5">
                      <button
                        type="submit"
                        className="submitBtn text-lg text-center py-[10px] px-5 my-5 border-none cursor-pointer text-white bg-blue-800 w-full"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default PopUp;

import FormInput from "../../components/Common/FormInput";
import Header from "../../components/Feature/Header";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { supabase } from "../../config/supabase";
import { yupResolver } from "@hookform/resolvers/yup";
import { inquirySchema } from "../../utils/inquirySchema";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

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
      <Header imgUrl={"/images/background/vet-puppy.jpeg"} />
      <div className="max-w-[1200px] mx-auto">
        <div className="flex-col mx-auto px-[20px] lg:px-10">
          {/* <div className=" pb-16 pt-24 lg:mb-0 md:basis-2/3 lg:basis-1/3"> */}
          <div className="max-w-[730px] mx-auto lg:max-w-[1200px]">
            <div className="flex flex-wrap py-10">
              {/* Company Info */}
              <div className="lg:basis-5/12 float-left">
                <h1 className="text-gray-700 text-left">
                  <span className="text-4xl font-medium text-left capitalize">
                    {t("contact")}
                  </span>
                </h1>
                <div className="resize h-[38px]"></div>
                <p className="text-gray-700 text-sm leading-6 text-left pt-2 pb-5">
                  {t("contact_info")}
                </p>
                <ul className="text-[15px] text-gray-700 leading-7 text-left">
                  <li className="flex items-center">
                    <i className="mr-4 fa-solid fa-location-dot"></i>
                    <p>{t("contact_address")}</p>
                  </li>
                  <li className="flex items-center">
                    <i className="mr-4 fa-solid fa-phone"></i>
                    <a href="#">{t("contact_phone")}</a>
                  </li>
                  <li className="flex items-center">
                    <i className="mr-4 fa-solid fa-envelope"></i>
                    <a href="#">Email: thuocthuycnc@gmail.com</a>
                  </li>
                </ul>

                {/* Social icons */}
                <div className="flex text-left gap-[9px] items-center font-light leading-7 mt-[22px] mb-[30px]">
                  <a href="https://www.facebook.com/anivaccvet" target="_blank">
                    <i className="fa-brands fa-facebook-f text-indigo-800 hover:opacity-80"></i>
                  </a>
                  <a href="https://www.tiktok.com/@anivacc.cnc" target="_blank">
                    <i className="fa-brands fa-tiktok text-black hover:opacity-80"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-whatsapp text-green-500 hover:opacity-80"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-youtube text-red-700 hover:opacity-80"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin-in text-blue-700 hover:opacity-80"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram  text-pink-600 hover:opacity-80"></i>
                  </a>
                </div>
              </div>
              {/* Space */}
              <div className="lg:basis-1/12" />

              {/* Contact form */}
              <div className="lg:basis-6/12 float-right w-full py-[10px]">
                <div className="py-5 px-[30px] shadow-[0_0_8px_0_rgba(0,0,0,0.2)] bg-white border">
                  <h2 className="text-gray-800 text-3xl leading-12 font-bold text-left font-[Montserrat] mb-[10px] capitalize">
                    {t("contact_form")}
                  </h2>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="text-gray-700 leading-7 text-left"
                  >
                    <FormInput
                      register={register}
                      placeholder={`*${t("placeholder_name")}`}
                      errors={errors.name}
                      name="name"
                    />
                    <FormInput
                      register={register}
                      placeholder="*Email"
                      errors={errors.email}
                      name="email"
                    />
                    <FormInput
                      register={register}
                      placeholder={`*${t("placeholder_tel")}`}
                      errors={errors.tel}
                      name="tel"
                      type="tel"
                    />
                    <FormInput
                      register={register}
                      style={{ height: "80px" }}
                      placeholder={`*${t("placeholder_message")}`}
                      errors={errors.message}
                      name="message"
                    />
                    <button
                      type="submit"
                      className="items-start bg-blue-900 hover:bg-blue-800 hover:border-blue-800 text-white inline-block text-sm leading-5 text-center px-[30px] w-full h-10 mb-[10px]"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* Map */}
            <a className="w-full h-full md:py-4 md:px-2 lg:py-0">
              <iframe
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJc3T-N8JVNDERwJ1OqbTYoJI&key=${
                  import.meta.env.VITE_GOOGLE_MAP_API
                }`}
              />
            </a>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

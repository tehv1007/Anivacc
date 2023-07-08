import { useTranslation } from "react-i18next";

export default function AdvantageImage() {
  const { t } = useTranslation();

  return (
    <div className="relative flex justify-center items-center w-full">
      <img
        className="min-[1200px]:w-[86%] w-[80%] h-[390px] mx-auto object-cover"
        src="/images/background/advantage.jpg"
        alt="Image"
      />
      <h1 className="bg-white/30 font-montserrat text-blue-900 text-center text-5xl font-bold absolute top-2/3 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
        {t("advantage_title")}
      </h1>
    </div>
  );
}

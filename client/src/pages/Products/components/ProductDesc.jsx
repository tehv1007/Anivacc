import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

export default function ProductDesc({ long_desc }) {
  const { t } = useTranslation();
  return (
    <div className="mt-10 border">
      <div className="w-full h-12 bg-[#545454] relative ">
        <div className="absolute top-1/2 left-0 translate-y-[-50%] bg-[#003d79] text-white text-[20px] py-3 px-5">
          <p>{t("product_detail")}</p>
        </div>
      </div>
      <div className="py-6 px-8">{parse(long_desc)}</div>
    </div>
  );
}

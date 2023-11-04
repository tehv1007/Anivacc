import { useTranslation } from "react-i18next";
import VideoList from "./VideoList";

export default function StoryBody() {
  const { t } = useTranslation();

  return (
    <div className="my-[56px]">
      <div className="grid grid-cols-1 min-[990px]:grid-cols-3">
        <div className="p-[10px] col-span-2">
          <h1 className="font-montserrat text-[34px] font-bold uppercase">
            {t("about_title")}
          </h1>
          <br />
          <div className="font-poppins text-[#545454] text-left">
            <p className="mb-3">{t("about_sub1_content1")}</p>
            <p className="mb-3">{t("about_sub1_content2")}</p>

            <span>{t("about_sub1_content3")}</span>
            <span className="text-[#003d79] font-bold">
              {t("about_sub1_bold1")}
            </span>
            <span>{t("about_sub1_content4")}</span>
            <span className="text-[#003d79] font-bold">
              {t("about_sub1_bold2")}
            </span>
            <span className="mb-3 inline-block">
              {t("about_sub1_content5")}
            </span>

            <br />
            <div className="mb-3">
              <span className="text-[#003d79] font-bold">
                {t("about_sub2_bold1")}
              </span>
              {t("about_sub2_content1")}
            </div>

            <div className="mb-3">
              <span className="text-[#003d79] font-bold">
                {t("about_sub2_bold2")}
              </span>
              {t("about_sub2_content2")}
            </div>

            <div className="mb-3">
              <span className="text-[#003d79] font-bold">
                {t("about_sub3_bold")}
              </span>
              {t("about_sub3_content")}
            </div>

            <div>
              <span className="text-[#003d79] font-bold">
                {t("about_sub4_bold")}
              </span>
              <span className="mb-2 inline-block">
                {t("about_sub4_content1")}
              </span>
              <div className="pb-[10px] text-center font-bold text-[#003d79]">
                {t("about_sub4_content2", { returnObjects: true }).map(
                  (item, index) => (
                    <p className="pb-[10px]" key={index}>
                      {t(item["about"])}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 p-[10px]">
          <VideoList />
        </div>
      </div>
    </div>
  );
}

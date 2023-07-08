import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function StoryBody() {
  const { t } = useTranslation();

  return (
    <div className="my-[56px]">
      <div className="grid grid-cols-1 min-[990px]:grid-cols-2">
        <div className="p-[10px]">
          <h1 className="font-montserrat text-[34px] font-bold uppercase">
            {t("about_title")}
          </h1>
          <br />
          <div className="font-poppins text-[#545454] text-left">
            <h2 className="font-bold text-lg">1. {t("about_sub1_header")}</h2>
            <span className="text-[#003d79] font-bold text-lg">AniVacC </span>
            {t("about_sub1_content1")}
            <Link className="text-[#003d79] font-bold" href="/products">
              <p className="cursor-pointer">{t("about_sub1_content2")}</p>
              <p className="cursor-pointer">{t("about_sub1_content3")}</p>
              <p className="cursor-pointer">{t("about_sub1_content4")}</p>
              <p className="cursor-pointer">{t("about_sub1_content5")}</p>
            </Link>
            <br />
            <div>
              <h2 className="font-bold text-lg">2. {t("about_sub2_header")}</h2>
              <div>
                {t("about_sub2_content1")}{" "}
                <span className="text-[#003d79] font-bold">AniVacC</span>{" "}
                {t("about_sub2_content2")}
                <div className="text-[#003d79] font-bold">
                  {t("about_sub2_content3")}
                </div>
              </div>
              <br />
              <h2 className="font-bold text-lg">3. {t("about_sub3_header")}</h2>
              <div>{t("about_sub3_content")}</div>
              <br />
              <h2 className="font-bold text-lg">4. {t("about_sub4_header")}</h2>
              <div>{t("about_sub4_content")}</div>
            </div>
          </div>
        </div>
        <img
          className="p-[10px]"
          src="/images/others/congty_cnc_anivacc.jpg"
          alt="Image"
        />
      </div>
      {/* <div className="grid grid-cols-1 min-[990px]:grid-cols-2">
        <img className="p-[10px]" src="/images/certificate.png" alt="Image" />
        <div className="p-[10px]">
          <h1 className="font-montserrat text-[34px] font-bold">
            GIỚI THIỆU VỀ CÔNG TY
          </h1>
          <br />
          <div className="font-poppins text-[#545454] text-left">
            <p>
              Công ty cổ phần sản xuất và thương mại thuốc thú y CNC được thành
              lập từ năm 2014 với 4 thành viên sáng lập là những chuyên gia hàng
              đầu trong lĩnh vực nghiên cứu và sản xuất vắc xin thú y của Việt
              Nam. Giai đoạn mới thành lập, công ty tập trung nghiên cứu và sản
              xuất các chế phẩm sinh học, kháng thể dùng trong thú y như CNC
              Pig01, CNC Dog01, CNC AntiGUM, CNC AntiDHV, CNC AntiE.coli,…và các
              sản phẩm dung môi pha vắc xin như CNC Diluent và CNC Diluent Blue.
              Sau 5 năm thành lập, công ty đã xây dựng được thương hiệu và tạo
              ra nhiều sản phẩm chất lượng và có uy tín được khách hàng tin
              dùng, đặc biệt là các sản phẩm dung môi pha vắc xin.
            </p>
            <br />
            <p>
              Tiếp tục nghiên cứu và phát triển các sản phẩm vắc xin thú y,
              tháng 5/2019 Hội đồng quản trị công ty đã quyết định mở rộng công
              ty và triển khai xây dựng một nhà máy sản xuất vắc xin thú y đạt
              tiêu chuẩn GMP-WHO tại lô 28, khu công nghiệp Quang Minh, thị trấn
              Quang Minh, Mê Linh, Hà Nội. Công ty đã triển khai xây dựng một
              dây chuyền sản xuất vắc xin virus trên tế bào đạt chuẩn GMP-WHO,,
              đầu tư các thiết bị tự động với một dây chuyền sản xuất tự động
              đạt tiêu chuẩn WHO như máy rửa chai tự động, máy chia liều tự
              động, máy viền nút nhôm tự động, máy dán nhãn, hoàn thiện tự động
              và máy đông khô vắc xin, đầu tư cho cán bộ kỹ thuật sang Châu âu
              học tập công nghệ mới. Đối với phòng kiểm tra chất lượng (GLP)
              được nâng cấp thành phòng thí nghiệm đạt chuẩn ISO 17025 vừa phục
              vụ đánh giá chất lượng sản phẩm, vừa phục cho công tác nghiên cứu
              và phát triển sản phẩm (R&D). Hệ thống kho tàng (GSP) được thiết
              kế liên hoàn từ kho nguyên vật liệu đến kho thành phẩm và kho lạnh
              và được sắp xếp ngăn nắp, gọn gàng theo tiêu chuẩn GSP.
            </p>
            <br />
            <p>
              Vơi tiềm năng con người có sẵn của AniVacC, Sau khi hoàn thiện các
              dây chuyền sản xuất, công ty triển khai sản xuất các sản phẩm vắc
              xin virus phòng bệnh cho lợn như vắc xin PRRS, CSF, Parvo,
              Aujeszky,… phòng bệnh cho gà như Gumboro, Newcastle, IB,.. phòng
              bệnh cho vịt như DHV, DEV, Derzsy,… và các vắc xin phòng bệnh cho
              các vật nuôi khác như trâu, bò, chó, dê, thỏ,…
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

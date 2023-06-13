import PartnerItem from "./PartnerItem";
import ContainerFluid from "../../../../components/Layout/Container/ContainerFluid";
import Heading from "../../../../components/Common/Heading";

export default function Partner() {
  const partnerImagesUrl = [
    { url: "/images/partners/anivacC.png", href: "https://anivacc.com/" },
    {
      url: "/images/partners/bewital-agri.png",
      href: "https://bewital-agri.de/en/",
    },
    {
      url: "/images/partners/cigb-banner.png",
      href: "https://www.cigb.edu.cu/en/",
    },
    { url: "/images/partners/Formosa.png", href: "http://www.formosabio.com/" },
    {
      url: "/images/partners/sinder.png",
      href: "https://www.sinderanimalhealth.com/",
    },
  ];

  return (
    <section className="mt-[62px]">
      <Heading title="Đối tác của chúng tôi" />
      <ContainerFluid>
        <div className="grid grid-cols-1 gap-2 px-[15px] py-[10px] sm:grid-cols-2 lg:flex">
          {partnerImagesUrl.map((item, index) => {
            return (
              <PartnerItem imgUrl={item.url} key={index} href={item.href} />
            );
          })}
        </div>
      </ContainerFluid>
    </section>
  );
}

import QuickLink from "./Component/QuickLink";
import FollowUs from "./Component/FollowUs";
import Contact from "./Component/Contact";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[url('/images/footer-bg.webp')]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 py-10 gap-[10px]">
          {/* Company */}
          <div>
            <Link to="/">
              <img
                src="/images/logo-white.png"
                alt="AniVacC Logo"
                className="w-[160px]"
              />
            </Link>
            <p className="mt-5 text-[#b5ccec]">
              <span className="font-bold text-xl">AniVacC </span> -{" "}
              <strong>{t("company_name")}</strong> {t("company_info")}
            </p>
          </div>

          <QuickLink />
          <FollowUs />
          <Contact />
        </div>

        {/* Copyright */}
        <div>
          <p className="text-white text-[15px] text-[#b5cceccc] border-t border-solid border-[#b5cceccc] text-center py-3">
            {t("copyright")}
          </p>
        </div>
      </Container>
    </div>
  );
}

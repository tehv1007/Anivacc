import Container from "./Component/Container";
import QuickLink from "./Component/QuickLink";
import FollowUs from "./Component/FollowUs";
import Contact from "./Component/Contact";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full bg-[url('/images/footer-bg.webp')]">
      <Container>
        <div className="grid max-[1024px]:grid-cols-1 grid-cols-4 py-10 gap-2">
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
              <span className="font-bold text-xl">AniVacC </span>là thương hiệu
              chuyên về Nghiên cứu, sản xuất và kinh doanh, tư vấn chuyển giao
              công nghệ trong lĩnh vực vắc xin và chế phẩm sinh học công nghệ
              cao dùng trong thú y và thủy sản.
            </p>
          </div>

          <QuickLink />
          <FollowUs />
          <Contact />
        </div>

        {/* Copyright */}
        <div>
          <p className="text-white text-[15px] text-[#b5cceccc] border-t border-solid border-[#b5cceccc] text-center py-3">
            Copyright © 2023 - Bản quyền thuộc về công ty AnivacC. Tất cả các
            quyền được bảo hộ.
          </p>
        </div>
      </Container>
    </div>
  );
}

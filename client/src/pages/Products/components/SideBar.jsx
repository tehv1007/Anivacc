import { Link, useLocation } from "react-router-dom";
import ContactSm from "../../../components/Contact/ContactSm";
import RelatedProducts from "../../../components/Feature/RelatedProducts";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

export default function SideBar({ setPage, lang_code }) {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const words = pathname.split("/");
  const isProductsPage = words.includes("products");
  const isProductPage = words.includes("product");
  const accordion = "collapse rounded-[0] border-b-2 border-black/30 relative";

  return (
    <div className="lg:block h-fit border border-base-300 ">
      {t("product-categories", { returnObjects: true }).map(
        (category, index) => {
          return (
            <div
              key={index}
              className={classNames(
                accordion,
                category["child-categories"].length > 0 ? "collapse-arrow" : ""
              )}
            >
              <input
                type="radio"
                name="my-accordion-2"
                className="absolute right-0 w-10 h-5"
              />
              <Link
                to={`/products/${t(category["link"])}`}
                onClick={() => {
                  setPage(1);
                }}
                className="block collapse-title text-base font-medium text-[white] bg-[#003d79] capitalize"
              >
                {t(`${category["parent-category"]}`)}
              </Link>

              <ul className="collapse-content p-0 [&>a]:block [&>a]:border-b-2 [&>a]:rounded-[0] [&>a]:py-3 [&>a]:pl-9 list-disc hover:[&>a]:bg-slate-400/10 [&>a]:transition [&>a]:w-full">
                {category["child-categories"].length > 0 &&
                  category["child-categories"].map((c, index) => {
                    return (
                      <Link
                        to={`/products/${t(category["link"])}/${t(c["link"])}`}
                        key={index}
                        onClick={() => {
                          setPage(1);
                        }}
                      >
                        <li className="text-sm">
                          {t(`${c["child-category"]}`)}
                        </li>
                      </Link>
                    );
                  })}
              </ul>
            </div>
          );
        }
      )}

      {/* {words[3] ? <ContactSm /> : <RelatedProducts lang_code={lang_code} />} */}
      {isProductsPage && <ContactSm />}
      {isProductPage && <RelatedProducts lang_code={lang_code} />}
    </div>
  );
}

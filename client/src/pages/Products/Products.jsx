import Card from "./components/Card";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "../../config/supabase";
import SideBar from "./components/SideBar";
import Pagination from "../../components/Common/Pagination";
import GlobalSpinner from "../../components/Common/loading/GlobalSpinner";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const paginate = (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};

const Products = ({ page, setPage, lang_code }) => {
  const ITEMS_PER_PAGE = 12;
  // const [page, setPage] = useState(1);
  const { t } = useTranslation();
  const { category: parentCategory, categoryId: childCategory } = useParams();

  const {
    isLoading,
    data: products,
    refetch,
  } = useQuery({
    queryKey: ["products", { parentCategory, childCategory }],
    queryFn: () => {
      return supabase.from("product").select().eq("lang_code", lang_code);
    },
    select: (res) => {
      if (parentCategory === "all") {
        return res.data;
      } else if (childCategory) {
        return res.data.filter(
          (product) =>
            product.categories.includes(parentCategory) &&
            product.categories.includes(childCategory)
        );
      } else {
        return res.data.filter((product) =>
          product.categories.includes(parentCategory)
        );
      }
    },
  });

  useEffect(() => {
    refetch();
  }, [lang_code, refetch]);

  if (isLoading) return <GlobalSpinner />;

  let totalItems = products.length;
  const paginationParams = {
    currentPage: page,
    hasNextPage: ITEMS_PER_PAGE * page < totalItems,
    hasPreviousPage: page > 1,
    nextPage: page + 1,
    previousPage: page - 1,
    lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE),
  };
  const paginatedArr = paginate(products, ITEMS_PER_PAGE, page);

  const categories = [
    { id: 1, name: "Sản phẩm cho lợn", label: t("products_cate1") },
    { id: 2, name: "Sản phẩm cho gà", label: t("products_cate2") },
    { id: 3, name: "Sản phẩm cho vịt", label: t("products_cate3") },
    { id: 4, name: "Sản phẩm cho bò", label: t("products_cate4") },
    { id: 5, name: "Sản phẩm cho thủy sản", label: t("products_cate5") },
    { id: 6, name: "Thuốc sát trùng", label: t("products_cate6") },
    { id: 7, name: "Sản phẩm cho thú cưng", label: t("products_cate7") },
    { id: 8, name: "Dung môi pha vaccine", label: t("products_cate8") },
    { id: 9, name: "Chế phẩm sinh học", label: t("products_cate9") },
    { id: 10, name: "Sản phẩm dinh dưỡng", label: t("products_cate10") },
    { id: 11, name: "Vaccine nhập khẩu", label: t("products_cate11") },
  ];

  const children = [
    { id: 1, name: "Vaccine", label: t("products_cate12") },
    { id: 2, name: "Kháng thể", label: t("products_cate13") },
    { id: 3, name: "Thức ăn bổ sung", label: t("products_cate14") },
  ];

  const parentCategoryLabel = categories.find(
    (category) => category.name === parentCategory
  )?.label;

  const childCategoryLabel = children.find(
    (category) => category.name === childCategory
  )?.label;

  const label = childCategory
    ? `${parentCategoryLabel}: ${childCategoryLabel}`
    : parentCategoryLabel;

  return (
    <>
      <h1 className="text-gray-700 text-left pb-[15px]">
        <span className="text-[26px] font-medium text-left capitalize">
          {label || t("products_all")}
        </span>
      </h1>

      {/* Product Grid */}
      {isLoading ? (
        <GlobalSpinner />
      ) : (
        <div className="w-full lg:grid lg:grid-cols-4 lg:gap-7">
          {/* Products */}
          <div className="flex flex-col items-center lg:col-span-3 mb-[30px]">
            <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:col-span-3 lg:place-content-start relative h-fit mb-[20px]">
              {products.length == 0 ? (
                <div className="place-self-center col-span-3 uppercase text-lg text-center mt-10">
                  <div className="mb-5 text-blue-900">{t("products_404")}</div>
                  <img
                    src="/images/background/index_main_im01.jpg"
                    alt="Not Found"
                    className="mb-10"
                  />
                </div>
              ) : (
                <>
                  {paginatedArr.map((product, index) => {
                    return <Card key={index} product={product} />;
                  })}
                </>
              )}
            </div>
            {products.length == 0 ? (
              ""
            ) : (
              <Pagination
                setPage={setPage}
                paginationParams={paginationParams}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SideBar setPage={setPage} />
          </div>
        </div>
      )}
    </>
  );
};

export default Products;

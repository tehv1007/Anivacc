import { Link, useLocation } from "react-router-dom";
import { supabase } from "../../../config/supabase";
import { useQueries } from "@tanstack/react-query";
import ContactSm from "../../../components/Contact/ContactSm";
import RelatedProducts from "../../../components/Feature/RelatedProducts";

export default function SideBar({ setPage }) {
  const { pathname } = useLocation();

  const [categoryTypeQuery, categoryQuery] = useQueries({
    queries: [
      {
        queryKey: ["category_type"],
        queryFn: () => supabase.from("category_type").select(),
        select: (res) => res.data,
      },
      {
        queryKey: ["categories"],
        queryFn: () => supabase.from("category").select(),
        select: (res) => res.data,
      },
    ],
  });

  const words = pathname.split("/");

  if (categoryTypeQuery.isLoading || categoryQuery.isLoading) {
    return <div></div>;
  }

  return (
    <div className="lg:block h-fit border border-base-300 ">
      {categoryTypeQuery.data.map((type) => {
        return (
          <div
            key={type.id}
            className="collapse rounded-[0] collapse-plus border-b-2 border-black/30 relative"
          >
            <input
              type="checkbox"
              defaultChecked
              className="absolute right-0 w-10 h-5"
            />
            <Link
              to={`/products/category/${type.category_type}`}
              onClick={() => {
                setPage(1);
              }}
              className="block collapse-title text-base font-medium text-[white] bg-[#003d79]"
            >
              {type.category_type}
            </Link>

            <ul className="collapse-content p-0 [&>a]:block [&>a]:border-b-2 [&>a]:rounded-[0] [&>a]:py-3 [&>a]:pl-9 list-disc hover:[&>a]:bg-slate-400/10 [&>a]:transition [&>a]:w-full">
              {categoryQuery.data.map((category) => {
                if (category.category_type === type.id) {
                  return (
                    <Link
                      to={`/products/category/${category.name}`}
                      key={Math.random()}
                      onClick={() => {
                        setPage(1);
                      }}
                    >
                      <li className="text-sm">{category.name}</li>
                    </Link>
                  );
                }
              })}
            </ul>
          </div>
        );
      })}

      {words[3] ? <ContactSm /> : <RelatedProducts />}
    </div>
  );
}

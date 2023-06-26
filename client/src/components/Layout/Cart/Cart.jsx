import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Cart({ cart, setCart }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [ani, setAni] = useState(false);

  const handleDelete = (id) => {
    setCart(cart.filter((product) => product.id != id));
    const products = cart.filter((product) => product.id != id);
    if (products.length > 0) {
      localStorage.setItem("cart", JSON.stringify(products));
    } else {
      localStorage.removeItem("cart");
    }
  };

  const handleDeleteAll = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <>
      {/* cart icon */}
      {cart.length > 0 ? (
        <div
          onClick={() => setAni(true)}
          className="cursor-pointer fixed bottom-[20%] right-[10px] z-[99] flex"
        >
          <div className="bg-gray-400 p-3 rounded-full relative">
            <i className="fa-solid fa-cart-shopping text-white text-lg rounded-full"></i>
            <p className="absolute text-white top-[-20%] bg-red-500 font-bold text-md px-[6px] rounded-full right-0">
              {cart.length}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* content */}
      <div
        className={`bg-white w-[250px] h-[320px] shadow-xl fixed bottom-0 right-0 z-[100] transition-all ease-in-out duration-[1s] text-xs ${
          ani ? ` translate-y-[0%]` : `translate-y-[100%]`
        } `}
      >
        <div className="w-full h-full flex flex-col justify-between">
          <div
            onClick={() => setAni(false)}
            className="bg-[#003d79] text-white text-center relative py-3 cursor-pointer"
          >
            <div className="absolute left-0 mx-4 ">
              <i className="fa-sharp fa-solid fa-chevron-down"></i>
            </div>
            <p>
              {t("inquiry_cart")} &#40;{cart.length}&#41;
            </p>
          </div>

          {cart.length > 0 ? (
            <div className="flex-grow flex gap-2 flex-col overflow-y-scroll my-2">
              {cart.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="group h-[80px] border-b-2 w-full flex items-center hover:bg-yellow-200/10  "
                  >
                    <Link
                      to={`/products/${product.id}`}
                      className="flex items-center "
                    >
                      <img
                        className="h-full w-[80px]"
                        src={product.thumbnail}
                        alt=""
                      />
                    </Link>

                    <div className="flex flex-col px-1 justify-center">
                      <p className="line-clamp-2 text-[#003d79] cursor-pointer">
                        {product.title}
                      </p>
                      <div className="hover:text-red-500">
                        <button
                          onClick={() => {
                            handleDelete(id);
                          }}
                          className="mt-3 hidden group-hover:block hover:underline text-center"
                        >
                          {t("inquiry_delete")}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center italic">{t("inquiry_status")}</p>
          )}
          <div className=" justify-end mt-2 mb-2">
            <div className="flex justify-between px-3">
              <button
                onClick={() => {
                  handleDeleteAll();
                }}
                className="py-1 px-[10px] text-red-600 bg-gray-500/20"
              >
                {t("inquiry_empty")}
              </button>
              <button
                onClick={() => {
                  navigate("/inquiry");
                  setAni(false);
                }}
                className="py-1 px-[10px] text-white bg-red-500"
              >
                {t("inquiry_inquire")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

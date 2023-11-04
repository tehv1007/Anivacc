import { Link } from "react-router-dom";
import ProductArrow from "./arrows/ProductArrow";

const ProductItem = ({ product }) => {
  const title = product.title.replace(/\s+/g, "_");
  return (
    <>
      <div className="group product-group max-w-[427px] mx-auto">
        <div className="">
          <div className="bg-white">
            <Link to={`/product/${title}`}>
              <div className="overflow-hidden grid grid-cols-1">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>

          {/* Description */}
          <div className="items-center bg-gray-200 group-hover:bg-blue-900 flex flex-col justify-between p-5 text-left">
            <h2 className="h-[50px] text-blue-800 group-hover:text-white text-lg text-center uppercase">
              {product.product_code}
            </h2>
            <Link
              to={`/product/${title}`}
              className="block line-clamp-2 h-[50px] text-gray-800 group-hover:text-white text-lg text-left cursor-pointer"
            >
              {product.title}
            </Link>
            <div className="w-[27px] h-[27px] group-hover:bg-white bg-blue-900 relative rounded-[50%] flex-shrink-0">
              <div className="absolute flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link to={`/product/${title}`}>
                  <ProductArrow className="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;

import { Link } from "react-router-dom";
import ProductArrow from "./arrows/ProductArrow";

const ProductItem = ({ product }) => {
  return (
    <>
      <div className="group product-group max-w-[427px] mx-auto">
        <div className="">
          <div className="">
            <Link to={`/products/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} />
            </Link>
          </div>

          {/* Description */}
          <div className="items-center bg-gray-200 group-hover:bg-blue-900 flex justify-between p-5 text-left">
            <Link
              to={`/products/${product.id}`}
              className="line-clamp-2 h-[50px] text-gray-800 group-hover:text-white text-lg text-left"
            >
              {product.title}
            </Link>
            <div className="w-[27px] h-[27px] group-hover:bg-white bg-blue-900 relative rounded-[50%] flex-shrink-0">
              <div className="absolute flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ProductArrow className="fill-white group-hover:fill-blue-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;

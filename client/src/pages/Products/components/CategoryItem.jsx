import { Link } from "react-router-dom";

const CategoryItem = ({
  handleCategoryClick,
  selectedCategory,
  category,
  small,
}) => {
  return (
    <li
      key={category.id}
      className={`sm:max-w-[272px] px-[10px] pb-5 text-center relative ${
        selectedCategory === category.label ? "active" : ""
      }`}
      onClick={() => handleCategoryClick(category.label)}
    >
      <div className="">
        <img className="" src={category.image} alt={category.name} />
      </div>
      <Link
        to={`/products/${category.label}`}
        className="text-gray-800 text-[16px] h-auto md:h-[48px] inline-block"
      >
        {category.name}
      </Link>

      <>
        <div className={`absolute w-full h-1 bg-gray-200 bottom-0 left-0`}>
          <div
            className={`home-after ${
              small
                ? "block"
                : selectedCategory === category.label
                ? "block"
                : "hidden"
            }`}
          />
        </div>
        <div
          className={`${
            small
              ? "bg-blue-900"
              : selectedCategory === category.label
              ? "bg-blue-900"
              : "bg-gray-200"
          } absolute w-full h-1 bg-blue-900 b-5 bottom-0 left-0 -z-1`}
        />
      </>
    </li>
  );
};

export default CategoryItem;

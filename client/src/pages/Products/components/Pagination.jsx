import { useState } from "react";

export default function Pagination({ newProducts, pagin, setPagin }) {
  const pages = Math.ceil((newProducts.length - 1) / 9);
  const pageList = Array.from({ length: pages }, (_, index) => index);
  const [pos, setPos] = useState(0);

  function handlePage(index) {
    setPagin([(index - 1) * 9, (index - 1) * 9 + 8]);
    setPos(index - 1);
  }
  return (
    <div className="mt-[10px] join rounded-none gap-3">
      {pageList.map((page, index) => {
        return (
          <button
            key={index}
            className={`join-item border-[#003d79] btn ${
              pos === index && `bg-white`
            }`}
            disabled={pos === index}
            onClick={() => handlePage(index + 1)}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}

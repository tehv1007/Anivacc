import { Link } from "react-router-dom";

export default function Card({ product }) {
  const { id, title, isNew, hot, like, preSale, thumbnail } = product;
  return (
    <Link
      to={`/products/${id}`}
      className=" text-center text-2xl hover:[&_img]:scale-110 [&_*]:transition relative block w-full col-span-1"
    >
      {/* PRESALE */}
      {preSale && (
        <div className=" preSale absolute left-0 top-0 z-10 w-12 bg-red-500 pb-4 text-white ">
          <p className="text-[14px] font-bold leading-[20px]  ">Pre Sale</p>
        </div>
      )}
      <div className="absolute z-10 right-[-4px] top-0">
        {/* NEW */}
        {isNew && (
          <div className="px-3 py-1 mb-2   flex bg-[#00DFA2] relative font-bold">
            <p className="text-white text-sm ">NEW</p>
            <div className="like w-1.5 h-2 bg-[#00DFA2] absolute bottom-0 right-0 translate-y-[103%]"></div>
          </div>
        )}

        {/* HOT */}
        {hot && (
          <div className="px-3 py-1 mb-2   flex bg-[#FF0060] relative font-bold">
            <p className="text-white text-sm ">HOT</p>
            <div className="like w-1.5 h-2 bg-[#FF0060] absolute bottom-0 right-0 translate-y-[103%]"></div>
          </div>
        )}

        {/* LIKE */}
        {like && (
          <div className="px-2 w-fit py-1 float-right flex flex-col bg-[#00C4FF] relative ">
            <i className="fa-solid fa-thumbs-up   text-white text-lg text-center"></i>
            <div className="like w-1.5 h-2 bg-[#00C4FF] absolute bottom-0 right-0 translate-y-[103%]"></div>
          </div>
        )}
      </div>
      {/* IMG */}
      <div className="border-[#003d79] border-[2px] overflow-hidden relative">
        <img className="  " src={thumbnail} alt={title} />
      </div>
      {/* NAME */}
      {title && (
        <h2 className="mx-3 text-[20px] line-clamp-2 text-[#141414]/80 font-bold  hover:text-[#003d79] ">
          {title} 
        </h2>
      )}
    </Link>
  );
}

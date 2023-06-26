import parse from "html-react-parser";

export default function ProductDesc({ long_desc }) {
  return (
    <div className="mt-10 border">
      <div className="w-full h-12 bg-[#545454] relative ">
        <div className="absolute top-1/2 left-0 translate-y-[-50%] bg-[#003d79] text-white text-[20px] py-3 px-5">
          <p>Product Description</p>
        </div>
      </div>
      <div className="py-6 px-8">{parse(long_desc)}</div>
    </div>
  );
}

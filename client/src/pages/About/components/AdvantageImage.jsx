export default function AdvantageImage() {
  return (
    <div className="relative flex justify-center items-center w-full">
      <img
        className="min-[1200px]:w-[86%] w-[80%] h-[390px] mx-auto object-cover"
        src="/images/advantage.jpg"
        alt="Image"
      />
      <h1 className=" font-montserrat text-white text-center text-5xl font-bold absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
        Our Advantage
      </h1>
    </div>
  );
}

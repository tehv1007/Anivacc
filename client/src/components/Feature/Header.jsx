export default function Header({ imgUrl }) {
  return (
    <img
      className="w-full object-cover mt-[95px] xl:mt-0"
      src={imgUrl}
      alt="Image"
    />
  );
}

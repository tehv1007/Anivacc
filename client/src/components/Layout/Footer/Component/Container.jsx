export default function Container({ children, bgColor = "transparent" }) {
  return (
    <div className={`bg-${bgColor} my-7`}>
      <div className="mx-auto min-[1220px]:w-[1180px] max-[1219px]:px-5">
        {children}
      </div>
    </div>
  );
}

// export default function Container({ children }) {
//   return (
//     <div className=" sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1440px] mx-auto px-10">
//       {children}
//     </div>
//   );
// }

export default function Container({ children, bgColor = "transparent" }) {
  return (
    <div className={`bg-${bgColor} my-7`}>
      <div className="mx-auto min-[1220px]:w-[1180px] xl:px-5 px-[10px]">
        {children}
      </div>
    </div>
  );
}

export default function Container({ children }) {
  return (
    <div className=" sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1440px] mx-auto px-10">
      {children}
    </div>
  );
}

const Heading = ({ title, text = "text-gray-800" }) => {
  return (
    <>
      <div
        className={`${text} text-2xl md:text-[34px] md:leading-[51px] font-[Montserrat] capitalize font-bold text-center`}
      >
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default Heading;

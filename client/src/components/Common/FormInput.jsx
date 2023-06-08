const FormInput = ({ placeholder, style }) => {
  const inputStyle = { ...style };
  return (
    <input
      className={`w-full ml-[-1px] h-10 border-gray-400 border-solid border inline-block leading-5 p-1 mb-[10px] shadow-[1px_1px_2px_0_rgba(0,0,0,0.1)]`}
      type="text"
      placeholder={placeholder}
      style={inputStyle}
    />
  );
};

export default FormInput;

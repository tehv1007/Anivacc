import FormRowError from "../Feature/FormRowError";

const FormInput = ({
  placeholder,
  style,
  name,
  errors,
  type = "text",
  register,
}) => {
  const inputStyle = { ...style };
  return (
    <div className="mb-[10px]">
      <input
        className={`w-full ml-[-1px] h-10 border-gray-400 border-solid border inline-block leading-5 p-1 shadow-[1px_1px_2px_0_rgba(0,0,0,0.1)]`}
        type={type}
        placeholder={placeholder}
        style={inputStyle}
        {...register(name)}
      />
      <FormRowError error={errors} />
    </div>
  );
};

export default FormInput;

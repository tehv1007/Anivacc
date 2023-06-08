import classNames from "classnames";

const Input = ({ type, register, name, placeholder }) => {
  return (
    <input
      id={name}
      type={type}
      className={classNames(
        "border border-[#3A3A43] rounded-md max-w-full w-full p-[15px] shadow outline-none text-white font-medium text-[14px] placeholder:text-[#4B5264] bg-transparent"
      )}
      placeholder={placeholder}
      {...register(`${name}`)}
    />
  );
};

export default Input;

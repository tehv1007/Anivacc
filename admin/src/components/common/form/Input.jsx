import classNames from "classnames";

const Input = ({ type, register, name, placeholder }) => {
  return (
    <input
      id={name}
      type={type}
      className={classNames(
        "border border-[#3A3A43] rounded-md max-w-full w-full py-2 shadow outline-none text-gray-900 dark:text-white font-medium text-[14px] placeholder:text-gray-500 bg-transparent"
      )}
      placeholder={placeholder}
      {...register(`${name}`)}
    />
  );
};

export default Input;

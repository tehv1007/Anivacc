import classNames from "classnames";
import { useController } from "react-hook-form";

const Input = ({ type, control, name, placeholder }) => {
  const { field } = useController({
    control: control,
    name: name,
    defaultValue: "",
  });

  return (
    <input
      id={name}
      type={type}
      className={classNames(
        "border border-[#3A3A43] rounded-md max-w-full w-full p-[15px] shadow outline-none text-white font-medium text-[14px] placeholder:text-[#4B5264] bg-transparent"
      )}
      placeholder={placeholder}
      {...field}
    />
  );
};

export default Input;

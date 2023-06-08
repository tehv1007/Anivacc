import { memo } from "react";
import { useController } from "react-hook-form";

const TextArea = ({ name, control, row, placeholder }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <textarea
      {...field}
      className="border border-[#3A3A43] rounded-md max-w-full w-full p-[15px] shadow outline-none text-white font-medium text-[14px] placeholder:text-[#4B5264] bg-transparent resize-y"
      rows={row}
      placeholder={placeholder}
    />
  );
};

export default memo(TextArea);

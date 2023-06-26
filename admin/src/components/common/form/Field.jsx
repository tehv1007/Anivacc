import Input from "./Input";
import Label from "./Label";

const Field = ({ error, register, labelText, name, placeholder, type }) => {
  return (
    <div className="flex flex-col gap-y-[4px] w-full dark:text-white">
      <Label text={labelText} htmlFor={name} />
      <Input
        type={type}
        register={register}
        name={name}
        placeholder={placeholder}
      />

      {error && (
        <span className="text-red-500 text-[14px] font-medium">{error}</span>
      )}
    </div>
  );
};

export default Field;

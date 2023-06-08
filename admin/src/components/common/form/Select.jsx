import { Controller } from "react-hook-form";

const Select = ({ name, label, control, defaultValue, children }) => {
  const labelId = `${name}-label`;
  return (
    <Controller
      render={({ field }) => (
        <div labelId={labelId} label={label} {...field}>
          {children}
        </div>
      )}
      name={name}
      control={control}
      defaultValue={defaultValue}
    />
  );
};
export default Select;

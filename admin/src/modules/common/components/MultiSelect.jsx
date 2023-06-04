import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

import { Controller } from "react-hook-form";

const MultiSelect = ({
  name,
  label,
  control,
  defaultValue,
  children,
  ...props
}) => {
  const labelId = `${name}-label`;
  return (
    <FormControl {...props} fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        control={control}
        name="category_id"
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              {...field}
              multiple
              labelId="category-label"
              id="category-select"
              disabled={isLoading}
              value={field.value || []}
              onChange={(e) => field.onChange(e.target.value)}
              inputProps={{
                name: "category_id",
                id: "category_id",
              }}
            >
              {categoryQuery.data.map((category) => (
                <MenuItem key={category.name} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />

      <Controller
        render={({ field }) => (
          <Select labelId={labelId} label={label} {...field}>
            {children}
          </Select>
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};

export default MultiSelect;

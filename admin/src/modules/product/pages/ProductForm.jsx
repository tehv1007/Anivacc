import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  Select,
  Grid,
  Link,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import RHFSelect from "../../common/components/RHFSelect";
import { Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import FormRowError from "../../common/components/FormRowError";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ProductForm = ({
  errors,
  title,
  type,
  register,
  onSubmit,
  watch,
  control,
  categoryQuery,
  brandQuery,
  isLoading,
  addProductMutation,
  uploadFileMutation,
}) => {
  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={onSubmit}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          mb={4}
          fontWeight={500}
        >
          {title}
        </Typography>
        {addProductMutation.isSuccess && (
          <Alert severity="success" sx={{ marginBottom: 4 }}>
            <AlertTitle>Success</AlertTitle>
            Added product successfully —{" "}
            <Link to={`/products/`}>check it out!</Link>
          </Alert>
        )}

        <Grid container spacing={3}>
          {/* Title */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              disabled={isLoading}
              {...register("title")}
            />
            <FormRowError error={errors.title} />
          </Grid>

          {/* Product code */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Code"
              variant="outlined"
              fullWidth
              disabled={isLoading}
              {...register("product_code")}
            />
            <FormRowError error={errors.product_code} />
          </Grid>

          {/* Price */}
          {/* <Grid item xs={12} sm={6}>
            <Controller
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <NumericFormat
                  customInput={TextField}
                  allowNegative={false}
                  onValueChange={(v) => {
                    onChange(v.floatValue);
                  }}
                  prefix="$"
                  fullWidth
                  label="Price"
                  fixedDecimalScale
                  thousandSeparator
                  inputRef={ref}
                  value={value}
                  onBlur={onBlur}
                  disabled={isLoading}
                />
              )}
              name="price"
              control={control}
            />
            <FormRowError error={errors.price} />
          </Grid> */}

          {/*Short Desc */}
          <Grid item xs={12}>
            <TextField
              label="Description"
              multiline
              rows={6}
              fullWidth
              disabled={isLoading}
              {...register("short_desc")}
            />
            <FormRowError error={errors.short_desc} />
          </Grid>

          {/* Long Desc */}
          <Grid item xs={12}>
            <Controller
              control={control}
              name="long_desc"
              render={({ field }) => (
                <ReactQuill
                  value={field.value}
                  onChange={field.onChange}
                  theme="snow"
                  placeholder="Enter long description..."
                />
              )}
            />
            <FormRowError error={errors.long_desc} />
          </Grid>

          {/* Category */}
          {/* <Grid item xs={12} sm={6}>
            <RHFSelect
              name="category_id"
              label="Category"
              control={control}
              disabled={isLoading}
            >
              {categoryQuery.data.map((category) => (
                <MenuItem key={category.name} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </RHFSelect>
            <FormRowError error={errors.category_id} />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <Controller
              control={control}
              name="categories"
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
                      name: "categories",
                      id: "categories",
                    }}
                  >
                    {categoryQuery.data.map((category) => (
                      <MenuItem key={category.name} value={category.name}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </Grid>

          {/* Brand */}
          <Grid item xs={12} sm={6}>
            <RHFSelect
              name="brand_id"
              label="Brand"
              control={control}
              disabled={isLoading}
            >
              {brandQuery.data.map((brand) => (
                <MenuItem key={brand.name} value={brand.id}>
                  {brand.name}
                </MenuItem>
              ))}
            </RHFSelect>
            <FormRowError error={errors.brand_id} />
          </Grid>

          {/* Upload image */}
          <Grid item xs={12}>
            <Box>
              <Button
                variant="contained"
                color="success"
                component="label"
                fullWidth
                disabled={isLoading}
              >
                Upload Image
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  {...register("imageFile")}
                />
              </Button>
              <Typography>{watch("imageFile")?.[0]?.name}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              disabled={isLoading}
              startIcon={isLoading && <CircularProgress color={"inherit"} />}
            >
              {uploadFileMutation.isLoading
                ? "Uploading photo..."
                : addProductMutation.isLoading
                ? "Adding"
                : type}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductForm;

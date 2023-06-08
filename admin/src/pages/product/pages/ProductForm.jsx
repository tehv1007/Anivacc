import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Controller } from "react-hook-form";
import FormRow from "../../../components/common/form/FormRow";
import FormRowError from "../../../components/common/form/FormRowError";
// import Select from "../../components/common/form/Select";
import Select from "react-select";
import UploadIcon from "../../../components/common/form/icons/UploadIcon";

const ProductForm = (props) => {
  const {
    errors,
    type,
    register,
    setValue,
    onSubmit,
    watch,
    control,
    categoryQuery,
    brandQuery,
    isLoading,
    addProductMutation,
    uploadFileMutation,
  } = props;

  const categories = categoryQuery.data.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  const brands = brandQuery.data.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  return (
    <div>
      {/* Container */}
      <div className="max-w-screen-md mx-auto px-4">
        {/* Layout */}
        <div className="py-6">
          <form onSubmit={onSubmit} className="flex flex-col gap-2">
            {/* Fields */}
            <div className="grid grid-cols-2 gap-4">
              {/* Title */}
              <FormRow label="Title" className="">
                <input
                  type="text"
                  placeholder="Enter your product name here..."
                  className="inline-block w-full border py-1"
                  {...register("title")}
                />
                <FormRowError error={errors.title} />
              </FormRow>

              {/* Product code */}
              <FormRow label="Product Code" className="">
                <input
                  type="text"
                  placeholder="Enter your product name here..."
                  className="inline-block w-full border py-1"
                  {...register("product_code")}
                />
                <FormRowError error={errors.product_code} />
              </FormRow>
            </div>

            {/*Short Description */}
            <FormRow label="Short Description" className="col-span-full">
              <Controller
                control={control}
                name="short_desc"
                render={({ field }) => (
                  <ReactQuill
                    value={field.value}
                    onChange={field.onChange}
                    theme="snow"
                    placeholder="Enter short description..."
                  />
                )}
              />
              <FormRowError error={errors.short_desc} />
            </FormRow>

            {/* Long Description */}
            <FormRow label="Long Description" className="col-span-full">
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
            </FormRow>

            {/* Categories */}
            <FormRow label="Categories">
              <div className="col-span-8 sm:col-span-4">
                <Controller
                  control={control}
                  name="categories"
                  register={register}
                  setValue={setValue}
                  defaultValues={null}
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                  }) => (
                    <Select
                      required
                      options={categories}
                      onChange={onChange}
                      isMulti={true}
                      onBlur={onBlur}
                      value={value}
                      name={name}
                      ref={ref}
                    />
                  )}
                />
                <FormRowError error={errors.categories} />
              </div>
            </FormRow>

            {/* Brand */}
            <FormRow label="Brands">
              <div className="col-span-8 sm:col-span-4">
                <Controller
                  control={control}
                  name="brand_id"
                  register={register}
                  setValue={setValue}
                  defaultValues={null}
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                  }) => (
                    <Select
                      required
                      options={brands}
                      onChange={onChange}
                      isMulti={false}
                      onBlur={onBlur}
                      value={value}
                      name={name}
                      ref={ref}
                    />
                  )}
                />
                <FormRowError error={errors.brand_id} />
              </div>
            </FormRow>

            {/* Image */}
            <FormRow label="Image" className="col-span-full">
              <div className="w-full text-center">
                <label
                  className="block px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer"
                  role="button"
                  tabIndex={0}
                  htmlFor="file-upload"
                  disabled={isLoading}
                >
                  <input
                    type="file"
                    tabIndex={-1}
                    style={{ display: "none" }}
                    id="file-upload"
                    hidden
                    accept="image/*"
                    multiple
                    {...register("imageFile")}
                  />
                  <span className="mx-auto flex justify-center">
                    <UploadIcon />
                  </span>
                  <p className="text-sm mt-2">Drag your image here</p>
                  <em className="text-xs text-gray-400">
                    (Only *.jpeg and *.png images will be accepted)
                  </em>
                </label>
                {/* Preview */}
                {watch("imageFile") && <div>{watch("imageFile")[0].name}</div>}
                {errors.imageFile && (
                  <FormErrorMessage>
                    {errors.imageFile.message}
                  </FormErrorMessage>
                )}
              </div>
            </FormRow>

            <div className="py-4 lg:py-8 px-6 border-t border-gray-100">
              <div className="leading-5 text-sm text-white font-medium text-right">
                <button
                  className="align-bottom inline-flex items-center justify-center cursor-pointer transition-colors duration-150 focus:outline-none px-4 py-2 rounded-lg bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 h-12"
                  type="submit"
                  // disabled={isLoading || !isDirty}
                >
                  <div className="flex items-center gap-2">
                    {uploadFileMutation.isLoading
                      ? "Uploading photo..."
                      : addProductMutation.isLoading
                      ? "Adding"
                      : type}
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;

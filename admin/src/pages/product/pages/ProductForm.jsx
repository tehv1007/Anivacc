import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Controller } from "react-hook-form";
import FormRow from "../../../components/common/form/FormRow";
import FormRowError from "../../../components/common/form/FormRowError";
import Select from "react-select";
import Field from "../../../components/common/form/Field";
import Loader from "../../../components/common/loading/Loader";
import { formats, modules } from "../../../helpers/quill";

const ProductForm = (props) => {
  const {
    errors,
    type,
    register,
    setValue,
    onSubmit,
    control,
    brandQuery,
    isLoading,
    handleChange,
    images,
    watch,
    showPreview,
    handleSubmit,
    isLoadingImage,
    urls,
  } = props;

  // useEffect(() => {
  //   return () => {
  //     if (imagePreview) {
  //       URL.revokeObjectURL(imagePreview[0]);
  //     }
  //   };
  // }, [imagePreview]);

  const parentCategory = watch("parentCategory");
  const getChildCategories = (parentCategory) => {
    if (parentCategory) {
      const selectedCategory = categoryArr.find(
        (item) => item.value === parentCategory.value
      );
      return selectedCategory ? selectedCategory.children : [];
    }
    return [];
  };

  const brands = brandQuery.data.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  const status = [
    { value: "like", label: "Like" },
    { value: "hot", label: "Hot" },
    { value: "new", label: "New" },
  ];

  const langArr = [
    { value: "vi", label: "Tiếng Việt" },
    { value: "en", label: "English" },
  ];

  const categoryArr = [
    {
      value: "1",
      label: "Sản phẩm cho lợn",
      children: [
        { value: "11", label: "Vaccine" },
        { value: "12", label: "Kháng thể" },
        { value: "13", label: "Thức ăn bổ sung" },
      ],
    },
    {
      value: "2",
      label: "Sản phẩm cho gà",
      children: [
        { value: "21", label: "Vaccine" },
        { value: "22", label: "Kháng thể" },
      ],
    },
    {
      value: "3",
      label: "Sản phẩm cho vịt",
      children: [
        { value: "31", label: "Vaccine" },
        { value: "32", label: "Kháng thể" },
      ],
    },
    {
      value: "4",
      label: "Sản phẩm cho bò",
      children: [
        { value: "41", label: "Vaccine" },
        { value: "42", label: "Kháng thể" },
      ],
    },
    {
      value: "5",
      label: "Sản phẩm cho thủy sản",
      children: [
        { value: "51", label: "Vaccine" },
        { value: "52", label: "Kháng thể" },
      ],
    },
    {
      value: "6",
      label: "Sản phẩm cho thú cưng",
      children: [
        { value: "61", label: "Vaccine" },
        { value: "62", label: "Thức ăn bổ sung" },
      ],
    },
    {
      value: "7",
      label: "Thuốc sát trùng",
      children: [],
    },
    {
      value: "8",
      label: "Dung môi pha vaccine",
      children: [],
    },
    {
      value: "9",
      label: "Chế phẩm sinh học",
      children: [],
    },
    {
      value: "10",
      label: "Sản phẩm dinh dưỡng",
      children: [],
    },
    {
      value: "11",
      label: "Vaccine nhập khẩu",
      children: [],
    },
  ];

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
              <Field
                register={register}
                error={errors?.title?.message}
                labelText="Tên sản phẩm"
                name="title"
                placeholder="Tên sản phẩm"
                type="text"
              />

              {/* Product code */}
              <Field
                register={register}
                error={errors?.product_code?.message}
                labelText="Mã sản phẩm"
                name="product_code"
                placeholder="Mã sản phẩm"
                type="text"
              />
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
                    modules={modules}
                    formats={formats}
                  />
                )}
              />
              {errors.short_desc && (
                <span className="text-red-500 text-[14px] font-medium">
                  {errors.short_desc.message}
                </span>
              )}
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
                    modules={modules}
                    formats={formats}
                  />
                )}
              />
              {/* <FormRowError error={errors.long_desc} /> */}
              {errors.long_desc && (
                <span className="text-red-500 text-[14px] font-medium">
                  {errors.long_desc.message}
                </span>
              )}
            </FormRow>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Parent Category */}
              <FormRow label="Parent Category">
                <div className="col-span-8 sm:col-span-4 text-gray-900">
                  <Controller
                    control={control}
                    name="parentCategory"
                    register={register}
                    setValue={setValue}
                    defaultValues={null}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                    }) => (
                      <Select
                        options={categoryArr}
                        onChange={(selectedOption) => {
                          onChange(selectedOption);
                        }}
                        onBlur={onBlur}
                        value={value}
                        name={name}
                        ref={ref}
                        isClearable={true}
                      />
                    )}
                  />
                </div>
              </FormRow>

              {/* Child category */}
              <FormRow label="Child Category">
                <div className="col-span-8 sm:col-span-4 text-gray-900">
                  <Controller
                    control={control}
                    name="childCategory"
                    register={register}
                    setValue={setValue}
                    defaultValues={null}
                    render={({
                      field: { onChange, onBlur, value },
                      fieldState: { invalid },
                    }) => (
                      <Select
                        options={getChildCategories(parentCategory)}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        name={name}
                        isClearable={true}
                        isDisabled={
                          !parentCategory ||
                          getChildCategories(parentCategory).length === 0
                        }
                        className={invalid ? "select-error" : ""}
                      />
                    )}
                  />
                </div>
              </FormRow>
            </div>

            {/* Lang + status */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Brand */}
              <FormRow label="Brands">
                <div className="col-span-8 sm:col-span-4 text-gray-900">
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
                        // required
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

              {/* Language */}
              <FormRow label="Language">
                <div className="col-span-8 sm:col-span-4 text-gray-900">
                  <Controller
                    control={control}
                    name="lang_code"
                    register={register}
                    setValue={setValue}
                    defaultValues={null}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                    }) => (
                      <Select
                        options={langArr}
                        onChange={onChange}
                        isMulti={false}
                        onBlur={onBlur}
                        value={value}
                        name={name}
                        ref={ref}
                      />
                    )}
                  />
                  <FormRowError error={errors.lang_code} />
                </div>
              </FormRow>

              {/* Status */}
              <FormRow label="Status">
                <div className="col-span-8 sm:col-span-4 text-gray-900">
                  <Controller
                    control={control}
                    name="status"
                    register={register}
                    setValue={setValue}
                    defaultValues={null}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                    }) => (
                      <Select
                        options={status}
                        onChange={onChange}
                        isMulti={true}
                        onBlur={onBlur}
                        value={value}
                        name={name}
                        ref={ref}
                      />
                    )}
                  />
                  <FormRowError error={errors.status} />
                </div>
              </FormRow>
            </div>

            {/* Image */}
            {/* <FormRow label="Image" className="col-span-full">
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

                {imagePreview && (
                  <img
                    src={URL.createObjectURL(imagePreview[0])}
                    alt="Product Preview"
                  />
                )}
              </div>
            </FormRow> */}

            <FormRow label="Image" className="col-span-full ">
              <div className="flex items-center gap-10">
                <input
                  type="file"
                  multiple
                  onChange={handleChange}
                  className="border"
                />
                <button
                  onClick={handleSubmit}
                  className={`inline-block px-3 py-2 bg-blue-500 text-sm flex-grow ${
                    images?.length === 0 || isLoadingImage
                      ? "disabled:bg-gray-500"
                      : ""
                  }`}
                  disabled={
                    images?.length == 0 || isLoadingImage || urls.length > 0
                  }
                >
                  <div className="flex items-center gap-2">
                    {isLoadingImage ? (
                      <Loader />
                    ) : (
                      <span className="inline-block w-full">Upload Images</span>
                    )}
                  </div>
                </button>
              </div>

              {/* Preview Image */}
              {images?.length > 0 && showPreview ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-2">
                  {images.map((image, idx) => {
                    return (
                      <p key={idx}>
                        <img src={image} alt="" />
                      </p>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-2">
                  {/* {defaultImgs?.map((image, idx) => {
                    return (
                      <p key={idx}>
                        <img src={image} alt="" />
                      </p>
                    );
                  })} */}
                </div>
              )}
            </FormRow>

            <div className="py-4 lg:py-8 px-6 border-t border-gray-100">
              <div className="leading-5 text-sm text-white font-medium text-right">
                <button
                  className={`${
                    images?.length === 0 || isLoading || isLoadingImage
                      ? "disabled:bg-gray-500"
                      : ""
                  } align-bottom inline-flex items-center justify-center cursor-pointer transition-colors duration-150 focus:outline-none px-4 py-2 rounded-lg bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 h-12`}
                  type="submit"
                  disabled={images?.length == 0 || isLoading || isLoadingImage}
                >
                  <div className="flex items-center gap-2">
                    {isLoading ? "Adding product" : type}
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

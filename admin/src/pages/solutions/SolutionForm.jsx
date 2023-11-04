import { Controller } from "react-hook-form";
import Field from "../../components/common/form/Field";
import FormRow from "../../components/common/form/FormRow";
import FormRowError from "../../components/common/form/FormRowError";
import Select from "react-select";
import ReactQuill from "react-quill";
import { formats, modules } from "../../helpers/quill";
import Button from "../news/components/Button";
import { langArr, solutions } from "../../utils/postArr";
import Loader from "../../components/common/loading/Loader";

const SolutionForm = (props) => {
  const {
    register,
    onSubmit,
    errors,
    handleImageChange,
    image,
    control,
    setValue,
    type,
    isLoading,
    isDirty = true,
  } = props;

  return (
    <form onSubmit={onSubmit} className="flex flex-col w-full gap-y-5">
      <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-10">
        <Field
          register={register}
          error={errors?.title?.message}
          labelText="Tiêu đề bài viết"
          name="title"
          placeholder="Nhập tiêu đề bài viết"
          type="text"
        />

        <FormRow label="Hình đại diện" className="col-span-full ">
          <div className="w-full">
            <input
              type="file"
              onChange={handleImageChange}
              className="border"
            />
          </div>

          {/* Preview Image */}
          {image && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-2">
              <img src={image} alt="avatar image" />
            </div>
          )}
        </FormRow>
      </div>

      <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-10">
        <FormRow label="Danh mục">
          <div className="col-span-8 sm:col-span-4 text-gray-900">
            <Controller
              control={control}
              name="category"
              register={register}
              setValue={setValue}
              defaultValues={null}
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Select
                  // required
                  options={solutions}
                  onChange={onChange}
                  isMulti={true}
                  onBlur={onBlur}
                  value={value}
                  name={name}
                  ref={ref}
                />
              )}
            />
            <FormRowError error={errors.category} />
          </div>
        </FormRow>

        {/* Language */}
        <FormRow label="Ngôn ngữ bài viết">
          <div className="col-span-8 sm:col-span-4 text-gray-900">
            <Controller
              control={control}
              name="lang_code"
              register={register}
              setValue={setValue}
              defaultValues={null}
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
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
      </div>

      {/* Description */}
      <FormRow label="Mô tả ngắn về bài viết" className="col-span-full">
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <ReactQuill
              value={field.value}
              onChange={field.onChange}
              theme="snow"
              placeholder="Nhập mô tả ngắn..."
              modules={modules}
              formats={formats}
            />
          )}
        />
        <FormRowError error={errors.description} />
      </FormRow>

      {/* Content */}
      <FormRow label="Nội dung" className="col-span-full">
        <Controller
          control={control}
          name="content"
          render={({ field }) => (
            <ReactQuill
              value={field.value}
              onChange={field.onChange}
              theme="snow"
              placeholder="Nhập nội dung bài viết..."
              modules={modules}
              formats={formats}
            />
          )}
        />
        <FormRowError error={errors.content} />
      </FormRow>

      <Button
        className="mt-2 flex items-center gap-2 justify-center"
        type={"submit"}
        disabled={isLoading || !isDirty}
      >
        {isLoading && <Loader />}
        <span className="inline-block">{type}</span>
      </Button>
    </form>
  );
};

export default SolutionForm;

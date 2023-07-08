import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreatePost } from "../../config/schema";
import Field from "../../components/common/form/Field";
import { AuthContext } from "../auth/Auth";
import FormRow from "../../components/common/form/FormRow";
import FormRowError from "../../components/common/form/FormRowError";
import Select from "react-select";
import ReactQuill from "react-quill";
import { formats, modules } from "../../helpers/quill";
import Button from "../news/components/Button";
import { useCreateSolution } from "../../hooks/useSolution";

const solutions = [
  {
    label: "Chẩn Đoán Xét Nghiệm Bệnh Động Vật",
    value: "Chẩn đoán xét nghiệm bệnh động vật",
  },
  {
    label: "Kháng Sinh Đồ",
    value: "Kháng sinh đồ",
  },
  {
    label: "Các Phép Thử PCR",
    value: "Các phép thử PCR",
  },
  {
    label: "Các Phép Thử ELISA",
    value: "Các phép thử ELISA",
  },
  {
    label: "Các Phép Thử Huyết Thanh Học Khác",
    value: "Các phép thử huyết thanh học khác",
  },
  {
    label: "Phân Lập Vi Sinh Vật",
    value: "Phân lập vi sinh vật",
  },
];

const langArr = [
  { value: "vi", label: "Tiếng Việt" },
  { value: "en", label: "English" },
];

const AddSolution = () => {
  const { isLoggedIn: session } = useContext(AuthContext);
  const {
    register,
    control,
    reset,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schemaCreatePost),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: "",
      category: "",
      content: "",
      lang_code: "",
    },
  });

  const postMutation = useCreateSolution(reset);

  const handleCreatePost = (values) => {
    console.log(values);
    const { category, lang_code, ...post } = values;
    postMutation.mutate({
      ...post,
      category: category.map((c) => c.value),
      author_id: session?.user?.id,
      lang_code: lang_code.value,
    });
  };

  return (
    <div className="container flex flex-col gap-y-5">
      <h2 className="text-xl font-semibold text-center md:text-left">
        Tạo bài viết giải pháp mới
      </h2>

      <form
        onSubmit={handleSubmit(handleCreatePost)}
        className="flex flex-col w-full gap-y-5"
      >
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-10">
          <Field
            register={register}
            error={errors?.title?.message}
            labelText="Tiêu đề bài viết"
            name="title"
            placeholder="Nhập tiêu đề bài viết"
            type="text"
          />

          <Field
            register={register}
            error={errors?.thumbnail?.message}
            labelText="Thumbnail"
            name="thumbnail"
            placeholder="Nhập thumbnail"
            type="url"
          />
        </div>

        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-10">
          <FormRow label="Category">
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
          <FormRow label="Language">
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

        <Button className="mt-2" type={"submit"}>
          Tạo bài viết
        </Button>
      </form>
    </div>
  );
};

export default AddSolution;

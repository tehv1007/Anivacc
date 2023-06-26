import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "./components/Button";
import { useCreatePost } from "../../hooks/usePost";
import { schemaCreatePost } from "../../config/schema";
import Field from "../../components/common/form/Field";
import { AuthContext } from "../auth/Auth";
import FormRow from "../../components/common/form/FormRow";
import FormRowError from "../../components/common/form/FormRowError";
import Select from "react-select";
import { formats, modules } from "../product/helpers/quill";
import ReactQuill from "react-quill";

const categories = [
  {
    label: "Tin tức công ty",
    value: "company",
  },
  {
    label: "Tin tức trong ngành",
    value: "industry",
  },
];
const AddNews = () => {
  const { isLoggedIn: session } = useContext(AuthContext);
  // const editorRef = useRef(null);
  const postMutation = useCreatePost();

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schemaCreatePost),
  });

  const handleCreatePost = (values) => {
    const { category, ...post } = values;
    console.log({
      ...values,
      category: category.value,
      author_id: session?.user?.id,
    });
    postMutation.mutate({
      ...values,
      category: category.value,
      // content: editorRef.current.getContent(),
      author_id: session?.user?.id,
    });
  };

  return (
    <div className="container flex flex-col gap-y-5">
      <h2 className="text-xl font-semibold text-center md:text-left">
        Tạo bài viết mới
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
                    options={categories}
                    onChange={onChange}
                    isMulti={false}
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

          <Field
            register={register}
            error={errors?.description?.message}
            labelText="Mô tả"
            name="description"
            placeholder="Nhập mô tả"
            type="text"
          />
        </div>

        {/* <div className="flex flex-col gap-y-2 mt-10">
          <Label text={"Nội dung"} htmlFor={"content"} />
          <PostEditor
            editorRef={editorRef}
            initialValue={"<h1>Hello world</h1>"}
            height={500}
            menubar={true}
          />
        </div> */}
        {/* Long Description */}
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

export default AddNews;

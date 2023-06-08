import { useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import PostEditor from "./post/PostEditor";
import Button from "./components/Button";
import { useCreatePost } from "../../hooks/usePost";
import { schemaCreatePost } from "../../config/schema";
import Field from "../../components/common/form/Field";
import Label from "../../components/common/form/Label";
import { AuthContext } from "../auth/Auth";

const AddNews = () => {
  const { isLoggedIn: session } = useContext(AuthContext);
  const editorRef = useRef(null);
  const postMutation = useCreatePost();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schemaCreatePost),
  });

  const handleCreatePost = (values) => {
    postMutation.mutate({
      ...values,
      // @ts-ignore
      content: editorRef.current.getContent(),
      author_id: session?.user?.id,
    });
  };

  return (
    <div className="container flex flex-col gap-y-5">
      <h2 className="text-xl font-semibold text-center md:text-left">
        Tạo bài viết mới
      </h2>

      <form
        // @ts-ignore
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

          <Field
            register={register}
            error={errors?.description?.message}
            labelText="Mô tả"
            name="description"
            placeholder="Nhập mô tả"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label text={"Nội dung"} htmlFor={"content"} />

          <PostEditor
            editorRef={editorRef}
            initialValue={"<h1>Hello world</h1>"}
            height={500}
            menubar={true}
          />
        </div>

        <Button className="mt-2" type={"submit"}>
          Tạo bài viết
        </Button>
      </form>
    </div>
  );
};

export default AddNews;

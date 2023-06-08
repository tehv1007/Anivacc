import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../config/supabase";
import { useForm } from "react-hook-form";
import ProductForm from "./ProductForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Loading from "../../../components/common/loading/Loading";
import { generateFilePath } from "../../../helpers/generateFilePath";

const productSchema = yup
  .object({
    title: yup.string().max(300).required("Title is required"),
    product_code: yup.string().max(300).required("Title is required"),
    short_desc: yup.string().required("Description is a required field"),
    long_desc: yup.string().required("Description is a required field"),
  })
  .required();

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: {
      title: "",
      product_code: "",
      short_desc: "",
      long_desc: "",
      brand_id: "",
      categories: [],
      imageFile: "",
    },
  });

  const [categoryQuery, brandQuery] = useQueries({
    queries: [
      {
        queryKey: ["categories"],
        queryFn: () => supabase.from("category").select(),
        select: (res) => res.data,
      },
      {
        queryKey: ["brands"],
        queryFn: () => supabase.from("brand").select(),
        select: (res) => res.data,
      },
    ],
  });

  const addProductMutation = useMutation({
    mutationFn: (newProduct) => supabase.from("product").insert(newProduct),
    onSuccess: () => {
      reset();
      console.log("OK");
    },
  });

  const uploadFileMutation = useMutation({
    mutationFn: ({ file }) => {
      const filePath = generateFilePath(file);

      return supabase.storage
        .from("anivacc")
        .upload(`products/${filePath}`, file, {
          cacheControl: "3600",
          upsert: false,
        });
    },
    select: (res) => {},
  });

  const isLoading = [categoryQuery, brandQuery].some(
    (query) => query.isLoading
  );

  const isProductUploading =
    addProductMutation.isLoading || uploadFileMutation.isLoading;

  async function handleAddProduct(data) {
    console.log(data);
    const { data: file } = await uploadFileMutation.mutateAsync({
      file: data.imageFile[0],
    });

    const { data: thumbnail } = supabase.storage
      .from("anivacc")
      .getPublicUrl(file.path);
    console.log(thumbnail);

    const { imageFile, brand_id, categories, ...product } = data;

    addProductMutation.mutate({
      ...product,
      thumbnail: thumbnail.publicUrl,
      brand_id: brand_id.value,
      categories:
        categories.length != undefined
          ? categories.map(({ label }) => label)
          : [categories.label],
    });
  }
  if (isLoading) return <Loading />;

  return (
    <ProductForm
      addProductMutation={addProductMutation}
      uploadFileMutation={uploadFileMutation}
      isLoading={isProductUploading}
      title="Add New Product"
      type="Add"
      categoryQuery={categoryQuery}
      brandQuery={brandQuery}
      control={control}
      register={register}
      onSubmit={handleSubmit(handleAddProduct)}
      watch={watch}
      errors={errors}
      setValue={setValue}
    />
  );
}

import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../config/supabase";
import Loading from "../../common/components/Loading";
import { useForm } from "react-hook-form";
import ProductForm from "./ProductForm";
import { generateFilePath } from "../helpers/generateFilePath";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const productSchema = yup
  .object({
    title: yup.string().max(300).required("Title is required"),
    product_code: yup.string().max(300).required("Title is required"),
    // price: yup
    //   .number()
    //   .typeError("Please choose a price")
    //   .positive("Price is positive number")
    //   .required("Price is required"),
    short_desc: yup.string().required("Description is a required field"),
    long_desc: yup.string().required("Description is a required field"),
    // category_id: yup
    //   .mixed()
    //   .oneOf([1, 2, 3, 4], "Please select a category")
    //   .required("Category is required"),
    // category_id: yup
    //   .array()
    //   .of(yup.number())
    //   .min(1, "Please select at least one category")
    //   .required("Category is required"),
    brand_id: yup
      .mixed()
      .oneOf([1, 2, 3, 4, 5], "Please select a brand")
      .required("Brand is required"),
  })
  .required();

export default function ProductAdd() {
  const {
    register,
    handleSubmit,
    reset,
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
    },
  });
  // console.log(errors);

  const queryClient = useQueryClient();

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
    // const categories = queryClient.getQueryData({
    //   queryKey: ["categories"],
    // }).data;

    // const category = categories.find((c) => c.id === Number(data.category_id));
    // const selectedCategories = data.categories.map((categoryName) => {
    //   const category = categories.find((c) => c.name === categoryName);
    //   return category.name;
    // });

    const { data: file } = await uploadFileMutation.mutateAsync({
      file: data.imageFile[0],
    });

    const { data: thumbnail } = supabase.storage
      .from("anivacc")
      .getPublicUrl(file.path);

    const { imageFile, ...product } = data;

    addProductMutation.mutate({
      ...product,
      // categories: selectedCategories,
      thumbnail: thumbnail.publicUrl,
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
    />
  );
}

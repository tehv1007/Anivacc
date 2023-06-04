import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../config/supabase";
import Loading from "../../common/components/Loading";
import { useForm } from "react-hook-form";
import { convertPrice } from "../helpers/price";
import ProductForm from "./ProductForm";
import { useParams } from "react-router-dom";
import { generateFilePath } from "../helpers/generateFilePath";

const EditProduct = () => {
  const { productId } = useParams();
  const queryClient = useQueryClient();

  const [categoryQuery, brandQuery, productQuery] = useQueries({
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
      {
        queryKey: ["product"],
        queryFn: () =>
          supabase.from("product").select().eq("id", productId).single(),
        select: (res) => res.data,
      },
    ],
  });

  const addProductMutation = useMutation({
    mutationFn: (newProduct) => supabase.from("product").insert(newProduct),
    onSuccess: () => console.log("OK"),
  });

  const uploadFileMutation = useMutation({
    mutationFn: ({ category, file }) => {
      filePath = generateFilePath(file);

      return supabase.storage
        .from("anivacc")
        .upload(`products/${filePath}`, file, {
          cacheControl: "3600",
          upsert: false,
        });
    },
    select: (res) => {},
  });

  const isLoading = [categoryQuery, brandQuery, productQuery].some(
    (query) => query.isLoading
  );

  async function handleEditProduct(data) {
    // const categories = queryClient.getQueryData({
    //   queryKey: ["categories"],
    // }).data;

    // const category = categories.find((c) => c.id === Number(data.category_id));

    const { data: file } = await uploadFileMutation.mutateAsync({
      // category: category.name,
      file: data.imageFile[0],
    });

    const { data: thumbnail } = supabase.storage
      .from("anivacc")
      .getPublicUrl(file.path);

    const { imageFile, ...product } = data;

    addProductMutation.mutate({
      ...product,
      // price: convertPrice(data.price),
      thumbnail: thumbnail.publicUrl || product.thumbnail,
    });
  }

  if (isLoading) return <Loading />;
  const product = productQuery.data;
  console.log(product);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: product.title,
      product_code: product.product_code,
      long_desc: product.long_desc,
      short_desc: product.short_desc,
      categories: product.categories,
      brand_id: product.brand_id,
      // imageFile: product.thumbnail
    },
  });

  return (
    <ProductForm
      title="Edit Product"
      type="Update Product"
      categoryQuery={categoryQuery}
      brandQuery={brandQuery}
      control={control}
      register={register}
      onSubmit={handleSubmit(handleEditProduct)}
      watch={watch}
    />
  );
};

export default EditProduct;

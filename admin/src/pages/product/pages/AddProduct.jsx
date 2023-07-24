import { useMutation, useQueries } from "@tanstack/react-query";
import { supabase } from "../../../config/supabase";
import { useForm } from "react-hook-form";
import ProductForm from "./ProductForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Loading from "../../../components/common/loading/Loading";
import { storage } from "../../../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import removeAccents from "../../../utils/deunicode";

const productSchema = yup
  .object({
    title: yup.string().max(300).required("Title is required"),
    product_code: yup.string().max(300).required("Title is required"),
    short_desc: yup.string().required("Description is a required field"),
    long_desc: yup.string().required("Description is a required field"),
  })
  .required();

export default function AddProduct() {
  const [isFileUploading, setIsFileUploading] = useState(false);
  const [urls, setUrls] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [showPreview, setShowPreview] = useState(true);
  const imageTypeRegex = /image\/(png|jpg|jpeg|webp)/gm;

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
      parentCategory: "",
      childCategory: "",
      status: "",
      lang_code: [],
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
      toast.success("Tạo sản phẩm thành công!");
    },
  });

  // const imagePreview = watch("imageFile", null);
  const isLoading = [categoryQuery, brandQuery].some(
    (query) => query.isLoading
  );

  const handleChange = (e) => {
    const files = [...e.target.files];

    const validImageFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match(imageTypeRegex)) {
        validImageFiles.push(file);
      }
    }
    if (validImageFiles.length) {
      console.log(validImageFiles);
      setImageFiles(validImageFiles);
      setShowPreview(true);
      return;
    }
    alert("Selected images are not of valid type!");
  };

  const ImagesHandleSubmit = () => {
    imageFiles.map((file) => {
      const storageRef = ref(storage, `anivacc/products/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      // promises.push(uploadTask);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          switch (snapshot.state) {
            case "running":
              setIsFileUploading(true);
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrls((prevState) => [...prevState, downloadURL]);
            setIsFileUploading(false);
          });
        }
      );
    });
  };
  // console.log(urls);

  useEffect(() => {
    const images = [],
      fileReaders = [];
    let isCancel = false;
    if (imageFiles.length) {
      imageFiles.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result) {
            images.push(result);
          }
          if (images.length === imageFiles.length && !isCancel) {
            setImages(images);
          }
        };
        fileReader.readAsDataURL(file);
      });
    }
    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, [imageFiles]);

  const onSubmit = (data) => {
    const {
      title,
      brand_id,
      parentCategory,
      childCategory,
      lang_code,
      status,
      ...product
    } = data;

    // console.log(urls);
    addProductMutation.mutate({
      ...product,
      title: title,
      title_deunicode: removeAccents(title),
      thumbnail: urls,
      brand_id: brand_id.value,
      categories: childCategory.label
        ? [parentCategory.label, childCategory.label]
        : [parentCategory.label],
      status:
        status?.length > 1 ? status?.map((s) => s.value) : [status[0].value],
      lang_code: lang_code.value,
    });
    setShowPreview(false);
    setImageFiles([]);
    setUrls([]);
  };
  if (isLoading) return <Loading />;

  return (
    <ProductForm
      isLoading={addProductMutation.isLoading}
      isLoadingImage={isFileUploading}
      title="Add New Product"
      type="Add Product"
      categoryQuery={categoryQuery}
      brandQuery={brandQuery}
      control={control}
      register={register}
      onSubmit={handleSubmit(onSubmit)}
      watch={watch}
      errors={errors}
      setValue={setValue}
      handleChange={handleChange}
      images={images}
      showPreview={showPreview}
      handleSubmit={ImagesHandleSubmit}
      urls={urls}
    />
  );
}

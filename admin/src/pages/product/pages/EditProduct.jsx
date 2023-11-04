import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../config/supabase";
import { useForm } from "react-hook-form";
import ProductForm from "./ProductForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { storage } from "../../../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import removeAccents from "../../../utils/deunicode";
import { useParams } from "react-router-dom";
import GlobalSpinner from "../../../components/common/loading/GlobalSpinner";
import { categoryArr, findValueByLabel } from "../../../utils/formArr";
import { productSchema } from "../../../utils/productSchema";

const EditProduct = () => {
  const { productId } = useParams();
  const [isFileUploading, setIsFileUploading] = useState(false);
  const [urls, setUrls] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [showPreview, setShowPreview] = useState(true);
  const imageTypeRegex = /image\/(png|jpg|jpeg|webp)/gm;

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
        queryKey: ["product", productId],
        queryFn: () =>
          supabase.from("product").select("*").eq("id", productId).single(),
        select: (res) => res.data,
      },
    ],
  });

  const isLoading = [categoryQuery, brandQuery, productQuery].some(
    (query) => query.isLoading
  );

  if (isLoading) return <GlobalSpinner />;

  const brands = brandQuery.data.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(productSchema),
    // defaultValues: {
    //   ...productQuery?.data,
    //   brand_id: {
    //     value: productQuery?.data.brand_id,
    //     label: brands.find(
    //       (brand) => brand.value === productQuery?.data.brand_id
    //     )?.label,
    //   },
    //   parentCategory: {
    //     value: categoryArr.find(
    //       (cat) => cat.label === productQuery?.data.categories[0]
    //     )?.value,
    //     label: productQuery?.data.categories[0],
    //   },
    //   childCategory: {
    //     value: findValueByLabel(
    //       productQuery?.data.categories[0],
    //       productQuery?.data.categories[1],
    //       categoryArr
    //     ),
    //     label: productQuery?.data.categories[1],
    //   },
    //   status: productQuery?.data.status.map((s) => ({
    //     value: s,
    //     label: s.replace(/^./, s[0].toUpperCase()),
    //   })),
    //   lang_code: {
    //     value: productQuery?.data.lang_code,
    //     label: productQuery?.data.lang_code == "vi" ? "Tiếng Việt" : "English",
    //   },
    // },
  });

  useEffect(() => {
    setPhotos(productQuery?.data.thumbnail);
    reset({
      ...productQuery?.data,
      brand_id: {
        value: productQuery?.data.brand_id,
        label: brands.find(
          (brand) => brand.value === productQuery?.data.brand_id
        )?.label,
      },
      parentCategory: {
        value: categoryArr.find(
          (cat) => cat.label === productQuery?.data.categories[0]
        )?.value,
        label: productQuery?.data.categories[0],
      },
      childCategory: {
        value: findValueByLabel(
          productQuery?.data.categories[0],
          productQuery?.data.categories[1],
          categoryArr
        ),
        label: productQuery?.data.categories[1],
      },
      status: productQuery?.data.status.map((s) => ({
        value: s,
        label: s.replace(/^./, s[0].toUpperCase()),
      })),
      lang_code: {
        value: productQuery?.data.lang_code,
        label: productQuery?.data.lang_code == "vi" ? "Tiếng Việt" : "English",
      },
      thumbnail: productQuery?.data.thumbnail,
    });
  }, [productQuery?.data]);

  const editProductMutation = useMutation({
    mutationFn: (product) =>
      supabase
        .from("product")
        .update({ ...product })
        .eq("id", productId),
    onSuccess: () => {
      toast.success("Chỉnh sửa sản phẩm thành công!");
      // reset();
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });

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
      // console.log(validImageFiles);
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
    editProductMutation.mutate({
      ...product,
      title: title,
      title_deunicode: removeAccents(title),
      thumbnail: urls.length > 0 ? urls : photos,
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
    setPhotos(urls);
  };

  return (
    <div>
      <ProductForm
        isLoading={editProductMutation.isLoading}
        isLoadingImage={isFileUploading}
        title="Edit Product"
        type="Edit Product"
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
        isDirty={isDirty}
        defaultImgs={photos}
      />
    </div>
  );
};

export default EditProduct;

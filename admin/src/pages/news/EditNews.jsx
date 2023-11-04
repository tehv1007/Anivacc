import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGetPostById, useUpdatePost } from "../../hooks/usePost";
import { schemaCreatePost } from "../../config/schema";
import { AuthContext } from "../auth/Auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import NewsForm from "./NewsForm";
import { useParams } from "react-router-dom";
import GlobalSpinner from "../../components/common/loading/GlobalSpinner";
import { categories } from "../../utils/postArr";

const EditNews = () => {
  const { postID } = useParams();
  const { isLoading, data: post } = useGetPostById(postID);

  if (isLoading) return <GlobalSpinner />;
  // console.log(post);

  const [image, setImage] = useState(post.thumbnail);
  const [imageFile, setImageFile] = useState([]);
  const { isLoggedIn: session } = useContext(AuthContext);

  const {
    register,
    control,
    reset,
    formState: { errors, isDirty },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schemaCreatePost),
    defaultValues: {
      title: post.title,
      description: post.description,
      category: {
        label: categories.find((cat) => cat.value === post.category)?.label,
        value: post.category,
      },
      content: post.content,
      lang_code: {
        value: post.lang_code,
        label: post.lang_code == "vi" ? "Tiếng Việt" : "English",
      },
    },
  });

  const editMutation = useUpdatePost(postID);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setImage(null);
      return;
    }

    setImageFile([file]);
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleCreatePost = (values) => {
    const { category, lang_code, ...post } = values;

    if (!image) {
      // Handle error here, for example:
      alert("Please select an image");
      return;
    }

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, `/anivacc/news/${imageFile[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile[0]);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        switch (snapshot.state) {
          case "running":
            break;
        }
      },
      (error) => {
        //Handle error
        console.log(error);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          editMutation.mutate({
            ...post,
            category: category.value,
            lang_code: lang_code.value,
            author_id: session?.user?.id,
            thumbnail: downloadURL,
          });
        });
      }
    );
  };

  return (
    <div className="container flex flex-col gap-y-5">
      <h2 className="text-xl font-semibold text-center md:text-left uppercase">
        Chỉnh sửa bài viết
      </h2>

      <NewsForm
        type="Cập nhật bài viết"
        register={register}
        setValue={setValue}
        image={image}
        control={control}
        onSubmit={handleSubmit(handleCreatePost)}
        errors={errors}
        handleImageChange={handleImageChange}
        isDirty={isDirty}
        isLoading={editMutation.isLoading}
      />
    </div>
  );
};

export default EditNews;

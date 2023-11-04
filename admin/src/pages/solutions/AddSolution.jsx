import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreatePost } from "../../config/schema";
import { AuthContext } from "../auth/Auth";
import { useCreateSolution } from "../../hooks/useSolution";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import SolutionForm from "./SolutionForm";

const AddSolution = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState([]);
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
      category: "",
      content: "",
      lang_code: "",
    },
  });

  const postMutation = useCreateSolution(reset);

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
    if (imageFile.length > 0) {
      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(
        storage,
        `/anivacc/solutions/${imageFile[0].name}`
      );
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
            postMutation.mutate({
              ...post,
              category: category.map((c) => c.value),
              lang_code: lang_code.value,
              author_id: session?.user?.id,
              thumbnail: downloadURL,
            });
          });
        }
      );
    } else {
      postMutation.mutate({
        ...post,
        category: category.map((c) => c.value),
        lang_code: lang_code.value,
        author_id: session?.user?.id,
        thumbnail: "",
      });
    }
  };

  return (
    <div className="container flex flex-col gap-y-5">
      <h2 className="text-xl font-semibold text-center md:text-left uppercase">
        Tạo bài viết giải pháp mới
      </h2>

      <SolutionForm
        type="Tạo bài viết"
        register={register}
        setValue={setValue}
        image={image}
        control={control}
        onSubmit={handleSubmit(handleCreatePost)}
        errors={errors}
        handleImageChange={handleImageChange}
        isLoading={postMutation.isLoading}
      />
    </div>
  );
};

export default AddSolution;

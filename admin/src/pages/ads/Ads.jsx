import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { storage } from "../../config/firebase";
import FormRow from "../../components/common/form/FormRow";
import Loader from "../../components/common/loading/Loader";
import VideoList from "./VideoList";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { supabase } from "../../config/supabase";
import { useForm } from "react-hook-form";
import Field from "../../components/common/form/Field";

const Ads = () => {
  const [isFileUploading, setIsFileUploading] = useState(false);
  const [urls, setUrls] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [showPreview, setShowPreview] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const videoTypeRegex = /video\/.*/gm;
  const inputRef = useRef(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    setIsSubmitting(false);
    setVideos([]);
    const files = [...e.target.files];

    const validVideoFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match(videoTypeRegex)) {
        validVideoFiles.push(file);
      } else {
        alert("Selected videos are not of valid type!");
      }
    }
    if (validVideoFiles.length) {
      console.log(validVideoFiles);
      setVideoFiles(validVideoFiles);
      setShowPreview(true);
      return;
    }
  };

  const VideosHandleSubmit = () => {
    videoFiles.map((file) => {
      const storageRef = ref(storage, `anivacc/videos/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

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

  useEffect(() => {
    // Read and process video files
    const videos = [],
      fileReaders = [];
    let isCancel = false;
    if (videoFiles.length) {
      videoFiles.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result) {
            videos.push(result);
          }
          if (videos.length === videoFiles.length && !isCancel) {
            setVideos(videos);
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
  }, [videoFiles]);

  const addVideoMutation = useMutation({
    mutationFn: (urls) => supabase.from("ads").insert(urls),
    onSuccess: () => {
      toast.success("Thêm video thành công!");
      queryClient.invalidateQueries();
      setVideos([]);
    },
  });

  const onSubmit = (data) => {
    const { title } = data;
    setIsSubmitting(true);
    addVideoMutation.mutate({ urls: urls, title: title });
    setShowPreview(false);
    setVideoFiles([]);
    setUrls([]);
    if (inputRef.current) {
      inputRef.current.value = ""; // Reset giá trị của input thành rỗng
    }
  };

  return (
    <div>
      {/* Container */}
      <div className="max-w-screen-md mx-auto px-4">
        {/* Layout */}
        <div className="py-6">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            {/* Title */}
            <div className="text-black">
              <Field
                register={register}
                error={errors?.title?.message}
                labelText="Tiêu đề video"
                name="title"
                placeholder="Tiêu đề video"
                type="text"
              />
            </div>
            <FormRow label="Chọn video quảng cáo" className="col-span-full mt-4">
              <div className="flex items-center gap-10">
                <input
                  ref={inputRef}
                  type="file"
                  multiple
                  onChange={handleChange}
                  className="border"
                />
                <button
                  onClick={VideosHandleSubmit}
                  className={`inline-block px-3 py-2 bg-blue-500 text-sm flex-grow ${
                    videos?.length === 0 ||
                    isFileUploading ||
                    !inputRef.current ||
                    isSubmitting
                      ? "disabled:bg-gray-500 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={
                    videos?.length == 0 ||
                    isFileUploading ||
                    urls.length > 0 ||
                    !inputRef.current ||
                    isSubmitting
                  }
                >
                  <div className="flex items-center gap-2">
                    {isFileUploading ? (
                      <Loader />
                    ) : (
                      <span className="inline-block w-full">Upload Videos</span>
                    )}
                  </div>
                </button>
              </div>

              {/* Preview video */}
              {videos?.length > 0 && showPreview ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-2">
                  {videos.map((video, idx) => {
                    return (
                      <p key={idx}>
                        <video
                          className="w-full h-full"
                          x-webkit-airplay="allow"
                          x5-video-player-type="h5-page"
                          t7-video-player-type="inline"
                          x5-video-player-fullscreen="true"
                          playsInline="isiPhoneShowPlaysinline"
                          webkit-playsinline="isiPhoneShowPlaysinline"
                          controls="controls"
                          muted="muted"
                          loop="loop"
                          data-loaded="true"
                          autoPlay={false}
                        >
                          <source src={video} type="video/mp4" />
                        </video>
                      </p>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-2"></div>
              )}
            </FormRow>

            <div className="py-4 lg:py-8 px-6 border-t border-gray-100">
              <div className="leading-5 text-sm text-white font-medium text-right">
                <button
                  className={`${
                    videos?.length === 0 || isFileUploading || isSubmitting
                      ? "disabled:bg-gray-500 cursor-not-allowed"
                      : ""
                  } align-bottom inline-flex items-center justify-center cursor-pointer transition-colors duration-150 focus:outline-none px-4 py-2 rounded-lg bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 h-12`}
                  type="submit"
                  disabled={
                    videos?.length == 0 || isFileUploading || isSubmitting
                  }
                >
                  <div className="flex items-center gap-2">
                    {isFileUploading ? "Uploading video" : "Thêm video quảng cáo"}
                  </div>
                </button>
              </div>
            </div>
          </form>

          <h2 className="col-span-full block text-lg">
            Danh sách video quảng cáo
          </h2>
          <VideoList />
        </div>
      </div>
    </div>
  );
};

export default Ads;

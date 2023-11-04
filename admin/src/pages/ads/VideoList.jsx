import GlobalSpinner from "../../components/common/loading/GlobalSpinner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../config/supabase";
import { toast } from "react-toastify";

const VideoList = () => {
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: videoUrls,
    refetch,
  } = useQuery({
    queryKey: ["ads"],
    queryFn: () =>
      supabase
        .from("ads")
        .select("*")
        .order("created_at", { ascending: false }),
    select: (res) => res.data,
  });

  const deleteVideoMutation = useMutation(
    (videoData) =>
      supabase
        .from("ads")
        .update({ urls: videoData.urls })
        .eq("id", videoData.id),
    {
      onSuccess: () => {
        toast.success("Xoá video thành công!");
        queryClient.invalidateQueries({ queryKey: ["ads"] });
        refetch();
      },
      onError: (error) => {
        toast.error("Xoá video thất bại!");
        console.error("Error deleting video:", error);
      },
    }
  );

  const deleteMutation = useMutation(
    (adId) => supabase.from("ads").delete().eq("id", adId),
    {
      onSuccess: () => {
        toast.success("Xoá video thành công!");
        queryClient.invalidateQueries({ queryKey: ["ads"] });
        refetch();
      },
      onError: (error) => {
        toast.error("Xoá video thất bại!");
        console.error("Error deleting video:", error);
      },
    }
  );

  const handleDeleteVideo = (adId, videoUrl) => {
    const ad = videoUrls.find((ad) => ad.id === adId);
    if (ad.urls.length === 1) {
      deleteMutation.mutate(adId);
    } else {
      const updatedUrls = ad.urls.filter((url) => url !== videoUrl);
      deleteVideoMutation.mutate({ id: adId, urls: updatedUrls });
    }
  };

  return (
    <div className="flex flex-wrap gap-4 items-center justify-left mt-10">
      {isLoading ? (
        <GlobalSpinner />
      ) : (
        videoUrls.map((obj, index) => (
          <div
            key={index}
            className="flex items-center justify-left gap-4 flex-wrap"
          >
            {obj.urls.map((url, index) => (
              <div className="relative" key={index}>
                <video
                  className="w-[320px] h-auto block"
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
                  key={`${url}?v=${Date.now()}`} // Thêm phiên bản vào URL video
                >
                  <source src={`${url}?v=${Date.now()}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  className="absolute top-2 right-2 text-red-500"
                  onClick={() => handleDeleteVideo(obj.id, url)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default VideoList;

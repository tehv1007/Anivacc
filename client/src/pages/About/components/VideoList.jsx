import { useQuery } from "@tanstack/react-query";
import GlobalSpinner from "../../../components/Common/loading/GlobalSpinner";
import { supabase } from "../../../config/supabase";

const VideoList = () => {
  const { isLoading, data: videoUrls } = useQuery({
    queryKey: ["ads"],
    queryFn: () =>
      supabase
        .from("ads")
        .select("*")
        .order("created_at", { ascending: true }),
    select: (res) => res.data,
  });

  return (
    <div className="flex flex-col gap-4 items-center justify-center text-center mt-10">
      {isLoading ? (
        <GlobalSpinner />
      ) : (
        videoUrls.map((obj, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-1">
            {obj.urls.map((item, index) => (
              <div className="" key={index}>
                <video
                  className="w-[640px] h-auto block lg:max-w-[320px]"
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
                  <source src={item} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
            <h4 className="text-sm px-[18px]">{obj.title}</h4>
          </div>
        ))
      )}
    </div>
  );
};

export default VideoList;

import { memo } from "react";
import parser from "html-react-parser";
import { useParams } from "react-router-dom";
import Container from "../../components/layout/Container";
import LoadingPostDetailSkeleton from "../../components/common/loading/LoadingPostDetailSkeleton";
import { useGetSolutionById } from "../../hooks/useSolution";
import GlobalSpinner from "../../components/common/loading/GlobalSpinner";

const SolutionDetail = () => {
  const { solutionID } = useParams();
  const { data: postInfo, isLoading } = useGetSolutionById(solutionID);
  if (isLoading) return <GlobalSpinner />;

  return (
    <Container className="flex flex-col gap-y-5">
      {!isLoading ? (
        <>
          <img
            src={postInfo?.thumbnail}
            className="w-full h-[100px] object-cover rounded-md"
            alt={parser(postInfo?.description)}
          />
          <h1 className="text-3xl font-semibold text-center">
            {postInfo?.title}
          </h1>
          <div className="text-sm font-medium">
            {new Date(postInfo?.created_at).toLocaleDateString()} - by -{" "}
            <span className="font-bold !text-md text-purple-500">Admin</span>
          </div>
          <div className="content-box">{parser(`${postInfo?.content}`)}</div>
        </>
      ) : (
        <LoadingPostDetailSkeleton />
      )}
    </Container>
  );
};

export default memo(SolutionDetail);

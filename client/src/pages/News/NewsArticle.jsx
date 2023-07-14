import { Link, useLocation, useParams } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  FacebookIcon,
  LineIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import {
  useGetNextPost,
  useGetPostById,
  useGetPrevPost,
} from "../../hooks/usePost";
import { formatDate } from "../../utils/formatDate";
import parser from "html-react-parser";
import Header from "../../components/Feature/Header";
import LoadingPostDetailSkeleton from "../../components/Common/loading/LoadingPostDetailSkeleton";
import Loading from "../../components/Common/loading/Loading";
import RelatedArticles from "../../components/Feature/RelatedArticles";

const NewsArticle = ({ title, thumbnail, lang_code }) => {
  const location = useLocation();
  const url = `${window.location.origin}${location.pathname}`;
  // const url = window.location.href;
  const { postId } = useParams();
  const { data: post, isLoading } = useGetPostById(postId);
  const { data: nextPosts, isLoading: nextLoading } = useGetNextPost(
    postId,
    lang_code
  );
  const { data: prevPosts, isLoading: prevLoading } = useGetPrevPost(
    postId,
    lang_code
  );

  return (
    <>
      <Header imgUrl={"/images/background/news-bg.webp"} />
      <div className="max-w-[1200px] mx-auto py-10">
        {isLoading ? (
          <LoadingPostDetailSkeleton />
        ) : (
          <div className="flex-col lg:max-w-[990px] xl:max-w-[1200px] mx-auto px-[10px]">
            <h1 className="text-gray-800 text-3xl font-bold leading-[44px] text-center">
              {post.title}
            </h1>
            <p className="leading-7 text-center">
              &nbsp;&nbsp;&nbsp;&nbsp; Author: Site
              Editor&nbsp;&nbsp;&nbsp;&nbsp; Publish Time:{" "}
              {formatDate(post.created_at)}
            </p>
            {/* Social sharing */}
            <div className="mb-[10px] mt-[5px] flex justify-center items-center gap-[10px]">
              <FacebookShareButton url={url} quote={title}>
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <TwitterShareButton url={url} title={title}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <LineShareButton url={url} title={title}>
                <LineIcon size={32} round={true} />
              </LineShareButton>
              <LinkedinShareButton url={url} title={title}>
                <LinkedinIcon size={32} round={true} />
              </LinkedinShareButton>
              <WhatsappShareButton url={url} title={title}>
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
              <PinterestShareButton
                url={url}
                description={title}
                media={thumbnail}
              >
                <PinterestIcon size={32} round={true} />
              </PinterestShareButton>
            </div>

            {/* News content */}
            <div className="">{parser(`${post.content}`)}</div>

            {/* Post navigation */}
            <ul className="text-gray-700 leading-7 text-center mt-[30px] mb-[10px] flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-10">
              {/* Previous */}
              {prevLoading ? (
                <Loading />
              ) : (
                prevPosts.length > 0 && (
                  <li className="sm:max-w-[45%] py-[5px] px-[14px] hover:bg-gray-200 hover:text-blue-900 border-gray-400 border-solid border rounded-[10px] font-light leading-7 float-left">
                    <Link
                      to={`/posts/${prevPosts[0].id}`}
                      className="line-clamp-1 float-left font-bold"
                    >
                      Previous:{" "}
                      <span className="font-normal">{prevPosts[0].title}</span>
                    </Link>
                    {/* <img src={prevPosts[0].thumbnail} /> */}
                  </li>
                )
              )}

              {/* Next */}
              {nextLoading ? (
                <Loading />
              ) : (
                nextPosts.length > 0 && (
                  <li className="sm:max-w-[45%] py-[5px] px-[14px] hover:bg-gray-200 hover:text-blue-900 border-gray-400 border-solid border rounded-[10px] font-light leading-7 float-right">
                    <Link
                      to={`/posts/${nextPosts[0].id}`}
                      className="line-clamp-1 float-left font-bold"
                    >
                      Next:{" "}
                      <span className="font-normal">{nextPosts[0].title}</span>
                    </Link>
                    {/* <img src={nextPosts[0].thumbnail} /> */}
                  </li>
                )
              )}
            </ul>
            <RelatedArticles lang_code={lang_code} category={post.category} />
          </div>
        )}
      </div>
    </>
  );
};

export default NewsArticle;

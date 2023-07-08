import { useLocation } from "react-router-dom";
import parser from "html-react-parser";
import Header from "../../components/Feature/Header";

export default function SolutionPost() {
  const location = useLocation();
  const post = location.state?.post;
  // console.log(post);

  return (
    <>
      <Header imgUrl={"/images/background/error-bg.webp"} />
      <div className="max-w-[1200px] mx-auto py-10">
        <div className="flex-col lg:max-w-[990px] xl:max-w-[1200px] mx-auto px-[10px] text-center">
          <h1 className="text-gray-800 text-3xl font-bold leading-[44px]">
            {post.title}
          </h1>
          {/* Post content */}
          <section className="text-left">
            {parser(`${post.content}`)}
            {/* {post.content.rendered} */}
          </section>
        </div>
      </div>
    </>
  );
}

import { useLocation } from "react-router-dom";
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

const NewsArticle = ({ title, thumbnail }) => {
  //   const location = useLocation();
  //   const url = `${window.location.origin}${location.pathname}`;
  const url = window.location.href;

  return (
    <div className="max-w-[1200px] mx-auto py-10">
      <div className="flex-col lg:max-w-[990px] xl:max-w-[1200px] mx-auto px-[10px] text-center">
        <h1 className="text-gray-800 text-3xl font-bold leading-[44px]">
          New Research Found Launched by SINDER, Lanzhou University and
          Veterinary Institute of Chinese Academy of Agricultural.
        </h1>
        <p className="leading-7">
          Views:
          <span>22</span>
          &nbsp;&nbsp;&nbsp;&nbsp; Author: Site Editor&nbsp;&nbsp;&nbsp;&nbsp;
          Publish Time: 2023-05-09
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
          <PinterestShareButton url={url} description={title} media={thumbnail}>
            <PinterestIcon size={32} round={true} />
          </PinterestShareButton>
        </div>

        {/* News content */}
        <section></section>

        {/* Post navigation */}
        <ul className="text-gray-700 leading-7 text-center mt-[30px] mb-[10px] flex gap-[176px]">
          <li className="previous py-[5px] px-[14px] hover:bg-gray-200 hover:text-blue-900 border-gray-400 border-solid border rounded-[10px] font-light leading-7 text-center">
            <a
              className="line-clamp-1"
              href="/New-Research-Found-Launched-by-SINDER-Lanzhou-University-and-Veterinary-Institute-of-Chinese-Academy-of-Agricultural-id42006037.html"
            >
              Previous :
              <span className="">
                New Research Found Launched by SINDER, Lanzhou University and
                Veterinary Institute of Chinese Academy of Agricultural.
              </span>
            </a>
          </li>
          <li className="previous py-[5px] px-[14px] hover:bg-gray-200 hover:text-blue-900 border-gray-400 border-solid border rounded-[10px] font-light leading-7 text-center">
            <a
              className="line-clamp-1"
              href="/The-3rd-Technology-Seminar-of-China-Poultry-Grandparent-Parent-Generation-Breeding-Enterprise-id44317447.html"
            >
              Next :&nbsp;
              <span className="">
                The 3rd Technology Seminar of China Poultry Grandparent &amp;
                Parent Generation Breeding Enterprise
              </span>
            </a>
          </li>
        </ul>

        {/* Tags */}
      </div>
    </div>
  );
};

export default NewsArticle;

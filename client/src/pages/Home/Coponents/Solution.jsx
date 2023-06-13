import { Link } from "react-router-dom";
import Heading from "../../../components/Common/Heading";

const Title = ({ title }) => {
  return (
    <div>
      <div className="absolute bottom-[25px] left-[25px] xl:bottom-[50px] xl:left-[42px] xl:w-[calc(100%-62px)] w-[calc(100%-45px)] z-[99] line-clamp-2 overflow-ellipsis text-white overflow-hidden title_1">
        <span className="text-[20px]">
          <strong>
            <span className="font-[Montserrat]">{title}</span>
          </strong>
        </span>
      </div>
      <div className="title-line w-8 h-1 absolute bg-blue-900 bottom-[15px] left-[25px] xl:bottom-10 xl:left-[42px]" />
    </div>
  );
};

const Solution = () => {
  return (
    <section className="mb-20">
      <div className="max-w-[1200px] mx-auto pb-5">
        <Heading title="Khu vực áp dụng sản phẩm của chúng tôi" />
      </div>
      <div className="box flex flex-row sm:flex-nowrap flex-wrap gap-[10px] sm:flex-row max-w-[1756px] mx-auto px-[10px]">
        {/* Box 1 */}
        <div className="box_1 order-1 w-[calc(50%-5px)] group sm:w-3/12 relative max-h-[838px]">
          <div className="box_img img_1 w-full h-full object-cover block">
            <Link className="blocks-image" to="/solutions">
              <picture>
                {/* <source media="(max-width:768px)" /> */}
                <img
                  src="/images/solution/Cattle-Breeding.webp"
                  alt="Bệnh trên đại gia súc"
                  className="w-full h-full object-cover block"
                />
              </picture>
            </Link>
          </div>
          <Title title="Bệnh trên đại gia súc" />
        </div>

        {/* Box 2 */}
        <div className="box_2 order-2 sm:w-6/12 max-h-[868px] flex flex-wrap gap-[10px]">
          <div className="box_2_a w-full relative max-h-1/2 mt-5px">
            <div className="box_img img_2">
              <Link className="blocks-image" to="/solutions">
                <picture>
                  {/* <source media="(max-width:768px)" /> */}
                  <img
                    src="/images/solution/Duck-Goose-Breeding.webp"
                    alt="Bệnh gia cầm"
                    className="w-full h-full object-cover block"
                  />
                </picture>
              </Link>
            </div>
            <Title title="Bệnh gia cầm" />
          </div>

          {/* sub box 2b */}
          <div className="box_2_b w-full flex max-h-1/2 mt-5px">
            <div className="box_a mr-[10px] w-1/2 relative">
              <div className="box_img img_3">
                <Link className="blocks-image" to="/solutions">
                  <picture>
                    {/* <source media="(max-width:768px)" /> */}
                    <img
                      src="/images/solution/Pig-Breeding.webp"
                      alt="Bệnh trên lợn"
                      className="w-full h-full object-cover block"
                    />
                  </picture>
                </Link>
              </div>
              <Title title="Bệnh trên lợn" />
            </div>
            <div className="box_b w-1/2 relative">
              <div className="box_img img_4">
                <Link className="blocks-image" to="/solutions">
                  <picture>
                    {/* <source media="(max-width:768px)" /> */}
                    <img
                      src="/images/solution/Shrimp-Breeding.webp"
                      alt="Bệnh trên thủy sản"
                      className="w-full h-full object-cover block"
                    />
                  </picture>
                </Link>
              </div>
              <Title title="Bệnh thủy sản" />
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="box_3 order-1 w-[calc(50%-5px)] sm:order-3 sm:w-3/12 relative max-h-[838px]">
          <div className="w-full h-full object-cover block box_img img_5">
            <Link className="blocks-image" to="/solutions">
              <picture>
                {/* <source media="(max-width:768px)" /> */}
                <img
                  src="/images/solution/Chicken-Breeding.webp"
                  alt="Giải pháp khử trùng"
                  className="w-full h-full object-cover block"
                />
              </picture>
            </Link>
          </div>
          <Title title="Giải pháp khử trùng" />
        </div>
      </div>
    </section>
  );
};

export default Solution;

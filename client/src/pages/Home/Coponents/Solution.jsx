import Cattle from "../..//../assets/images/solution/Cattle-Breeding.webp";
import Chicken from "../..//../assets/images/solution/Chicken-Breeding.webp";
import Duck from "../..//../assets/images/solution/Duck-Goose-Breeding.webp";
import Pig from "../..//../assets/images/solution/Pig-Breeding.webp";
import Shrimp from "../..//../assets/images/solution/Shrimp-Breeding.webp";

const Title = ({ title }) => {
  return (
    <div>
      <div className="absolute bottom-[50px] left-[42px] w-full mr-[62px] z-99 line-clamp-2 overflow-ellipsis text-white overflow-hidden title_1">
        <h4>
          <span className="text-[20px]">
            <strong>
              <span className="font-[Montserrat]">{title}</span>
            </strong>
          </span>
        </h4>
      </div>
      <div className="title-line" />
    </div>
  );
};

const Solution = () => {
  return (
    <section className="mb-20">
      <div className="max-w-[1200px] mx-auto pb-5">
        <div className="text-gray-800 text-4xl leading-[51px] font-[Montserrat] font-bold text-center">
          <h2>Area In Which Our Products Are Applied</h2>
        </div>
      </div>
      <div className="box flex max-w-[1756px] mx-auto px-10">
        {/* Box 1 */}
        <div className="box_1 group w-3/12 relative max-h-[838px]">
          <div className="img_1 w-full h-full object-cover block">
            <a className="blocks-image" href="/solutions.html">
              <picture>
                <source media="(max-width:768px)" srcSet />
                <img
                  src={Cattle}
                  alt="Cattle Breeding"
                  className="w-full h-full object-cover block"
                />
              </picture>
            </a>
          </div>
          <Title title="Cattle Breeding" />
        </div>

        {/* Box 2 */}
        <div className="box_2 w-6/12 max-h-[868px] flex flex-wrap mx-[10px] ">
          <div className="box_2_a w-full mb-[10px] relative max-h-1/2 mt-5px">
            <div className=" img_2">
              <a className="blocks-image" href="/solutions.html">
                <picture>
                  <source media="(max-width:768px)" srcSet />
                  <img
                    src={Duck}
                    alt="Duck&Goose Breeding"
                    className="w-full h-full object-cover block"
                  />
                </picture>
              </a>
            </div>
            <Title title="Duck&amp;Goose Breeding" />
          </div>

          {/* sub box 2b */}
          <div className="box_2_b w-full flex max-h-1/2 mt-5px">
            <div className="box_a mr-[10px] w-1/2 relative">
              <div className="img_3">
                <a className="blocks-image" href="/solutions.html">
                  <picture>
                    <source media="(max-width:768px)" srcSet />
                    <img
                      src={Pig}
                      alt="Pig Breeding"
                      className="w-full h-full object-cover block"
                    />
                  </picture>
                </a>
              </div>
              <Title title="Professional quality" />
            </div>
            <div className="box_b w-1/2 relative">
              <div className="img_4">
                <a className="blocks-image" href="/solutions.html">
                  <picture>
                    <source media="(max-width:768px)" srcSet />
                    <img
                      src={Shrimp}
                      alt="Shrimp Breeding"
                      className="w-full h-full object-cover block"
                    />
                  </picture>
                </a>
              </div>
              <Title title="Shrimp Breeding" />
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="box_3 w-3/12 relative max-h-[838px]">
          <div className="w-full h-full object-cover block img_5">
            <a className="blocks-image" href="/solutions.html">
              <picture>
                <source media="(max-width:768px)" srcSet />
                <img
                  src={Chicken}
                  alt="Chicken Breeding"
                  className="w-full h-full object-cover block"
                />
              </picture>
            </a>
          </div>
          <Title title="Chicken Breeding" />
        </div>
      </div>
    </section>
  );
};

export default Solution;

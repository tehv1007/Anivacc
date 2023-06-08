import classNames from "classnames";

const LoadingSkeleton = ({ className, height, radius, width = "100%" }) => (
  <div
    className={classNames("skeleton", className)}
    style={{ height, width, borderRadius: radius }}
  ></div>
);

export default LoadingSkeleton;

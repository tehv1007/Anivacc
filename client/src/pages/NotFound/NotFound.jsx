import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-white">
        <img
          src="/images/error-bg.webp"
          alt="Not Found"
          className="object-cover w-full h-64"
        />
        <div className="flex items-center justify-center flex-1">
          <div className="max-w-xl px-4 py-8 mx-auto text-center">
            <h1 className="font-black text-gray-200 text-9xl">404</h1>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Chúng tôi không thể tìm thấy trang mà bạn muốn điều hướng đến.
            </h1>
            <p className="mt-4 text-gray-500">
              Hãy thử tìm kiếm lại hoặc trở về trang chủ để bắt đầu lại nhé.
            </p>
            <Link
              to="/"
              className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
            >
              Trở về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

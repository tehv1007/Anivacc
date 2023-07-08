import { useParams } from "react-router-dom";
import {
  getBrandById,
  getInquiryById,
  useGetInquiryById,
} from "../../hooks/useInquiry";
import { supabase } from "../../config/supabase";
import useQuery from "../../hooks/useQuery";
import { formatDate } from "../../helpers/formatDate";
import { useEffect } from "react";
import { useState } from "react";

const InquiryDetail = () => {
  const { inquiryId } = useParams();
  // const { data: inquiry, isLoading } = useGetInquiryById(inquiryId);

  // const {
  //   isLoading,
  //   data: inquiries,
  //   error,
  // } = useQuery({
  //   queryKey: ["inquiries"],
  //   queryFn: () => supabase.from("inquire").select(),
  //   select: (res) => {
  //     return res.data;
  //   },
  // });

  const [inquiry, setInquiry] = useState(inquiryId);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInquiry = async () => {
      try {
        const data = await getInquiryById(inquiryId);
        setInquiry(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInquiry();
  }, [inquiryId]);

  return (
    <>
      <div className="bg-white mb-4 p-6 lg:p-8 rounded-xl shadow-sm overflow-hidden">
        <div className>
          <div className="flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-50">
            <h1 className="font-bold mb-2 text-xl uppercase">
              Inquiry
              <p className="text-xs mt-1 text-gray-500">
                Status:
                <span className="pl-2 font-medium text-xs capitalize">
                  {/* <span className= mb-2">
                    <span
                      className={`inline-flex px-2 text-xs font-medium leading-5 rounded-full ${inquiry.status.toLowerCase()}`}
                    >
                      {inquiry.status}
                    </span>
                  </span> */}
                </span>
              </p>
            </h1>
            <div className="lg:text-right text-left">
              <h2 className="lg:flex lg:justify-end text-lg mb-2 font-semibold mt-4 lg:mt-0 lg:ml-0 md:mt-0">
                <img
                  src={"/images/logo-white.png"}
                  alt="AnivacC logo"
                  width={150}
                />
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Lô số 28 KCN Quang Minh, TT. Quang Minh, H. Mê Linh, TP. Hà Nội
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
            <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
              <span className="font-bold mb-2 text-sm uppercase text-gray-600 block">
                Inquiry Date
              </span>
              <span className="text-sm text-gray-500 block">
                <span>{formatDate(inquiry.created_at)}</span>
              </span>
            </div>
            <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
              <span className="font-bold mb-2 text-sm uppercase text-gray-600 block">
                Customer Name
              </span>
              <span className="text-sm text-gray-500 block">
                {inquiry.name}
              </span>
            </div>
            <div className="flex flex-col lg:text-right text-left">
              <span className="font-bold mb-2 text-sm uppercase text-gray-600 block">
                Phone Number
              </span>
              <span className="text-sm text-gray-500">{inquiry.tel}</span>
            </div>
          </div>
        </div>

        {/* Products table */}
        <div>
          <div className="w-full overflow-hidden border border-gray-200 rounded-lg my-8">
            <div className="w-full overflow-x-auto">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-center">
                <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-100">
                  <tr>
                    <td className="px-4 py-3"> Product ID</td>
                    <td className="px-4 py-3">Product Name</td>
                    <td className="px-4 py-3"> Product Code</td>
                    <td className="px-4 py-3 text-center">Category</td>
                    {/* <td className="px-4 py-3 text-center">Brand</td> */}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 text-gray-700 text-serif text-sm">
                  {inquiry.products?.map((p) => {
                    const product = JSON.parse(p);
                    const { data: brand, isLoading } = getBrandById(
                      product.brand_id
                    );
                    console.log(product);
                    if (isLoading) {
                      return <div>Loading...</div>;
                    }
                    console.log(brand);

                    return (
                      <tr className="text-left" key={product._id}>
                        <td className="px-4 py-3 whitespace-nowrap font-normal text-gray-500 text-left">
                          {product.id}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap font-normal text-gray-500">
                          <img
                            src={product.thumbnail}
                            alt="product image"
                            className="max-w-[80px] h-auto object-contain inline-block"
                          />
                          <span>{product.title}</span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap font-bold">
                          {product.product_code}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap font-bold text-center">
                          {product.categories.map((c) => (
                            <div className="border py-1 px-2">{c}</div>
                          ))}
                        </td>
                        {/* <td className="px-4 py-3 whitespace-nowrap text-center font-bold">
                          {brand.name}
                        </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Summary */}
        <h2 className="font-bold mb-2 text-sm uppercase text-gray-600 block">
          Nội dung yêu cầu của khách hàng
        </h2>
        <div className="border rounded-xl border-gray-100 p-8 py-6 bg-gray-50">
          {inquiry.message}
        </div>
      </div>
    </>
  );
};

export default InquiryDetail;

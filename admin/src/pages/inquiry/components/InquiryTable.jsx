import { Link } from "react-router-dom";
import { formatDate } from "../../../helpers/formatDate";

const InquiryTable = ({ inquiries }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Date
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Email
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Message
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Phone Number
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Products
              </th>
              <th className="px-4 py-2" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {inquiries.map((inquiry) => (
              <tr key={inquiry.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {formatDate(inquiry.created_at)}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {inquiry.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {inquiry.email}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {inquiry.message}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {inquiry.tel}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 grid grid-cols-2 gap-1">
                  {inquiry.products
                    ? inquiry.products?.map((p, index) => {
                        return (
                          <div key={index} className="w-[80px]">
                            <img
                              className="w-full object-contain"
                              src={JSON.parse(p).thumbnail}
                              alt={JSON.parse(p).title}
                            />
                          </div>
                        );
                      })
                    : null}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link
                    to={`/inquiry/${inquiry.id}`}
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InquiryTable;

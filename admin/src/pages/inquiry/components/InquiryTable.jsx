import InquiryRow from "./InquiryRow";

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
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Status
              </th>
              <th className="font-normal px-4 py-2 text-gray-900">Action</th>
              <th className="font-normal px-4 py-2 text-gray-900">Detail</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {inquiries.map((inquiry) => (
              <InquiryRow key={inquiry.id} inquiry={inquiry} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InquiryTable;

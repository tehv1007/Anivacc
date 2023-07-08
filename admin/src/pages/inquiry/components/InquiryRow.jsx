import { FcSearch } from "react-icons/fc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { formatDate } from "../../../helpers/formatDate";
import { Link } from "react-router-dom";
import { supabase } from "../../../config/supabase";

const INQUIRY_STATUS = [
  { label: "Pending", value: "Pending" },
  { label: "Processing", value: "Processing" },
  //   { label: "Shipped", value: "Shipped" },
  { label: "Processed", value: "Processed" },
  //   { label: "Cancelled", value: "Cancelled" },
];

const updateOrderStatus = (inquiryId) => {
  const queryClient = useQueryClient();
  const statusMutation = useMutation({
    mutationFn: async (status) => {
      const { data, error } = await supabase
        .from("inquire")
        .update({ status })
        .eq("id", inquiryId);

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    onSuccess: () => {
      toast.success("Successfully update inquiry status!");
      queryClient.invalidateQueries({ queryKey: ["inquires"] });
    },
    onError: (err) => {
      toast.error(`Something went wrong: ${err.response.data.message}`);
    },
  });
  return statusMutation;
};

const InquiryRow = ({ inquiry }) => {
  const [status, setStatus] = useState(inquiry.status);

  const statusMutation = updateOrderStatus(inquiry.id);

  function handleStatusChange(event) {
    setStatus(event.target.value);
    statusMutation.mutate(event.target.value);
  }

  return (
    <>
      <tr>
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
        <td className="text-center text-sm">
          <span
            className={`inline-flex px-2 py-0 rounded-full ${status.toLowerCase()}`}
          >
            {status}
          </span>
        </td>
        <td>
          <select
            className="border rounded py-1 text-sm max-w-xs text-gray-700"
            value={status}
            onChange={(event) => handleStatusChange(event, inquiry.id)}
          >
            {INQUIRY_STATUS.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          <Link
            to={`/inquiry/${inquiry.id}`}
            className="inline-block rounded bg-green-600 px-2 py-2 text-xs font-medium text-white hover:bg-green-600/60"
          >
            <FcSearch />
          </Link>
        </td>
      </tr>
    </>
  );
};

export default InquiryRow;

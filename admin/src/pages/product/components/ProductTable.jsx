import { Link } from "react-router-dom";
import DeleteAction from "./DeleteAction";

const ProductTable = ({ products }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Title
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Product code
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Category
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Brand
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
              {/* <th className="px-4 py-2" />*/}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 h-full">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {product.id}
                </td>
                <td className="flex items-center gap-2 px-4 py-2 text-gray-700">
                  <img
                    className="w-[100px] h-[100px] object-contain"
                    src={product.thumbnail[0]}
                    alt={product.title}
                  />
                  {product.title}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {product.product_code}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {product.categories.map((c, index) => (
                    <li key={index}>{c}</li>
                  ))}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {product.brand}
                </td>
                <td className="px-4 py-2 flex-wrap justify-center items-center text-center">
                  <Link
                    to={`/product/${product.id}`}
                    className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Detail
                  </Link>
                  {/* <Link
                    to={`/product/${product.id}/edit`}
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Edit
                  </Link> */}
                  <DeleteAction id={product.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;

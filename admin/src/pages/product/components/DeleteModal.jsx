import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../config/supabase";

const DeleteModal = ({ handleClose, id, isModalOpen }) => {
  const queryClient = useQueryClient();
  const deleteProductMutation = useMutation({
    mutationFn: () => supabase.from("product").delete().eq("id", id),
    onSuccess: () => {
      queryClient.invalidateQueries("products");
      handleClose();
    },
  });

  return (
    <div>
      {isModalOpen && (
        <div className="fixed left-0 top-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="max-w-[500px] modal-content bg-white rounded-lg border border-gray-300">
            <span
              className="close hover:text-red-600 right-[35px] top-[35px] text-[40px] absolute font-bold text-gray-200"
              onClick={handleClose}
              title="Close Modal"
            >
              &times;
            </span>
            <form className="container p-4 text-center">
              <h1 className="text-2xl font-bold my-5 text-center">
                Delete Product
              </h1>
              <p>Are you sure you want to delete this product?</p>
              <div className="clearfix">
                <button
                  type="button"
                  onClick={handleClose}
                  className="items-start float-left w-1/2 my-2 py-[14px] px-5 hover:bg-gray-400 text-sm text-center bg-gray-300 text-black"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => deleteProductMutation.mutate(id)}
                  className="items-start float-left w-1/2 my-2 py-[14px] px-5 hover:bg-red-600  text-sm text-center bg-red-400 text-white"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteModal;

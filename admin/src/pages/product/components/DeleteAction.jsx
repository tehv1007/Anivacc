import DeleteModal from "./DeleteModal";
import { useState } from "react";

const DeleteAction = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
      >
        Delete
      </button>
      <DeleteModal
        isModalOpen={isModalOpen}
        handleClose={handleClose}
        id={id}
      />
    </div>
  );
};

export default DeleteAction;

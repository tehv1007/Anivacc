import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

const DeleteAction = ({ id }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Delete" placement="top">
        <IconButton aria-label="Delete" onClick={handleOpen}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <DeleteModal open={open} handleClose={handleClose} id={id} />
    </div>
  );
};

export default DeleteAction;

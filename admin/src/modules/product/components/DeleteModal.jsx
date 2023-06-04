import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../config/supabase";
import { CircularProgress } from "@mui/material";

const DeleteModal = ({ open, handleClose, id }) => {
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">"Are you sure?"</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really wan to delete this product? This process cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => deleteProductMutation.mutate(id)}
            color="warning"
            variant="outlined"
            startIcon={deleteProductMutation.isLoading && <CircularProgress />}
          >
            Delete
          </Button>
          <Button
            onClick={handleClose}
            autoFocus
            variant="outlined"
            color="info"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteModal;

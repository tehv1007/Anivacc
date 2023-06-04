import { Button } from "@mui/material";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";

const ProductListingToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{ marginLeft: "auto" }}
        to={"/product/new"}
      >
        New Product
      </Button>
    </GridToolbarContainer>
  );
};

export default ProductListingToolbar;

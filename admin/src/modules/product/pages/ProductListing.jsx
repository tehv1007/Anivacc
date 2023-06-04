import { useQuery } from "@tanstack/react-query";
import React from "react";
import { supabase } from "../../../config/supabase";
import { Chip, CircularProgress, IconButton, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Rating from "@mui/material/Rating";
import CardMedia from "@mui/material/CardMedia";
import { Stack } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import ProductListingToolbar from "../components/ProductListingToolbar";
import DeleteAction from "../components/DeleteAction";

const ProductListing = () => {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      supabase
        .from("product")
        .select(
          "id,title,product_code,long_desc, short_desc, thumbnail, categories, brand(name)"
        ),
    select: (res) => {
      return res.data.map((product) => ({
        ...product,
        brand: product.brand.name,
      }));
    },
  });

  const gridData = {
    columns: [
      { field: "id", headerName: "ID", minWidth: 30 },
      {
        field: "title",
        headerName: "Title",
        minWidth: 200,
        renderCell: (params) => {
          const thumbnail = params.row.thumbnail;
          const title = params.value;
          return (
            <Stack direction="row" alignItems="center" gap={2}>
              <Box width={70} height={50}>
                <CardMedia
                  component="img"
                  height={50}
                  width={50}
                  image={thumbnail}
                  alt={title}
                  sx={{
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box>{title}</Box>
            </Stack>
          );
        },
      },
      { field: "product_code", headerName: "Product code", minWidth: 120 },
      { field: "short_desc", headerName: "Short Description", minWidth: 200 },
      {
        field: "categories",
        headerName: "Categories",
        align: "center",
        minWidth: 200,
        renderCell: (params) => {
          return (
            <Stack direction="column" spacing={1}>
              {params.value.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  variant="outlined"
                  size="small"
                />
              ))}
            </Stack>
          );
        },
      },
      // {
      //   field: "categories",
      //   headerName: "Categories",
      //   align: "center",
      //   minWidth: 120,
      //   renderCell: (params) => {
      //     const categoryColors = {
      //       laptops: "primary",
      //       smartphones: "success",
      //       pc: "secondary",
      //       tablets: "error",
      //     };

      //     return (
      //       <Chip
      //         label={params.value}
      //         color={categoryColors[params.value]}
      //         variant="outlined"
      //         size="small"
      //       />
      //     );
      //   },
      // },
      {
        field: "brand",
        minWidth: 100,
        headerName: "Brand",
        align: "center",
        renderCell: (params) => {
          const brandColors = {
            Apple: "primary",
            Samsung: "success",
            LG: "secondary",
            Nokia: "error",
          };

          return (
            <Chip
              label={params.value}
              color={brandColors[params.value]}
              variant="backgroundColor"
              size="small"
            />
          );
        },
      },
      // {
      //   field: "rating",
      //   headerName: "Rating",
      //   minWidth: 150,
      //   renderCell: (param) => (
      //     <Rating
      //       size="small"
      //       name={param.field}
      //       value={param.value}
      //       readOnly
      //       precision={0.5}
      //     />
      //   ),
      // },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <Stack direction="row" alignItems="center" gap={1}>
              <Tooltip title="Detail" placement="top">
                <IconButton aria-label="Detail" to={`/products/${params.id}`}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Edit" placement="top">
                <IconButton
                  aria-label="Edit"
                  to={`/products/${params.id}/edit`}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>

              <DeleteAction id={params.id} />
            </Stack>
          );
        },
      },
    ],
    rows: products,
  };

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "30vh",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Box sx={{ height: 700, width: "100%" }}>
      <DataGrid
        rowHeight={100}
        rows={gridData.rows}
        columns={gridData.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{
          toolbar: ProductListingToolbar,
        }}
        pageSizeOptions={[10]}
        // checkboxSelection
        // disableRowSelectionOnClick
      />
    </Box>
  );
};

export default ProductListing;

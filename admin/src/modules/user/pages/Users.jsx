import { useQuery } from "@tanstack/react-query";
import { Avatar, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import CardMedia from "@mui/material/CardMedia";
import { supabase } from "../../../config/supabase";

const dateFormatter = (date) => {
  // Parse the ISO string into a Date object
  const formatedDate = new Date(date);

  // Format the date string using the user's locale settings
  const formattedDateString = formatedDate.toLocaleDateString("en-GB");
  return formattedDateString;
};

const Users = () => {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => supabase.from("user").select("*, role (name)"),
    select: (res) => {
      return res.data.map((user) => ({
        ...user,
        role: user.role.name,
        createdAt: dateFormatter(user.created_at),
      }));
    },
  });
  // console.log(users);

  const gridData = {
    columns: [
      { field: "id", headerName: "ID", minWidth: 30 },
      {
        field: "avatar",
        headerName: "Avatar",
        renderCell: (params) => {
          const avatar = params.value;
          const fullName = params.row.full_name;
          return (
            // <Box width={50} height={50}>
            //   <CardMedia
            //     component="img"
            //     height={50}
            //     width={50}
            //     image={avatar}
            //     alt="Avatar"
            //     sx={{
            //       objectFit: "cover",
            //       borderRadius: 9999
            //     }}
            //   />
            // </Box>
            <Avatar alt={fullName} src={avatar} />
          );
        },
      },
      { field: "full_name", headerName: "Full name", minWidth: 200 },
      {
        field: "email",
        headerName: "Email",
        minWidth: 250,
      },
      { field: "role", headerName: "Role", minWidth: 60 },
      { field: "createdAt", headerName: "Created At", minWidth: 300 },
    ],
    rows: users,
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
          toolbar: GridToolbar,
        }}
        pageSizeOptions={[10]}
        // checkboxSelection
        // disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Users;

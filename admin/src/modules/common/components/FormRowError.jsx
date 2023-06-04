import { Typography } from "@mui/material";

const FormRowError = ({ error }) => {
  return (
    <>
      {error && (
        <Typography color="error" mt={1}>
          {error.message}
        </Typography>
      )}
    </>
  );
};

export default FormRowError;

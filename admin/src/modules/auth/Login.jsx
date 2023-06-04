import { Box, Button } from "@mui/material";
// import { useContext } from "react";
import { AuthContext } from "./Auth";

const Login = () => {
  const { onLogin } = useContext(AuthContext);

  return (
    <Box>
      <Button variant="contained" onClick={onLogin}>
        Sign in with Google
      </Button>
    </Box>
  );
};

export default Login;

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./supabase-context";
import { useContext } from "react";
import { AuthContext } from "./Auth2";

const PrivateRouter = () => {
  const { session } = useContext(AuthContext);
  console.log(session);
  if (!session || !session.user) return <Navigate to={"/login"} />;

  return <Outlet />;
};

export default PrivateRouter;

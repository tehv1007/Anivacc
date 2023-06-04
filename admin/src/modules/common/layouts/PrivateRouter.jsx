import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../../context/supabase-context";

const PrivateRouter = ({ children }) => {
  const { session } = useAuth();
  if (!session || !session.user) return <Navigate to={"/auth/signin"} />;

  return <>{children}</>;
};

export default PrivateRouter;

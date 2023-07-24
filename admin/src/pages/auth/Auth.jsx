import { createContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "../../config/supabase";

export const AuthContext = createContext(null);

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGGLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
  };

  const [session, setSession] = useState(null);
  // const [currentLocation, setCurrentLocation] = useState("dashboard");

  const addUserMutation = useMutation({
    mutationFn: (newUser) => supabase.from("user").insert(newUser),
  });

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);

      if (session) {
        const { email, full_name, avatar_url } = session.user.user_metadata;
        const { id: uuid } = session.user;
        supabase
          .from("user")
          .select()
          .eq("email", email)
          .single()
          .then((res) => {
            if (!res.data) {
              addUserMutation.mutate(
                { email, full_name, avatar: avatar_url, uuid },
                { onSuccess: () => navigate("/login") }
              );
            } else {
              if (res.data.roleId === 2 || res.data.roleId === 1) {
                const restoredLocation =
                  localStorage.getItem("currentLocation");
                navigate(`${restoredLocation}`);
              } else {
                navigate("/login");
              }
            }
          });
      } else {
        navigate("/login");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    localStorage.setItem("currentLocation", location.pathname);
  }, [location]);

  useEffect(() => {
    const restoredLocation = localStorage.getItem("currentLocation");

    if (restoredLocation && restoredLocation !== "/login") {
      navigate(restoredLocation);
    }
  }, [navigate]);

  // console.log(currentLocation);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: session,
        onLogin: handleGGLogin,
        onLogout: handleLogout,
      }}
    >
      <Outlet />
    </AuthContext.Provider>
  );
};

export default Auth;

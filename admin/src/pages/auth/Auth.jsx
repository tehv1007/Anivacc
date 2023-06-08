import React, { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "../../config/supabase";

export const AuthContext = createContext(null);

const Auth = () => {
  const navigate = useNavigate();

  const handleGGLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
  };

  const [session, setSession] = useState(null);
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
              if (res.data.roleId === 2) {
                navigate("/");
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

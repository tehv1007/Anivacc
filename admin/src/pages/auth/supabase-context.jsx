import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { supabase } from "../../config/supabase";

const SupabaseContext = createContext({
  session: null,
});

export const AuthProvider = (props) => {
  const [session, setSession] = useState(null);
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      console.log(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return <SupabaseContext.Provider value={{ session }} {...props} />;
};

export const useAuth = () => {
  const context = useContext(SupabaseContext);
  if (typeof context === "undefined") {
    throw new Error("useAuth must be used within AuthProvider!");
  }

  return context;
};

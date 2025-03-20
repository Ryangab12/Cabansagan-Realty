import { useState, useEffect } from "react";
import { supabase } from "@/lib/client";
import { AuthUser } from "@/types/auth";

const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [role, setRole] = useState<AuthUser["role"] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async (userId: string) => {
      try {
        const { data, error } = await supabase
          .from("auth.users")
          .select("role")
          .eq("id", userId)
          .single();

        if (error) {
          console.error("Error fetching user role:", error);
          setRole(null);
        } else {
          setRole(data.role); // Set the user's role
        }
      } catch (err) {
        console.error("Unexpected error fetching user role:", err);
        setRole(null);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    const getSession = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) {
          console.error("Error getting session:", error);
          setUser(null);
          setRole(null);
          return;
        }

        const authUser: AuthUser | null = session?.user
          ? {
              id: session.user.id,
              email: session.user.email,
              role: null, // Role fetched separately
            }
          : null;

        setUser(authUser);
        if (authUser) {
          await fetchUserRole(authUser.id); // Fetch the user's role
        }
      } catch (err) {
        console.error("Unexpected error in getSession:", err);
        setUser(null);
        setRole(null);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        const authUser: AuthUser | null = session?.user
          ? {
              id: session.user.id,
              email: session.user.email,
              role: null, // Role fetched separately
            }
          : null;

        setUser(authUser);
        if (authUser) {
          await fetchUserRole(authUser.id); // Fetch the user's role
        } else {
          setRole(null); // Clear the role if no user is logged in
        }
      },
    );

    return () => {
      authListener?.subscription?.unsubscribe?.(); // Safe cleanup
    };
  }, []);

  return { user, role, loading };
};

export { useAuth };

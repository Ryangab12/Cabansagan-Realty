import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";

// Create a cached Supabase client for server components
export const createClient = cache(async () => {
  const cookieStore = await cookies(); // No need to `await` this anymore

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () =>
          cookieStore.getAll().map((cookie) => ({
            name: cookie.name,
            value: cookie.value,
          })),
        setAll: (newCookies) => {
          newCookies.forEach(({ name, value, ...options }) => {
            cookieStore.set({ name, value, ...options }); // Corrected setAll usage
          });
        },
      },
    },
  );
});

// Get the current user in server components
export async function getUser() {
  const supabase = await createClient();

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

// Require authentication in server components
export async function requireUser() {
  const user = await getUser();

  if (!user) {
    redirect("/auth/login"); // Redirect to the login page
  }

  return user;
}

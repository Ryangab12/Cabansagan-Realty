export type AuthUser = {
  id: string;
  email: string | undefined;
  role: "admin" | "user" | null;
};

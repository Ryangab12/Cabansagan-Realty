"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [, setError] = useState<string | null>(null);
  const [errorField, setErrorField] = useState<string | null>(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  const router = useRouter();
  const supabase = createClient();

  console.log("Supabase client initialized:", supabase);

  // ✅ Prevent memory leaks when checking session
  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user && isMounted) {
        router.push("/admin");
      }

      if (isMounted) setIsCheckingSession(false);
    };

    checkSession();

    return () => {
      isMounted = false;
    };
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setErrorField(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error?.message) {
        setError(error.message);
        toast.error(error.message);

        if (error.message.toLowerCase().includes("email")) {
          setErrorField("email");
        } else if (error.message.toLowerCase().includes("password")) {
          setErrorField("password");
        } else {
          setErrorField("email");
        }
        return;
      }

      // ✅ Ensure session is set before redirecting
      toast.success("Login successful! Redirecting...");
      setTimeout(() => {
        router.push("/admin");
        router.refresh();
      }, 1000);
    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred");
      setErrorField("email");
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (isCheckingSession) {
    return (
      <Card className="max-w-sm mx-auto">
        <CardContent className="pt-6">
          <div className="flex justify-center p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className="max-w-sm mx-auto">
        <CardHeader>
          <CardTitle>Welcome Admin!</CardTitle>
          <CardDescription>Let&apos;s to manage everything?</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email" className="mb-2 block">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={
                  errorField === "email"
                    ? "border-red-500 focus:ring-red-500"
                    : ""
                }
              />
            </div>

            <div>
              <Label htmlFor="password" className="mb-2 block">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={
                  errorField === "password"
                    ? "border-red-500 focus:ring-red-500"
                    : ""
                }
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
      />
    </>
  );
}

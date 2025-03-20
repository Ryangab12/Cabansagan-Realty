import Link from "next/link";
import { createClient } from "@/lib/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogoutButton } from "@/components/auth/logout-button";
import { Home, Mail, Building } from "lucide-react";

export default async function Dashboard() {
  // Initialize Supabase client
  const supabase = await createClient();

  // Check if the user is authenticated
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/unauthorized"); // Redirect to Unauthorized page
  }

  // Get session expiration time (Unix timestamp)
  const expiresAt = session.expires_at || 0;
  const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
  const remainingMinutes = Math.max(
    0,
    Math.floor((expiresAt - currentTime) / 60),
  ); // Ensure non-negative value

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Session expires in: {remainingMinutes} min
          </p>
          <LogoutButton />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link href="/admin/properties" className="block">
          <div className="bg-card p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Properties</h2>
              <Building className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground mb-2">
              Total property listings
            </p>
            <div className="text-3xl font-bold">--</div>{" "}
            {/* Placeholder value */}
          </div>
        </Link>

        <Link href="/admin/inquiries" className="block">
          <div className="bg-card p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Inquiries</h2>
              <Mail className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground mb-2">
              Total customer inquiries
            </p>
            <div className="text-3xl font-bold">--</div>{" "}
            {/* Placeholder value */}
          </div>
        </Link>

        <Link href="/properties" className="block">
          <div className="bg-card p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Website</h2>
              <Home className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground mb-2">
              View your public website
            </p>
            <Button variant="outline" size="sm" className="mt-2">
              Visit Website
            </Button>
          </div>
        </Link>
      </div>

      <div className="bg-card p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button asChild className="w-full justify-start">
            <Link href="/admin/properties/new" className="flex items-center">
              <Building className="mr-2 h-4 w-4" />
              Add New Property
            </Link>
          </Button>

          <Button asChild variant="outline" className="w-full justify-start">
            <Link href="/admin/inquiries" className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              View Inquiries
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

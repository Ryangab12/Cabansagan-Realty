"use client";

import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Unauthorized Access</h1>
      <p className="text-lg text-gray-600 mb-6">
        You do not have permission to access this page.
      </p>
      <Link href="/auth/login" className="text-blue-500 hover:underline">
        Go to Login
      </Link>
    </div>
  );
}

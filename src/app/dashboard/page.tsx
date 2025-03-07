// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));
    if (!token) {
      router.push("/login"); // Redirect if not authenticated
    } else {
      // Decode token to get user info (implement your own logic)
      setUser({ email: "user@example.com" }); // Replace with actual user info
    }
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" }); // Call logout API
    document.cookie = "token=; Max-Age=0; path=/"; // Clear token
    router.push("/login"); // Redirect to login
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.email}!</p>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
}

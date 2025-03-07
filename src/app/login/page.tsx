// app/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    
    if (res.ok) {
      const { token } = await res.json();
      document.cookie = `token=${token}; path=/`; // Store token in cookies
      router.push('/dashboard'); // Redirect to dashboard
    } else {
      const errorData = await res.json();
console.log('Login failed:', errorData.error); // Log error to console

    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 dark:text-gray-400 mb-2">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 dark:text-gray-400 mb-2">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

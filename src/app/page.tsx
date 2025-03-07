import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">Welcome to the app!</h1>
      <Link
        href="/login"
        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
      >
        Go to Login
      </Link>
    </div>
  );
}

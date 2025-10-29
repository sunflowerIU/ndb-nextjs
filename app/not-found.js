// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-primary flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-6 text-center text-3xl font-semibold">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-center text-lg">
        Oops! It seems like the page you are looking for doesn&apos;t exist or
        has been moved.
      </p>
      <Link
        href="/"
        className="text-royal rounded-lg px-6 py-3 shadow-md transition duration-300 ease-in-out hover:scale-105"
      >
        Go to Homepage
      </Link>
      <div className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Nepal Digital Bazar. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

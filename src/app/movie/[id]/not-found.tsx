import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="flex h-[90vh] flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold text-white">404 Not Found</h2>

      <p className="text-white">Could not find the requested movie.</p>

      <Link
        href="/"
        className="mt-4 rounded-md bg-primary-100 font-bold px-4 py-2 text-sm text-main transition-colors hover:bg-primary-200"
      >
        Go Back
      </Link>
    </main>
  );
}

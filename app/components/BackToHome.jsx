"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const BackToHome = () => {
  const pathname = usePathname();

  if (!pathname || pathname === "/") {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-6 z-[100]">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-xs font-semibold text-gray-700 shadow-lg backdrop-blur transition-all duration-300 hover:scale-105"
      >
        <svg className="h-4 w-4 rotate-180" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to Home
      </Link>
    </div>
  );
};

export default BackToHome;

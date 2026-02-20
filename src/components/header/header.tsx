"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-white border-b border-orange-100 py-3 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="font-extrabold text-xl tracking-tight text-orange-500 hover:text-orange-600 transition-colors"
          >
            WorkItOut
          </Link>
          <nav>
            <ul className="flex gap-1">
              <li>
                <Link
                  href="/"
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    pathname === "/"
                      ? "bg-orange-500 text-white"
                      : "text-slate-600 hover:bg-orange-50 hover:text-orange-500"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/tasks"
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    pathname === "/tasks"
                      ? "bg-orange-500 text-white"
                      : "text-slate-600 hover:bg-orange-50 hover:text-orange-500"
                  }`}
                >
                  Tasks
                </Link>
              </li>
              <li>
                <Link
                  href="/challenges"
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    pathname === "/challenges"
                      ? "bg-orange-500 text-white"
                      : "text-slate-600 hover:bg-orange-50 hover:text-orange-500"
                  }`}
                >
                  Challenges
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

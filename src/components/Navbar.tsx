"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge"; // Import ShadCN Badge component
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Simulate checking if the user is logged in (replace with real check)
    const loggedUser = localStorage.getItem("username");
    // Assuming username is stored in localStorage
    if (loggedUser) {
      setIsLoggedIn(true);
      setUsername(loggedUser);
    }
  }, []);

  const LogOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    router.push("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-black to-gray-800 shadow-lg">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <Link className="block text-2xl text-red-600 hover:text-red-500" href="/">
            <span className="sr-only">Home</span>
            <Image src={"/logo.svg"} alt="logo" width={120} height={120} />
          </Link>

          <div className="flex items-center">
            {isLoggedIn && (
              <>
                <Badge className="md:hidden rounded-full w-8 h-8 flex items-center justify-center bg-blue-600 text-white text-sm font-bold mr-2">
                  {username.charAt(0).toUpperCase()}
                </Badge>
                <Button
                  onClick={LogOut}
                  className="md:hidden p-2 bg-red-500 text-sm hover:bg-red-600 mr-2"
                >
                  Log Out
                </Button>
              </>
            )}

            {/* <button
              onClick={toggleMobileMenu}
              className="rounded bg-gray-700 p-2 text-gray-300 transition hover:text-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button> */}
          </div>

          <div className="hidden md:flex items-center gap-8">
            {isLoggedIn ? (
              <>
                <Badge className="rounded-full w-10 h-10 flex items-center justify-center bg-blue-600 text-white text-xl font-bold">
                  {username.charAt(0).toUpperCase()}
                </Badge>
                <Button
                  onClick={LogOut}
                  className="p-5 py-2 bg-red-500 text-xl hover:bg-red-600"
                >
                  Log Out
                </Button>
              </>
            ) : (
              <div className="flex gap-4">
                <Link
                  className="rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  className="rounded-md bg-gray-800 px-5 py-2.5 text-center text-sm font-bold text-white transition hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  href="/register"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <div className="flex flex-col items-center p-4">
            {isLoggedIn ? (
              <>
                <Badge className="rounded-full w-10 h-10 flex items-center justify-center bg-blue-600 text-white text-xl font-bold">
                  {username.charAt(0).toUpperCase()}
                </Badge>
                <Button
                  onClick={LogOut}
                  className="mt-4 p-4 bg-red-500 text-xl hover:bg-red-600 w-full"
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Link
                  className="block w-full rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  className="block w-full rounded-md bg-gray-800 px-5 py-2.5 text-center text-sm font-bold text-white transition hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 mt-2"
                  href="/register"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

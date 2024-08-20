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
  const router=useRouter();
  useEffect(() => {
    // Simulate checking if the user is logged in (replace with real check)
    const loggedUser = localStorage.getItem("username"); 
    // Assuming username is stored in localStorage
    console.log(loggedUser)
    if (loggedUser) {
      setIsLoggedIn(true);
      setUsername(loggedUser);
    }
  }, []);

  const LogOut=()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <header className="bg-gradient-to-r from-black to-gray-800 mt-0 shadow-lg focus:outline-none">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-2xl text-red-600 hover:text-red-500" href="#">
              <span className="sr-only">Home</span>
              <Image src={"/logo.png"} alt="logo" width={50} height={50} />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-16">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-8 text-sm font-medium">
                <li>
                  <Link
                    className="text-gray-300 text-[20px] transition hover:text-blue-400"
                    href="#"
                  >
                    About
                  </Link>
                </li>
             
              </ul>
            </nav>

            <div className="flex items-center gap-6">
              {isLoggedIn ? (
                <>
                <Badge className="rounded-full w-10 h-10 flex items-center justify-center bg-blue-600 text-white text-xl font-bold">
                  {username.charAt(0).toUpperCase()}
                </Badge>
                <Button onClick={LogOut}  className="p-5 py-2 bg-red-500 text-2xl hover:bg-red-600">
                  LogOut
                </Button>
                </>
              ) : (
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    href="/login"
                  >
                    Login
                  </Link>

                  <Link
                    className="hidden rounded-md bg-gray-800 px-5 py-2.5 text-center text-sm font-bold text-white transition hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 sm:block"
                    href="/register"
                  >
                    Register
                  </Link>
                </div>
              )}

              <div className="block md:hidden">
                <button className="rounded bg-gray-700 p-2 text-gray-300 transition hover:text-gray-100">
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

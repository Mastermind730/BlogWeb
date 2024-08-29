"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'




const HomeBanner = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    // Simulate checking if the user is logged in (replace with real check)
    const loggedUser = localStorage.getItem("username");
    // Assuming username is stored in localStorage
    if (loggedUser) {
      setIsLoggedIn(true);
      setUsername(loggedUser);
    }
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="mx-auto max-w-screen-xl px-6 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold sm:text-6xl text-blue-900 leading-tight">
            Transforming Ideas into Words
          </h1>
          <p className="mt-4 text-lg text-blue-700 sm:text-xl">
            Dive into a world of knowledge, creativity, and inspiration. Welcome to our blogging platform!
          </p>
  
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {!isLoggedIn && (
              <Link
                className="block w-full rounded-full bg-blue-600 px-12 py-3 text-lg font-medium text-white shadow-lg hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 sm:w-auto"
                href="/login"
              >
                Get Started
              </Link>
            )}
  
            <Link
              className="block w-full rounded-full px-12 py-3 text-lg font-medium text-blue-600 border border-blue-600 shadow-lg hover:bg-blue-50 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 sm:w-auto"
              href="#main"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner

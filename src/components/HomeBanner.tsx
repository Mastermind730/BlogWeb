import React from 'react'
import Link from 'next/link'
type Props = {}

const HomeBanner = (props: Props) => {
  return (
    <section className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
        From Thoughts to Words:
          <strong className="font-extrabold text-blue-700 sm:block">  Welcome to Our Blog</strong>
        </h1>
  
       
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="#"
          >
            Get Started
          </Link>
  
          <Link
            className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
            href="#"
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
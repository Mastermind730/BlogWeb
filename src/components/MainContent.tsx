import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

type Props = {}

const MainContent = (props: Props) => {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="text-center font-bold text-4xl mt-2 mb-2">
        Latest Posts
      </h1>

      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {Array(3).fill("").map((_, index) => (
            <div key={index} className="p-4 lg:w-1/3 w-full">
              <Card className="h-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xs font-medium text-gray-400 mb-1 uppercase">
                    Category
                  </CardTitle>
                  <CardTitle className="sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Post Title {index + 1}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                  </CardDescription>
                  <a className="text-indigo-500 inline-flex items-center cursor-pointer">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </CardContent>
                <CardFooter className="flex justify-between items-center text-gray-400 text-sm mt-4">
                  <div className="inline-flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    1.2K
                  </div>
                  <div className="inline-flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    6
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MainContent;

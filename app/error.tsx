"use client";

import { Server } from "lucide-react";

export default function Error() {
  return (
    <>
      <html>
        <body>
          <main className="grid min-h-[calc(100vh-4rem)] place-items-center bg-white dark:bg-black  px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <Server className="mx-auto h-12 w-12 text-red-600 " />

              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-black sm:text-7xl dark:text-white">
                OOPS , Something Went Wrong !
              </h1>
              <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                Sorry, try again later.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-7700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                  Try Again !
                </a>
              </div>
            </div>
          </main>
        </body>
      </html>
    </>
  );
}

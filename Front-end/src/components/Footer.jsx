import React from "react";

export default function Footer() {
  return (
    <div className="flex items-end w-full min-h-screen bg-white">
      <footer className="w-full text-gray-700 bg-gray-100 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a
              className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
              href="/"
            >
              <svg
                className="w-auto h-5 text-gray-900 fill-current"
                viewBox="0 0 202 69"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Design, Fill and Share your cv!
            </p>
            <div className="mt-4">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start"></span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                About
              </h2>
              <nav className="mb-10 list-none">{/* About links */}</nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Support
              </h2>
              <nav className="mb-10 list-none">{/* Support links */}</nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Platform
              </h2>
              <nav className="mb-10 list-none">{/* Platform links */}</nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Contact
              </h2>
              <nav className="mb-10 list-none">{/* Contact links */}</nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 capitalize xl:text-center">
              Made with ❤️ by CVmaker, a project by NextVision
            </p>
            <p className="text-sm text-gray-700 capitalize xl:text-center">
              © 2024 All rights reserved{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

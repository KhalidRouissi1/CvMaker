import React from "react";

export default function Footer() {
  return (
    <div className="flex items-end w-full min-h-screen bg-white">
      <footer className="w-full text-gray-700 bg-gray-100 body-font">
        <div className="bg-gray-300">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 capitalize xl:text-center">
              Made with ❤️ by CVmaker, a project by NextVision
            </p>
            <p className="text-sm text-gray-700 capitalize xl:text-center">
              © 2024 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

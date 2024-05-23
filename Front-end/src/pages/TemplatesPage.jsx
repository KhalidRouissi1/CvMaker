import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function TemplatesPage() {
  const [hoverImage, setHoverImage] = useState("");

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center">
        <h3 className="text-gray-700 text-2xl font-extrabold">
          Choose your template
        </h3>
      </div>
      <div
        className="px-6 my-2 bg-slate-100 relative justify-center items-center w-1/2  mx-auto lg:h-72 rounded-3xl filter drop-shadow-2xl "
        style={{ backgroundImage: `url(${hoverImage})` }}
      >
        <div className="mt-1 sm:mt-8">
          <h1>Khalid Porject</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-auto max-w-7xl">
        {/* Template 1 */}
        <Link to={"/pdfViewer"}>
          <div className="rounded-md overflow-hidden shadow-lg hover:shadow-xl  filter hover:drop-shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
            <div
              className="h-56 bg-cover bg-center"
              style={{
                backgroundImage: `url("https://cdn.discordapp.com/attachments/1138848747665768499/1202924542360821820/landingImage.png?ex=65cf39c8&is=65bcc4c8&hm=1b99058f59c8fe4c22ed916af1636f203ce951db40ac67e195b70f7de3516fe5&")`,
              }}
              onMouseEnter={() =>
                setHoverImage(
                  "https://cdn.discordapp.com/attachments/1138848747665768499/1202924542360821820/landingImage.png?ex=65cf39c8&is=65bcc4c8&hm=1b99058f59c8fe4c22ed916af1636f203ce951db40ac67e195b70f7de3516fe5&"
                )
              }
              onMouseLeave={() => setHoverImage("")}
            >
              <div className="flex items-end justify-end h-full w-full bg-black bg-opacity-25">
                <p className="text-white font-bold text-lg p-4">Template 1</p>
              </div>
            </div>
          </div>
        </Link>

        {/* Template 2 */}
        <Link to={"/pdfViewer"}>
          <div className="rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <div
              className="h-56 bg-cover bg-center"
              style={{
                backgroundImage: `url("https://cdn.discordapp.com/attachments/1138848747665768499/1202924542360821820/landingImage.png?ex=65cf39c8&is=65bcc4c8&hm=1b99058f59c8fe4c22ed916af1636f203ce951db40ac67e195b70f7de3516fe5&")`,
              }}
            >
              <div className="flex items-end justify-end h-full w-full bg-black bg-opacity-25">
                <p className="text-white font-bold text-lg p-4">Template 2</p>
              </div>
            </div>
          </div>
        </Link>

        {/* Template 3 */}
        <Link to={"/pdfViewer"}>
          <div className="rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <div
              className="h-56 bg-cover bg-center"
              style={{
                backgroundImage: `url("https://cdn.discordapp.com/attachments/1138848747665768499/1202924542360821820/landingImage.png?ex=65cf39c8&is=65bcc4c8&hm=1b99058f59c8fe4c22ed916af1636f203ce951db40ac67e195b70f7de3516fe5&")`,
              }}
            >
              <div className="flex items-end justify-end h-full w-full bg-black bg-opacity-25">
                <p className="text-white font-bold text-lg p-4">Template 3</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <Footer />
    </>
  );
}

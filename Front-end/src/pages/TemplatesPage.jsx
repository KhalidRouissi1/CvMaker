import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function TemplatesPage() {
  const [hoverImage, setHoverImage] = useState("");
  const navigate = useNavigate();

  const handleTemplateClick = (templateId) => {
    localStorage.setItem("template", templateId);
    navigate("/pdfViewer");
  };

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center">
        <h3 className="text-gray-700 text-2xl font-extrabold">
          Choose your template
        </h3>
      </div>
      <div
        className="px-6 my-2 bg-slate-100 relative justify-center items-center w-1/2 mx-auto lg:h-72 rounded-3xl filter drop-shadow-2xl"
        style={{ backgroundImage: `url(${hoverImage})` }}
      >
        <div className="mt-1 sm:mt-8">
          <h1>Khalid Project</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-auto max-w-7xl">
        {/* Template 1 */}
        <div
          onClick={() => handleTemplateClick("1")}
          className="cursor-pointer rounded-md overflow-hidden shadow-lg hover:shadow-xl filter hover:drop-shadow-2xl transform transition duration-500 ease-in-out hover:scale-105"
        >
          <div
            className="h-56 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://media.discordapp.net/attachments/787719369768697916/1243259365457399868/image.png?ex=6650d303&is=664f8183&hm=ee48512b117b869f548193fd40c48eaa7d10b2c5233e548e6741d176ea9c0577&=&format=webp&quality=lossless&width=663&height=671")`,
            }}
            onMouseEnter={() =>
              setHoverImage(
                "https://media.discordapp.net/attachments/787719369768697916/1243259365457399868/image.png?ex=6650d303&is=664f8183&hm=ee48512b117b869f548193fd40c48eaa7d10b2c5233e548e6741d176ea9c0577&=&format=webp&quality=lossless&width=663&height=671"
              )
            }
            onMouseLeave={() => setHoverImage("")}
          >
            <div className="flex items-end justify-end h-full w-full bg-black bg-opacity-25">
              <p className="text-white font-bold text-lg p-4">Template 1</p>
            </div>
          </div>
        </div>

        {/* Template 2 */}
        <div
          onClick={() => handleTemplateClick("2")}
          className="cursor-pointer rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          onMouseEnter={() =>
            setHoverImage(
              "https://media.discordapp.net/attachments/787719369768697916/1243259595800182784/image.png?ex=6650d33a&is=664f81ba&hm=3647fdd7a9a99557cdd22f1c0a6bad74945f6c2735e58f8df565dcc929b8c279&=&format=webp&quality=lossless&width=676&height=671"
            )
          }
        >
          <div
            className="h-56 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://media.discordapp.net/attachments/787719369768697916/1243259595800182784/image.png?ex=6650d33a&is=664f81ba&hm=3647fdd7a9a99557cdd22f1c0a6bad74945f6c2735e58f8df565dcc929b8c279&=&format=webp&quality=lossless&width=676&height=671")`,
            }}
          >
            <div className="flex items-end justify-end h-full w-full bg-black bg-opacity-25">
              <p className="text-white font-bold text-lg p-4">Template 2</p>
            </div>
          </div>
        </div>

        {/* Template 3 */}
        <div
          onClick={() => handleTemplateClick("3")}
          className="cursor-pointer rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        >
          <div
            className="h-56 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://media.discordapp.net/attachments/787719369768697916/1243259731707957248/image.png?ex=6650d35a&is=664f81da&hm=0f055f3b093b8e9086f15c22f51e3380c0490debd83e6de8b546ef128cc34acf&=&format=webp&quality=lossless&width=676&height=671")`,
            }}
            onMouseEnter={() =>
              setHoverImage(
                "https://media.discordapp.net/attachments/787719369768697916/1243259731707957248/image.png?ex=6650d35a&is=664f81da&hm=0f055f3b093b8e9086f15c22f51e3380c0490debd83e6de8b546ef128cc34acf&=&format=webp&quality=lossless&width=676&height=671"
              )
            }
          >
            <div className="flex items-end justify-end h-full w-full bg-black bg-opacity-25">
              <p className="text-white font-bold text-lg p-4">Template 3</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

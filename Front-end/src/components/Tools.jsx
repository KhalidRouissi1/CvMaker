import React, { useState } from "react";

export default function Tools({ onColorChange }) {
  const [color, setColor] = useState("#7c6ed5");
  const handelColorChange = (e) => {
    setColor(e.target.value);
    onColorChange(e.target.value);
    // return e.target.value;
  };

  const handelSaving = () => {
    console.log("ggg");
  };
  return (
    <div className=" px-6 p- bg-white relative justify-center items-center  mx-auto h-1/4 sm:h-1/4 md:w-1/4 md:h-1/4 lg:w-full lg:  lg:h-56 rounded-3xl filter drop-shadow-2xl">
      <div className="mt-3  sm:mt-5">
        <h1 className="text-xl text-gray-600 tracking-wider text-sm sm:text-md font-black py-2">
          Color Picker
        </h1>
      </div>
      <div className="mt-1 sm:mt-8">
        <form action="" className=" flex-col flex justify-center  items-start">
          <label htmlFor="" className="text-gray-700 text-xs sm:text-md">
            Select a Color
          </label>
          <input
            type="color"
            className="border-gray-300 rounded-full my-4 "
            value={color}
            onChange={handelColorChange}
          />
        </form>
      </div>
      <div
        className="flex items-center justify-center w-28 h-12 rounded-xl relative left-96 bottom-20 capitalize text-white"
        style={{ backgroundColor: color }}
      >
        selected color
      </div>

      <div
        className="flex items-center justify-center w-28 h-12 mt-2 rounded-xl relative left-96 bottom-20 capitalize text-white bg-blue-500 p-2 "
        onClick={handelSaving}
      >
        Save your cv
      </div>
    </div>
  );
}

import React, { useState } from "react";

const Create = () => {
  return (
    <>
      <div className="main h-screen  dark:bg-gray-900">
        <div className="flex justify-center ">
          <p className="text-4xl text-white mt-4 ">
            Tweet <span className="text-green-500">Generator</span>{" "}
          </p>
        </div>
        <div className="flex justify-center m-8">
          <div class="max-w-sm p-6 lg:w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
             Background Color
            </p>
            <input type="checkbox" class="appearance-none checked:bg-blue-500" />

          </div>
        </div>
      </div>
    </>
  );
};

export default Create;

import React from "react";
import Card from "./Card";

const Hero = () => {
  return (
    <div className="dark:bg-gray-900 ">
    <h1 class="mb-2 text-4xl font-extrabold text-center text-gray-900 dark:text-white md:text-3xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">What You Will </span> Like to Create?</h1>
    <div class="grid grid-cols-3 gap-3">
     <Card/>
     <Card/>
     <Card/>
     </div>
    </div>
  );
};

export default Hero;

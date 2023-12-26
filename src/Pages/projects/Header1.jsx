import React from "react";

const Header1 = ({ title, content }) => {
  return (
    <header className="mb-2 font-OpenSans bg-Primary max-w-screen h-[50%] flex flex-col  text-left  md:p-6 py-7  text-white tracking-wide">
      <h1 className=" m-2 md:my-2 text-3xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
        {title}
      </h1>
      <h2 className=" m-2  text-sm ">{content}</h2>
    </header>
  );
};

export default Header1;

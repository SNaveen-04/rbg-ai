import React from "react";

const Embed = () => {
  return (
    <div>
      <div className=" mx-auto flex flex-col md:flex-row px-3 py-3 items-center text-Primary md:px-48 md:py-28 gap-5">
        <div>
          <iframe
          className="h md:h-[250px] md:w-[450px] "
            src="https://www.youtube.com/embed/ZGwFl6K_EyU"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="w-full">
          <p className="text-sm text-wrap md:text-lg">
            To learn more, check out our GitHub and read our publication
            presented at the 3rd International Conference on Machine Learning,
            Image Processing, Network Security and Data Sciences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Embed;

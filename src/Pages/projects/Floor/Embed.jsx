const Embed = () => {
  return (
    <div>
      <div className=" mx-auto flex flex-col lg:flex-row px-3 py-10 items-center text-Primary md:px-36 md:py-28 gap-5">
        <div>
          <iframe
            className=" md:h-[250px] md:w-[450px] "
            src="https://www.youtube.com/embed/ZGwFl6K_EyU"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="md:p-16">
        <p className="text-sm  text-pretty md:text-2xl">
          To learn more, check out{" "}
          <a
            className="text-gray-600 p-4"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/rbg-research/Floor-Plan-Detection"
          >
            our GitHub
          </a>{" "}
          and read{" "}
          <a
            className="text-gray-600 p-4"
            href="https://arxiv.org/abs/2112.09844v1"
            rel="noreferrer"
            target="_blank"
          >
            our publication
          </a>
          presented at the 3rd International Conference on Machine Learning,
          Image Processing, Network Security and Data Sciences
        </p>
        </div>
      </div>
    </div>
  );
};

export default Embed;

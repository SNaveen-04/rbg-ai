import { Carousel } from "flowbite-react";
const Slider = () => {
  return (
      <div className="h-56 bg-white  sm:h-64 xl:h-80 2xl:h-96 p-3">
        <Carousel leftControl=" " rightControl=" " slideInterval={3000}>
          <div className="flex h-full items-center p-24  justify-center md:text-3xl text-Green text-center">
            Delivering Human-Machine Loop for Accelerating Data-Driven Machine
            Learning Workflows.
          </div>
          <div className="flex h-full items-center p-24  justify-center  md:text-3xl text-Green text-center">
            Leverage our collaborative development platforms with automated and
            accelerated Machine Learning workflows to Structure the Unstructured
            data.
          </div>
          <div className="flex h-full items-center p-24 justify-center md:text-3xl text-Green text-center">
            We provide the services to Structure the Unstructured data with
            Machine and Deep Learning technology.
          </div>
        </Carousel>
      </div>    
  );
};

export default Slider;

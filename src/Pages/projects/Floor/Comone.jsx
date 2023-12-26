import React from "react";

const Comone = () => {
  return (
    <div className="bg-slate-100">
      <div className="text-left mx-auto px-3  text-Primary md:px-12 md:py-28">
        <h1 className="text-2xl md:text-3xl">
          We developed a deep learning model for Building Information Modeling
          (BIM) software using scalable vector formats to enable flexible
          designing of floor plans in the industry.
        </h1>
        <p className="py-3">
          Floor plans in the architectural domain can come from many sources
          that may or may not be in scalable vector format. The conversion of
          floor plan images to fully annotated vector images is a process that
          can now be realized by computer vision. Novel datasets in this field
          have been used to train Convolutional Neural Networks (CNN)
          architectures for object detection. Image enhancement through
          SuperResolution (SR) is also an established CNN-based network in
          computer vision that is used for converting low-resolution images to
          high-resolution ones. This work focuses on creating a multi-component
          module that stacks an SR model on a floor plan object detection model.
        </p>
        <div className="p-3 flex items-start">
        <a className=" text-black text-xs md:text-[17px] w-auto border border-slate-300 p-3 tracking-widest rounded-3xl hover:bg-slate-200 duration-150 outline-none uppercase" href="https://arxiv.org/abs/2112.09844v1" target="blank">
          read the paper (dev khare et al.)
        </a>
        </div>
      </div>
    </div>
  );
};

export default Comone;

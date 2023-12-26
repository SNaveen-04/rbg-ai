import React from 'react'

const Comthree = () => {
  return (
    <div className='bg-slate-100' >
         <div className="text-left mx-auto px-3  text-Primary md:px-12 md:py-28">
        <h1 className="text-2xl md:text-3xl">
        Our Floor-Plan-Detection uses multi-component module that can perform image enhancement and object detection.
        </h1>
        <p className="py-3">
        Since floor plan detection is an end-to-end conversation, the process need not be real-time. The main objective of the floor plan annotation task is to enhance the accuracy without constraints on time and computing power. To handle this, a novel multi-component module has been experimented with that can perform image enhancement followed by object detection. From the CubiCasa5k corpus, we select ninety low-resolution floor plans and observe the increase in performance after super-resolution.
        </p>
        <p>This work performs super-resolution for image enhancement before detecting floor plan icons and room types; stacking super-resolution frameworks with the CubiCasa architecture results in a multi-component module that does just this. The networks chosen for super-resolution here are EDSR, ESPCN, FSRCNN, and LapSRN. For the inference, we need a quantifiable measure that could help us make a conclusive statement on improving performance by using super-resolution. For this, the accuracy scores have to be based on ground truth scaled by the same factor chosen for super-resolution; the CubiCasa5k corpus provides ground truth in scalable vector graphics (SVG) format making this possible.</p>
      </div>
    </div>
  )
}

export default Comthree
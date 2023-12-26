import React from 'react'
import Floor from '../../../assests/Projects/floor4.jpg'

const Comtwo = () => {
  return (
    <div>
        <div className="text-left mx-auto px-3 md:mx-36 text-Primary md:px-12 md:py-28">
        <div className='flex justify-center p-4'>
            <img src={Floor} alt="floor" className=' h-48 object-scale-down md:h-96' />
        </div>
        <h1 className=" text-2xl md:text-3xl">
        Floor-Plan-Detection dataset
        </h1>
        <p className="py-3">
        Segmentation of floor plans needs to be precise for an end-to-end application. After observing the segmentation results of the empirical model for floor plans of various sizes, we concluded that there is a need for the CubiCasa approach to incorporate image enhancement as an essential preliminary step. CubiCasa5K is a large-scale floorplan image dataset containing 5000 samples annotated into over 80 floorplan object categories. The dataset annotations are performed in a dense and versatile manner by using polygons for separating the different objects. Our floorplan module was tested on 100 images from the CubiCasa5k dataset that had sizes less than 800x800. This was done to test the influence of super-resolution on low-resolution images.
        </p>
        <div className='p-3'>
        <a className=" text-black text-xs md:text-[17px] w-auto border border-slate-300 p-3  tracking-widest rounded-3xl hover:bg-slate-200 duration-150 outline-none uppercase" href="https://zenodo.org/record/2613548" target='blank'>
          download the database
        </a>
        </div>
      </div>
    </div>
  )
}

export default Comtwo
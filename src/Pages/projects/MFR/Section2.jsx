const Section = () => {
  return (
    
    <section className="max-md:p-2 max-md:py-2 md:p-8 max-w-screen rounded-lg text-Primary max-md:flex-col bg-slate-100 flex md:flex-row justify-between md:px-10 items-center">
          <img src='https://i.ibb.co/8r4PLqY/feature03-preview.png' className="p-4 text-sm max-md:h-40 md:w-1/2 max-md:w-40"/>
          <div className="p-4 tracking-wide w-1/2 flex flex-col gap-2 items-center justify-center max-md:text-sm max-w-2/3 md:text-xl">
              <h2 className="max-md:text-lg md:text-2xl font-semibold ">
              3D CAD Models
              </h2>
              <p className="max-md:text-sm md:text-lg ">
              Re-usability of the manufactured product has been a sustainable practice followed in many industries to save resources. It may be difficult to identify that product manually by going through each part of the product to identify which one can be reused. Machine feature is a process of identifying the semantically higher level of geometrical elements such as a hole, passage, slots, etc., from an image or a 3D model of the machine parts.
              </p>
              <a href='https://github.com/zibozzb/FeatureNet' className="border border-gray-500 px-2 rounded-lg bg-white text-gray-800">DATASET SOURCE</a>
          </div>
      </section>
    )
  }
  
  
  export default Section
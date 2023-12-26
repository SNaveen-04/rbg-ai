const Section1 = () => {
  return (
    
    <section className="p-8 bg-[#F9F9F9] max-md:p-2 max-w-screen rounded-lg text-Primary max-md:flex-col-reverse flex md:flex-row justify-between px-10 items-center">
        <div className="max-md:p-2 p-4 tracking-wide w-1/2 flex flex-col gap-2 items-center justify-center max-md:text-sm max-w-2/3 md:text-xl">
            <h2 className="max-md:text-lg md:text-2xl font-semibold ">
            We have developed a deep learning model that helps to identify important geometrical features of the machine parts from 3D models and images.
            </h2>
            <p className="max-md:text-sm md:text-lg ">
            Re-usability of the manufactured product has been a sustainable practice followed in many industries to save resources. It may be difficult to identify that product manually by going through each part of the product to identify which one can be reused. Machine feature is a process of identifying the semantically higher level of geometrical elements such as a hole, passage, slots, etc., from an image or a 3D model of the machine parts.
            </p>
            <a href='https://arxiv.org/abs/2108.11838v1' className=" text-black text-[17px] w-auto border border-slate-400 p-3 tracking-widest rounded-3xl hover:bg-slate-200 duration-150 outline-none uppercase" target="blank" >READ THE PAPER ( KAMAL ET AL.)</a>
        </div>
        <img src='https://i.ibb.co/DpQkYRq/123.png' className="p-4 text-sm max-md:h-40 max-md:w-40 md:w-1/2"/>
    </section>
  )
}


export default Section1
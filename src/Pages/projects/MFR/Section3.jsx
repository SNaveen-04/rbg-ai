const Section1 = () => {
    
    return (
      
      <section className="p-8 max-w-screen rounded-lg text-Primary max-md:flex-col-reverse flex md:flex-row justify-between px-10 items-center bg-[#F9F9F9]">
          <div className="p-4 tracking-wide w-1/2 flex flex-col gap-2 items-center justify-center max-md:text-sm max-w-2/3 md:text-xl">
              <h2 className="max-md:text-lg md:text-2xl font-semibold ">
              Machine feature Recognition uses inductive transfer learning.
              </h2>
              <p className="max-md:text-sm md:text-lg ">
              Geometrical features were extracted from the CAD models using an inductive transfer learning technique using a model pre-trained with fully convolutional geometric features for image registration. Point cloud registration is the underlying source task of this process. The number of extracted geometrical feature vectors from this process was varying concerning the CAD models. To get the same number of feature spaces, later an SPP layer was introduced as the target task of the inductive transfer learning process. Frobenius norm was computed to measure the similarity between the CAD models. Based on the obtained similarity score, 3D models were assigned to the respective classes.
              </p>
              <a href='https://arxiv.org/abs/2108.11838v1' className=" text-black text-[17px] w-auto border border-slate-400 p-3 tracking-widest rounded-3xl hover:bg-slate-200 duration-150 outline-none uppercase" target="blank">READ THE PAPER ( KAMAL ET AL.)</a>
          </div>
          <img src='https://i.ibb.co/N9gNNg5/flow8.png' className="p-4 text-sm max-md:h-40 max-md:w-40 md:w-1/2"/>
      </section>
    )
  }
  
  
  export default Section1
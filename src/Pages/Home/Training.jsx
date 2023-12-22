import { MdGroups } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
const Training = () => {
    return (
        <section className="bg-slate-100 p-5 text-Green">
    
          <h1 className="my-4 text-center text-4xl">Training.AI & Research.AI</h1>
    
          <hr className="h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-Green to-transparent opacity-25 dark:opacity-100" />
    
          <div className="flex flex-col text-center xl:flex-row justify-between items-center xl:px-10">
    
          <div className="p-2 px-12 xl:w-4/6">
              <h3 className="my-2 text-2xl">
              Lets Make AI for Everyone is Possible & Achieve it Together!
              </h3>
              <p className="my-2">
              As Digital transformation becomes the core of business strategies spanning all industry segments and markets, Workforces should prepare to adapt to the change of AI-driven digital transformation.
              </p>
              <p className="my-2">
              It’s time to accelerate the workforce through experience-based AI learning to accelerate any business. We aim at upskilling and reskilling workforces to adhere to the new age AI projects.
              </p>
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row">
                    {/* AI4Everyone and Less2Practice */}
                    <div className="my-1 p-2 flex flex-col justify-center items-center">
                        <MdGroups  className="text-5xl" />
                      <h3 className="my-4 text-3xl">AI4Everyone</h3>
                      <p className="w-5/6">Level 1 program to train your workforce to attain the multidisciplinary expertise in handling Text-Voice-Vision-Numeric Analytics in formulating AI Solutions.</p>
                    </div>
                    <div className="my-1 p-2 flex flex-col justify-center items-center">
                        <FaPencilAlt  className="text-5xl" />
                      <h3 className="my-4 text-3xl">Less2Practice</h3>
                      <p className="w-5/6">Level 2 program to the teams or groups to Learn-Experiment-Share-Seek practice attaining AI solutions in minimal time.</p>
                    </div>
              </div>
              <div className="flex flex-col md:flex-row">
                    {/* D5Practice and AI4Industry */}
                    <div className="my-1 p-2 flex flex-col justify-center items-center">
                        <FaPaintBrush className="text-5xl" />
                    <h3 className="my-4 text-3xl">D5Practice</h3>
                      <p className="w-5/6">Level 3 program for AI practitioners to learn AI-centric Design-Develop-Debug-Deploy-Delivery to bridge the gap between AI Research and Business Requirements.</p>
                    </div>
    
                    <div className="my-1 p-2 flex flex-col justify-center items-center">
                        <FaIndustry  className="text-5xl" />
                      <h3 className="my-4 text-3xl">AI4Industry</h3>
                      <p className="w-5/6">AI is the common skill set required by an engineer and will be an essential skill set of the future. We accelerate the workforce through experience-based AI learning.</p>
                    </div>
              </div>
            </div>
            
          </div>
        </section>
      )
    }

export default Training
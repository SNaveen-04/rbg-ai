import { FaRobot } from "react-icons/fa";
const Training = [
  'We at RBG.AI upskilling and reskilling workforces to adhere to the new age AI projects. Focused in delivering high performance with optimal cost & time.',
  'As Digital transformation becomes the core of business strategies spanning all industry segments and markets, Workforces should prepare to adapt to the change of AI-driven digital transformation.',
  'We bring efficient experience based learning through Learn-Experiment-Share-Seek practice. Delivering AI centric Design-Develop-Debug-Deploy-Delivery to bridge the gap between AI Research and Business Requirement.',
  'We help your workforce to attain the multidisciplinary expertise in handling Text-Voice-Vision-Numeric Analytics to reduce the uncertainty nature of the AI Solutions.'
]

const AiTraining = () => {
  return (
    <div className=" font-Sans text-center h-auto m-4 py-8 my-10 mx-8 xl:mx-20 2xl:mx-16 max-md:mx-4 p-2 bg-Primary rounded-xl text-Secondary shadow-sm  shadow-slate-400">
      <div className="text-center m-2">
        <h1 className="max-md:text-xl md:text-2xl xl:text-3xl my-4">AI-Training</h1>
        <h2 className="max-md:text-lg md:text-xl xl:text-2xl my-1">Making AI for Everyone Possible</h2>
      </div>
      <div className="flex justify-evenly items-center max-md:flex-col">
        <ul className=" max-md:text-sm max-md:p-2 md:p-6 md:text-lg tracking-wide text-justify w-3/4 list-disc">
        {Training.map((data,index)=>{
          return <li key={index}>{data}</li>
        })}
        </ul>
        <div className="flex flex-col p-6 justify-between items-center">
          <FaRobot className="max-md:text-6xl text-9xl"/>
          <h2 className="text-2xl">AI-Training</h2>
          <a href="https://github.com/rbg-research/AI-Training" className="border border-white hover:bg-Secondary hover:border-black hover:text-Primary  m-2 p-1 rounded-xl">KNOW MORE</a>

        </div>
      </div>
    </div>
  )
}

export default AiTraining
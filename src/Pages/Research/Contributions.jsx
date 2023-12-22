import Project from "./Project"
import { FaLinode } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaSignLanguage } from "react-icons/fa";

let projects =[
    {
        icon:FaLinode,
        title:'Floor-Plan-Detection',
        Description:'floor plan object detection with super resolution',
        link:'/projects/floor-plan'
    },
    {
        icon:FaCogs,
        title:'MFR',
        Description:'Zero-shot Machine Feature Retrieval',
        link:'/projects/mfr'
    },
    {
        icon:FaSignLanguage,
        title:'CoRePooL',
        Description:'Corpus for resource poor language',
        link:'/projects/CoRePool'
    },
  ]

const Contributions = () => {
  return (
    <div className=" font-Sans text-center h-auto m-4 py-8 my-10 mx-8 2xl:mx-16 max-md:mx-4 p-2 bg-Secondary rounded-xl text-Primary shadow-sm  shadow-slate-400">
        <h1 className="max-xl:text-3xl xl:text-4xl my-4">Research Contributions</h1>
        <h2 className="max-xl:text-2xl xl:text-3xl my-1">Structuring the Unstructured</h2>
        <div className="flex justify-between xl:justify-center items-center flex-col md:flex-row">
        {
            projects.map((project,index)=>{
                return(
                    <Project key={index} title={project.title} Description={project.Description} link={project.link} icon={project.icon}></Project>
                )
            })
        }
        </div>
    </div>
  )
}

{/* <Project key={index} title={project.title} description={project.description} link={project.link}/> */}
export default Contributions
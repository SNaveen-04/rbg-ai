import { Carousel } from "flowbite-react"
import Workshop from "./Workshop"
import EssentialAi from '../../assests/Programs/essentialAi.svg'
import Llm from '../../assests/Programs/llm.svg'
import MedicalAi from '../../assests/Programs/medicalAi.svg'
import Mldevops from '../../assests/Programs/MlDevOps.svg'

const bootcamps = [
    {
        Image:Llm,
        Venue: `SREC SPARK Incubation Foundation,Coimbatore`,
        Date: `8th to 12th, Jan 2024`,
        link:'/Workshop/LLM'
    }
    ,
    {
        Image:EssentialAi,
        Venue: `SREC SPARK, Coimbatore`,
        Date: `30th to 3rd, Oct & Nov 2023`,
        link:'/Workshop/EssentialAi'
    }
    ,{
        Image:MedicalAi,
        Venue: `SREC SPARK, Coimbatore`,
        Date: `3rd To 7th, Oct 2023`,
        link:'/Workshop/MedicalAi'
    },
    {
      Image:Mldevops,
      Venue: `Amrita Campus, Coimbatore`,
      Date: `20 & 21, April 2022`,
      link:'/Workshop/MedicalAi'
  },
]
const Workshops = () => {
  return (
    <div>
    <h1 className=" text-Primary text-center  text-5xl">WORKSHOPS AND BOOTCAMPS</h1>
    <div className="bg-Primary h-[50%] md:h-[60%] lg:h-[70%] mx-8 my-10 font-OpenSans rounded-md text-white">
        <Carousel leftControl="" rightControl="" slide={false} indicators={true}>
            {bootcamps.map((bootcamp,index)=>{
              return <Workshop Venue={bootcamp.Venue} Image={bootcamp.Image} Date={bootcamp.Date} link={bootcamp.link}  key={index}/>
            })}
        </Carousel>
    </div>
    </div>
  )
}

export default Workshops
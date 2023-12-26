import Agenda from "./Agenda"
import MedicalAi from '../../../assests/Programs/medicalAi.svg'
import Conclusion from "./Conclusion"
import Introduction from "./Introduction"
import Mentors from "./Mentors"

const MedicalAiPage = () => {
  return (
    <div>
    <header className=' px-6 py-3 bg-red-400 max-w-screen max-h-1/4'>
            <img src={MedicalAi} className='h-48'/>
    </header>
    <Introduction/>
    <Mentors/>
    <Agenda/>
    <Conclusion/>
    </div>
  )
}

export default MedicalAiPage
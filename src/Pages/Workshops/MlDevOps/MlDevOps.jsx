import Conclusion from "./Conclusion"
import Introduction from "./Introduction"
import Mentors from "./Mentors"
import Mldevops from '../../../assests/Programs/MlDevOps.svg'

const MlDevOps = () => {
  return (
    <div>
    <header className=' px-6 py-3 bg-red-400 max-w-screen max-h-1/4'>
            <img src={Mldevops} className='h-48'/>
    </header>
    <Introduction/>
    <Mentors/>
    <Conclusion/>
    </div>
  )
}

export default MlDevOps
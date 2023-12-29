import EssentialAi from '../../../assests/Programs/essentialAi.svg'
import Introduction from './Introduction'
import Overview from './CourseOverview'
import Background from './Background'

const AiEssentials = () => {
  return (
    <div>
        <header className=' px-6 py-3 bg-Red max-w-screen max-h-1/4'>
            <img src={EssentialAi} className='h-48'/>
        </header>
        <Introduction/>
        <Overview/>
        <Background/>
    </div>
  )
}

export default AiEssentials
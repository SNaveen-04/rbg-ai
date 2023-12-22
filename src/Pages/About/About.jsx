import Header from '../../Components/Header'
import Advisory from './Advisory'
import Practitioner from './Practitioner'

let Heading = {
  title:"RBG Artificial Intelligence Research",
  content:'We are Mathematicians who practice Software Engineering envisioned to democratize disruptive AI solutions for sustainable business growth.',
}
const About = () => {
  return (
    <div>
       <div>
       <Header title={Heading.title} content={Heading.content}/>
       </div>
       <div>
          <Advisory/>
       </div>
       <div>
           <Practitioner/>
       </div>
    </div>
  )
}

export default About
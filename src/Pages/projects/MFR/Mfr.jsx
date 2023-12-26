import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Usecase from "./Usecase"
import Video from "./Video"
import Header1 from "../Header1"


let Heading = {
  title:"CoRePooL - Corpus for Resource Poor Languages",
  content:'NS Kamal, HB Barathi Ganesh, VV Sajith Variyar, V Sowmya & K P Soman',
}

const Mfr = () => {
  return (
    <div>
        <Header1 title={Heading.title} content={Heading.content}/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Usecase/>
        <Video/>
    </div>
  )
}

export default Mfr
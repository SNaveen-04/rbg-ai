import Header from "../../Components/Header"
import AiTraining from "./AiTraining"
import Contributions from "./Contributions"
import Member from "./Member"
import Workshops from "./Workshops"

let Heading = {
  title:"RBG Artificial Intelligence Research",
  content:'Focused to span AI solutions across multiple domains to Structure the Unstructured data',
}
const ResearchPage = () => {
  return (
    <div className="min-h-screen font-OpenSans">
        <Header title={Heading.title} content={Heading.content}/>
        <Contributions/>
        <AiTraining/>
        <Workshops/>
        <Member/>
    </div>
  )
}

export default ResearchPage
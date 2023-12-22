import Header from "../../Components/Header"
import AiTraining from "./AiTraining"
import Contributions from "./Contributions"
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
    </div>
  )
}

export default ResearchPage
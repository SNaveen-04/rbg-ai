import Header from "../../Components/Header"
import AiTraining from "./AiTraining"
import Contributions from "./Contributions"
import Workshops from "./Workshops"

const ResearchPage = () => {
  return (
    <div className="min-h-screen font-OpenSans">
        <Header/>
        <Contributions/>
        <AiTraining/>
        <Workshops/>
    </div>
  )
}

export default ResearchPage
import Header from "../../Components/Header"
import Consulting from "./Consulting"
import Training from "./Training"
import Resourcing from "./Resourcing"
import Slider from "./Slider"
import Clients from "./Clients"
let Heading = {
  title:"RBG Artificial Intelligence Research",
  content:'Focused to span AI solutions across multiple domains to Structure the Unstructured data',
}
const Home = () => {
  return (
    <div className="font-Poppins">
    <Header title={Heading.title} content={Heading.content}/>
    <Slider/>
    <Consulting/>
    <Resourcing/>
    <Training/>
    <Clients/>
    </div>
  )
}

export default Home
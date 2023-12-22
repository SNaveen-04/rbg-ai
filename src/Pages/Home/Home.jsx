import Header from "../../Components/Header"
import Consulting from "./Consulting"
import Training from "./Training"
import Resourcing from "./Resourcing"
import Slider from "./Slider"
import Clients from "./Clients"
const Home = () => {
  return (
    <div className="font-Poppins">
    <Header color='#6D9EEB'/>
    <Slider/>
    <Consulting/>
    <Resourcing/>
    <Training/>
    <Clients/>
    </div>
  )
}

export default Home
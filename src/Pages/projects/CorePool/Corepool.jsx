import Header from "../../../Components/Header"
import Benchmark from "./Benchmark"
import Motivation from "./Motivation"
import Section1 from "./Section1"
import Table from "./Table"

let Heading = {
    title:"Geometry based machining feature retrieval with inductive transfer learning",
    content:'Dev Khare, NS Kamal, HB Barathi Ganesh, V Sowmya & VV Sajith Variyar',
}
const Corepool = () => {
  return (
    <div className=" font-OpenSans">
        <Header title={Heading.title} content={Heading.content}/>
        <Section1/>
        <Motivation/>
        <Table/>
        <Benchmark/>
    </div>
  )
}

export default Corepool
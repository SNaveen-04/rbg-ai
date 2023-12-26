import Card from '../../../Components/Card'

const mentors = [
    {
        name: "Shyam R",
        role: "Solution Head at RBG.AI",
        img: "https://i.ibb.co/5TsrDqW/shyam.jpg",
      },
    {
        name:'Barathi Ganesh',
        role:'Research Head at RBG.AI',
        img:"https://i.ibb.co/WPkMzhL/Barathi-Ganesh.jpg"
    },
    {
        name: "Kamal N S",
        role: "AI Senior Practitioner at RBG.AI",
        img: "https://i.ibb.co/gdsyZ4S/Kamal.jpg",
    },
    {
        name: "Keshav",
        role: "AI Senior Practitioner at RBG.AI",
        img: "https://i.ibb.co/DVxB8K0/keshav.jpg",
    },
    {
        name: "Karthik T R",
        role: "AI Senior Practitioner at RBG.AI",
        img: "https://i.ibb.co/9bRnqfq/karthik.jpg",
    },
]

const Mentors = () => {
  return (
    <div className='m-4 p-4'>Mentors
    <div className='flex items-center justify-around'>
        {mentors.map((mentor,index)=>{
            return(
                <Card key={index} name={mentor.name} role={mentor.role} img={mentor.img}/>
            )
        })}
    </div>
    </div>
  )
}

export default Mentors
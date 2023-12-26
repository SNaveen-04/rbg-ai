import Card from '../../../Components/Card'

const mentors = [
    {
        name:'Barathi Ganesh',
        role:'Research Head at RBG.AI',
        img:"https://i.ibb.co/WPkMzhL/Barathi-Ganesh.jpg"
    },
    {
        name: "Kamal N S",
        role: "AI Senior Practitioner at RBG.AI",
        img: "https://i.ibb.co/gdsyZ4S/Kamal.jpg",
    }
]

const topics =[
    {
        title:"ML Structurization:",
        content: `"Coding is an art", let us perceive it by practising pipelines through functions and classes to think like an AI artist.`
    },
    {
         title:"Version Control",
         content: `"AI is full of uncertainty", where updates and upgrades are oblivious. So let we practice tracking and managing changes we made to software code.`
    },
    {
        title:"Model Serving:",
        content: `"Consume what you have built", let us host your trained model as REST/Socket service to use it in practical applications.`
    },
    {   
        title:"Containerization:",
        content: `"Get rid of the dependencies", let us make a product that uses OS-level virtualization to deliver software without the dependency constraints.`
    },
    {   
        title:"Interactive Application:",
        content: `"Enrich the Exposure", let us learn a great way to share machine learning models and analyses with interactive front-ends.`
    },
    {   
        title:"CI/CD:",
        content:`"Focus on your core tasks", so let us establish continuous integration and continuous delivery (СI/CD) practices for deploying and updating machine learning pipelines in less time.`
    }
]

const Mentors = () => {
  return (
    <div className='flex max-md:flex-col justify-center items-center max-x-screen min-h-screen'>
        <div className='w-1/2 flex items-center justify-center flex-col'>
            {mentors.map((mentor,index)=>{
                return(
                    <Card key={index} name={mentor.name} role={mentor.role} img={mentor.img}/>
                )
            })}
        </div>
        <ul className='flex flex-col gap-2 items-center justify-center p-4 text-red-400 max-md:text-sm md:text-lg'>
            {topics.map((topic,index)=>{
                return(
                    <li key={index}><span className='underline'>{topic.title}</span>{topic.content}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default Mentors
import { program1,program2 } from "./programs"

let bg = "bg-gray-100"
const togglebg = () =>{
    bg = bg === "bg-gray-100" ? "bg-white" : "bg-gray-100"
}
const Agenda = () => {
  return (
    <div>
        {program1.map((day,index)=>{
            togglebg()
            return(
                <div className={`px-8 py-2 text-red-400 ${bg}`} key={index}>
                    <h1 className="text-center my-4 underline max-md:text-lg md:text-2xl">{day.day}</h1>
                    {day.sessions.map((session,key)=>{
                        return(
                            <div key={key}>
                                <h3 className=" max-md:text-sm md:text-xl m-2"><span className="pr-2 underline">{session.session}</span>{session.sessionName}</h3>
                                <ul>
                                    {session.topic.map((topics,key2)=>{
                                        return(
                                            <li className="m-1 text-gray-600 max-md:text-xs md:text-lg" key={key2}>{topics}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            )
        })}
        {
            program2.map((program,index)=>{
                togglebg()
                return(
                <div className={`px-8 py-2 text-red-400 ${bg}`} key={index}>
                        <h1 className="text-center underline md:text-2xl max-md:text-lg">
                        {program.day}
                        </h1>
                        {
                            program.sessions.map((session,key)=>{
                                return <div key={key}>
                                <h3 className=" max-md:text-sm md:text-xl m-2"><span className="pr-2 underline">{session.session}</span>{session.sessionName}</h3>
                                {
                                    session.topics.map((topic,key2)=>{
                                        return (
                                            <div key={key2}>
                                                <h4 className="text-gray-950 max-md:text-xs font-semibold md:text-lg">{topic.title}</h4>
                                                {
                                                    topic.contents.map((content,key3)=>{
                                                        return <p className="m-1 text-gray-600 max-md:text-xs md:text-lg" key={key3}>{content}</p>
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            })
                        }
                    </div>
                )
            })
        }
    </div>
  )
}

export default Agenda
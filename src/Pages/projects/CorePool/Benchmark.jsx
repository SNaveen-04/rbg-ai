const Logos =[
    {
        title:'gender',
        src:'https://i.ibb.co/61FqS8N/gender.png'
    },{
        title:'speech',
        src:"https://i.ibb.co/MkbYhzm/speech-to-text.png",
    },{
        title:'text',
        src:"https://i.ibb.co/L099b0R/text-to-speech.png",
    },{
        title:'speaker',
        src:"https://i.ibb.co/KsLj4LY/chat.png",
    }
    ,{
        title:'translator',
        src:"https://i.ibb.co/F7T2r63/translator.png"
    }
]

const Benchmark = () => {
  return (
    <div className="text-Primary">
        <div className="m-10 flex max-md:flex-col md:flex-row gap-8 items-center justify-center">
            {Logos.map((logo,index)=>{
                return (
                    <div key={index}>
                    <img src={logo.src} className="h-36"/>
                    <span>{logo.title}</span>
                    </div>)
            })}
        </div>
        <div className="p-8 text-2xl text-center">
        <p>
        To learn more, check out 
        <a className="text-slate-400"> our GitHub </a>and read <a className="text-slate-400">our Benchmark </a> where you can find the fine tuned models applied for the different tasks and the observed results.
        </p>
        </div>
    </div>
  )
}

export default Benchmark
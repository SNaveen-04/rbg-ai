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
        <div className="m-10 flex max-md:flex-col md:flex-row gap-10 items-center justify-center">
            {Logos.map((logo,index)=>{
                return (
                    <div key={index}>
                    <img src={logo.src} className="h-36"/>
                    <span className="flex justify-center">{logo.title}</span>
                    </div>)
            })}
        </div>
        <div className="p-8 text-2xl text-center">
        <p>
        To learn more, check out 
        <a className="text-gray-600 p-4" href="https://github.com/rbg-research/CoRePooL" target="_blank" rel="noreferrer"> our GitHub </a>and read <a className="text-gray-600 p-4" target="_blank" href="https://github.com/rbg-research/CoRePooL/tree/main/benchmarks/badaga" rel="noreferrer">our Benchmark </a> where you can find the fine tuned models applied for the different tasks and the observed results.
        </p>
        </div>
    </div>
  )
}

export default Benchmark
const values = [
    'We collated 420 minutes of annotated and 968 minutes of unannotated corpus for Badaga in CoRePooL corpus.',
    'We released 420 minutes of speech data for performing Speech-to-Text, Text-to-Speech, Gender Identification and Speaker Identification.',
    'We released Badaga-English parallel text corpus with 2100 number of sentences for translation.',
    'The foundation models are fine tuned to setup the baseline for all the tasks.']

const Section1 = () => {
    return (
      <section className="max-md:p-2 max-md:py-2 md:p-8 max-w-screen rounded-lg text-Primary max-md:flex-col bg-white flex md:flex-row justify-between md:px-10 items-center">
            <img src="https://i.ibb.co/Q61xyGd/core2.png" className="p-4 text-sm max-md:h-40 md:w-1/2 max-md:w-40"/>
            <div className="max-md:p-2  md:p-4 tracking-wide w-1/2 flex flex-col gap-2 items-center justify-center max-md:text-sm max-w-2/3 md:text-xl">
                <h2 className="max-md:text-xl text-center md:text-4xl">
                    The contributions of this paper
                </h2>
                <ul className="max-md:text-sm list-disc md:text-base ">
                    {values.map((value,index)=>{
                        return <li className="my-5" key={index}>{value}</li>
                    })}
                </ul>
                <a href='https://github.com/rbg-research/CoRePooL/tree/main/benchmarks/badaga' className="border border-gray-500 p-3 max-md:p-1 rounded-2xl max-md:text-xs text-center bg-white text-gray-800">CORE AND PRETRAINED MODELS</a>
            </div>
        </section>
      )
    }
    
    
    export default Section1
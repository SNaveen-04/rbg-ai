import { FaRegFileImage } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
import { MdKeyboardVoice } from "react-icons/md";
const Consulting = () => {
  return (
    <section className="bg-slate-100 p-5  text-Green">

      <h1 className="my-4 text-center text-4xl">Solutioning.AI & Consulting.AI</h1>

      <hr className="h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-Green to-transparent opacity-25 dark:opacity-100" />

      <div className="flex flex-col text-center xl:flex-row justify-between items-center xl:px-10">

      <div className="p-2 px-12 xl:w-4/6">
          <h3 className="my-2 text-2xl">
            Let our AI Service Stack Accelerate your Business Resilience
          </h3>
          <p className="my-2">
            Our additive Artificial Intelligence Service Stack (AISS) is a continuous learning platform with the collation of plug-and-play microservices. We customize these microservices to support your requirements.
          </p>
          <p className="my-2">
            Experience sustainable growth in your business by leveraging our AI Solutions & Consultants with the domain knowledge of your business.
          </p>
        </div>
        <div>
          <div className="flex flex-col md:flex-row">
                {/* Text analytics and Vision Analytics */}
                <div className="my-1 p-2 flex flex-col justify-center items-center">
                  <IoDocumentTextSharp className="text-5xl" />
                  <h3 className="my-4 text-3xl">Text Analytics</h3>
                  <p className="w-5/6">Includes deep learning models to develop personalized NLP problems and solutions to collate the information from the midst of the text.</p>
                </div>
                <div className="my-1 p-2 flex flex-col justify-center items-center">
                  <FaRegFileImage  className="text-5xl" />
                  <h3 className="my-4 text-3xl">Vision Analytics</h3>
                  <p className="w-5/6">Seeks to deliver computer vision solutions to create AI systems that see, explore, learn, and reason from images and videos.</p>
                </div>
          </div>
          <div className="flex flex-col md:flex-row">
                {/* Voice analytics and Data Analytics */}
                <div className="my-1 p-2 flex flex-col justify-center items-center">
                <MdKeyboardVoice className="text-5xl" />
                <h3 className="my-4 text-3xl">Voice Analytics</h3>
                  <p className="w-5/6">Simplifying the Human Machine Interface by integrating powerful deep learning model-based speech solutions that run on any infrastructure.</p>
                </div>

                <div className="my-1 p-2 flex flex-col justify-center items-center">
                <FaDatabase className="text-5xl" />
                  <h3 className="my-4 text-3xl">Data Analytics</h3>
                  <p className="w-5/6">Offers data-driven solutions and Big data services to enable reliable IoT through explainable descriptive, predictive, and prescriptive models.</p>
                </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Consulting
import { FaRegAddressCard } from "react-icons/fa6";
import { TiSpanner } from "react-icons/ti";
import { MdGroups } from "react-icons/md";
import { HiChartBar } from "react-icons/hi";

const Resourcing = () => {
  return (
    <section className=" bg-white p-5 text-Green">

      <h1 className="my-4 text-center text-4xl">Resourcing.AI</h1>

      <hr className="h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-Green to-transparent opacity-25 dark:opacity-100" />

      <div className="flex flex-col text-center xl:flex-row justify-between items-center xl:px-10">

      <div className="p-2 px-12 xl:w-4/6">
          <h3 className="my-2  text-2xl">
            Unique with Domain Diversity & Multidisciplinary Experience!
          </h3>
          <p className="my-2">
            Our resources have a strong foundation in AI technologies which is applied across various industry sectors. Our continuous learning initiative and programs keep them updated with the latest AI breakthroughs. 
          </p>
          <p className="my-2">
            The blend of AI research and software engineering eliminates the barriers to migrating AI solutions from POCs to successful products or services.
          </p>
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row">
                {/*Foundation and Diversity */}
                <div className="my-1 p-2 flex flex-col justify-center items-center">
                    <HiChartBar className="text-5xl" />
                  <h3 className="my-4 text-3xl">Foundation</h3>
                  <p className="w-5/6">Our resources are highly skilled professionals who hold a minimum qualification as postgraduate or doctorate in AI & practiced expressing mathematics in computer languages.</p>
                </div>
                <div className="my-1 p-2 flex flex-col justify-center items-center">
                    <MdGroups  className="text-5xl" />
                  <h3 className="my-4 text-3xl">Diversity</h3>
                  <p className="w-5/6">Varying undergraduate domain (Bio-informatics, Civil, Computer Science, Electrical & Mechanical) & postgraduate in AI makes our resources as best applied engineers.</p>
                </div>
          </div>
          <div className="flex flex-col md:flex-row">
                {/* Skillset and Experience */}
                <div className="my-1 p-2 flex flex-col justify-center items-center">
                <TiSpanner className="text-5xl" />
                <h3 className="my-4 text-3xl">Skillset</h3>
                  <p className="w-5/6">AI mathematicians who practice software engineering across Text-Speech-Image-Data Analytics in cloud and edge technology.</p>
                </div>

                <div className="my-1 p-2 flex flex-col justify-center items-center">
                    <FaRegAddressCard className="text-5xl" />
                  <h3 className="my-4 text-3xl">Experience</h3>
                  <p className="w-5/6">Pioneers who started practicing conventional Machine Learning from 2013, Deep Learning from 2015, and MLDevOps from 2018.</p>
                </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Resourcing
import BDO from "../../assests/partners/bdo1.png";
import mangalam from "../../assests/partners/mangalam.png";
import ministry from "../../assests/partners/ministry.png";
import technomile from "../../assests/partners/technomile.png";
import tera from "../../assests/partners/tera.jpg";
import amrita from "../../assests/partners/amrita1.png";
import aws from "../../assests/partners/aws.avif";
import nvidia from "../../assests/partners/nvidia.webp";
import cdii from "../../assests/partners/cdiic.png";
import spark from "../../assests/partners/srec.png";
import MicrosoftForStartups from "../../assests/partners/Microsoft-for-Startups.jpg"

const Clients = () => {
  return (
    <div className=" flex flex-col bg-white text-Green md:flex-row ">
      <div className="p-5">
        <p className="text-common text-3xl text-center">Clients</p>
        <hr className="h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-Green to-transparent opacity-25 dark:opacity-100" />
        <div className="flex flex-col md:flex-row items-center flex-wrap p-10 gap-12">
          <img src={BDO} alt="" className="h-12" />
          <img src={ministry} alt="" className="h-14" />
          <img src={mangalam} alt="" className="h-12" />
          <img src={tera} alt="" className="h-28" />
          <img src={technomile} alt="" className="h-6" />
        </div>
      </div>
      <div className="p-5">
        <p className="text-common text-3xl text-center">Accelerators</p>
        <hr className="h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-Green to-transparent opacity-25 dark:opacity-100" />
        <div className="flex flex-col md:flex-row items-center flex-wrap p-10 gap-12">
          <img src={amrita} alt="" className="h-12" />
          <img src={MicrosoftForStartups} alt="" className="h-12" />
          <img src={aws} alt="" className="h-14" />
          <img src={nvidia} alt="" className="h-14" />
          <img src={cdii} alt="" className="h-24" />
          <img src={spark} alt="" className="h-24" />
        </div>
      </div>
    </div>
  );
};

export default Clients;

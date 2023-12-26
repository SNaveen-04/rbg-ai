import { advisory,research } from "./Utilities";
import Card from "../../Components/Card";

const Advisory = () => {
  return (
    <div className="bg-white min-h-screen">
      <div>
        <div className="text-center text-3xl text-red-400 py-4">
          <p>Advisory Board</p>
        </div>
        <div className="flex flex-col items-center space-y-4 max-w-5xl mx-auto md:flex-row md:justify-between py-4 px-2 ">
          {advisory.map((ad) => {
            return (
              <Card color={"red-400"} name={ad.name} role={ad.role} img={ad.img} key={ad.name} />
            );
          })}
        </div>
      </div>
      <div>
        <div className="text-center text-3xl text-red-400 py-4">
          <p>Research Executives</p>
        </div>
        <div className="flex flex-col items-center space-y-2 max-w-5xl mx-auto md:flex-row md:gap-32 md:flex-wrap justify-center py-2 px-2 ">
          {research.map((res) => {
            return (
              <Card color={"red-400"} name={res.name} role={res.role} img={res.img} key={res.name} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Advisory;

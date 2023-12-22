import { practitioner } from "./Utilities";
import Card from "../../Components/Card";

const Practitioner = () => {
  return (
    <div className="bg-white h-full">
      <div className="text-center text-3xl text-Green py-4">
        <p>Research Advisors & Practitioners</p>
      </div>
      <div className="grid grid-cols-1 justify-items-center space-y-4 gap-3  md:grid-cols-4  justify-center py-4 px-2 ">
        {practitioner.map((par) => {
          return (
            <Card
              name={par.name}
              role={par.role}
              img={par.img}
              key={par.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Practitioner;

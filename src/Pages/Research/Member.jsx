import Card from '../../Components/Card'
import {members} from '../About/Utilities'


const Member = () => {
  return (
    <div className="bg-white h-full">
      <div className="text-center text-3xl text-Green py-4">
        <p>Research Advisors & Practitioners</p>
      </div>
      <div className="grid grid-cols-1 justify-items-center space-y-4 gap-3  md:grid-cols-5  justify-center py-4 px-2 ">
        {members.map((mem) => {
          return (
            <Card
              name={mem.name}
              role={mem.role}
              img={mem.img}
              key={mem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Member
import Proptypes from 'prop-types'
const Card = ({ name, role, img }) => {
  return (
    <div className=" max-w-40 bg-gray-200 border-black p-5 md:p-2  rounded-xl shadow-lg flex flex-col items-center  hover:scale-105 hover:shadow-slate-400  duration-700">
      <img src={img} alt="" className=" h-28  md:h-28 rounded-full mx-auto object-scale-down " />
      <p className=" text-lg  md:text-lg font-semibold text-center text-black">
        {name}
      </p>
      <p className=" text-sm md:text-xs  text-center text-black tracking-wide my-1 md:my-2">
        {role}
      </p>
      
        
      {/* <button className="bg-blue-800 text-sm py-1 px-3 md:py-1.5 md:px-3 rounded-md font-semibold text-white  text-center hover:scale-105 duration-150 active:bg-yellow-300 ">
        For Contact 
      </button>
       */}
    </div>
  );
};

Card.propTypes = {
  name:Proptypes.string.isRequired,
  role:Proptypes.string.isRequired,
  img:Proptypes.node.isRequired
}

export default Card;

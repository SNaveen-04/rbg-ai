import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Workshop = ({Image,link}) => {
  return (
    <div className="p-5 font-OpenSans w-full h-full flex flex-col justify-center gap-2 items-center">
                <figure className="w-full my-1 h-[70%] flex justify-center items-center">
                    <img src={Image} className="z-0 h-full"/>
                </figure>
                <Link to={link} className=" border border-white border-solid py-1 px-3 my-1 rounded-2xl hover:bg-white hover:text-Primary shadow-slate-200 hover:shadow-xl transition-colors duration-500 hover:border-Primary">
                  KNOW MORE
                </Link>
                
            </div>
  )
}

Workshop.propTypes = {
    Image:PropTypes.node.isRequired,
    Venue:PropTypes.string.isRequired,
    Date:PropTypes.string.isRequired,
    link:PropTypes.string.isRequired
}

export default Workshop
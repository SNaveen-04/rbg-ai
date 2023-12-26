import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Project = ({title,Description,link,icon}) => {
  let Icon = React.createElement(icon,{size:40})
  return (
    <div className=" max-sm:p-2 max-lg:p-3 p-4 max-sm:m-2 m-4 max-sm:w-2/3 md:w-1/2 xl:w-1/4 2xl:w-2/12 bg-Primary flex flex-col items-center justify-between gap-1 hover:shadow-2xl shadow-Primary cursor-pointer text-white w-1/2 rounded-xl">
        {Icon}
        <h1 className="max-sm:m-0 max-lg:m-1 m-2 p-1 max-lg:text-sm text-xl">{title}</h1>
        <h2 className="max-sm:m-0 max-lg:m-1 m-2 p-1 max-lg:text-xs text-sm h-12">{Description}</h2>
        <Link to={link} className="max-sm:m-0 border border-solid border-white py-1 px-2 max-lg:rounded-md rounded-2xl max-lg:m-1 max-lg:text-xs m-2 hover:bg-white hover:text-Primary">KNOW MORE</Link>
    </div>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.icon,
};

export default Project
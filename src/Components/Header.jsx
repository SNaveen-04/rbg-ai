import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
const Header = ({title,content}) => {
  const location = useLocation()
  const colour = location.pathname === '/' || location.pathname === '/Home' ? '[#76ad5f]' : 'Primary';
  return (
    <header className={` mb-2 font-OpenSans bg-${colour} max-w-screen h-[50%] flex flex-col items-center justify-center text-white p-6 text-center tracking-wide`}>
        <h1 className=" m-2 xl:my-6 text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl">{title}</h1>
        <h2 className="m-2 xl:my-6 text-xs lg:text-sm xl:text-xl 2xl:text-4xl">{content}</h2>
    </header>
  )
}
Header.propTypes = {
  title:PropTypes.string.isRequired,
  content:PropTypes.string.isRequired
}
export default Header
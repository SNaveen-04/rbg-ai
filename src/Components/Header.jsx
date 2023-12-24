import Proptypes from 'prop-types'
import { useLocation } from 'react-router-dom'
const Header = ({title,content}) => {
  const location = useLocation()
  const colour = location.pathname === '/' ? 'Green' : (location.pathname ==='/Home' ? 'Green' : 'Primary')
  return (
    <header className={` mb-2 font-OpenSans bg-${colour} max-w-screen h-[50%] flex flex-col items-center justify-center text-white p-6 text-center tracking-wide`}>
        <h1 className=" m-2 xl:my-6 text-3xl lg:text-5xl xl:text-6xl 2xl:text-9xl">{title}</h1>
        <h2 className="m-2 xl:my-6 text-xs lg:text-sm xl:text-xl 2xl:text-4xl">{content}</h2>
    </header>
  )
}
Header.propTypes = {
  title:Proptypes.string.isRequired,
  content:Proptypes.string.isRequired
}
export default Header
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
const Header = ({title,content}) => {
  const location = useLocation()
    const paths = location.pathname.split('/');
    let currentpath = paths[1]
    currentpath = currentpath.toLowerCase();
    const colour = currentpath === 'home' || currentpath === '' || currentpath === 'policy' ? 'bg-Green':(currentpath === 'workshop' || currentpath === 'about' ? 'bg-red-400' : 'bg-Primary');
  return (
    <header className={` mb-2 font-OpenSans ${colour} max-w-screen h-[50%] flex flex-col items-center justify-center text-white p-6 text-center tracking-wide`}>
        <h1 className=" m-2 xl:my-6 text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl">{title}</h1>
        <h2 className="m-2 xl:my-6 text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl">{content}</h2>
    </header>
  )
}
Header.propTypes = {
  title:PropTypes.string.isRequired,
  content:PropTypes.string.isRequired
}
export default Header
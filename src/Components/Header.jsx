import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
const Header = ({title,content}) => {
  const location = useLocation()
  const paths = location.pathname.split('/');
  let currentpath = paths[1]
  let subpath = paths[2]
  currentpath = currentpath.toLowerCase();
  let colour = currentpath === '' || currentpath === 'home' || currentpath === 'policy' ? `bg-Green` :(currentpath === 'workshop' || currentpath === 'about' ? 'bg-Red' : 'bg-Primary');
  colour = subpath === 'llm' ? 'bg-Primary' : colour;
  return (
    <header className={` mb-2 font-OpenSans ${colour} max-w-screen h-[50%] flex flex-col items-center justify-center text-white p-6 text-center tracking-wide`}>
        <h1 className=" m-2 xl:my-6 text-4xl lg:text-4xl xl:text-5xl">{title}</h1>
        <p className="m-2 xl:my-4 text-sm lg:text-xl xl:text-2xl font-light">{content}</p>
    </header>
  )
}
Header.propTypes = {
  title:PropTypes.string.isRequired,
  content:PropTypes.string.isRequired
}
export default Header
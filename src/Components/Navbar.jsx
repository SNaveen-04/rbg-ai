import { Link,useLocation } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
    const [showMenu,setShowMenu] =useState(false)
    const handleClick = () =>{
        setShowMenu(!showMenu);
    }
    const location = useLocation()
    const paths = location.pathname.split('/');
    const currentpath = paths[1]
    const colour = currentpath === '' || currentpath === 'home' || currentpath === 'policy' ? '[#76ad5f]' :(currentpath === 'workshop' || currentpath === 'about' ? 'red-400' : 'Primary');
  return (
    <div className="top-0 sticky">
    <nav className={`bg-${colour} md:mb-0 flex flex-col text-white`}>
        <div className="flex justify-between items-center py-2 px-6 border-0 border-b border-solid border-white">
            <Link to='/'>RBG AI Research</Link>
            <button onClick={handleClick} className="border border-solid border-white p-1 rounded-sm hover:bg-slate-50 hover:text-[#76ad5f] md:hidden">Menu</button>
            <nav className="hidden md:flex items-center justify-between">
            <Link className="p-3 relative" to='/home'>Home</Link>
            <Link className="p-3 relative" to='/research'>Research</Link>
            <Link className="p-3 relative" to='/about'>About Us</Link>
    </nav>
        </div>
    </nav>
    <nav className={`md:hidden bg-${colour} w-full flex flex-col absolute text-white border-0 border-b border-solid border-white`+ (showMenu ? ' ' : ' -top-52')}>
            <Link className="px-4 py-2" to='/Home'>Home</Link>
            <Link className="px-4 py-2" to='/About'>About</Link>
            <Link className="px-4 py-2" to='/Research'>Research</Link>
    </nav>
    </div>
  )
}

export default Navbar


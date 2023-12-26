import { Link,useLocation } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
    const [showMenu,setShowMenu] =useState(false)
    const handleClick = () =>{
        setShowMenu(!showMenu);
    }
    const location = useLocation()
    const paths = location.pathname.split('/');
    let currentpath = paths[1]
    currentpath = currentpath.toLowerCase();
    const colour = currentpath === '' || currentpath === 'home' || currentpath === 'policy' ? `bg-Green` :(currentpath === 'workshop' || currentpath === 'about' ? 'bg-red-400' : 'bg-Primary');
  return (
    <div className="top-0 sticky">
    <nav className={`${colour} md:mb-0 flex flex-col text-white`}>
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
            <Link className="px-4 py-2" to='/home'>Home</Link>
            <Link className="px-4 py-2" to='/research'>Research</Link>
            <Link className="px-4 py-2" to='/about'>About</Link>
    </nav>
    </div>
  )
}

export default Navbar


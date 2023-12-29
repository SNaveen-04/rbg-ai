import { Link,useLocation } from "react-router-dom"
import { useState } from "react"
import { Squash as Hamburger } from 'hamburger-react'
const Navbar = () => {
    const [showMenu,setShowMenu] =useState(false)
    const handleClick = () =>{
        setShowMenu(!showMenu);
    }
    const location = useLocation()
    const paths = location.pathname.split('/');
    let currentpath = paths[1]
    let subpath = paths[2]
    currentpath = currentpath.toLowerCase();
    let colour = currentpath === '' || currentpath === 'home' || currentpath === 'policy' ? `bg-Green` :(currentpath === 'workshop' || currentpath === 'about' ? 'bg-Red' : 'bg-Primary');
    colour = subpath === 'llm' ? 'bg-Primary' : colour;
  return (
    <div className="top-0 z-10 sticky">
    <nav className={`${colour} md:mb-0 flex flex-col text-white`}>
        <div className="flex justify-between items-center py-2 px-6 border-0 border-b border-solid border-white">
            <Link to='/'>RBG AI Research</Link>
            <span className="md:hidden">
            <Hamburger size={20} toggled={showMenu} toggle={setShowMenu} />
            </span>
            <nav className="hidden md:flex items-center justify-between">
            <Link className="p-3 hover:text-yellow-300 relative" to='/home'>Home</Link>
            <Link className="p-3 hover:text-yellow-300 relative" to='/research'>Research</Link>
            <Link className="p-3 hover:text-yellow-300 relative" to='/about'>About Us</Link>
    </nav>
        </div>
    </nav>
    {/* <nav className={`md:hidden ${colour} w-full flex flex-col absolute text-white border-0  border-b-0 border-solid border-white`+ (showMenu ? ' ' : ' -top-full')}>
            <Link className="px-4 my-2 py-2 text-lg" onClick={handleClick} to='/home'>Home</Link>
            <Link className="px-4 my-2 py-2 text-lg" onClick={handleClick} to='/research'>Research</Link>
            <Link className="px-4 my-2 py-2 text-lg" onClick={handleClick} to='/about'>About</Link>
    </nav> */}
    <nav className={`${colour} w-2/3 h-screen flex flex-col absolute text-white border-0  border-r border-solid border-white transition-all duration-500 ease-in-out`+ (showMenu ? ' -left-0' : ' -left-full')}>
            <Link className="px-4 my-2 py-2 text-lg active:bg-zinc-200 active:bg-opacity-35 active:rounded-lg" onClick={handleClick} to='/home'>Home</Link>
            <Link className="px-4 my-2 py-2 text-lg active:bg-zinc-200 active:bg-opacity-35 active:rounded-lg" onClick={handleClick} to='/research'>Research</Link>
            <Link className="px-4 my-2 py-2 text-lg active:bg-zinc-200 active:bg-opacity-35 active:rounded-lg" onClick={handleClick} to='/about'>About</Link>
    </nav>
    </div>
  )
}

export default Navbar


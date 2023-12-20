import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-[#76ad5f] mb-1 flex flex-col ">
        <div className="flex justify-between p-3">
            <Link to='/'>RBG AI Research</Link>
            <button>Menu</button>
        </div>
        <div className="p-3 flex flex-col ">
            <Link to='/Home'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Research'>Research</Link>
        </div>
    </nav>
  )
}

export default Navbar
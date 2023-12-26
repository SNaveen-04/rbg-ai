import rbglogo from "../assests/images/rbg1.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation()
    const paths = location.pathname.split('/');
    let currentpath = paths[1]
    currentpath = currentpath.toLowerCase();
    const colour = currentpath === '' || currentpath === 'home' || currentpath === 'policy' ? `bg-Green` :(currentpath === 'workshop' || currentpath === 'about' ? 'bg-red-400' : 'bg-Primary');
  return (
    <div className={`max-h-80  bottom-0 ${colour} `}>
      <div className={`${colour} items-center justify-center px-8  md:px-44 `}>
        <div className=" text-center text-3xl py-4 text-white">Contacts</div>
        <div className="px-2">
          <div className="flex max-lg:flex-col gap-4 items-center justify-evenly">
            <div className="text-white max-md:text-lg md:text-xl text-center md:text-left justify-center items-center">
              <img className="p-2 max-md:mx-auto" src={rbglogo} alt="" />
              <p>RBG.AI,</p>
              <p>SREC SPARK Incubation Foundation,</p>
              <p>Sri Ramakrishna Engineering College,</p>
              <p>Coimbatore, Tamil Nadu 641022, India</p>
              <p className="py-2">
                <a
                  href="mailto: research@rbg.ai"
                  className="hover:text-black hover:underline duration-500"
                >
                  research@rbg.ai
                </a>
              </p>
              <p className="text-[20px] py-1">+91 733 901 3001</p>
            </div>
            <div className=" flex mt-2 text-white justify-center cursor-pointer lg:mt-24 ">
              <a href="https://in.linkedin.com/company/rbgai" rel="noreferrer" target="_blank">
                <FaLinkedin className="m-3 max-md:text-3xl md:text-4xl" />
              </a>
              <a href="https://www.youtube.com/c/RBGAI" rel="noreferrer" target="_blank" >
                <FaYoutube className="m-3 max-md:text-3xl md:text-4xl" />
              </a>
              <a href='https://m.facebook.com/p/RBGAI-100070859903620/?locale=en' rel="noreferrer" target="_blank" >
                <FaFacebook className="m-3 max-md:text-3xl md:text-4xl" />
              </a>
              <a href="https://twitter.com/rbg_ai" rel="noreferrer" target="_blank">
                <FaTwitter className="m-3 max-md:text-3xl md:text-4xl" />
              </a>
              <a href="https://github.com/rbg-research" rel="noreferrer" target="_blank">
                <FaGithub className="m-3 max-md:text-3xl md:text-4xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-white pt-20 pb-2">
          <p className="text-center text-sm md:text-xl">
            © 2021 - 2023 Resilience Business Grids LLP. All rights reserved |
            <Link to='/policy' className="hover:underline">Terms & Policies</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

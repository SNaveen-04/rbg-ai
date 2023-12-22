import rbglogo from "../assests/images/rbg1.png";
import linkedin from "../assests/images/linkedin.png";
import youtube from "../assests/images/social.png";
import facebook from "../assests/images/facebook.png";
import twitter from "../assests/images/twitter.png";
import github from "../assests/images/github.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" h-auto bottom-0 bg-Green ">
      <div className="bg-Green items-center justify-center px-8  md:px-44 ">
        <div className=" text-center text-3xl py-4 text-white">Contacts</div>
        <div className="px-2">
          <div className=" flex items-center justify-center md:justify-start">
            <img className="p-2" src={rbglogo} alt="" />
          </div>
          <div className="lg:flex lg:space-x-80">
            <span className="text-white text-[15px] text-center md:text-left md:text-xl">
              <p>RBG.AI,</p>
              <p>SREC SPARK Incubation Foundation,</p>
              <p>Sri Ramakrishna Engineering College,</p>
              <p>Coimbatore, Tamil Nadu 641022, India</p>
              <p className="py-2">
                If you have queries about our work, contact us at <br />
                <a
                  href="mailto: research@rbg.ai"
                  className="hover:text-black hover:underline duration-500"
                >
                  research@rbg.ai
                </a>
              </p>
              <p className="text-[20px] py-1">+91 733 901 3001</p>
            </span>
            <div className=" flex space-x-8 justify-center py-4 cursor-pointer lg:mt-24 ">
              <img
                src={linkedin}
                alt="linekedin"
                className=" h-6 w-6 md:h-8 md:w-8 "
              />
              <img
                src={youtube}
                alt="youtube"
                className=" h-6 w-6 md:h-8 md:w-8  "
              />
              <img
                src={facebook}
                alt="facebook"
                className=" h-6 w-6 md:h-8 md:w-8"
              />
              <img
                src={twitter}
                alt="twitter"
                className=" h-6 w-6 md:h-8 md:w-8"
              />
              <img
                src={github}
                alt="github"
                className=" h-6 w-6 md:h-8 md:w-8"
              />
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

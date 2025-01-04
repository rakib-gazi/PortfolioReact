import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import rakib from "../assets/rakib.png";
const Hero = () => {
  const social = [
    <a href="https://www.facebook.com/bd.gazi97" target="_blank">
      <div className="p-2 rounded-full bg-nav ">
        <FaFacebook className="text-[#1877F2] hover:text-[#145DBF] text-3xl" />
      </div>
    </a>,
    <a href="https://github.com/rakib-gazi" target="_blank">
      <div className="p-2 rounded-full bg-nav">
        <FaGithub className="text-white hover:text-[#282828]  text-3xl" />
      </div>
    </a>,
    <a href="https://github.com/rakib-gazi" target="_blank">
      <div className="p-2 rounded-full bg-nav">
        <FaLinkedin className="text-[#0077B5] hover:text-[#005582] text-3xl" />
      </div>
    </a>,
  ];
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className=" flex flex-col justify-center items-center lg:items-start gap-4 pb-12 lg:pb-0">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-active font-medium">
            Front-End Developer
          </h2>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
            Mohammed Rakib Gazi
          </h1>
          <div className="flex justify-start items-center gap-2">
            {social.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <div>
            <button className="bg-active px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 rounded-xl text-bold text-base md:text-lg  font-bold">
              Download Resume
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={rakib} alt="" className="rounded-full bg-nav p-6" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

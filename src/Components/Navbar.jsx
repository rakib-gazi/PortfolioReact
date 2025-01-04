import { useState, useEffect } from "react";
import { Button, Navbar as FlowbiteNavbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`container mx-auto ${
        isScrolled ? "fixed top-0 left-0 right-0 z-50" : "pt-0 lg:pt-12"
      }`}
    >
      <FlowbiteNavbar
        fluid
        rounded
        className="bg-nav backdrop-blur-lg rounded-none lg:rounded-2xl px-4"
      >
        <FlowbiteNavbar.Brand>
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
          </Link>
        </FlowbiteNavbar.Brand>
        <div className="flex md:order-2">
          <Button className="bg-active text-white hover:bg-body flex justify-center items-center me-2 ">
            <FiDownload className="text-xl me-2" /> <span>Resume</span>
          </Button>
          <FlowbiteNavbar.Toggle />
        </div>
        <FlowbiteNavbar.Collapse>
          <FlowbiteNavbar.Link>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-active font-bold" : "text-white font-bold"
              }
            >
              Home
            </NavLink>
          </FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link>
            <a
              href="#about"
              className="text-white font-bold"
              onClick={(e) => handleScrollToSection(e, "about")}
            >
              About
            </a>
          </FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link>
            <a
              href="#education"
              className="text-white font-bold"
              onClick={(e) => handleScrollToSection(e, "education")}
            >
              Education
            </a>
          </FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link>
            <a
              href="#skills"
              className="text-white font-bold"
              onClick={(e) => handleScrollToSection(e, "skills")}
            >
              Skills
            </a>
          </FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link>
            <a
              href="#projects"
              className="text-white font-bold"
              onClick={(e) => handleScrollToSection(e, "projects")}
            >
              Projects
            </a>
          </FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link>
            <a
              href="#contact"
              className="text-white font-bold"
              onClick={(e) => handleScrollToSection(e, "contact")}
            >
              Contact
            </a>
          </FlowbiteNavbar.Link>
        </FlowbiteNavbar.Collapse>
      </FlowbiteNavbar>
    </div>
  );
};

export default Navbar;

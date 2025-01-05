import gadget from "../assets/gadget.png"
import couponsive from "../assets/couponsivess.png"
import gamelens from "../assets/gamelens.png"
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12" id="projects">
      <h1 className="font-rowdies text-5xl text-active">My Projects</h1>
      <div className="py-8 grid grid-cols-1 gap-6">
        <div className="bg-nav text-white rounded-xl p-6 md:flex md:items-center md:space-x-6">
          <div className="md:flex-1">
            <img
              src={gadget}
              alt="Project Preview"
              className="rounded-lg w-full"
            />
            
          </div>
          <div className="mt-6 md:mt-0 md:flex-1">
            <h2 className="text-3xl font-bold">Gadget Heaven</h2>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
            Gadget Heaven is a sleek website dedicated to showcasing the latest in tech and gadgets. It offers detailed product insights, reviews, and exclusive deals, catering to tech enthusiasts and casual buyers alike. The site is user-friendly, ensuring easy navigation through various categories of innovative devices. Whether you're exploring cutting-edge technology or searching for the perfect gadget, Gadget Heaven provides a comprehensive and engaging platform
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                React.JS
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                Tailwind CSS
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                Firebase
              </span>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://gadgetheavenph.netlify.app/" className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                title="Live Demo" target="_blank"><FaExternalLinkAlt className="text-2xl" /></a>
              <a href="https://github.com/rakib-gazi" className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                title="Github Link" target="_blank"><FaGithub className="text-2xl" /></a>
              {/* <Link to="/details" className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                title="View Details"><FaEye className="text-2xl" /></Link> */}
            </div>
          </div>
        </div>
        <div className="bg-nav text-white rounded-xl p-6 md:flex md:items-center md:space-x-6">
          <div className="md:flex-1">
            <img
              src={couponsive}
              alt="Project Preview"
              className="rounded-lg w-full"
            />
          </div>
          <div className="mt-6 md:mt-0 md:flex-1">
            <h2 className="text-3xl font-bold">Coupon Hive</h2>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
            CouponHive is a user-friendly platform designed to help users save money by providing the latest discounts, deals, and coupons across a variety of brands and services. The site features an organized layout, making it easy to browse categories and find relevant offers quickly. Whether you're looking for online shopping deals or exclusive coupon codes, CouponHive serves as a valuable resource for budget-conscious shoppers.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                React.JS
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                Tailwind CSS
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                Firebase
              </span>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://couponhive.netlify.app/" className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                title="Live Demo" target="_blank"><FaExternalLinkAlt className="text-2xl" /></a>
              <a href="https://github.com/rakib-gazi" className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                title="Github Link" target="_blank"><FaGithub className="text-2xl" /></a>
              {/* <Link to="/details" className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                title="View Details"><FaEye className="text-2xl" /></Link> */}
            </div>
          </div>
        </div>
        <div className="bg-nav text-white rounded-xl p-6 md:flex md:items-center md:space-x-6">
          <div className="md:flex-1">
            <img
              src={gamelens}
              alt="Project Preview"
              className="rounded-lg w-full"
            />
          </div>
          <div className="mt-6 md:mt-0 md:flex-1">
            <h2 className="text-3xl font-bold">Game Lens</h2>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
            CouponHive is a convenient platform for finding the latest coupons, deals, and discounts across various brands and categories. The website offers a simple and organized layout, allowing users to quickly browse and access savings for shopping, services, and more. With a focus on budget-friendly options, CouponHive is perfect for those looking to save money effortlessly.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                React.JS
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                Tailwind CSS
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                Firebase
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                Express Js
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                Mongodb
              </span>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://gamelens.netlify.app/" className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                title="Live Demo" target="_blank"><FaExternalLinkAlt className="text-2xl" /></a>
              <a href="https://github.com/rakib-gazi" className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                title="Github Link" target="_blank"><FaGithub className="text-2xl" /></a>
              {/* <Link to="/details" className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                title="View Details"><FaEye className="text-2xl" /></Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import gadget from "../assets/gadget.png";
import couponsive from "../assets/couponsivess.png";
import gamelens from "../assets/gamelens.png";
import { FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Asset Orbit",
    image: gadget,
    description:
      "AssetOrbit is a comprehensive asset management system designed to streamline asset tracking and employee requests. It features role-based navigation, authentication, dashboards, notifications, and payment integration, making it an all-in-one solution for HR managers and employees.",
    techStack: [
      "React.JS",
      "React Router",
      "Tailwind CSS",
      "Firebase",
      "TanStack Query",
      "React-PDF",
      "React-Helmet",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    liveLink: "https://assetorbit.netlify.app/",
    githubLink: "https://github.com/rakib-gazi/assetorbit",
    detailsLink: "asset-orbit",
  },
  {
    title: "Coupon Hive",
    image: couponsive,
    description:
      "CouponHive is a user-friendly platform designed to help users save money by providing the latest discounts, deals, and coupons across a variety of brands and services. The application collects, organizes, and presents coupons from various brands, allowing users to explore available offers, copy coupon codes, and save money effortlessly.",
    techStack: ["React.JS","React Router", "Tailwind CSS","Material UI","DaisyUI", "Animate.css", "Firebase"],
    liveLink: "https://couponhive.netlify.app/",
    githubLink: "https://github.com/rakib-gazi/couponhive",
    detailsLink: "coupon-hive"
  },
  {
    title: "Game Lens",
    image: gamelens,
    description:
      "Game Lens is a platform for gamers to discover and explore games. It provides insights, ratings, and personalized recommendations based on user preferences. It is a user-friendly Game Review Application that allows users to explore, share, and manage game reviews.",
    techStack: ["React.JS","React Router", "Tailwind CSS", "Firebase","JWT", "Express.js", "MongoDB"],
    liveLink: "https://gamelens.netlify.app/",
    githubLink: "https://github.com/rakib-gazi/gamelens",
    detailsLink: "game-lens"
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12" id="projects">
      <h1 className="font-rowdies text-5xl text-active">My Projects</h1>
      <div className="py-8 grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-nav text-white rounded-xl p-6 xl:flex xl:items-center xl:space-x-6"
          >
            <div className="md:flex-1">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full "
              />
            </div>
            <div className="mt-6 xl:mt-0 md:flex-1">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href={project.liveLink}
                  className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                  title="Live Demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="text-2xl" />
                </a>
                <a
                  href={project.githubLink}
                  className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                  title="GitHub Link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <Link
                  to={`/details/${project.detailsLink}`}
                  className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                  title="View Details"
                >
                  <FaEye className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

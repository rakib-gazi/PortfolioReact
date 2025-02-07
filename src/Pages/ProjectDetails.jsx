import { useParams } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import gadget from "../assets/gadget.png";
import couponsive from "../assets/couponsivess.png";
import gamelens from "../assets/gamelens.png";

const projectData = {
  "asset-orbit": {
    title: "Asset Orbit",
    image: gadget,
    description:
      "AssetOrbit is a comprehensive asset management system designed to streamline asset tracking and employee requests. It features role-based navigation, authentication, dashboards, notifications, and payment integration, making it an all-in-one solution for HR managers and employees.",
    techStack: ["React.JS","React Router", "Tailwind CSS", "Firebase","TanStack Query","React-PDF","React-Helmet","Node.js","Express.js","MongoDB","JWT"],
    liveLink: "https://assetorbit.netlify.app/",
    githubLink: "https://github.com/rakib-gazi/assetorbit",
    challenges: "Developing AssetOrbit, a comprehensive asset management system, presented several challenges. Implementing role-based navigation and authentication required meticulous planning to ensure that HR managers and employees had appropriate access levels, safeguarding sensitive information while providing necessary functionalities to each user group. Designing intuitive dashboards that effectively display relevant data for different roles was essential for enhancing user experience and facilitating efficient asset tracking. Integrating real-time notifications posed technical challenges, as it was crucial to keep users informed about asset requests, approvals, and other critical updates promptly. Incorporating payment integration added another layer of complexity, necessitating secure handling of financial transactions within the platform. Ensuring the system's scalability and performance optimization was vital to handle a growing number of assets and users without compromising responsiveness. Balancing these technical requirements with a user-friendly interface demanded careful consideration and iterative design improvements was my challenges.",
    futurePlans: "To enhance AssetOrbit and make it more efficient, several key improvements are planned. First, A dark mode feature will be introduced to improve user experience and accessibility, making the platform more comfortable for extended use. The notification system will be upgraded to provide real-time alerts via email and push notifications, ensuring users never miss important updates about asset requests and approvals. Additionally, advanced analytics and reporting tools will be integrated, allowing HR managers to generate detailed reports on asset usage, maintenance schedules, and budget forecasts.",
  },
  "coupon-hive": {
    title: "Coupon Hive",
    image: couponsive,
    description:
      "CouponHive is a user-friendly platform designed to help users save money by providing the latest discounts, deals, and coupons across a variety of brands and services. It is a single-page application designed to help users in Bangladesh discover and use discount coupons for popular e-commerce shops. The application collects, organizes, and presents coupons from various brands, allowing users to explore available offers, copy coupon codes, and save money effortlessly.",
    techStack: ["React.JS","React Router", "Tailwind CSS","Material UI","DaisyUI", "Animate.css", "Firebase"],
    liveLink: "https://couponhive.netlify.app/",
    githubLink: "https://github.com/rakib-gazi/couponhive",
    challenges: "The development of Coupon Hive involved a few challenges, mainly in managing dynamic coupon expiration dates and user notifications to ensure users only access valid and up-to-date deals. Implementing the copy-to-clipboard functionality for coupon codes was another technical aspect that needed optimization to provide a seamless experience. Since Coupon Hive is currently a client-side web app without a backend, handling data persistence and real-time updates was not possible, which limited some functionalities. However, despite these constraints, the platform successfully delivers an efficient and user-friendly experience for discovering and using discount coupons.",
    futurePlans: "To enhance Coupon Hive, several key upgrades are planned. First, adding user accounts will allow users to save favorite coupons, track used deals, and receive personalized notifications for new offers. The platform will also transition into a full-stack application, integrating a backend with Node.js, Express, and MongoDB to enable user authentication, coupon tracking, and automated expiration management. Real-time notifications, email alerts, and push notifications will be introduced to ensure users never miss out on deals. Additionally, plans include expanding coupon coverage beyond Bangladesh to incorporate international brands and services. These improvements will make Coupon Hive a more interactive, data-driven, and scalable platform that helps users save money more efficiently.",
  },
  "game-lens": {
    title: "Game Lens",
    image: gamelens,
    description:
      "Game Lens is a platform for gamers to discover and explore games. It provides insights, ratings, and personalized recommendations based on user preferences. It is a user-friendly Game Review Application that allows users to explore, share, and manage game reviews. With a sleek design, seamless navigation, and responsive functionality, GameLens provides a smooth and engaging user experience.",
    techStack: ["React.JS","React Router", "Tailwind CSS", "Firebase","JWT", "Express Js", "MongoDB"],
    liveLink: "https://gamelens.netlify.app/",
    githubLink: "https://github.com/rakib-gazi/gamelens",
    challenges: "Handling large-scale game data efficiently while ensuring a smooth UI was a major challenge, as it required optimizing data retrieval and rendering for performance. Implementing sorting and searching functionality added complexity, requiring efficient algorithms to ensure quick and accurate results. Managing user reviews dynamically was another key aspect—whenever a review was added or removed, the review count needed to be updated in the database in real time. Additionally, handling both admin and user profiles presented challenges in terms of role-based access and maintaining a seamless experience for different user types. Overcoming these challenges required a combination of performance optimizations, database management, and UI refinements. ",
    futurePlans: "The future plan for Game Lens includes expanding the game database to feature a wider range of titles, including indie and upcoming releases, while enhancing the recommendation system. Integration with game streaming APIs like Twitch and YouTube Gaming will allow users to watch live gameplay and access real-time stats. Performance improvements such as caching, pagination, lazy loading, and potential adoption of Next.js for SSR/SSG will ensure a smoother experience. User engagement will be enhanced with social features, including follower systems, leaderboards, wishlists, and gamification elements like badges and rankings. The review system will be upgraded with rich text formatting, image uploads, and improved moderation tools for better content management. Monetization strategies will include affiliate partnerships with game stores, premium memberships for exclusive features, and advertising opportunities for developers. These enhancements will solidify Game Lens as a top-tier game discovery and review platform with a highly engaging and interactive user experience.",
  },
};

const ProjectDetails = () => {
    const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return <div className="text-white text-center py-20">Project not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-5xl font-bold text-active">{project.title}</h1>
      <img src={project.image} alt={project.title} className="rounded-lg w-full mt-6" />
      <p className="mt-4 text-gray-300 text-lg">{project.description}</p>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Technology Stack:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map((tech, index) => (
            <span key={index} className="bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Challenges Faced:</h3>
        <p className="text-gray-300 mt-2">{project.challenges}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Future Plans:</h3>
        <p className="text-gray-300 mt-2">{project.futurePlans}</p>
      </div>
      <div className="flex space-x-4 mt-6">
        <a href={project.liveLink} className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700" title="Live Demo" target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt className="text-2xl" />
        </a>
        <a href={project.githubLink} className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700" title="GitHub Link" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
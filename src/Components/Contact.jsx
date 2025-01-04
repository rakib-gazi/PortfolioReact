import { FaExternalLinkAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12" id="contact">
      <h1 className="font-rowdies text-5xl text-active">Contact Me</h1>
      <div className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
        <form className="p-0 lg:p-8 xl:p-12 flex flex-col gap-4">
          <div>
            <label
              for="email-address-icon"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-900"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>

              <input
                type="text"
                id="email-address-icon"
                className="bg-nav border border-gray-300 text-white text-sm rounded-lg focus:ring-white focus:border-white block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="your-email@gmail.com"
              />
            </div>
          </div>
          <div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-white bg-nav rounded-lg border border-gray-300 focus:ring-white focus:border-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div>
            <button className="flex justify-center items-center gap-4 bg-active text-white w-full py-3 rounded-lg">
              <FaExternalLinkAlt className="text-2xl" /> <span>Send Mail</span>
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center">
          <div className="bg-nav  rounded-xl p-12">
            <div className="flex justify-start items-center gap-4 p-2">
              <FaLocationDot className="text-active text-3xl" />
              <p className="text-white">
                7A/16, Block-F, Joint Quater, Aziz Moholla,
                <br /> Mohammadpur, Dhaka-1207
              </p>
            </div>
            <div className="flex justify-start items-center gap-4 p-2">
              <FaPhoneSquareAlt className="text-active text-3xl" />
              <p className="text-white">
                +8801876987622
              </p>
            </div>
            <div className="flex justify-start items-center gap-4 p-2">
              <FaWhatsapp className="text-active text-3xl" />
              <p className="text-white">
                +8801876987622
              </p>
            </div>
            <div className="flex justify-start items-center gap-4 p-2">
              <MdOutlineEmail className="text-active text-3xl" />
              <p className="text-white">
                bd.gazi67@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { useState } from "react";
import { FaExternalLinkAlt, FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_ukproyb",
        "template_van0i4x",
        {
          user_email: formData.email,
          message: formData.message,
        },
        "9i7Xogd84RFnMN9jk"
      );
      setSuccess(true);
      setFormData({ email: "", message: "" });
      alert('sent')
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12" id="contact">
      <h1 className="font-rowdies text-5xl text-active">Contact Me</h1>
      <div className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
        <form
          className="p-0 lg:py-8 xl:py-12 flex flex-col gap-4 "
          onSubmit={sendEmail}
        >
          <div>
            <label
              htmlFor="email-address-icon"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email-address-icon"
                className="bg-nav border border-gray-300 text-white text-sm rounded-lg focus:ring-white focus:border-white block w-full ps-10 p-2.5"
                placeholder="your-email@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-white bg-nav rounded-lg border border-gray-300 focus:ring-white focus:border-white"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="flex justify-center items-center gap-4 bg-active text-white w-full py-3 rounded-lg"
              disabled={loading}
            >
              <FaExternalLinkAlt className="text-2xl" />
              <span>{loading ? "Sending..." : "Send Mail"}</span>
            </button>
          </div>
          {success && (
            <p className="text-green-500 mt-2">Email sent successfully!</p>
          )}
        </form>
        <div className="flex justify-center items-center">
          <div className="bg-nav rounded-xl w-full p-12">
            <div className="flex justify-start items-center gap-4 p-2">
              <FaLocationDot className="text-active text-3xl" />
              <p className="text-white">
                7A/16, Block-F, Joint Quater, Aziz Moholla,
                <br /> Mohammadpur, Dhaka-1207
              </p>
            </div>
            <div className="flex justify-start items-center gap-4 p-2">
              <FaPhoneSquareAlt className="text-active text-3xl" />
              <p className="text-white">+8801876987622</p>
            </div>
            <div className="flex justify-start items-center gap-4 p-2">
              <FaWhatsapp className="text-active text-3xl" />
              <p className="text-white">+8801876987622</p>
            </div>
            <div className="flex justify-start items-center gap-4 p-2">
              <MdOutlineEmail className="text-active text-3xl" />
              <p className="text-white">bd.gazi67@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import linkedinIcon from "./icons/linkedin.png";
import instaIcon from "./icons/instagram.png";
import githubIcon from "./icons/github.png";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        toast.success("Message Sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Oops something went wrong. Please try again.");
      });
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full lg:w-[48rem] mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message...."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Social Links
          </h2>
          <div className="flex justify-center gap-6">
            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/shoury/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <img
                src={linkedinIcon}
                alt="linkedin"
                className="w-10 h-10  rounded-lg shadow-md group-hover:scale-110 group-hover:shadow-blue-500/30 transition duration-300"
              />
              <span className="mt-2 text-sm text-white/90 group-hover:text-blue-400">
                Linkedin
              </span>
            </a>
            <a
              href="https://www.instagram.com/shoury_07/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <img
                src={instaIcon}
                alt="instagram"
                className="w-10 h-10  rounded-lg shadow-md group-hover:scale-110 group-hover:shadow-blue-500/30 transition duration-300"
              />
              <span className="mt-2 text-sm text-white/90 group-hover:text-blue-400">
                Instagram
              </span>
            </a>
            <a
              href="https://github.com/Shoury7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <img
                src={githubIcon}
                alt="github"
                className="w-10 h-10 rounded-lg shadow-md group-hover:scale-110 group-hover:shadow-blue-500/30 transition duration-300"
              />
              <span className="mt-2 text-sm text-white/90 group-hover:text-blue-400">
                Github
              </span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;

import React from "react";
import splitrImage from "./icons/splitr.png";
import liveIcon from "./icons/live.png";
import ezyStay from "./icons/ezyStay.png";
import netflixGPTImage from "./icons/netflixGPT.png";
import RevealOnScroll from "../RevealOnScroll";
const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {/* project 01 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h2 className="text-2xl font-bold mb-4 text-center">Splitr</h2>

              <img
                src={splitrImage}
                alt="Splitr Dashboard"
                className="rounded-lg shadow-md mb-4 w-[400px] h-auto max-h-[300px] mx-auto"
              />

              {/* description */}
              <p className="text-gray-400 mb-4 text-center">
                AI Powered Expense Management
              </p>

              {/* key features */}
              <ul className="text-gray-300 text-sm list-disc list-inside mb-6 space-y-1">
                <li>
                  <strong>Built with Next.js </strong>for optimized performance
                  and SEO.
                </li>
                <li>
                  <strong>Real-time data updates </strong>using ConvexDB,
                  enabling seamless collaboration between users.
                </li>
                <li>
                  <strong>Scheduled tasks powered by Inngest</strong>, handling
                  automated payment reminders and monthly spending summaries.
                </li>
                <li>
                  <strong>Integrated Gemini API </strong>to generate AI-powered
                  insights into user spending patterns.
                </li>
                <li>
                  <strong>
                    Authentication and authorization handled via Clerk.js
                  </strong>
                  , offering secure and user-friendly account management.
                </li>
                <li>
                  <strong>
                    Polished UI using Tailwind CSS and shadcn/ui components
                  </strong>
                  , delivering a responsive and modern design.
                </li>
                <li>
                  <strong>Deployed on Vercel</strong> for fast, reliable, and
                  scalable hosting.
                </li>
              </ul>

              {/* tech tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {[
                  "Next.JS",
                  "Shadcn UI",
                  "ConvexDB",
                  "Ingest",
                  "Gemini API",
                  "Tailwind CSS",
                  "Clerk.js",
                  "Vercel",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-20">
                <a
                  href="https://github.com/Shoury7/splitr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Code →
                </a>
                <a
                  href="https://splitr-sigma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors my-4 flex items-center gap-2"
                >
                  Live Demo
                  <img src={liveIcon} alt="Live Icon" className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/* project 02 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h2 className="text-2xl font-bold mb-4 text-center">EzyStay</h2>

              <img
                src={ezyStay}
                alt="Splitr Dashboard"
                className="rounded-lg shadow-md mb-4 w-[400px] h-auto max-h-[300px] mx-auto"
              />

              {/* description */}
              <p className="text-gray-400 mb-4 text-center">
                Property Booking Platform
              </p>

              {/* key features */}
              <ul className="text-gray-300 text-sm list-disc list-inside mb-6 space-y-1">
                <li>
                  <strong>Built secure authentication</strong> using JWT-based
                  tokens, session management, and role-based access control for
                  admin and users.
                </li>
                <li>
                  <strong>Integrated Razorpay payment gateway</strong> to handle
                  live transactions, including payment verification and secure
                  order storage.
                </li>
                <li>
                  <strong>Developed a modular Node.js backend</strong> following
                  REST API best practices, with features like order tracking,
                  listing management, and role-specific routes.
                </li>
                <li>
                  <strong>Implemented interactive maps using Mapbox</strong>,
                  enabling geolocation and dynamic property display based on
                  coordinates.
                </li>
                <li>
                  <strong>Used Cloudinary for media management</strong>,
                  allowing smooth and responsive property image uploads and
                  deletions.
                </li>
                <li>
                  <strong>Designed an Admin Dashboard</strong> to track
                  bookings, earnings (weekly & total), and listings, powered by
                  MongoDB aggregation and real-time stats.
                </li>
              </ul>

              {/* tech tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {[
                  "React.js",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "JWT Auth",
                  "Razorpay API",
                  "Mapbox GL",
                  "Cloudinary",
                  "Nodemailer",
                  "Render (Deployment)",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-20">
                <a
                  href="https://github.com/Shoury7/splitr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Code →
                </a>
                <a
                  href="https://splitr-sigma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors my-4 flex items-center gap-2"
                >
                  Live Demo
                  <img src={liveIcon} alt="Live Icon" className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/*project 03}*/}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h2 className="text-2xl font-bold mb-4 text-center">
                NetflixGPT
              </h2>

              <img
                src={netflixGPTImage}
                alt="Splitr Dashboard"
                className="rounded-lg shadow-md mb-4 w-[400px] h-auto max-h-[300px] mx-auto"
              />

              {/* description */}
              <p className="text-gray-400 mb-4 text-center">
                Smarter Movie Picks With AI
              </p>

              {/* key features */}
              <ul className="text-gray-300 text-sm list-disc list-inside mb-6 space-y-1">
                <li>
                  <strong>Built with React & Firebase</strong> for a modern,
                  responsive SPA experience, featuring user authentication and
                  seamless deployment on the web.
                </li>
                <li>
                  <strong>Leveraged Gemini API</strong> by sending user inputs
                  via dynamic prompts to fetch and display personalized movie
                  suggestions using AI.
                </li>
                <li>
                  <strong>Used Redux for State Management</strong> to
                  efficiently handle authentication, movie data, and user
                  sessions across components.
                </li>
                <li>
                  <strong>Fetched Real-Time Movie Data from OMDb API</strong>,
                  displaying live ratings, genres, and descriptions with a
                  clean, dark-themed UI inspired by Netflix.
                </li>
              </ul>

              {/* tech tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {[
                  "ReactJS",
                  "Gemini API",
                  "Tailwind CSS",
                  "Firebase",
                  "Redux",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-20">
                <a
                  href="https://github.com/Shoury7/netflix-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Code →
                </a>
                <a
                  href="https://dashing-dasik-61a057.netlify.app/browse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors my-4 flex items-center gap-2"
                >
                  Live Demo
                  <img src={liveIcon} alt="Live Icon" className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-2 text-center">
                <strong>Note:</strong> Please turn on a VPN — some APIs may not
                work from India.
              </p>
              <p className="text-sm text-gray-400 mt-1 text-center">
                <strong>Want to try it out?</strong> Use the demo credentials
                below:
              </p>
              <p className="text-sm text-gray-400 text-center">
                <strong>Email:</strong> <code>admin@xyz.com</code> &nbsp;|&nbsp;{" "}
                <strong>Password:</strong> <code>mypass1234</code>
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;

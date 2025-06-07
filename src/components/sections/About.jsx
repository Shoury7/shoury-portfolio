import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import codechefIcon from "./icons/codechef.png";
import codeforcesIcon from "./icons/codeforces.svg";
import leetcodeIcon from "./icons/leetcode.svg";
const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "TailwindCSS",
    "Redux Toolkit",
    "NextJS",
  ];
  const tools = ["git and github", "postman"];
  const backendSkills = ["Node.js", "MongoDB", "Express.js", "MySQL", "Docker"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold m-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold m-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* tools */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold m-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tech, key) => (
                    <span
                      key={key}
                      className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10  backdrop-blur-sm shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-semibold m-4 relative w-fit">
                Competitive Programming
                <span className="block h-1 w-10 bg-blue-500 mt-1 rounded-full"></span>
              </h3>

              <p className="text-sm mb-6 ml-4 text-gray-300">
                I’m passionate about algorithmic problem solving and regularly
                participate in competitive programming contests to sharpen my
                data structures and algorithms skills.
              </p>

              <div className="flex gap-6 ml-4 items-center justify-around">
                {/* Codeforces */}
                <a
                  href="https://codeforces.com/profile/shoury_07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <img
                    src={codeforcesIcon}
                    alt="Codeforces"
                    className="w-16 h-16 rounded-lg shadow-md group-hover:scale-110 group-hover:shadow-blue-500/30 transition duration-300"
                  />
                  <span className="mt-2 text-sm text-white/90 group-hover:text-blue-400">
                    Codeforces
                  </span>
                </a>

                {/* CodeChef */}
                <a
                  href="https://www.codechef.com/users/shoury_07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <img
                    src={codechefIcon}
                    alt="CodeChef"
                    className="w-16 h-16 rounded-lg shadow-md group-hover:scale-110 group-hover:shadow-yellow-500/30 transition duration-300"
                  />
                  <span className="mt-2 text-sm text-white/90 group-hover:text-yellow-400">
                    CodeChef
                  </span>
                </a>

                {/* LeetCode */}
                <a
                  href="https://leetcode.com/u/shoury_01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <img
                    src={leetcodeIcon}
                    alt="LeetCode"
                    className="w-16 h-16 rounded-lg shadow-md group-hover:scale-110 group-hover:shadow-orange-500/30 transition duration-300"
                  />
                  <span className="mt-2 text-sm text-white/90 group-hover:text-orange-400">
                    LeetCode
                  </span>
                </a>
              </div>
              <p className="text-white/80">
                <br />
                Explore all my coding profiles in one place on{" "}
                <a
                  href="https://codolio.com/profile/shoury"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Codolio profile
                </a>
                .
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech. in Computer Science </strong> - Indian
                  Institute Of Information Technology, Kottayam (2022-present)
                </li>
                <li>
                  <strong> Relevant Coursework:</strong>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      "Data Structures",
                      "Web Development",
                      "Cloud Computing",
                      "OOP",
                      "Networks",
                      "OS",
                      "DBMS",
                      "Design Patterns",
                    ].map((item) => (
                      <span
                        key={item}
                        className="bg-white/10 text-sm px-3 py-1 rounded-full text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
            {/* 
          
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  {" "}
                  Software Engineer at ABC Corp (2020 - Present){" "}
                </h4>
                <p>
                  Developed and maintained microservices for cloud-based
                  applications.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  {" "}
                  Intern at DEF Startups (2019){" "}
                </h4>
                <p>
                  Assisted in building front-end components and integration REST
                  APIs
                </p>
              </div>
            </div>
          </div>
          
          */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;

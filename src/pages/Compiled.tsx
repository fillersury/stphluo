import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineSearch } from 'react-icons/hi';
import profilePic from "../assets/profile-pic.jpg";

function Compiled() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`relative w-screen min-h-screen bg-slate-200 dark:bg-slate-950 overflow-hidden p-4 transition-opacity duration-1000 ease-in-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div
          className="relative rounded-lg w-full aspect-[2/3] max-h-[450px] md:col-span-2"
          style={{
            backgroundImage: `url(${profilePic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="p-6 rounded-lg bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-white flex flex-col justify-center h-full md:col-span-4 space-y-4">
          <h1 className="text-2xl font-bold font-mono text-indigo-800 dark:text-indigo-400 text-center">Annie Potatoes</h1>
          <h2 className="text-lg text-center">Full-Stack Software Engineer</h2>
          <ul className="p-4 list-inside text-sm space-y-1">
            <li>💻 4+ years building modern web apps in <span className="text-indigo-800 dark:text-indigo-300">React.js</span> & <span className="text-indigo-800 dark:text-indigo-300">C#.NET</span> with cross-functional teams</li>
            <li>🧠 Skilled in TypeScript/JavaScript, Python, SQL, MongoDB, microservices, & event-driven architecture</li>
            <li>🚀 Built & deployed scalable microservices and frontend SPAs</li>
            <li>🔍 Passionate about clean design, thoughtful UX, and performant code</li>
            <li>🌆 Based in NYC | Available for hybrid opportunities</li>
          </ul>
        </div>
        <div className="relative rounded-lg bg-slate-300 text-slate-900 dark:bg-slate-900 dark:text-white p-6 flex flex-col justify-center md:col-span-1 text-center cursor-pointer hover:bg-indigo-700 transition-colors">
          <a 
            href="/created" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center space-y-2"
          >
            <HiOutlineSearch className="text-4xl text-indigo-900 dark:text-indigo-400" />
            <span
              title="Click to view my projects"
              className="font-mono font-semibold text-indigo-900 dark:text-indigo-300"
            >My Projects</span>
          </a>
        </div>
        <div className="relative rounded-lg bg-slate-300 text-slate-900 dark:bg-slate-900 dark:text-white p-6 flex flex-col justify-center md:col-span-1 text-center cursor-pointer hover:bg-indigo-700 transition-colors">
          <a 
            href="https://github.com/fillersury/anniepotatoes" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center space-y-2"
          >
            <FaGithub className="text-4xl text-indigo-900 dark:text-indigo-400" />
            <span
              title="Click to view my GitHub repository"
              className="font-mono font-semibold text-indigo-900 dark:text-indigo-300"
            >View My GitHub</span>
          </a>
        </div>
        <div className="relative rounded-lg bg-slate-300 text-slate-900 dark:bg-slate-900 dark:text-white p-6 md:col-span-2">
          <h3 className="text-xl font-bold font-mono text-indigo-800 dark:text-indigo-400 mb-2">
            Government Contractor
          </h3>
          <p className="text-sm">
            <strong>Full-Stack Software Engineer</strong> — 2020 to Current
          </p>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            <li>
              Led development of secure internal tools for federal clients using{" "}
              <span className="text-indigo-800 dark:text-indigo-300">React</span> and{" "}
              <span className="text-indigo-800 dark:text-indigo-300">.NET Core</span>
            </li>
            <li>
              Built new web apps and microservices from scratch, owning both frontend and backend implementation
            </li>
            <li>
              Integrated with databases like <span className="text-indigo-800 dark:text-indigo-300">SQL Server</span> and{" "}
              <span className="text-indigo-800 dark:text-indigo-300">DocumentDB</span>
            </li>
            <li>
              Followed agile processes and delivered high-impact features on tight federal timelines
            </li>
            <li>Worked across teams to implement scalable, maintainable codebases</li>
          </ul>
        </div>
        <div className="relative rounded-lg bg-slate-300 text-slate-900 dark:bg-slate-900 dark:text-white p-6 flex flex-col justify-center md:col-span-2">
          <h3 className="text-xl font-bold font-mono text-indigo-800 dark:text-indigo-400 mb-2 text-center">
            Tech Stack
          </h3>
          <ul className="p-4 list-inside text-sm space-y-1">
            <li><span className="text-indigo-800 dark:text-indigo-300 font-semibold">Frontend:</span> React, TypeScript/Javascript, Tailwind CSS, HTML</li>
            <li><span className="text-indigo-800 dark:text-indigo-300 font-semibold">Backend:</span> C#.Net, Python, Java</li>
            <li><span className="text-indigo-800 dark:text-indigo-300 font-semibold">Databases:</span> SQL Server, MongoDB, DocumentDB</li>
            <li><span className="text-indigo-800 dark:text-indigo-300 font-semibold">Architecture:</span> Microservices, Event-Driven Design</li>
            <li><span className="text-indigo-800 dark:text-indigo-300 font-semibold">DevOps:</span> Docker, CI/CD Pipelines</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Compiled;

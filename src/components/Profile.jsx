import React, { useState } from "react";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { key: "about", label: "About Me" },
    { key: "experiences", label: "Experiences" },
    { key: "recommended", label: "Recommended" },
  ];

  const tabContent = {
    about: `Hello! I’m Parshotam Lal, a passionate Full Stack Developer (MERN) skilled in React.js, Node.js, Express.js, and MongoDB. I enjoy creating fast, responsive, and user-friendly web applications. Currently, I’m exploring Next.js to strengthen my front-end development skills and build modern, scalable solutions.`,

    experiences: `Full Stack Developer Trainee – Internshala Trainings (Jan 2025 – Present)
Completed a 6-month MERN stack course, building real-world projects like ShoppyGlobe E-commerce and YouTube Clone using React, Node.js, and MongoDB with API integration and responsive design.`,

    recommended: `Parshotam is a skilled MERN Stack Developer, quick learner, and team player. He writes clean code, solves problems efficiently, and is eager to contribute to modern web projects.`,
  };

  return (
    <div className="w-full max-w-2xl  bg-gray-700/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden">
      {/* Header with Help Icon */}

      {/* Tabs */}
      <div className="flex items-center justify-center mr-15 mt-2.5  ">
        <button className="  w-7 h-7 mb-7 mr-5 rounded-full  flex items-center justify-center hover:bg-gray-600/50 transition-colors">
          <HelpCircle className="w-5 h-5 text-gray-400" />
        </button>
        <div className="relative flex gap-1  px-9 py-2 bg-gradient-to-b from-gray-900 to-gray-950 rounded-[15px] border border-gray-800 shadow-inner">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative z-4 px-10 py-3 rounded-[15px] font-medium text-sm transition-all duration-300 ${
                activeTab === tab.key
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gray-700 rounded-[15px] shadow-2xl "
                  style={{
                    boxShadow: "0 0 25px 15px rgba(0, 0, 0, 0.6)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-20">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="px-6 pb-8">
        <div className=" rounded-2xl p-6 min-h-[280px] max-h-[320px] overflow-y-auto custom-scrollbar">
          <p className="text-gray-400 leading-relaxed whitespace-pre-line text-xl">
            {tabContent[activeTab]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";

import profilePic from "../assets/profilepic.avif"

function About() {

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-16 py-10 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="col-span-1 lg:col-span-2 flex items-center justify-center lg:justify-end">
          <img
            src={profilePic}
          />
        </div>
        <div className="col-span-1 lg:col-span-3 mr-0 lg:mr-48">
          <p className="text-stone-600 text-sm mb-4"><b>My name is Stephanie</b>, and I am a UI/UX Designer, Design System Designer, and Industrial Designer.</p>
          <p className="text-stone-600 text-sm mb-4">I have always had an affinity for making all things beautiful, and that has since translated into a love for solving problems in unique and unconventional ways.</p>
          <p className="text-stone-600 text-sm mb-4">I've worked at Gap Inc, Geico, State Farm, MyEyeDr, Coca-Cola, and contracting firms providing UI/UX design services. I've also freelanced work out to local, family-owned businesses in the DC area, including salon suites, catering companies, and local restaurants. I have a Bachelor of Science degree from Virginia Tech in Industrial Design.</p>
          <p className="text-stone-600 text-sm mb-4">I have a pet Shiba Inu named Tachi, and I currently reside with my partner in NYC. I am also a boba tea and anime fan ☻.</p>
          <p className="text-stone-600 text-sm mb-4">Connect with me on LinkedIn or reach out via email!</p>
        </div>
      </div>
    </div>
  );
}

export default About;

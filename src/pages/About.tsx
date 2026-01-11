import React from "react";

import profilePic from "../assets/profilePic.jpeg"

function About() {

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-16 py-10 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="col-span-1 lg:col-span-2 flex items-center justify-center lg:justify-end">
          <img
            src={profilePic}
          />
        </div>
        <div className="col-span-1 lg:col-span-3 mr-0 lg:mr-48 p-10">
          <p className="text-stone-600 text-sm mb-4"><b>Hello! I’m Stephanie, a dynamic product UI/UX designer</b> with 7+ years of experience delivering intuitive mobile and web experiences for enterprise clients including State Farm, GEICO, Gap Inc, and the Coca-Cola company. I specialize in user-centered design, robust design systems, and rapid prototyping using Figma.</p>
          <p className="text-stone-600 text-sm mb-4">I excel in collaborating with cross-functional teams to enhance usability and drive end-to-end product solutions.</p>
          <p className="text-stone-600 text-sm mb-4">I have a pet Shiba Inu named Tachi, and I currently reside in NYC.</p>
          <p className="text-stone-600 text-sm mb-4">Connect with me on LinkedIn or reach out via email.</p>
        </div>
      </div>
    </div>
  );
}

export default About;

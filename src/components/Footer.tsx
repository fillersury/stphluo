import React from "react";
import linkedInLogo from "../assets/linkedInLogo.avif";

function Footer() {
  return (
    <footer className="flex justify-center m-10">
      <div className="text-center">
        <a
          href="https://www.linkedin.com/in/stephanie-l-43966b135/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            src={linkedInLogo}
            alt="LinkedIn Profile"
          />
        </a>
        <p className="font-light text-stone-700">
          Designed by Stephanie Luo<br />
          Developed by Annie Luo<br />
          © 2025
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlogger, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faShieldAlt, faShieldVirus, faUserShield } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <header className="bg-gray-700 md:sticky h-12 top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="/" className="ml-3 text-xl">
            YAL.
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="/about" className="mr-5 hover:text-white">
            About
          </a>
          <a href="/experience" className="mr-5 hover:text-white">
            Experience
          </a>
          <a href="/projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="/skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a href="https://github.com/rcs-tringuyen" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="inline-flex text-xl mr-4" />
        </a>
        <a href="https://www.linkedin.com/in/tri-nguyen-985976149/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="inline-flex text-xl mr-4" />
        </a>
        <a href="https://rcs-tringuyen.github.io/" target="_blank">
          <FontAwesomeIcon icon={faBlogger} className="inline-flex text-xl mr-4" />
        </a>
        <a href="https://tryhackme.com/p/tlnguyen" target="_blank">
          <FontAwesomeIcon icon={faShieldAlt} className="inline-flex text-xl mr-4" />
        </a>
      </div>
    </header>
  );
}
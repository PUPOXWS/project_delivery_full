import React from "react";
import logo from "../assets/logo_2.svg";

const Footer = () => {
  return (
    <footer className="footer p-10  bg-yellow-300/30  text-base-content text-xl ">
      <aside>
        <img src={logo} alt="" />

        <p>
          Codelatin
          <br />
          Comunidad De Programadores Latinoamerica
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-xl">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title text-xl">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title text-xl">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;

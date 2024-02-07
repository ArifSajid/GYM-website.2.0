/* eslint-disable no-unused-vars */
import React from "react";
import P1 from "../../assets/images/instagram/1.png";
import P2 from "../../assets/images/instagram/2.png";
import P3 from "../../assets/images/instagram/3.png";
import P4 from "../../assets/images/instagram/4.png";
import P5 from "../../assets/images/instagram/5.png";
import { GrTwitter } from "react-icons/gr";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const instagramImages = [P1, P2, P3, P4, P5];
  const socialLinks = [
    { Icon: GrTwitter, href: "#", ariaLabel: "Follow us on Twitter" },
    { Icon: FaFacebookF, href: "#", ariaLabel: "Follow us on Facebook" },
    { Icon: FaInstagram, href: "#", ariaLabel: "Follow us on Instagram" },
  ];

  return (
    <footer className="bg-[#040F16] text-white">
      <div className="text-center py-12">
        <h3 className="text-blue-500 font-homemade text-2xl">gallery</h3>
        <h1 className="text-5xl font-rajdhani font-bold mt-2 mb-6">INSTAGRAM</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 pb-8">
        {instagramImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Instagram image ${index + 1}`}
            className="w-full h-auto object-contain"
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-around px-10 lg:px-40 py-12 gap-5">
        <div className="footer bg-[#040F16] text-white py-10 ">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="w-full">
          <h1 className="text-xl font-[Rajdhani] font-bold mb-4">
            Gym Nation.
          </h1>
          <p className="font-[Open_Sans] text-base leading-8 mb-14">
            Be the first who learns about our great promotions!
          </p>
          <h3 className="font-[Rajdhani] text-xl mb-5">Follow us</h3>
          <div className="flex gap-3">
            {socialLinks.map(({ Icon, href, ariaLabel }, index) => (
              <a
                key={index}
                href={href}
                className="border border-opacity-40 border-white p-1 rounded hover:bg-blue-700"
                aria-label={ariaLabel}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
              <div>
                <h2 className="font-rajdhani font-semibold text-lg mb-6 uppercase">
                  Products
                </h2>
                <ul>
                  <li>
                    <a href="#" className="footer-link">
                      New Arrival
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Best Seller
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      On Sale
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      All Collection
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-rajdhani font-semibold text-lg mb-6">
                  CATEGORY
                </h2>
                <ul>
                  <li>
                    <a href="#" className="footer-link">
                      Barbells
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Plates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Benches
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Apparel
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Straps & Supports
                    </a>
                  </li>
                </ul>
              </div>

              {/* <div>
                <h2 className="font-rajdhani font-semibold text-lg mb-6 uppercase">
                  Info
                </h2>
                <ul>
                  <li>
                    <a href="#" className="footer-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Feature
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Store Location
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div> */}
              <div className="lg:col-span-1">
                <h2 className="font-rajdhani font-semibold text-lg mb-6">
                  SUBSCRIBE
                </h2>
                <p className="font-open-sans text-base leading-8 mb-6">
                  Subscribe our newsletter and get discount 30% off
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="flex-1 px-4 py-2 text-white outline-none bg-[#0D1F2A] placeholder-gray-500"
                    aria-label="Email for newsletter"
                  />
                  <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

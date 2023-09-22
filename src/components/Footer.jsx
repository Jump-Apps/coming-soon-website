import React from "react";
import { Link, useLocation } from "react-router-dom";

const FooterItems = [
  {
    title: "Site Notice",
    link: "/site-notice",
    icon: "circle-info",
  },
  {
    title: null,
    link: "/",
    icon: "home",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
    icon: "shield-halved",
  },
];

const Footer = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-end   w-full">
      <div className="flex gap-5 items-center">
        {FooterItems.map((item) => {
          return (
            <Link to={item.link} key={item.link}>
              <div
                className={` text-[10px] fade-in ${
                  location.pathname == item.link
                    ? "text-white bg-white-300"
                    : "text-white-800 bg-white-100"
                } hover:text-white hover:bg-white-300 transition-all 200ms rounded-lg flex gap-2 p-2 items-center`}
              >
                <span>
                  <i className={`fa-solid fa-${item.icon}`}></i>
                </span>
                {item.title && <p>{item.title}</p>}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Socials = [
    {
      title: "GitHub",
      link: "https://github.com/Jump-Apps",
      icon: "github",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/company/jump-apps/",
      icon: "linkedin",
    },
  ];

  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div className=" bg-white-200 rounded-lg mt-5 flex gap-2 h-[120px] items-center p-5 justify-between">
      <Link to="/">
        <img
          src="/img/JumpAppsLogo_lowRes.png"
          alt="Jump Apps logo"
          className=" max-h-[40px] lg:max-h-[60px] fade-in"
        />
      </Link>
      {width > 700 && <p className="fade-in">// building apps that last</p>}

      <div className="flex gap-4">
        {Socials.map((social) => {
          return (
            <a
              className="aspect-square p-3 fade-in text-xl bg-white-100 hover:bg-white-300 transition-all 200ms rounded-lg"
              href={social.link}
              target="_blank"
              key={social.link}
            >
              <i className={`fa-brands fa-${social.icon}`}></i>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;

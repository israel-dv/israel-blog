import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HEADER_TITLE = "IMDev_";

const Header: React.FC = () => {
  return (
    <div className="w-full h-20 bg-blue-1000 px-8 flex justify-between items-center shadow-lg sticky">
      <div className="flex h-full items-center">
        <StaticImage
          src="../../images/icons/programming.png"
          alt="IMDev"
          width={60}
          height={60}
          layout="fixed"
        />
        <span className="ml-2 text-white font-russo-one text-xl text-shadow">
          {HEADER_TITLE}
        </span>
      </div>
      <span className="text-white">un Menu</span>
    </div>
  );
};

export default Header;

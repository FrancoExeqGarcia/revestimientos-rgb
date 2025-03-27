import React from "react";
import "./TopBar.css";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const TopBar: React.FC = () => {
  return (
    <div className="topbar centered">
      <a href="tel:+9044225380">
        <FaPhone /> +9044225380
      </a>
      <a href="tel:+9047289872">
        <FaWhatsapp /> +9047289872
      </a>
      <a href="mailto:rgbcorporation@gmail.com">
        <FaEnvelope /> rgbcorporation@gmail.com
      </a>
    </div>
  );
};

export default TopBar;

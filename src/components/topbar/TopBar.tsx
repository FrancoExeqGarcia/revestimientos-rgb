import React from "react";
import "./TopBar.css";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const TopBar: React.FC = () => {
  return (
    <div className="topbar">
      <div
        className="topbar-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end", // alinear todo a la derecha
          paddingRight: "20px",   // opcional: margen desde el borde
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "5px",
          }}
        >
          <a
            href="https://wa.me/+9044225380"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", display: "flex", alignItems: "center", gap: "5px" }}
          >
            <FaWhatsapp size={20} /> +9044225380
          </a>
          <a
            href="https://wa.me/+9047289872"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", display: "flex", alignItems: "center", gap: "5px" }}
          >
            <FaWhatsapp size={20} /> +9047289872
          </a>
          <a
            href="mailto:rgbcorporation@gmail.com"
            style={{ color: "white", display: "flex", alignItems: "center", gap: "5px" }}
          >
            ✉ rgbcorporation@gmail.com
          </a>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <FaMapMarkerAlt size={18} /> Jacksonville, Florida
        </div>
      </div>
    </div>
  );
};

export default TopBar;

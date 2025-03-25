import React from "react";
import "./Navbar.css";

interface MenuToggleProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <div
      className={`menu-toggle ${menuOpen ? "active" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        toggleMenu();
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuToggle;

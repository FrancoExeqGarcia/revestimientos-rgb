import React from "react";
import styles from "./Navbar.module.css";

interface MenuToggleProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <div
      className={styles.menuToggle}
      onClick={(e) => {
        e.stopPropagation();
        toggleMenu();
      }}
    >
      <span className={menuOpen ? styles.menuToggleActive : ""}></span>
      <span className={menuOpen ? styles.menuToggleActive : ""}></span>
      <span className={menuOpen ? styles.menuToggleActive : ""}></span>
    </div>
  );
};

export default MenuToggle;

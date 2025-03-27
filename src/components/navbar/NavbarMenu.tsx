import React from "react";
import { Link } from "react-scroll";
import LanguageSelector from "../languageSelector/LanguageSelector";
import { Translations } from "../../types/Translations";

interface NavbarMenuProps {
  menuOpen: boolean;
  translations: Translations;
}

const menuItems = [
  { id: "sp-page-title", key: "home" },
  { id: "quienes-somos", key: "QuienesSomos" },
  { id: "flooring", key: "floors" },
  { id: "projects-section", key: "improveSpace" },
  { id: "reviews-section", key: "Reviews" },
  { id: "contact-container", key: "contact" },
];

const NavbarMenu: React.FC<NavbarMenuProps> = ({ menuOpen, translations }) => {
  return (
    <ul
      className={`navbar-menu ${menuOpen ? "active" : ""}`}
      style={{ top: menuOpen ? "70px" : "60px" }}
    >
      {menuItems.map((item) => (
        <li key={item.id}>
          <Link
            activeClass="active"
            to={item.id}
            spy
            smooth
            offset={-70}
            duration={500}
          >
            {translations.Menu[item.key as keyof typeof translations.Menu]}
          </Link>
        </li>
      ))}
      <li className="language-menu">
        <LanguageSelector />
      </li>
    </ul>
  );
};

export default NavbarMenu;

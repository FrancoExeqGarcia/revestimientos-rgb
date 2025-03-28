import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import logo from "../../../public/img/logo_optimized.png";
import { LanguageContext } from "../../context/LanguageContext";
import NavbarMenu from "./NavbarMenu";
import MenuToggle from "./MenuToggle";

const Navbar: React.FC = () => {
  const { translations } = useContext(LanguageContext)!;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !event.target ||
        !(event.target as HTMLElement).closest(".navbar-container")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo RGB" />
        </div>
        <MenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <NavbarMenu menuOpen={menuOpen} translations={translations} />
      </div>
      <div className="navbar-subtitle">
        <p>EMPRESA DE CONSTRUCCIÓN</p>
      </div>
    </nav>
  );
};

export default Navbar;

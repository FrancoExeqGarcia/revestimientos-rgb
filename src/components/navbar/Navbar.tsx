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
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo RGB" />
        </div>

        {/* Botón Menú Hamburguesa */}
        <MenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Menú */}
        <NavbarMenu menuOpen={menuOpen} translations={translations} />
      </div>
      <p className="info">EMPRESA DE CONSTRUCCIÓN</p>
    </nav>
  );
};

export default Navbar;

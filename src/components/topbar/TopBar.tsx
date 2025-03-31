import React from "react";
import styles from "./TopBar.module.css";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const TopBar: React.FC = () => {
  return (
    <div className={`${styles.topbar} ${styles.centered}`}>
  <a className={styles.link} href="tel:+9044225380">
    <FaWhatsapp className={styles.icon} /> +9044225380
  </a>
  <a className={styles.link} href="tel:+9047289872">
    <FaWhatsapp className={styles.icon} /> +9047289872
  </a>
  <a className={styles.link} href="mailto:rgbcorporation@gmail.com">
    <FaEnvelope className={styles.icon} /> rgbcorporation@gmail.com
  </a>
</div>

  );
};

export default TopBar;

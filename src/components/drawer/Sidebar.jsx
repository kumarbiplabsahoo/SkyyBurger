import React from "react";
import styles from "../../styles/sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Institution", path: "/institution" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>MyApp</h2>
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

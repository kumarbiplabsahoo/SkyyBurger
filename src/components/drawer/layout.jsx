import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import styles from "../../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navbar />
        <div className={styles.pageContent}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;

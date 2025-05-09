// components/Modal/Modal.jsx
import React from "react";
import styles from "../../styles/modal.module.css";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md", // sm, md, lg
}) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} ${styles[size]}`}>
        <div className={styles.header}>
          <h3>{title}</h3>
          <button onClick={onClose} className={styles.closeBtn}>
            &times;
          </button>
        </div>
        <div className={styles.body}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );
}

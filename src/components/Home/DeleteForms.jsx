import React from "react";
import styles from "../../styles/formStyles.module.css";

export default function DeleteForms({formData}) {
  return (
    <div className={styles.delete}>
      <p>
        Are you sure you want to delete <strong>{formData?.name}</strong> from
        the records?
      </p>
    </div>
  );
}

import React, { useState } from "react";
import styles from "./Home.module.css";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Modal from "../../components/ui/Modal";
import ViewForms from "../../components/Home/ViewForms";
import DeleteForms from "../../components/Home/DeleteForms";
import AddForms from "../../components/Home/AddForms";

const Home = () => {
  const data = [
    { id: 1, name: "John Doe", role: "Manager" },
    { id: 2, name: "Jane Smith", role: "Developer" },
    { id: 3, name: "Bob Johnson", role: "Designer" },
  ];

  const [modalType, setModalType] = useState(null); 

  const handleClose = () => setModalType(null);

  const [selectedUser, SetselectedUser] = useState(null);

  const handleFormChange = () => {
    console.log("hello momo");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Employee List</h2>
        <button className={styles.addBtn} onClick={() => setModalType("add")}>
          + Add
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
            <th className={styles.actionsCol}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td className={styles.actions}>
                <FaEye
                  className={styles.icon}
                  title="View"
                  onClick={() => {
                    setModalType("view");
                    SetselectedUser(item);
                  }}
                />
                <FaEdit
                  className={styles.icon}
                  title="Edit"
                  onClick={() => {
                    setModalType("edit");
                    SetselectedUser(item);
                  }}
                />
                <FaTrash
                  className={styles.icon}
                  title="Delete"
                  onClick={() => {
                    setModalType("delete");
                    SetselectedUser(item);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={modalType !== null}
        onClose={handleClose}
        title={
          modalType === "add"
            ? "Add Employee"
            : modalType === "edit"
            ? "Edit Employee"
            : modalType === "view"
            ? "View Details"
            : "Delete Confirmation"
        }
        footer={
          modalType !== "view" && (
            <>
              <button onClick={handleClose}>Cancel</button>
              <button style={{ background: "blue", color: "white" }}>
                {modalType === "delete" ? "Delete" : "Save"}
              </button>
            </>
          )
        }
      >
        {modalType === "view" ? (
          <ViewForms formData={selectedUser}/>
        ) : modalType === "delete" ? (
          <DeleteForms formData={selectedUser} />
        ) : (
          <AddForms formData={selectedUser} onChange={handleFormChange} />
        )}
      </Modal>
    </div>
  );
};

export default Home;

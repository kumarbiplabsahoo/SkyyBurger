import { useState } from "react";
import styles from "./Home.module.css";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Modal from "../../components/ui/Modal";
import ViewForms from "../../components/Home/ViewForms";
import DeleteForms from "../../components/Home/DeleteForms";
import AddForms from "../../components/Home/AddForms";
import { useSelector } from "react-redux";
import { UseAuth } from "../../hooks/useAuth";

const Home = () => {
  const loading = useSelector((state) => state.loader.loading);
  const {
    modalType,
    setModalType,
    handleClose,
    user,
    SetUser,
    data,
    handleSaveNewUser
  } = UseAuth();

  const handleSave = (modalType) => {
    if (modalType === "add") {
      handleSaveNewUser();
    } else if (modalType === "edit") {
      console.log(user);
    }
  };

  return loading ? (
    <>
      <h1>loading.........</h1>
    </>
  ) : (
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th className={styles.actionsCol}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>{item.First_name}</td>
              <td>{item.Last_name}</td>
              <td>{item.Gender}</td>
              <td className={styles.actions}>
                <FaEye
                  className={styles.icon}
                  title="View"
                  onClick={() => {
                    setModalType("view");
                    SetUser(item);
                  }}
                />
                <FaEdit
                  className={styles.icon}
                  title="Edit"
                  onClick={() => {
                    setModalType("edit");
                    SetUser(item);
                  }}
                />
                <FaTrash
                  className={styles.icon}
                  title="Delete"
                  onClick={() => {
                    setModalType("delete");
                    SetUser(item);
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
              <button
                style={{ background: "blue", color: "white" }}
                onClick={() => handleSave(modalType)}
              >
                {modalType === "delete" ? "Delete" : "Save"}
              </button>
            </>
          )
        }
      >
        {modalType === "view" ? (
          <ViewForms formData={user} />
        ) : modalType === "delete" ? (
          <DeleteForms formData={user} />
        ) : (
          <AddForms
            user={user}
            SetUser={SetUser}
          />
        )}
      </Modal>
    </div>
  );
};

export default Home;

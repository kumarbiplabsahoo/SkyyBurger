import { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { hideLoader, showLoader } from "../store/reducers/loader";
import { CreateNewUser } from "../services/userServices";

export const UseAuth = () => {
  const {
    modalType,
    setModalType,
    handleClose,
    user,
    SetUser,
    data,

    fetchUsersData,
  } = useContext(AuthContext);

  const handleSaveNewUser = async () => {
    try {
      showLoader();
      await CreateNewUser(user).then((res) => {
        if (res.status === 200) {
          setData(res.data);
          handleClose();
          fetchUsersData();
        }
        hideLoader();
        handleClose();
      });
    } catch (error) {
      console.error(error);
      hideLoader();
      handleClose();
    }
  };

  return {
    modalType,
    setModalType,
    handleClose,
    user,
    SetUser,
    data,

    handleSaveNewUser,
  };
};

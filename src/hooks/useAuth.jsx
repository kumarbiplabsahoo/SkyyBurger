import { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { hideLoader, showLoader } from "../store/reducers/loader";
import {
  CreateNewUser,
  DeleteUser,
  UpdateUser,
} from "../services/userServices";

export const UseAuth = () => {
  const {
    modalType,
    setModalType,
    handleClose,
    user,
    SetUser,
    data,
    setData,

    fetchUsersData,
  } = useContext(AuthContext);

  const handleSaveNewUser = async () => {
    try {
      showLoader();
      await CreateNewUser(user).then((res) => {
        if (res.status === 200) {
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

  const handleUpdateUser = async () => {
    try {
      showLoader();
      await UpdateUser(user).then((res) => {
        if (res.status === 200) {
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

  //DeleteUser
  const handleDeleteUser = async () => {
    try {
      showLoader();
      await DeleteUser({ Id: user._id }).then((res) => {
        if (res.status === 200) {
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
    handleUpdateUser,
    handleDeleteUser,
  };
};

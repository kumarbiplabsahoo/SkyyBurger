import { createContext, useEffect, useState } from "react";
import { hideLoader, showLoader } from "../store/reducers/loader";
import { AllUsersData } from "../services/userServices";
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const [data, setData] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [user, SetUser] = useState({
    _id: "",
    First_name: "",
    Last_name: "",
    Email: "",
    Password: "",
    Gender: "",
    Status: true,
    Institution: null,
  });

  const fetchUsersData = async () => {
    try {
      showLoader();
      await AllUsersData({ token: token }).then((res) => {
        if (res.status === 200) {
          setData(res.data);
        }
        hideLoader();
      });
    } catch (error) {
      console.error(error);
      hideLoader();
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const handleClose = () => {
    setModalType(null), SetUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        modalType,
        setModalType,
        handleClose,
        user,
        SetUser,
        data,
        setData,

        fetchUsersData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import { createContext, useEffect, useState } from "react";
import { hideLoader, showLoader } from "../store/reducers/loader";
import { AllUsersData } from "../services/userServices";
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoader, setIsloader] = useState(true);
  const [data, setData] = useState(null);
  const token = sessionStorage.getItem("token");

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
 
  return (
    <AuthContext.Provider
      value={{
        isLoader,
        setIsloader,
        data,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

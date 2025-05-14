import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export const UseAuth = () => {
  const {
    isLoader,
    setIsloader,
    data
  } = useContext(AuthContext);

 
  return {
    isLoader,
    setIsloader,
    data
  };
};

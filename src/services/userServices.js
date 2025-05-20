import { fetchData } from "./api";

export const AllUsersData = async (data) => {
  try {
    const response = await fetchData("get_all_users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.error("Error fatch....", error);
  }
};


export const CreateNewUser = async (data) => {
  try {
    const response = await fetchData("signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.error("Error fatch....", error);
  }
};


export const UpdateUser = async (data) => {
  try {
    const response = await fetchData("update_single_user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.error("Error fatch....", error);
  }
};

export const DeleteUser = async (data) => {
  try {
    const response = await fetchData("delete_user_by_id", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.error("Error fatch....", error);
  }
};
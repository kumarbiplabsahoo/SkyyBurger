const BASE_URL = "http://localhost:8000/api";

export const fetchData = async (endpoint, options) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, options);
  
  if (!response.ok) {
    throw new Error("Network was not working...");
  }
  return response.json();
};

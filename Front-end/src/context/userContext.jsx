import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [name, setName] = useState("salah");
  const [lastname, setLastname] = useState("salah");
  const [idUser, setIdUser] = useState("1");

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await fetch("http://localhost:8088/api/v1/auth/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const userData = await response.json();
          setName(userData.firstname);
          setLastname(userData.lastname);
          setIdUser(userData.id);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ name, setName, lastname, idUser }}>
      {children}
    </UserContext.Provider>
  );
};

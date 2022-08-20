import React, { createContext, useState } from "react";
import axios from "axios";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    const fetchUser = () => {
      axios
        .get("https://randomuser.me/api/")
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data.results[0]));
          setUser(res.data.results[0]);
        })
        .catch(() => console.log("An error occured"));
    };

    const userLocalStorage = localStorage.getItem("user");

    if (!userLocalStorage) fetchUser();
    else setUser(userLocalStorage);
  };

  const userContextValue = { user, login };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };

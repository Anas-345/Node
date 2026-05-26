import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const Auth = createContext();

export default function AuthContext({ children }) {
  const [user, setUser] = useState({});

  async function checkingCookie() {
    const data = await axios.get("http://localhost:3000/me", {
      withCredentials: true,
    });

    const newData = data.data;

    if (newData.type === "success") {
      setUser(newData.userFound);
    }
  }

  useEffect(() => {
    checkingCookie();
  }, []);

  return <Auth.Provider value={{ user, setUser }}>{children}</Auth.Provider>;
}

export const useAuth = () => useContext(Auth);

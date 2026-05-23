import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const Auth = createContext();

export default function AuthContext({ children }) {
  const [user, setUser] = useState({});
  return <Auth.Provider value={{ user, setUser }}>{children}</Auth.Provider>;
}

export const useAuth = () => useContext(Auth);

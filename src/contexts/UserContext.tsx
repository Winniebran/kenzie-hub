import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iTechs } from "../Pages/Dashboard/Modal/AddModal/AddTechModal";

import { iUserLogin } from "../Pages/Login/Login";
import { iUserRegister } from "../Pages/Register/RegisterForm/RegisterForm";
import { ApiRequests } from "../services/ApiRequests";

interface iChildren {
  children: React.ReactNode;
}

export interface iUser {
  name: string;
  course_module: string;
  techs: iTechs[];
}

export interface iUserContextProps {
  user: iUser | null; 
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>; 
  login: (data: iUserLogin) => void;
  signUp: (data: iUserRegister) => void; 
  logout: () => void;
}

export const UserContext = createContext({} as iUserContextProps);

export const UserProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState<iUser | null>(null);
  
  const navigate = useNavigate();

  const login = async (data: iUserLogin) => {
    try {
      const response = await ApiRequests.post("/sessions", data);
      localStorage.setItem("@kenzieHub:token", response.data.token);
      localStorage.setItem("@kenzieHub:id", response.data.user.id);
      setUser(response.data.user);
      navigate("/dashboard");
      toast.success("Login realizado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Email e/ou senha são inválidos");
    }
  };

  const signUp = async (data: iUserRegister) => {
    try {
      await ApiRequests.post("/users", data);
      navigate("/");
      toast.success("Cadastro realizado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("E-mail já cadastrado");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("@kenzieHub:token");
    localStorage.removeItem("@kenzieHub:id");
    toast("Volte Sempre!");
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("@kenzieHub:token");
    !token && navigate("/");

    const profile = async () => {
      try {
        const response = await ApiRequests.get("/profile");
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    profile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, login, signUp, logout }}>
      {children}
    </UserContext.Provider>
  );
};

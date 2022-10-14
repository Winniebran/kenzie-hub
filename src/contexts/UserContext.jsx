import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ApiRequests } from "../services/apiRequests";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (data) => {
    // reset()
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

  const signUp = async (data) => {
    // reset();
    try {
      const response = await ApiRequests.post("/users", data);
      console.log(response);
      //   setLoading(true);
      navigate("/");
      toast.success("Cadastro realizado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("E-mail já cadastrado");
    } finally {
      //   setLoading(false);
    }
  };

  const logout = () => {
    setUser("");
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

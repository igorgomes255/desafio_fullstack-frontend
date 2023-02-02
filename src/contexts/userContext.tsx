import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";
import { AxiosError, AxiosResponse } from "axios";
import { IAuthProvider } from "../interfaces";
import { useNavigate } from "react-router-dom";

interface IUser {
  id: string;
  full_name: string;
  email: string;
  password: string;
  phone: string;
}

interface IUserContext {
  user: IUser[];
  loading: boolean;
}

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("@token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      api
        .get("/users/profile", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response: AxiosResponse) => {
          setUser(response.data);
        })
        .catch((err: AxiosError) => {
          console.log(err);
        });
    } else {
      navigate("/");
    }
    setLoading(false);
  }, [token]);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  const context = useContext(UserContext);

  return context;
}

export default UserProvider;

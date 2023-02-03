import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import api from "../services/api";
import { AxiosError, AxiosResponse } from "axios";
import { IAuthProvider, IEditUser } from "../interfaces";
import { useNavigate } from "react-router-dom";

interface IUserContext {
  user: any;
  setUser: any;
  loading: boolean;
  logout: () => void;
  token: string | null;
  modalUser: boolean;
  setModalUser: Dispatch<SetStateAction<boolean>>;
  modalEditUser: boolean;
  setModalEditUser: Dispatch<SetStateAction<boolean>>;
  setEditUser: Dispatch<SetStateAction<string>>;
}

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalUser, setModalUser] = useState(false);
  const [modalEditUser, setModalEditUser] = useState(false);
  const [editUser, setEditUser] = useState<string>("");

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
  }, [token, editUser]);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        logout,
        token,
        modalUser,
        setModalUser,
        modalEditUser,
        setModalEditUser,
        setEditUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  const context = useContext(UserContext);

  return context;
}

export default UserProvider;

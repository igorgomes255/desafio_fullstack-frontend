import { createContext, useContext, useState } from "react";
import * as yup from "yup";
import {
  FieldErrorsImpl,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../services/api";
import { AxiosError, AxiosResponse } from "axios";
import { IAuthProvider, IDataUser } from "../interfaces";
import { useNavigate } from "react-router-dom";

interface IUser {
  full_name: string;
  email: string;
  password: string;
  phone: string;
}

interface IUserContext {
  register: UseFormRegister<IDataUser>;
  handleSubmit: UseFormHandleSubmit<IDataUser>;
  errors: FieldErrorsImpl<IDataUser>;
  submitUser: (data: IDataUser) => void;
  user: IUser[];
}

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser[]>([]);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    full_name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório"),
    phone: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataUser>({
    resolver: yupResolver(schema),
  });

  const submitUser = (data: IDataUser) => {
    api
      .post("/users", data)
      .then((response: AxiosResponse) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((err: AxiosError) => {
        console.log(err.response?.data);
      });
  };

  return (
    <UserContext.Provider
      value={{ register, handleSubmit, errors, submitUser, user }}
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

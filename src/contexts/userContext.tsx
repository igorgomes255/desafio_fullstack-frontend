import { createContext, useContext } from "react";
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

interface IUserContext {
  register: UseFormRegister<IDataUser>;
  handleSubmit: UseFormHandleSubmit<IDataUser>;
  errors: FieldErrorsImpl<IDataUser>;
  submitUser: (data: IDataUser) => void;
}

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IAuthProvider) => {
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
      .post("/contact", data)
      .then((response: AxiosResponse) => {
        console.log(response.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider
      value={{ register, handleSubmit, errors, submitUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useContactContext() {
  const context = useContext(UserContext);

  return context;
}

export default UserProvider;

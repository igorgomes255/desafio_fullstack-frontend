import { useContext, createContext } from "react";
import * as yup from "yup";
import {
  FieldErrorsImpl,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { IAuthProvider, IDataUser } from "../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError, AxiosResponse } from "axios";
import api from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

interface IUserContext {
  register: UseFormRegister<IDataUser>;
  handleSubmit: UseFormHandleSubmit<IDataUser>;
  errors: FieldErrorsImpl<IDataUser>;
  submitUser: (data: IDataUser) => void;
}

export const RegisterContext = createContext({} as IUserContext);

const RegisterProvider = ({ children }: IAuthProvider) => {
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
        toast.success("Usuário registrado", { theme: "dark" });

        setTimeout(() => {
          navigate("/", { replace: true });
        }, 3000);
      })
      .catch((err: AxiosError) => {
        console.log(err.response?.data);

        toast.error("Algo deu errado", { theme: "dark" });
      });
  };

  return (
    <RegisterContext.Provider
      value={{ register, handleSubmit, errors, submitUser }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export function useRegisterContext() {
  const context = useContext(RegisterContext);

  return context;
}

export default RegisterProvider;

import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import * as yup from "yup";
import {
  FieldErrorsImpl,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { IAuthProvider, IEditContact } from "../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError, AxiosResponse } from "axios";
import api from "../services/api";
import { useUserContext } from "./userContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IContactEditContext {
  register: UseFormRegister<IEditContact>;
  handleSubmit: UseFormHandleSubmit<IEditContact>;
  errors: FieldErrorsImpl<IEditContact>;
  editContact: (data: IEditContact) => void;
  deleteContact: () => void;
  idContact: string;
  setIdContact: Dispatch<SetStateAction<string>>;
  editContacts: string;
  setEditContacts: Dispatch<SetStateAction<string>>;
  modalEdit: boolean;
  setModalEdit: Dispatch<SetStateAction<boolean>>;
}

export const EditContactContext = createContext({} as IContactEditContext);

const EditContactProvider = ({ children }: IAuthProvider) => {
  const { token } = useUserContext();

  const [editContacts, setEditContacts] = useState<string>("");
  const [idContact, setIdContact] = useState<string>("");
  const [modalEdit, setModalEdit] = useState<boolean>(false);

  const schema = yup.object().shape({
    full_name: yup.string(),
    email: yup.string(),
    phone: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditContact>({
    resolver: yupResolver(schema),
  });

  const editContact = (data: IEditContact) => {
    api
      .patch(`/contact/${idContact}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: AxiosResponse) => {
        setEditContacts(response.data);
        setModalEdit(false);
        toast.success("Contato atualizado com sucesso!!!", { theme: "dark" });
      })
      .catch((err: AxiosError) => {
        console.log(err.response?.data);

        toast.error("Algo deu errado!!!", { theme: "dark" });
      });
  };

  const deleteContact = () => {
    api
      .delete(`/contact/${idContact}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: AxiosResponse) => {
        setEditContacts(response.data);
        setModalEdit(false);
        toast.success("Contato deletado com sucesso!!!", { theme: "dark" });
      })
      .catch((err: AxiosError) => {
        console.log(err.response?.data);

        toast.error("Algo deu errado!!!", { theme: "dark" });
      });
  };

  return (
    <EditContactContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        editContact,
        deleteContact,
        idContact,
        setIdContact,
        modalEdit,
        setModalEdit,
        editContacts,
        setEditContacts,
      }}
    >
      {children}
    </EditContactContext.Provider>
  );
};

export function useEditContactContext() {
  const context = useContext(EditContactContext);

  return context;
}

export default EditContactProvider;

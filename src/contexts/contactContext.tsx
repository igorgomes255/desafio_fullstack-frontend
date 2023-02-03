import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
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
import { IAuthProvider, IDataContact } from "../interfaces";
import { useUserContext } from "./userContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IContactContext {
  register: UseFormRegister<IDataContact>;
  handleSubmit: UseFormHandleSubmit<IDataContact>;
  errors: FieldErrorsImpl<IDataContact>;
  submitContact: (data: IDataContact) => void;
  modalAdd: boolean;
  setModalAdd: Dispatch<SetStateAction<boolean>>;
  contacts: IDataContact[];
}

export const ContactContext = createContext({} as IContactContext);

const ContactProvider = ({ children }: IAuthProvider) => {
  const { token } = useUserContext();
  const [modalAdd, setModalAdd] = useState(false);
  const [contact, setContact] = useState<IDataContact[]>([]);
  const [contacts, setContacts] = useState<IDataContact[]>([]);

  const schema = yup.object().shape({
    full_name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório"),
    phone: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataContact>({
    resolver: yupResolver(schema),
  });

  const submitContact = (data: IDataContact) => {
    api
      .post("/contact", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: AxiosResponse) => {
        setContact(response.data);
        setModalAdd(false);

        toast.success("Contato cadastrado com sucesso!!!", { theme: "dark" });
      })
      .catch((err: AxiosError) => {
        console.log(err.response?.data);

        toast.error("Algo deu errado!!!", { theme: "dark" });
      });
  };

  useEffect(() => {
    if (token) {
      api
        .get("/contact", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response: AxiosResponse) => {
          setContacts(response.data);
        })
        .catch((err: AxiosError) => {
          console.log(err.response?.data);
        });
    }
  }, [contact, token]);

  return (
    <ContactContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        submitContact,
        modalAdd,
        setModalAdd,
        contacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export function useContactContext() {
  const context = useContext(ContactContext);

  return context;
}

export default ContactProvider;

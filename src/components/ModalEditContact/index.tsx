import DivInput from "../input";
import {
  Container,
  DivButton,
  FormTech,
  ModalHeader,
  ModalTech,
} from "./styles";
import { MdClose } from "react-icons/md";
import { useEditContactContext } from "../../contexts/editContactContext";
import { useContactContext } from "../../contexts/contactContext";

const ModalEditContact = () => {
  const {
    register,
    handleSubmit,
    errors,
    editContact,
    deleteContact,
    setModalEdit,
    idContact,
  } = useEditContactContext();
  const { contacts } = useContactContext();

  const filterContacts = contacts.filter((contact) => contact.id === idContact);

  return (
    <Container>
      <ModalTech>
        <ModalHeader>
          {filterContacts.map((contact) => (
            <h3 key={contact.id}>Editar contato: {contact.full_name}</h3>
          ))}
          <button onClick={() => setModalEdit(false)}>
            <MdClose />
          </button>
        </ModalHeader>
        <FormTech onSubmit={handleSubmit(editContact)}>
          <DivInput
            label="Nome completo"
            placeholder="nome completo"
            {...register("full_name")}
            errors={errors.full_name?.message}
          />
          <DivInput
            label="Email"
            placeholder="email@email.com"
            type="email"
            {...register("email")}
            errors={errors.email?.message}
          />
          <DivInput
            label="Telefone"
            placeholder="telefone"
            {...register("phone")}
            errors={errors.phone?.message}
          />
          <button type="submit">Salvar</button>
        </FormTech>
        <DivButton>
          <button onClick={() => deleteContact()} className="delete_button">
            Excluir
          </button>
        </DivButton>
      </ModalTech>
    </Container>
  );
};

export { ModalEditContact };

import { MdClose } from "react-icons/md";
import { useEditContext } from "../../contexts/editUser";
import { useUserContext } from "../../contexts/userContext";
import { ModalEditUser } from "../ModalUser";
import { Container, DivInfo, ModalHeader, ModalTech } from "./styles";

const InfoUser = () => {
  const { setModalUser, user, setModalEditUser, modalEditUser } =
    useUserContext();
  const { deleteUser } = useEditContext();
  return (
    <Container>
      {modalEditUser && <ModalEditUser />}
      <ModalTech>
        <ModalHeader>
          <h3>Informações do usuário</h3>
          <button onClick={() => setModalUser(false)}>
            <MdClose />
          </button>
        </ModalHeader>
        <DivInfo>
          <span>Nome do usuário:</span>
          <p>{user.full_name}</p>
          <span>E-mail:</span>
          <p>{user.email}</p>
          <span>Telefone:</span>
          <p>{user.phone}</p>
          <button onClick={() => setModalEditUser(true)}>Editar perfil</button>
          <button onClick={() => deleteUser()} className="delete_button">
            Deletar perfil
          </button>
        </DivInfo>
      </ModalTech>
    </Container>
  );
};

export { InfoUser };

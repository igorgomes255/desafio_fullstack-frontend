import { Header } from "../../components/header/header";
import { Container, DivAdd, Main } from "./styles";
import { useUserContext } from "../../contexts/userContext";
import { ModalContact } from "../../components/ModalContact";
import { useContactContext } from "../../contexts/contactContext";
import { MdAdd } from "react-icons/md";

const Dashboard = () => {
  const { user } = useUserContext();
  const { modalAdd, setModalAdd } = useContactContext();
  return (
    <Container>
      {modalAdd && <ModalContact />}
      <Header />
      <Main>
        <section>
          <h2>Seja bem vindo, {user.full_name}!!!</h2>
        </section>
        <DivAdd>
          <div>
            <span>Cadastre seus contatos</span>
            <button onClick={() => setModalAdd(true)}>
              <MdAdd />
            </button>
          </div>
        </DivAdd>
      </Main>
    </Container>
  );
};

export { Dashboard };

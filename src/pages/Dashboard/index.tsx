import { Header } from "../../components/header/header";
import { Main } from "../../components/header/styles";
import { Container } from "./styles";
import { useUserContext } from "../../contexts/userContext";

const Dashboard = () => {
  const { user } = useUserContext();
  return (
    <Container>
      <Header />
      <Main>
        <section>
          <h2>Seja bem vindo, {user.full_name}!!!</h2>
        </section>
      </Main>
    </Container>
  );
};

export { Dashboard };

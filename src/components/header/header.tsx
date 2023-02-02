import { FcContacts } from "react-icons/fc";
import { useUserContext } from "../../contexts/userContext";
import { DivLogo, Container } from "./styles";

const Header = () => {
  const { logout } = useUserContext();

  return (
    <Container>
      <DivLogo>
        <FcContacts size={80} />
      </DivLogo>
      <button onClick={logout}>Sair</button>
    </Container>
  );
};

export { Header };

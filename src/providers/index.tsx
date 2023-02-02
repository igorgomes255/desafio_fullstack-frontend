import ContactProvider from "../contexts/contactContext";
import LoginProvider from "../contexts/loginContext";
import UserProvider from "../contexts/userContext";
import { IAuthProvider } from "../interfaces";

const Providers = ({ children }: IAuthProvider) => {
  return (
    <UserProvider>
      <LoginProvider>
        <ContactProvider>{children}</ContactProvider>
      </LoginProvider>
    </UserProvider>
  );
};

export default Providers;

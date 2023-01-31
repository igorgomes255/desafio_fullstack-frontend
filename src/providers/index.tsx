import ContactProvider from "../contexts/contactContext";
import UserProvider from "../contexts/userContext";
import { IAuthProvider } from "../interfaces";

const Providers = ({ children }: IAuthProvider) => {
  return (
    <UserProvider>
      <ContactProvider>{children}</ContactProvider>;
    </UserProvider>
  );
};

export default Providers;

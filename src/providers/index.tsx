import ContactProvider from "../contexts/contactContext";
import LoginProvider from "../contexts/loginContext";
import RegisterProvider from "../contexts/registerContext";
import UserProvider from "../contexts/userContext";
import { IAuthProvider } from "../interfaces";

const Providers = ({ children }: IAuthProvider) => {
  return (
    <UserProvider>
      <LoginProvider>
        <RegisterProvider>
          <ContactProvider>{children}</ContactProvider>
        </RegisterProvider>
      </LoginProvider>
    </UserProvider>
  );
};

export default Providers;

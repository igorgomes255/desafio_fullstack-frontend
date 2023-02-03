import ContactProvider from "../contexts/contactContext";
import EditContactProvider from "../contexts/editContactContext";
import EditUserProvider from "../contexts/editUser";
import LoginProvider from "../contexts/loginContext";
import RegisterProvider from "../contexts/registerContext";
import UserProvider from "../contexts/userContext";
import { IAuthProvider } from "../interfaces";

const Providers = ({ children }: IAuthProvider) => {
  return (
    <UserProvider>
      <LoginProvider>
        <RegisterProvider>
          <EditUserProvider>
            <EditContactProvider>
              <ContactProvider>{children}</ContactProvider>
            </EditContactProvider>
          </EditUserProvider>
        </RegisterProvider>
      </LoginProvider>
    </UserProvider>
  );
};

export default Providers;

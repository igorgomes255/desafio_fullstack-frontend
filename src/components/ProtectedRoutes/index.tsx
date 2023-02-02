import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Div } from "./styles";
import { useUserContext } from "../../contexts/userContext";

const ProtectedRoutes = () => {
  const { user, loading } = useUserContext();
  const location = useLocation();

  if (loading) {
    return (
      <Div>
        <AiOutlineLoading3Quarters />
      </Div>
    );
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;

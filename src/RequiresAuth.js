import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const token = useSelector((state) => state.auth.token);
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { RequiresAuth };

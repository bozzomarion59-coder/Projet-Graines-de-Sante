import { Navigate } from "react-router-dom";

export default function ProtectedAdminRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" />;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));

    if (payload.role_user !== "admin") {
      return <Navigate to="/" />;
    }

    return children;

  } catch (error) {
    return <Navigate to="/login" />;
  }
}

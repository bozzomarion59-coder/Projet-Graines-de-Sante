import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("USER DANS PROTECTED ROUTE =", user);
  console.log("ROLE ATTENDU =", role);

  if (!user) return <Navigate to="/connexion" />;

  if (role && user.role_user !== role) {
    return <Navigate to="/user" />;
  }

  return children;
}

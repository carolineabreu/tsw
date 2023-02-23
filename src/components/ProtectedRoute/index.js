import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute(props) {
  const { component: Component } = props;
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser");

  const parsedUser = JSON.parse(loggedInUser || '""');

  useEffect(() => {
    console.log(parsedUser);
    if (!loggedInUser) {
      return navigate("/login");
    }
  });

  return <Component />;
}

function ProtectedRouteAdmin(props) {
  const { component: Component } = props;
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser");

  const parsedUser = JSON.parse(loggedInUser || '""');

  useEffect(() => {
    console.log(parsedUser);
    if (parsedUser.user.role !== "ADMIN") {
      // colocar um toast falando que a pessoa não é admin antes de redirecionar
      // pensar em que página redirecionar
      navigate("/profile");
    }
  });

  return <Component />;
}

export { ProtectedRoute, ProtectedRouteAdmin };


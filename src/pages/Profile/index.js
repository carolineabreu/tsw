import { CircularProgress, Divider } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { ProfileTabs } from "../../components/ProfileTabs";
import { AuthContext } from "../../contexts/authContext";
import style from "./Profile.module.css";

export function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: ""
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/user/profile");

        setUser(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);

  const { loggedInUser } = useContext(AuthContext);

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <div className={style.allPage}>
      {!isLoading ? (
        <div className={style.container}>
          <div className={style.userInfo}>
            <div className={style.userName}>
              <h1>Welcome, {user.name}</h1>
              <p>@{user.username}</p>
            </div>
            <div className={style.btn}>
              <Link to="/profile">
                {/**talvez um modal? o que o user vai poder alterar do perfil? */}
                <button>Edit</button>
              </Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
          <Divider></Divider>
          <ProfileTabs />
        </div>
      ) : <div className={style.loading}>
        <CircularProgress color="secondary" />
      </div>
      }
    </div>
  );
}

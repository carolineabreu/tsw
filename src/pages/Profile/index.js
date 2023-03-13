import { CircularProgress, Divider } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { ModalEdit } from "../../components/ModalEdit";
import { ProfileTabs } from "../../components/ProfileTabs";
import { AuthContext } from "../../contexts/authContext";
import style from "./Profile.module.css";

export function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: ""
  });

  const [form, setForm] = useState({
    username: ""
  });
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/user/profile");

        setUser(response.data);
        setForm(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [reload]);

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
                <button onClick={handleOpen}>Edit</button>
              </Link>
              <ModalEdit form={form} setForm={setForm} open={open} handleClose={handleClose} reload={reload} setReload={setReload} setOpen={setOpen} />
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

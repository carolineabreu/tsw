import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../../api/api";
import { AuthContext } from '../../contexts/authContext';
import style from "./Login.module.css";

export function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form);
      console.log(response);

      setLoggedInUser({ ...response.data });
      localStorage.setItem("loggedInUser", JSON.stringify(response.data));
      console.log(response.data);

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={style.login}>
      <form onSubmit={handleSubmit} className={style.loginForm}>
        <h1 className={style.loginTitle}>Login</h1>

        <div className={style.inputContainer}>
          <label className={style.loginLabel} htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            className={style.loginInput}
            value={form.email}
            onChange={handleChange}
            placeholder="your email"
          />
        </div>
        <div className={style.inputContainer}>
          <label className={style.loginLabel} htmlFor="password"></label>
          <input
            className={style.loginInput}
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="your password"
          />
        </div>

        <button type="submit" className={style.loginBtn}>Login</button>
      </form>
    </div>
  );
}

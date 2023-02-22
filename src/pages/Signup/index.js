import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import style from "./SignUp.module.css";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  console.log(form);

  async function handleSubmit(e) {
    e.preventDefault();

    if (form.password === form.confirmPassword) {
      try {
        const response = await api.post("/user/signup", form);

        navigate("/login");
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    } else {
      //melhorar mensagem e estilizar toast
      toast.error("Password don't match!");
    }
  }

  return (
    <div className={style.signUp}>
      <form className={style.signUpForm} onSubmit={handleSubmit}>
        <h1 className={style.signUpTitle}>Sign Up</h1>

        <div className={style.inputContainer}>
          <label className={style.signUpLabel} htmlFor="formName"></label>
          <input
            className={style.signUpInput}
            id="formName"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            minLength={3}
            placeholder="your Name"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label className={style.signUpLabel} htmlFor="formUsername"></label>
          <input
            className={style.signUpInput}
            id="formUsername"
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
            minLength={3}
            placeholder="username" //colocar aqui um username gerado aleatório, talvez faz um array de usernames aleatórios?
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label className={style.signUpLabel} htmlFor="formEmail"></label>
          <input
            className={style.signUpInput}
            id="formEmail"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="youremail@email.com"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label className={style.signUpLabel} htmlFor="formPassword"></label>
          <input
            className={style.signUpInput}
            id="formPassword"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="enter your password"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label className={style.signUpLabel} htmlFor="formConfirmPassword"></label>
          <input
            className={style.signUpInput}
            id="formConfirmPassword"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="confirm your password"
            required
          />
        </div>

        <button type="submit" className={style.signUpBtn}>Register</button>
      </form>
    </div>
  );
}

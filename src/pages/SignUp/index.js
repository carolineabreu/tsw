import style from "./SignUp.module.css";

export function SignUp() {

  function refreshPage() {
    window.location.reload(true);
  }

  return (
    <div className={style.signUp}>
      <h1>Sign Up</h1>
      <div className={style.signUpBody}>
        <div className={style.username}>
          <label className={style.signUpLabel} htmlFor="firstName">First Name: </label>
          <input className={style.signUpInput} type="text" id="firstName" placeholder="First Name" />
        </div>
        <div className={style.lastName}>
          <label className={style.signUpLabel} htmlFor="lastName">Last Name: </label>
          <input type="text" name="" id="lastName" className={style.signUpInput} placeholder="Last Name" />
        </div>
        <div className={style.email}>
          <label className={style.signUpLabel} htmlFor="email">Email: </label>
          <input type="email" id="email" className={style.signUpInput} placeholder="Email" />
        </div>
        <div className={style.password}>
          <label className={style.signUpLabel} htmlFor="password">Password: </label>
          <input className={style.signUpInput} type="password" id="password" placeholder="Password" />
        </div>
        <div className={style.confirmPassword}>
          <label className={style.signUpLabel} htmlFor="confirmPassword">Confirm Password: </label>
          <input className={style.signUpInput} type="password" id="confirmPassword" placeholder="Confirm Password" />
        </div>
      </div>
      <div class={style.footer}>
        <button onClick={refreshPage} class={style.signUpBtn}>Register</button>
      </div>
    </div>
  );
}

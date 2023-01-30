import style from "./SignUp.module.css";

export function SignUp() {

  function refreshPage() {
    window.location.reload(true);
  }

  return (
    <div className={style.signUp}>
      <form className= {style.signUpForm}>
      <h1 className={style.signUpTitle}>Sign Up</h1>

        <div className={style.inputContainer}>
          <label className={style.signUpLabel} htmlFor="firstName">First Name: </label>
          <input className={style.signUpInput} type="text" id="firstName"  />
        </div>
        <div className={style.inputContainer}>
          <label className={style.signUpLabel} htmlFor="lastName">Last Name: </label>
          <input type="text" name="" id="lastName" className={style.signUpInput}  />
        </div>
        <div className={style.inputContainer}>
          <label className={style.signUpLabel} htmlFor="email">Email: </label>
          <input type="email" id="email" className={style.signUpInput} />
        </div>
        <div className={style.inputContainer}>
          <label className={style.signUpLabel} htmlFor="password">Password: </label>
          <input className={style.signUpInput} type="password" id="password"  />
        </div>
        <div className={style.inputContainer}>
          <label className={style.signUpLabel} htmlFor="confirmPassword">Confirm Password: </label>
          <input className={style.signUpInput} type="password" id="confirmPassword"  />
        </div>
      
        <button onClick={refreshPage} className={style.signUpBtn}>Register</button>
        </form>
    </div>
  );
}

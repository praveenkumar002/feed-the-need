import styles from "C:/Users/prave/Desktop/feed-the-need/src/style/login.module.css";
import logImg from "C:/Users/prave/Desktop/feed-the-need/src/images/login.webp";
import { EnvelopeSimple, Lock } from "phosphor-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function LoginUser() {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const transSearch = (event) => {
    event.preventDefault();
    navigate("/search")
  };
  return (
    <main className={styles.main}>
      <div className={styles.mainContent}>
        <img src={logImg} alt="login image" />

        <form>
          <h1 className={styles.titleHead}>Volunteer Login</h1>
          <div className={styles.formDiv}>
            <label>
              <EnvelopeSimple size={32} color="#666666" />
            </label>
            <input
              ref={inputRef}
              type="email"
              placeholder="Email"
              className={styles.input}
            />
          </div>
          <div className={styles.formDiv}>
            <label>
              <Lock size={32} color="#666666" />
            </label>
            <input
              type="password"
              placeholder="******"
              className={styles.input}
            />
          </div>
          <button onClick={transSearch} className={styles.button}>
            Login
          </button>
          <p className={styles.newAcc}>
            create new account? <a style={{color:"blue", textDecoration:"underline", cursor:"pointer"}} onClick={() => {navigate("/reguser")}}> sign up</a>
          </p>
        </form>
      </div>
    </main>
  );
}

export default LoginUser;

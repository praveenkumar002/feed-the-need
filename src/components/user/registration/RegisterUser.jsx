import styles from "C:/Users/prave/Desktop/feed-the-need/src/style/reg.module.css";
import {useNavigate} from "react-router-dom"

function RegisterUser() {
  const navigate = useNavigate();

  const transLogin = (event) => {
    event.preventDefault();
    navigate("/loguser")
  };
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1 className={styles.titleHead}>Volunteer Register</h1>
        <p className={styles.titlePara}>
          Please fill in this form to create an account.
        </p>
      </div>
      <form className={styles.form}>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>User name : </label>
          <input type="text" placeholder="User name" />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>First name : </label>
          <input type="text" placeholder="First name" />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>Last name : </label>
          <input type="text" placeholder="Last name" />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>Select your gender</label>
          <div>
            <input value="male" type="radio" name="gender" />{" "}
            <label className={styles.radio}>male</label>
            <input value="female" type="radio" name="gender" />{" "}
            <label className={styles.radio}>female</label>
          </div>
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>Phone number : </label>
          <input type="number" placeholder="Phone number" />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>Email : </label>
          <input type="email" placeholder="example@gmail.com" />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>Password : </label>
          <input type="password" placeholder="*******" />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>City : </label>
          <input type="text" placeholder="City" />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>Addresss : </label>
          <textarea cols="30" rows="5">
            Enter address here...
          </textarea>
        </div>
        <button onClick={transLogin}>submit</button>
      </form>

      <p className={styles.signin}>
        Already user?
        <a style={{color:"blue", textDecoration:"underline", cursor:"pointer"}} onClick={transLogin}> sign in</a>
      </p>
    </main>
  );
}

export default RegisterUser;

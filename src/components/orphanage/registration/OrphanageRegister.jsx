import styles from "C:/Users/prave/Desktop/feed-the-need/src/style/reg.module.css";
import {useNavigate} from "react-router-dom"

function OrphanageRegister() {
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1 className={styles.titleHead}>Orphanage Register</h1>
        <p className={styles.titlePara}>
          Please fill in this form to create an account.
        </p>
      </div>
      <form className={styles.form}>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>Orphanage name : </label>
          <input type="text" placeholder="Orphanage name" />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>Contact person Name : </label>
          <input type="text" placeholder="Contact person" />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>Contact person number : </label>
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
          <label className={styles.formLable}>Facebook URL : </label>
          <input type="text" placeholder="https://www.facebook.com/username/" />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>Twitter URL : </label>
          <input type="text" placeholder="https://twitter.com/username/" />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>Linkedin URL : </label>
          <input
            type="text"
            placeholder="https://www.linkedin.com/in/username/"
          />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>Addresss : </label>
          <textarea cols="30" rows="5">
            Enter address here...
          </textarea>
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>Mission : </label>
          <textarea cols="30" rows="5">
            Enter Mission here...
          </textarea>
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLable}>Vision : </label>
          <textarea cols="30" rows="5">
            Enter Vision here...
          </textarea>
        </div>
        <button onClick={()=>navigate("/logorp")}>submit</button>
      </form>

      <p className={styles.signin}>
        Already user?
        <a style={{color:"blue", textDecoration:"underline", cursor:"pointer"}} onClick={()=>{navigate("/logorp")}}> sign in</a>
      </p>
    </main>
  );
}

export default OrphanageRegister;

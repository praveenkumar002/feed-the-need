import styles from "C:/Users/prave/Desktop/feed-the-need/src/style/reg.module.css";
import {useNavigate} from "react-router-dom"

function UpdateUser() {
  const navigate = useNavigate();

  const updateAcc = (event) => {
    event.preventDefault();
    navigate("/loguser")
  };
  const deleteAcc = (event) => {
    event.preventDefault();
    navigate("/")
  };
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1 className={styles.titleHead}>Update Account</h1>
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
        <div>
          <button onClick={updateAcc} style={{ width: "100%" }}>
            Update Account
          </button>
          <button
            onClick={deleteAcc}
            style={{ backgroundColor: "red", width: "100%" }}
          >
            Delete Account
          </button>
        </div>
      </form>
    </main>
  );
}

export default UpdateUser;

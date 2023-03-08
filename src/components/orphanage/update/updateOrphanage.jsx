import styles from "C:/Users/prave/Desktop/feed-the-need/src/style/reg.module.css";
import { useNavigate } from "react-router-dom";

function UpdateOrphanage() {
  const navigate = useNavigate();

  const updateAcc = (event) => {
    event.preventDefault();
    navigate("/logorp");
  };
  const deleteAcc = (event) => {
    event.preventDefault();
    navigate("/")
  };
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1 className={styles.titleHead}>Update details</h1>
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

export default UpdateOrphanage;

import LoginUser from "../user/login/LoginUser";
import styles from "C:/Users/prave/Desktop/feed-the-need/src/style/main.module.css";
import {useNavigate} from "react-router-dom"

function Main() {
  const navigate = useNavigate();

  const transFun = (arg) => {
    if (arg == "volunteer") {
      navigate("/loguser")
    } else if (arg == "orphanage") {
      navigate("/logorp")
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.headMain}>DON’T LIVE ORPHANS ALONE</h1>
      <p className={styles.headPara}>Let’s help them together</p>
      <button onClick={() => transFun("volunteer")} className={styles.btn}>
        Volunteer
      </button>
      <button onClick={() => transFun("orphanage")} className={styles.btn}>
        Orphanage
      </button>
    </div>
  );
}

export default Main;

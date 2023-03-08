import styles from "C:/Users/prave/Desktop/feed-the-need/src/style/orphanageDetails.module.css";
import {
  FacebookLogo,
  TwitterLogo,
  GoogleLogo,
  LinkedinLogo,
} from "phosphor-react";
import orpDetLogo from "C:/Users/prave/Desktop/feed-the-need/src/images/orpDetailPageLogo.jpg";

function Footer() {
  return (
    <footer className={styles.footerOd}>
      <p className={styles.footerParaOd}>
        © 2022 All Rights Reserved <br className={styles.footerBrk} /> Terms of
        Use and Privacy Policy.
      </p>

      <div className={styles.footerDivOd}>
        <img src={orpDetLogo} alt="logo" className={styles.footerDivImgOd} />
        <div>
          <h1 className={styles.headerHeadOd} style={{ color: "white" }}>
            Orphanagename
          </h1>
          <p className={styles.footerDivParaOd}>Orphanage Organization</p>
        </div>
      </div>

      <ul className={styles.footerUlOd}>
        <a href="#" className={styles.footerUlLiOd}>
          <FacebookLogo size={28} weight="fill" />
        </a>
        <a href="" className={styles.footerUlLiOd}>
          <TwitterLogo size={28} weight="fill" />
        </a>
        <a href="" className={styles.footerUlLiOd}>
          <GoogleLogo size={28} weight="fill" />
        </a>
        <a href="" className={styles.footerUlLiOd}>
          <LinkedinLogo size={28} weight="fill" />
        </a>
      </ul>
    </footer>
  );
}

export default Footer;

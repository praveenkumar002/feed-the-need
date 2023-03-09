import styles from "C:/Users/prave/Desktop/feed-the-need/src/style/orphanageDetails.module.css";
import {
  Hexagon,
  Envelope,
  MapPin,
  MagnifyingGlass,
  Terminal,
} from "phosphor-react";
import Footer from "../common/Footer";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function OrphanageDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const donateItem = (event) => {
    event.preventDefault();
    navigate("/donate", { state: { item: location.state.item } });
  };

  return (
    <>
      <header className={styles.headerOd}>
        <h1 className={styles.headerHeadOd}>Orphanagename</h1>
        <ul className={styles.headerUlOd}>
          <a href="#about" className={styles.headerListOd}>
            <Hexagon size={18} color="#a35bb8de" weight="fill" />
            &nbsp;About
          </a>
          <a href="#" className={styles.headerListOd}>
            <Envelope size={18} color="#a35bb8de" weight="fill" />
            &nbsp;Email
          </a>
          <a href="#" className={styles.headerListOd}>
            <MapPin size={18} color="#a35bb8de" weight="fill" />
            &nbsp;City
          </a>
          <a onClick={() => navigate("/search")}>
            <MagnifyingGlass
              className={styles.headerListButOd}
              size={18}
              color="#ffff"
              weight="fill"
            />
          </a>
        </ul>
      </header>

      <main className={styles.mainLabelImg}>
        <p className={styles.mainParaI}>HELP SOMEONE'S DREAM COME TRUE</p>
        <p className={styles.mainParaII}>Helping People</p>
        <p className={styles.mainParaIII}>Have More Smiles</p>
        <button onClick={donateItem} className={styles.mainParaBut}>
          Donate now
        </button>
      </main>

      <article className={styles.articleOd}>
        <div className={styles.articleDivIOd}>
          <Terminal size={38} color="#f37123" weight="bold" />
          <h1 className={styles.articleDivIHeadOd} id="about">
            <strong>WHO</strong> WE ARE
          </h1>
        </div>
        <div className={styles.articleDivIIOd}>
          <p className={styles.articleDivIIParaOd}>
            Haven Organization is a non-profit organization that brings care to
            orphaned and vulnerable children around the world.
          </p>
          <p className={styles.articleDivIIParaOd}>
            We empower children, youth, and families to effectively navigate
            through change, raise healthy children, develop strong
            relationships, and heal from trauma. We offer regular, consistent
            support to those in need so that the children in our care can
            develop over time, giving them the chance to create a brighter
            future.
          </p>
          <p className={styles.articleDivIIParaOd}>
            Haven Organization has opened programs for orphans children,
            families and communities since 1985. We provide youth and family
            programs which include family foster care, adoption, foster care
            prevention through family strengthening, mental and behavioral
            health, parenting supports, afterschool, and youth development.
            Haven Organization employs approximately 280 full-time and 150
            part-time/on-call staff and manages over 300 volunteers and
            supporters who come together to help orphan children each year.
          </p>
        </div>
      </article>

      <hr style={{ margin: "10px" }} className={styles.asideHr} />

      <aside className={styles.asideOd}>
        <div className={styles.asideDivIOd}>
          <h1 className={styles.asideDivIHeadOd}>What we Do</h1>
          <p className={styles.asideDivIParaOd}>
            “Generosity consists not of the sum given, but the manner in which
            it is bestowed.”
          </p>
          <button onClick={donateItem} className={styles.asideDivIBut}>
            Dontae now
          </button>
        </div>
        <div className={styles.asideDivIIOd}>
          <h3 className={styles.asideDivIIHeadOd}>
            We provide quality child care, education and family strengthening
            services
          </h3>
          <p className={styles.asideDivIIParaOd}>
            We opened programs for orphans children, families and communities
            since 1985. We provide youth and family programs which include
            family foster care, adoption, foster care prevention through family
            strengthening, mental and behavioral health, parenting supports,
            afterschool, and youth development. Haven Organization employs
            approximately 280 full-time and 150 part-time/on-call staff and
            manages over 300 volunteers and supporters who come together to help
            orphan children each year.
          </p>
        </div>
      </aside>

      <hr style={{ margin: "10px" }} className={styles.asideHr} />

      <section className={styles.sectionOd}>
        <div className={styles.sectionDivIOd}>
          <h1 className={styles.sectionDivIHeadOd}>
            Be part of a change you want to see in the world
          </h1>
          <p className={styles.sectionDivIParaOd}>
            Don't be just a passer-by in the fight with hunger, poverty, and
            illiteracy. We will allow you to contribute to ruining an old system
            and creating a brand new world of a helpful community.
          </p>
        </div>
        <div className={styles.sectionDivIIOd}>
          <h3 className={styles.sectionDivIIHeadOd}>Our Mission</h3>
          <p className={styles.sectionDivIIParaOd}>
            Be the great explorer of the truth and a builder of human happiness
            no one can deny..
          </p>
          <h3 className={styles.sectionDivIIHeadOd}>Our Vision</h3>
          <p className={styles.sectionDivIIParaOd}>
            We are here to change the devastating though the common state of
            things and create a world where nobody's left alone!
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default OrphanageDetails;
